<template>
    <div class="search-page card">
        <h2>Resultados de búsqueda: "{{ q }}"</h2>
        <div v-if="results.length === 0" class="empty">No se encontraron resultados.</div>
        <div class="grid" v-else>
            <ProductCard v-for="p in results" :key="p.id" :product="p" @add="addToCart" @quote="goQuote" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/stores/useStore'
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()
const q = (route.query.q || '').toString().trim()

const results = computed(() => {
    if (!q) return []
    const term = q.toLowerCase()
    return store.products.filter(p => {
        return (
            p.name.toLowerCase().includes(term) ||
            (p.category && p.category.toLowerCase().includes(term)) ||
            (p.specs && p.specs.join(' ').toLowerCase().includes(term))
        )
    })
})

const addToCart = (p) => store.addToCart(p)
const goQuote = (p) => router.push({ name: 'quote', query: { id: p.id } })
</script>

<style scoped>
.search-page {
    max-width: 1100px;
    margin: 1rem auto;
    padding: 1rem;
}

.search-page h2 {
    color: var(--primary);
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.8rem;
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