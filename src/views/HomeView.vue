<template>
  <div class="home">
    <section class="hero">
      <div class="hero-left">
        <h1>BIENVENIDOS A DECORA</h1>
        <p>ENSERES PARA EL HOGAR.</p>
        <div class="hero-actions">
          <button class="btn primary" @click="goCategory('gallery')">VER GALERÍA</button>
          <button class="btn primary" @click="goCategory('appliances')">ELECTRODOMÉSTICOS</button>
        </div>
      </div>

      <div class="hero-right">
        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=60&auto=format&fit=crop"
          alt="promo" />
      </div>
    </section>

    <section class="products-section">
      <h2 class="section-title">DESTACADOS</h2>
      <div class="grid">
        <ProductCard v-for="p in featured" :key="p.id" :product="p" @add="addToCart" @quote="goQuote" />
      </div>
    </section>

    <section class="appliances-section" v-if="appliances.length">
      <h2 class="section-title">ELECTRODOMÉSTICOS DESTACADOS</h2>
      <div class="grid">
        <ProductCard v-for="p in appliances" :key="p.id" :product="p" @add="addToCart" @quote="goQuote" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/useStore'
import ProductCard from '@/components/ProductCard.vue'

const router = useRouter()
const store = useStore()

const featured = computed(() =>
  [...store.productsByCategory('gallery')]
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 6)
)
const appliances = computed(() =>
  [...store.productsByCategory('appliances')]
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 5)
)

const goCategory = (cat) => router.push(`/${cat}`)
const addToCart = (p) => store.addToCart(p)
const goQuote = (p) => router.push({ name: 'quote', query: { id: p.id } })
</script>

<style scoped>
.home {
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 1rem;
  align-items: center;
  background: linear-gradient(90deg, #fff, #fbf6f6);
  padding: 1.1rem;
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(106, 13, 30, 0.03);
}

.hero-left h1 {
  margin: 0;
  font-size: 2rem;
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 900;
}

.hero-left p {
  margin: 0.6rem 0 1rem;
  color: #444;
}

.hero-actions {
  display: flex;
  gap: 0.8rem;
}

/* estilado más moderno para los botones del hero */
.hero-actions .btn {
  padding: 0.65rem 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  box-shadow: 0 8px 20px rgba(106, 13, 30, 0.06);
}

.hero-actions .btn.primary {
  background: var(--primary);
  color: #fff;
  border: none;
}

/* derecha imagen */
.hero-right img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

/* títulos sección */
.section-title {
  color: var(--primary);
  text-transform: uppercase;
  text-align: center;
  margin: 1.2rem 0 0.8rem;
  font-weight: 800;
}

/* grid responsiva */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

/* responsive */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-right img {
    height: 180px;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>