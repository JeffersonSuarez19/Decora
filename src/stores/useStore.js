import { defineStore } from 'pinia'
import camapetalos from '@/assets/gallery/camapetalos.jpeg'
import espejogiratorio from '@/assets/gallery/espejogiratorio.jpeg'
import peinadora from '@/assets/gallery/peinadora.jpeg'
import terranova from '@/assets/gallery/terranova.jpeg'
import polonia from '@/assets/gallery/polonia.jpeg'
import picasso from '@/assets/gallery/picasso.jpeg'
import verona from '@/assets/gallery/verona.jpeg'
import aleman from '@/assets/gallery/aleman.jpeg'
import clickclack from '@/assets/gallery/clickclack.jpeg'

import nevera from '@/assets/appliances/nevera.webp'
import lavadora from '@/assets/appliances/lavadora.webp'
import ventilador from '@/assets/appliances/ventilador.webp' // <-- corregido
import licuadora from '@/assets/appliances/licuadora.webp'

export const useStore = defineStore('main', {
    state: () => ({
        products: [
            // Galería: salas y camas (usar imágenes locales en assets/gallery)
            {
                id: 1,
                name: 'Sala Terranova',
                category: 'gallery',
                price: 2990000,
                image: terranova,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 2,
                name: 'Sala Polonia',
                category: 'gallery',
                price: 2350000,
                image: polonia,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 3,
                name: 'Sala Picasso',
                category: 'gallery',
                price: 2200000,
                image: picasso,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 4,
                name: 'Sala L Verona',
                category: 'gallery',
                price: 1700000,
                image: verona,
                specs: ['Tela altifluidos y antirasguños', 'Mesita adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 5,
                name: 'Sofacama Aleman',
                category: 'gallery',
                price: 2980000,
                image: aleman,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 6,
                name: 'Sala Click Clack',
                category: 'gallery',
                price: 2840000,
                image: clickclack,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            






            {
                id: 99,
                name: 'Cama petalos',
                category: 'gallery',
                price: 1020000,
                image: camapetalos,
                specs: ['Somier con refuerzo de platina', 'Tapizado resistente', 'Dimensiones: 100cm', '1 año de garantía']
            },
            {
                id: 98,
                name: 'Espejo Giratorio',
                category: 'gallery',
                price: 825000,
                image: espejogiratorio,
                specs: ['Espejo giratorio', 'Diámetro 160 cm', 'Acabado en móncoro', '1 año de garantía']
            },
            {
                id: 97,
                name: 'Peinadora Hollywood',
                category: 'gallery',
                price: 825000,
                image: peinadora,
                specs: ['Con espejo y luces integrado', '5 cajones de almacenamiento', 'Acabado en móncoro', '1 año de garantía']
            },

            // Electrodomésticos: usar imágenes locales en assets/appliances
            {
                id: 5,
                name: 'Nevera No Frost 320L',
                category: 'appliances',
                price: 1850000,
                image: nevera,
                specs: ['Capacidad 320 L', 'No Frost', 'Ahorro energía']
            },
            {
                id: 6,
                name: 'Lavadora 12kg Digital',
                category: 'appliances',
                price: 980000,
                image: lavadora,
                specs: ['Capacidad 12 kg', 'Varios programas', 'Panel digital']
            },
            {
                id: 7,
                name: 'Ventilador Turbo',
                category: 'appliances',
                price: 160000,
                image: ventilador, // <-- usa la variable corregida
                specs: ['3 velocidades', 'Oscilante', 'Bajo ruido']
            },
            {
                id: 8,
                name: 'Licuadora de Alta Potencia',
                category: 'appliances',
                price: 120000,
                image: licuadora,
                specs: ['Vaso vidrio', 'Potencia 800W', 'Varios accesorios']
            }
        ],
        cart: [],
        quoteRequests: []
    }),
    getters: {
        allProducts: (state) => state.products,
        productsByCategory: (state) => (cat) => state.products.filter(p => p.category === cat),
        cartItems: (state) => state.cart,
        quoteRequests: (state) => state.quoteRequests
    },
    actions: {
        fetchProducts() {
            return this.products
        },
        addToCart(product) {
            this.cart.push(product)
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter(p => p.id !== productId)
        },
        submitQuoteRequest(request) {
            this.quoteRequests.push(request)
        },
        clearCart() {
            this.cart = []
        }
    }
})