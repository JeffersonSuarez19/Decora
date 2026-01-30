<template>
  <div class="pagination">
    <button 
      @click="prevPage" 
      :disabled="currentPage === 1"
      class="pagination-button"
    >
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button 
      @click="nextPage" 
      :disabled="currentPage === totalPages"
      class="pagination-button"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  }
});

const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
}

.pagination-button {
  margin: 0 1em;
  padding: 0.5em 1em;
  cursor: pointer;
}

.pagination-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>