<template>
  <div class="product-card card">
    <div class="thumb">
      <img :src="product.image" :alt="product.name" loading="lazy" width="520" height="360" @error="onImgError" />
    </div>

    <div class="meta">
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="price">$ {{ product.price.toLocaleString('es-CO') }}</div>

      <ul class="specs" v-if="product.specs && product.specs.length">
        <li v-for="(s, i) in product.specs" :key="i">{{ s }}</li>
      </ul>

      <div class="actions">
        <button class="btn" @click="$emit('add', product)">Agregar</button>
        <button class="btn primary" @click="$emit('quote', product)">Cotizar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ product: { type: Object, required: true } })
function onImgError(e) {
  e.target.src = 'https://via.placeholder.com/520x360?text=Imagen+no+disponible'
  e.target.style.objectFit = 'contain'
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.8rem;
  background: var(--card, #fff);
  border-radius: 10px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.04);
  height: 100%;
}

.thumb {
  width: 100%;
  height: 180px;
  background: #f7f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* nombre del producto en vinotinto */
.product-name {
  color: var(--primary);
  font-size: 1rem;
  margin: 0;
  text-transform: none;
  font-weight: 700;
}

/* specs */
.specs {
  margin: 0.5rem 0 0;
  padding-left: 1rem;
  color: #555;
  font-size: 0.9rem;
  list-style: disc;
}

/* acciones */
.actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.6rem;
  justify-content: flex-end;
  align-items: center;
}

.btn {
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background: transparent;
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
}

.btn.primary {
  background: var(--primary);
  color: #fff;
  border: none;
  box-shadow: 0 6px 14px rgba(106, 13, 30, 0.12);
}
</style>