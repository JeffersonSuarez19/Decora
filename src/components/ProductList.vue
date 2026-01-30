<template>
  <div class="product-list">
    <h2>Lista de Productos</h2>
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="fetchProducts"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from './ProductCard.vue';
import Pagination from './Pagination.vue';

const products = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);

const fetchProducts = async (page = 1) => {
  // Simulación de una llamada a una API para obtener productos
  const response = await fetch(`https://api.example.com/products?page=${page}`);
  const data = await response.json();
  products.value = data.products;
  totalPages.value = data.totalPages;
  currentPage.value = page;
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>