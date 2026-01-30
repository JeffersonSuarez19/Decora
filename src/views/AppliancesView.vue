<template>
  <div class="catalog">
    <div class="top-row">
      <button class="back-btn" @click="goBack">Volver</button>
    </div>

    <h2>Electrodomésticos</h2>
    <div class="grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" @add="addToCart" @quote="goQuote" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useStore } from '@/stores/useStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const products = computed(() => store.productsByCategory('appliances') || [])
const addToCart = (p) => store.addToCart(p)
const goQuote = (p) => router.push({ name: 'quote', query: { id: p.id } })
const goBack = () => router.back()
</script>

<style scoped>
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

.catalog {
  max-width: 1100px;
  margin: 1rem auto;
  padding: 0 1rem;
}

.catalog h2 {
  color: var(--primary);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width:1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width:700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>