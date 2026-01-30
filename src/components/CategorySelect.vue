<template>
  <div class="category-select">
    <h2>Select a Category</h2>
    <button @click="selectCategory('gallery')">Gallery</button>
    <button @click="selectCategory('appliances')">Appliances</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCategory = ref('');

const selectCategory = (category) => {
  selectedCategory.value = category;
  // Emit an event or handle the category selection as needed
};
</script>

<style scoped>
.category-select {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.category-select h2 {
  margin-bottom: 10px;
}

.category-select button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>