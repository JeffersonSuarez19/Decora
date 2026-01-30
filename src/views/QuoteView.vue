<template>
  <div class="quote-page">
    <div class="top-row">
      <button class="back-btn" @click="goBack">Volver</button>
    </div>

    <h2 v-if="isCart">Carrito / Solicitar Cotización</h2>
    <h2 v-else>Solicitud de Cotización</h2>

    <section class="products">
      <div v-if="items.length === 0" class="empty">No hay productos seleccionados.</div>

      <div class="grid" v-else>
        <article v-for="p in items" :key="p.id" class="item">
          <img :src="p.image" :alt="p.name" />
          <div class="info">
            <h3 class="product-name">{{ p.name }}</h3>
            <div class="price">$ {{ p.price.toLocaleString('es-CO') }}</div>
            <ul class="specs">
              <li v-for="(s, i) in p.specs" :key="i">{{ s }}</li>
            </ul>

            <div class="item-actions">
              <template v-if="deletingId !== p.id">
                <button v-if="isCart" class="btn clear small" @click="markDeleting(p.id)">Eliminar</button>
              </template>

              <template v-else>
                <span class="confirm-text">¿Eliminar?</span>
                <button class="btn small" @click="confirmRemove(p.id)">Sí</button>
                <button class="btn clear small" @click="cancelDelete">No</button>
              </template>
            </div>
          </div>
        </article>
      </div>

      <div class="summary" v-if="items.length">
        <div>Total: <strong>$ {{ total.toLocaleString('es-CO') }}</strong></div>

        <!-- confirmación inline para vaciar carrito (no usar confirm/alert bloqueante) -->
        <div class="clear-confirm" v-if="!clearingConfirm">
          <button class="btn clear" @click="askClearCart" v-if="isCart">Vaciar carrito</button>
        </div>

        <div class="clear-confirm" v-else>
          <span class="confirm-text">¿Vaciar todo el carrito?</span>
          <button class="btn small" @click="confirmClearCart">Sí</button>
          <button class="btn clear small" @click="cancelClearCart">No</button>
        </div>
      </div>
    </section>

    <section class="form-section" v-if="items.length && !submitted">
      <!-- Título en mayúsculas y color vinotinto -->
      <h3 class="form-title">TUS DATOS</h3>

      <form @submit.prevent="onSubmit" class="form-grid" novalidate>
        <div>
          <input v-model="form.name" type="text" placeholder="Nombre completo" />
          <div class="error" v-if="errors.name">{{ errors.name }}</div>
        </div>

        <div>
          <input v-model="form.phone" type="tel" placeholder="Teléfono (solo números)" />
          <div class="error" v-if="errors.phone">{{ errors.phone }}</div>
        </div>

        <div>
          <input v-model="form.email" type="email" placeholder="Correo electrónico" />
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>

        <div>
          <label for="city" class="sr-only"></label>
          <select v-model="form.city" id="city">
            <option value="">Seleccione ciudad</option>
            <option value="LEBRIJA">LEBRIJA</option>
            <option value="PIEDECUESTA">PIEDECUESTA</option>
            <option value="GIRON">GIRON</option>
            <option value="FLORIDABLANCA">FLORIDABLANCA</option>
            <option value="BUCARAMANGA">BUCARAMANGA</option>
          </select>
          <div class="error" v-if="errors.city">{{ errors.city }}</div>
        </div>

        <div class="full">
          <input v-model="form.address" type="text" placeholder="Dirección (editable)" />
          <div class="error" v-if="errors.address">{{ errors.address }}</div>
        </div>

        <div class="full">
          <textarea v-model="form.note" placeholder="Mensaje adicional (opcional)"></textarea>
        </div>

        <div class="full">
          <button class="btn primary" type="submit" :disabled="submitting">Enviar cotización por WhatsApp /
            Email</button>
        </div>
      </form>
      <p class="notice">Se abrirá WhatsApp y (opcionalmente) el cliente de correo para enviar al contacto.</p>
    </section>

    <!-- tarjeta confirmación -->
    <section v-if="submitted" class="confirmation-card">
      <h3>¡Solicitud enviada!</h3>
      <p>Gracias, {{ lastSubmission.name }}. Un asesor se comunicará con usted pronto al {{ lastSubmission.phone }}.</p>
      <p class="muted">Hemos preparado el mensaje para WhatsApp y correo. Si no recibe el correo, revise su carpeta de
        spam.</p>
      <div class="actions">
        <button class="btn" @click="goHome">Volver al inicio</button>
        <button class="btn clear" @click="resetAll">Hacer otra cotización</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/stores/useStore'

const route = useRoute()
const router = useRouter()
const store = useStore()
const isCart = computed(() => route.name === 'cart')

const items = computed(() => {
  if (isCart.value) return store.cartItems
  const id = Number(route.query.id)
  if (id) {
    const p = store.products.find(x => x.id === id)
    return p ? [p] : []
  }
  return []
})

const total = computed(() => items.value.reduce((s, p) => s + (p.price || 0), 0))

// formulario: la dirección NO se auto‑completa por ciudad
const form = reactive({
  name: '',
  phone: '',
  email: '',
  city: '',
  address: '',
  note: ''
})

const errors = reactive({ name: '', phone: '', email: '', city: '', address: '' })
const submitting = ref(false)
const submitted = ref(false)
const lastSubmission = reactive({ name: '', phone: '' })

function clearErrors() {
  errors.name = errors.phone = errors.email = errors.city = errors.address = ''
}

// validación: teléfono EXACTAMENTE 10 dígitos
function validate() {
  clearErrors()
  let ok = true
  if (!form.name || !form.name.trim()) {
    errors.name = 'Nombre requerido'
    ok = false
  }
  const phoneDigits = (form.phone || '').replace(/\D/g, '')
  if (!phoneDigits || phoneDigits.length !== 10) {
    errors.phone = 'Teléfono inválido (exacto 10 dígitos)'
    ok = false
  }
  if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Correo requerido y válido'
    ok = false
  }
  if (!form.city) {
    errors.city = 'Seleccione ciudad'
    ok = false
  }
  if (!form.address || !form.address.trim()) {
    errors.address = 'Dirección requerida'
    ok = false
  }
  if (items.value.length === 0) {
    ok = false
    // mensaje no bloqueante
    errors.general = 'No hay productos para cotizar.'
  }
  return ok
}

function goBack() { router.back() }
function goHome() { router.push('/') }
function resetAll() {
  submitted.value = false
  form.name = form.phone = form.email = form.city = form.address = form.note = ''
}

/* -- eliminación: asegurar que llama la acción correcta de la store -- */
const deletingId = ref(null)
function markDeleting(id) { deletingId.value = id }
function cancelDelete() { deletingId.value = null }
function confirmRemove(id) {
  // elimina desde la store y actualiza la vista
  store.removeFromCart(id)
  deletingId.value = null
}

/* vaciar carrito */
const clearingConfirm = ref(false)
function askClearCart() { clearingConfirm.value = true }
function cancelClearCart() { clearingConfirm.value = false }
function confirmClearCart() {
  store.clearCart()
  clearingConfirm.value = false
}

/* envío (mantén tu implementación current) */
async function onSubmit() {
  if (!validate()) return
  submitting.value = true

  const lines = []
  lines.push('Solicitud de cotización - DECORA')
  lines.push(`Cliente: ${form.name}`)
  lines.push(`Teléfono: ${form.phone}`)
  lines.push(`Email: ${form.email}`)
  lines.push(`Ciudad: ${form.city}`)
  lines.push(`Dirección: ${form.address}`)
  lines.push('')
  lines.push('Productos:')
  items.value.forEach(p => {
    lines.push(`- ${p.name} — $ ${p.price.toLocaleString('es-CO')}`)
  })
  lines.push('')
  lines.push(`Total: $ ${total.value.toLocaleString('es-CO')}`)
  if (form.note) {
    lines.push('')
    lines.push('Nota:')
    lines.push(form.note)
  }

  const message = encodeURIComponent(lines.join('\n'))
  const waUrl = `https://wa.me/573503718397?text=${message}`
  window.open(waUrl, '_blank')

  lastSubmission.name = form.name
  lastSubmission.phone = form.phone
  submitted.value = true
  submitting.value = false
}
</script>

<style scoped>
.quote-page {
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
}

.top-row {
  max-width: 1100px;
  margin: 0.6rem auto;
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
}

.back-btn {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.45rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

h2 {
  color: var(--primary);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
}

/* estilos del título del formulario */
.form-title {
  color: var(--primary);
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 0.75rem;
  font-weight: 800;
}

/* estilos existentes */
.products .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.item {
  display: flex;
  gap: 0.75rem;
  background: #fff;
  border-radius: 8px;
  padding: 0.5rem;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
}

.item img {
  width: 120px;
  height: 90px;
  object-fit: cover;
  border-radius: 6px;
}

.info h3 {
  margin: 0 0 .4rem;
  font-size: 1rem;
}

.price {
  color: var(--primary);
  font-weight: 700;
}

.specs {
  margin: 0.4rem 0 0;
  padding-left: 1rem;
  font-size: 0.9rem;
  color: #555;
}

.item-actions {
  margin-top: 0.6rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

/* estilos para botón eliminar pequeño */
.btn.small {
  padding: 0.36rem 0.6rem;
  font-size: 0.9rem;
}

/* summary y form */
.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.form-section {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}

.form-grid input,
.form-grid textarea,
.form-grid select {
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
}

.form-grid textarea {
  grid-column: 1 / -1;
  min-height: 100px;
}

.form-grid .full {
  grid-column: 1 / -1;
}

.error {
  color: #b00020;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.notice {
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: #555;
}

.btn {
  padding: 0.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.btn.primary {
  background: var(--primary);
  color: #fff;
  font-weight: 700;
}

.btn.clear {
  background: #f5f5f5;
  border: 1px solid #ddd;
  color: #333;
}

/* confirmación */
.confirmation-card {
  max-width: 720px;
  margin: 1rem auto;
  padding: 1rem 1.25rem;
  background: linear-gradient(180deg, rgba(106, 13, 30, 0.06), #fff);
  border-left: 6px solid var(--primary);
  border-radius: 8px;
  text-align: center;
}

.confirmation-card h3 {
  color: var(--primary);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.confirmation-card p {
  margin: 0.4rem 0;
}

.confirmation-card .muted {
  color: #666;
  font-size: 0.95rem;
}

.confirmation-card .actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.75rem;
}

.confirmation-card .btn {
  color: var(--primary);
  border: 1px solid rgba(106, 13, 30, 0.12);
  background: #fff;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
}

.confirmation-card .btn.clear {
  background: transparent;
  border: 1px solid #ddd;
  color: #333;
}

.confirmation-card .btn:hover {
  opacity: 0.9;
}

/* confirmación inline */
.confirm-text {
  color: #555;
  font-size: 0.95rem;
  margin-right: 0.4rem;
}

/* estilos para la confirmación inline de vaciar carrito */
.clear-confirm {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* responsive */
@media (max-width:800px) {
  .products .grid {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .item img {
    width: 100px;
    height: 80px;
  }
}
</style>