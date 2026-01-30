<template>
  <button class="entry-button" @click="$emit('enter')">
    Entrar a la tienda
  </button>
</template>

<script setup>
</script>

<style scoped>
.entry-button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 1em 2em;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.entry-button:hover {
  background-color: #35495e;
}
</style>