import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'
import AppliancesView from '@/views/AppliancesView.vue'
import QuoteView from '@/views/QuoteView.vue'
import SearchView from '@/views/SearchView.vue' // nuevo

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/gallery', name: 'gallery', component: GalleryView },
  { path: '/appliances', name: 'appliances', component: AppliancesView },
  { path: '/quote', name: 'quote', component: QuoteView },
  { path: '/cart', name: 'cart', component: QuoteView },
  { path: '/search', name: 'search', component: SearchView } // nuevo
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router