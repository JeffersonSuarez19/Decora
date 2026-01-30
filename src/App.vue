<template>
  <div id="app">
    <div class="background"></div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/FONDO.png'); /* Asegúrate que el nombre coincida */
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000px; /* Ajusta el tamaño del logo */
  z-index: -1;
  opacity: 0.15; /* Lo hace más sutil */
  pointer-events: none; /* Evita que interfiera con clics */
}
</style>