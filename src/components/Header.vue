<template>
  <header class="site-header">
    <div class="header-inner">
      <div class="logo" @click="goHome">
        <img :src="logo" alt="DECORA" class="logo-img" />
        <small class="slogan"></small>
      </div>

      <div class="search-wrap">
        <input v-model="query" @keyup.enter="onSearch" placeholder="Buscar producto, marca o referencia" />
        <button class="btn" @click="onSearch">Buscar</button>
      </div>

      <nav class="header-actions">
        <button class="cat-btn" @click="goCategory('gallery')">Galería</button>
        <button class="cat-btn" @click="goCategory('appliances')">Electrodomésticos</button>
        <button class="cart-btn" @click="goCart">
          🛒 <span class="count" v-if="count">{{ count }}</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores/useStore'
import logo from '@/assets/decora-logo.png'

const store = useStore()
const router = useRouter()
const query = ref('')

const count = computed(() => store.cart.length)

const goHome = () => router.push('/')
const goCategory = (cat) => router.push(`/${cat}`)
const goCart = () => router.push('/cart')
const onSearch = () => {
  const q = (query.value || '').trim()
  if (!q) return
  router.push({ path: '/search', query: { q } })
}
</script>
<style scoped>
:root {
  --primary: #6A0D1E;
  --primary-dark: #4b0712;
  --muted: #f6f0f0;
  --text: #222;
}

/* 1. CONFIGURACIÓN DEL HEADER PRINCIPAL */
.site-header {
  width: 100%;
  background: linear-gradient(90deg, var(--primary-dark), var(--primary));
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 50; /* Z-index base */
  height: 64px;
  display: flex;
  align-items: center;
  overflow: visible; /* IMPORTANTE: Permite que el logo se salga */
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  width: 100%; /* Asegura que ocupe el ancho */
  position: relative; /* Contexto para elementos internos */
}

/* 2. CONFIGURACIÓN DEL CONTENEDOR DEL LOGO */
.logo {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative; /* Referencia para la imagen absoluta */
  width: 150px; /* Espacio reservado para que no se pegue el buscador */
  flex-shrink: 0;
  cursor: pointer;
  z-index: 101; /* El logo por encima de todo */
}

/* 3. EL LOGO GRANDE (LA MAGIA) */
.logo-img {
  /* Tamaño grande para PC */
  height: 130px; 
  width: auto;
  
  /* Posicionamiento flotante */
  position: absolute;
  top: 0; 
  left: -20px;
  
  /* Sombra para resaltar */
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
  object-fit: contain;
  display: block;
  
  /* Ajuste fino vertical si es necesario */
  transform: translateY(-5px); 
}

/* Ajuste del slogan si decides mantenerlo */
.slogan {
  position: absolute;
  top: 100px; /* Debajo del logo grande */
  left: 10px;
  font-size: 0.7rem;
  opacity: 0.9;
  width: 200px; /* Para que no se corte el texto */
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

.search-wrap {
  flex: 1;
  display: flex;
  gap: 0.5rem;
}

.search-wrap input {
  flex: 1;
  padding: 0.55rem;
  border-radius: 6px;
  border: none;
  font-size: 0.95rem;
}

.search-wrap button {
  background: #fff;
  color: var(--primary);
  border: none;
  padding: 0.55rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.cat-btn {
  background: transparent; /* Fondo transparente */
  border: none;
  color: #6A0D1E; /* COLOR VINOTINTO */
  padding: 0.45rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700; /* Un poco más negrita para que destaque */
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.cat-btn:hover {
  background-color: rgba(106, 13, 30, 0.08); /* Fondo vinotinto muy clarito */
  transform: translateY(-1px);
}

.cart-btn:hover {
  background-color: rgba(106, 13, 30, 0.2); /* Un poco más oscuro al pasar el mouse */
}

.cart-btn {
  background: rgba(0, 0, 0, 0.12);
  color: #fff;
  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  position: relative;
}

.count {
  background: #f1c40f;
  color: #000;
  padding: 0.08rem 0.4rem;
  margin-left: 6px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.8rem;
}

/* RESPONSIVE */

@media (max-width:800px) {
  .search-wrap input {
    display: none;
  }
  
  /* En tablets/móviles ajustamos el logo para que no tape botones */
  .logo-img {
    height: 100px; /* Un poco más pequeño que en PC */
  }
  
  .logo {
    width: 110px; /* Menos espacio reservado */
  }
}

@media (max-width: 700px) {
  .site-header {
    height: 56px;
  }

  .logo-img {
    height: 90px; /* Tamaño adecuado para móvil */
  }
  
  .slogan {
      display: none; /* Ocultamos slogan en móvil para limpiar */
  }
}
</style>