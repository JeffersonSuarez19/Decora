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
import baseMarmolizada from '@/assets/gallery/baseMarmolizada.jpeg'
import comedorCharlotte from '@/assets/gallery/comedorCharlotte.jpeg'
import comedorGalex6p from '@/assets/gallery/comedorGalex6p.jpeg'

import s1 from '@/assets/galleryLiving/s1.jpeg'
import s2 from '@/assets/galleryLiving/s2.jpeg'
import s3 from '@/assets/galleryLiving/s3.jpeg'
import s4 from '@/assets/galleryLiving/s4.jpeg'
import s5 from '@/assets/galleryLiving/s5.jpeg'
import s6 from '@/assets/galleryLiving/s6.jpeg'
import s7 from '@/assets/galleryLiving/s7.jpeg'
import s8 from '@/assets/galleryLiving/s8.jpeg'
import s9 from '@/assets/galleryLiving/s9.jpeg'
import s10 from '@/assets/galleryLiving/s10.jpeg'
import s11 from '@/assets/galleryLiving/s11.jpeg'
import s12 from '@/assets/galleryLiving/s12.jpeg'
import s13 from '@/assets/galleryLiving/s13.jpeg'
import s14 from '@/assets/galleryLiving/s14.jpeg'
import s15 from '@/assets/galleryLiving/s15.jpeg'
import s16 from '@/assets/galleryLiving/s16.jpeg'
import s17 from '@/assets/galleryLiving/s17.jpeg'
import s18 from '@/assets/galleryLiving/s18.jpeg'
import s19 from '@/assets/galleryLiving/s19.jpeg'
import s20 from '@/assets/galleryLiving/s20.jpeg'
import s21 from '@/assets/galleryLiving/s21.jpeg'
import s22 from '@/assets/galleryLiving/s22.jpeg'
import s23 from '@/assets/galleryLiving/s23.jpeg'
import s24 from '@/assets/galleryLiving/s24.jpeg'
import s25 from '@/assets/galleryLiving/s25.jpeg'
import s26 from '@/assets/galleryLiving/s26.jpeg'
import s27 from '@/assets/galleryLiving/s27.jpeg'
import s28 from '@/assets/galleryLiving/s28.jpeg'
import s29 from '@/assets/galleryLiving/s29.jpeg'
import s30 from '@/assets/galleryLiving/s30.jpeg'
import s31 from '@/assets/galleryLiving/s31.jpeg'
import s32 from '@/assets/galleryLiving/s32.jpeg'
import s33 from '@/assets/galleryLiving/s33.jpeg'
import s34 from '@/assets/galleryLiving/s34.jpeg'
import s35 from '@/assets/galleryLiving/s35.jpeg'
import s36 from '@/assets/galleryLiving/s36.jpeg'
import s37 from '@/assets/galleryLiving/s37.jpeg'
import s38 from '@/assets/galleryLiving/s38.jpeg'
import s39 from '@/assets/galleryLiving/s39.jpeg'
import s40 from '@/assets/galleryLiving/s40.jpeg'
import s41 from '@/assets/galleryLiving/s41.jpeg'
import s42 from '@/assets/galleryLiving/s42.jpeg'
import s43 from '@/assets/galleryLiving/s43.jpeg'
import s44 from '@/assets/galleryLiving/s44.jpeg'
import s45 from '@/assets/galleryLiving/s45.jpeg'
import s46 from '@/assets/galleryLiving/s46.jpeg'
import s47 from '@/assets/galleryLiving/s47.jpeg'
import s48 from '@/assets/galleryLiving/s48.jpeg'
import s49 from '@/assets/galleryLiving/s49.jpeg'
import s50 from '@/assets/galleryLiving/s50.jpeg'
import s51 from '@/assets/galleryLiving/s51.jpeg'
import s52 from '@/assets/galleryLiving/s52.jpeg'
import s53 from '@/assets/galleryLiving/s53.jpeg'
import s54 from '@/assets/galleryLiving/s54.jpeg'
import s55 from '@/assets/galleryLiving/s55.jpeg'
import s56 from '@/assets/galleryLiving/s56.jpeg'
import s57 from '@/assets/galleryLiving/s57.jpeg'
import s58 from '@/assets/galleryLiving/s58.jpeg'
import s59 from '@/assets/galleryLiving/s59.jpeg'
import s60 from '@/assets/galleryLiving/s60.jpeg'
import s61 from '@/assets/galleryLiving/s61.jpeg'
import s62 from '@/assets/galleryLiving/s62.jpeg'
import s63 from '@/assets/galleryLiving/s63.jpeg'
import s65 from '@/assets/galleryLiving/s65.jpeg'
import s66 from '@/assets/galleryLiving/s66.jpeg'
import s67 from '@/assets/galleryLiving/s67.jpeg'
import s68 from '@/assets/galleryLiving/s68.jpeg'
import s69 from '@/assets/galleryLiving/s69.jpeg'
import s70 from '@/assets/galleryLiving/s70.jpeg'
import s71 from '@/assets/galleryLiving/s71.jpeg'
import s72 from '@/assets/galleryLiving/s72.jpeg'
import s73 from '@/assets/galleryLiving/s73.jpeg'
import s74 from '@/assets/galleryLiving/s74.jpeg'
import s75 from '@/assets/galleryLiving/s75.jpeg'
import s76 from '@/assets/galleryLiving/s76.jpeg'

import c1 from '@/assets/galleryTables/c1.jpeg'
import c2 from '@/assets/galleryTables/c2.jpeg'
import c3 from '@/assets/galleryTables/c3.jpeg'
import c4 from '@/assets/galleryTables/c4.jpeg'
import c5 from '@/assets/galleryTables/c5.jpeg'
import c6 from '@/assets/galleryTables/c6.jpeg'
import c7 from '@/assets/galleryTables/c7.jpeg'
import c8 from '@/assets/galleryTables/c8.jpeg'
import c9 from '@/assets/galleryTables/c9.jpeg'
import c10 from '@/assets/galleryTables/c10.jpeg'
import c11 from '@/assets/galleryTables/c11.jpeg'
import c12 from '@/assets/galleryTables/c12.jpeg'
import c13 from '@/assets/galleryTables/c13.jpeg'
import c14 from '@/assets/galleryTables/c14.jpeg'
import c15 from '@/assets/galleryTables/c15.jpeg'
import c16 from '@/assets/galleryTables/c16.jpeg'
import c17 from '@/assets/galleryTables/c17.jpeg'
import c18 from '@/assets/galleryTables/c18.jpeg'
import c19 from '@/assets/galleryTables/c19.jpeg'
import c20 from '@/assets/galleryTables/c20.jpeg'
import c21 from '@/assets/galleryTables/c21.jpeg'
import c22 from '@/assets/galleryTables/c22.jpeg'
import c23 from '@/assets/galleryTables/c23.jpeg'
import c24 from '@/assets/galleryTables/c24.jpeg'
import c25 from '@/assets/galleryTables/c25.jpeg'
import c26 from '@/assets/galleryTables/c26.jpeg'
import c27 from '@/assets/galleryTables/c27.jpeg'
import c28 from '@/assets/galleryTables/c28.jpeg'
import c29 from '@/assets/galleryTables/c29.jpeg'
import c30 from '@/assets/galleryTables/c30.jpeg'
import c31 from '@/assets/galleryTables/c31.jpeg'
import c32 from '@/assets/galleryTables/c32.jpeg'
import c33 from '@/assets/galleryTables/c33.jpeg'
import c34 from '@/assets/galleryTables/c34.jpeg'
import c35 from '@/assets/galleryTables/c35.jpeg'
import c36 from '@/assets/galleryTables/c36.jpeg'
import c37 from '@/assets/galleryTables/c37.jpeg'
import c38 from '@/assets/galleryTables/c38.jpeg'
import c39 from '@/assets/galleryTables/c39.jpeg'
import c40 from '@/assets/galleryTables/c40.jpeg'
import c41 from '@/assets/galleryTables/c41.jpeg'

import nevera from '@/assets/appliances/nevera.webp'
import lavadora from '@/assets/appliances/lavadora.webp'
import ventilador from '@/assets/appliances/ventilador.webp' // <-- corregido
import licuadora from '@/assets/appliances/licuadora.webp'

export const useStore = defineStore('main', {
    state: () => ({
        products: [
            // Galería: salas y camas (usar imágenes locales en assets/gallery)
            {
                id: 100,
                name: 'Sala Terranova',
                category: 'gallery',
                price: 2990000,
                image: terranova,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 102,
                name: 'Sala Polonia',
                category: 'gallery',
                price: 2350000,
                image: polonia,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 103,
                name: 'Sala Picasso',
                category: 'gallery',
                price: 2200000,
                image: picasso,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 104,
                name: 'Sala L Verona',
                category: 'gallery',
                price: 1700000,
                image: verona,
                specs: ['Tela altifluidos y antirasguños', 'Mesita adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 105,
                name: 'Sofacama Aleman',
                category: 'gallery',
                price: 2980000,
                image: aleman,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            {
                id: 106,
                name: 'Sala Click Clack',
                category: 'gallery',
                price: 2840000,
                image: clickclack,
                specs: ['Tela altifluidos y antirasguños', 'Puff adicional', 'Estructura en cedro', '1 año de garantía']
            },
            { id: 1, name: 'comedor c1', category: 'gallery', price: 2840000, image: c1, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 2, name: 'comedor c2', category: 'gallery', price: 2840000, image: c2, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 3, name: 'comedor c3', category: 'gallery', price: 2840000, image: c3, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 4, name: 'comedor c4', category: 'gallery', price: 2840000, image: c4, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 5, name: 'comedor c5', category: 'gallery', price: 2840000, image: c5, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 6, name: 'comedor c6', category: 'gallery', price: 2840000, image: c6, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 7, name: 'comedor c7', category: 'gallery', price: 2840000, image: c7, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 8, name: 'comedor c8', category: 'gallery', price: 2840000, image: c8, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 9, name: 'comedor c9', category: 'gallery', price: 2840000, image: c9, specs: ['Sillas tela antifluidos', 'Sillas tela rasguños', '1 año de garantía'] },
            { id: 10, name: 'comedor c10', category: 'gallery', price: 2840000, image: c10, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 11, name: 'comedor c11', category: 'gallery', price: 2840000, image: c11, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 12, name: 'comedor c12', category: 'gallery', price: 2840000, image: c12, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 13, name: 'comedor c13', category: 'gallery', price: 2840000, image: c13, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 14, name: 'comedor c14', category: 'gallery', price: 2840000, image: c14, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 15, name: 'comedor c15', category: 'gallery', price: 2840000, image: c15, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 16, name: 'comedor c16', category: 'gallery', price: 2840000, image: c16, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 17, name: 'comedor c17', category: 'gallery', price: 2840000, image: c17, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 18, name: 'comedor c18', category: 'gallery', price: 2840000, image: c18, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 19, name: 'comedor c19', category: 'gallery', price: 2840000, image: c19, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 20, name: 'comedor c20', category: 'gallery', price: 2840000, image: c20, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 21, name: 'comedor c21', category: 'gallery', price: 2840000, image: c21, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 22, name: 'comedor c22', category: 'gallery', price: 2840000, image: c22, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 23, name: 'comedor c23', category: 'gallery', price: 2840000, image: c23, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 24, name: 'comedor c24', category: 'gallery', price: 2840000, image: c24, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 25, name: 'comedor c25', category: 'gallery', price: 2840000, image: c25, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 26, name: 'comedor c26', category: 'gallery', price: 2840000, image: c26, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 27, name: 'comedor c27', category: 'gallery', price: 2840000, image: c27, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 28, name: 'comedor c28', category: 'gallery', price: 2840000, image: c28, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 29, name: 'comedor c29', category: 'gallery', price: 2840000, image: c29, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 30, name: 'comedor c30', category: 'gallery', price: 2840000, image: c30, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 31, name: 'comedor c31', category: 'gallery', price: 2840000, image: c31, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 32, name: 'comedor c32', category: 'gallery', price: 2840000, image: c32, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 33, name: 'comedor c33', category: 'gallery', price: 2840000, image: c33, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 34, name: 'comedor c34', category: 'gallery', price: 2840000, image: c34, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 35, name: 'comedor c35', category: 'gallery', price: 2840000, image: c35, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 36, name: 'comedor c36', category: 'gallery', price: 2840000, image: c36, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 37, name: 'comedor c37', category: 'gallery', price: 2840000, image: c37, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 38, name: 'comedor c38', category: 'gallery', price: 2840000, image: c38, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 39, name: 'comedor c39', category: 'gallery', price: 2840000, image: c39, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 40, name: 'comedor c40', category: 'gallery', price: 2840000, image: c40, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            { id: 41, name: 'comedor c41', category: 'gallery', price: 2840000, image: c41, specs: ['Sillas tela antifluidos', 'Sillas tela antirasguños', '1 año de garantía'] },
            {
                id: 42,
                name: 'Base Marmolizada',
                category: 'gallery',
                price: 2840000,
                image: baseMarmolizada,
                specs: ['Base Marmolizada', 'Sillas pétalos', '1 año de garantía']
            },
            {
                id: 43,
                name: 'Comedor Charlotte',
                category: 'gallery',
                price: 2840000,
                image: comedorCharlotte,
                specs: ['Comedor Charlotte', '', '1 año de garantía']
            },
            {
                id: 44,
                name: 'Comedor Galex 6 Puestos',
                category: 'gallery',
                price: 2840000,
                image: comedorGalex6p,
                specs: ['Comedor Galex 6 Puestos', '', '1 año de garantía']
            },
            {
                id: 45,
                name: 'Cama petalos',
                category: 'gallery',
                price: 1020000,
                image: camapetalos,
                specs: ['Somier con refuerzo de platina', 'Tapizado resistente', 'Dimensiones: 100cm', '1 año de garantía']
            },
            {
                id: 46,
                name: 'Espejo Giratorio',
                category: 'gallery',
                price: 825000,
                image: espejogiratorio,
                specs: ['Espejo giratorio', 'Diámetro 160 cm', 'Acabado en móncoro', '1 año de garantía']
            },
            {
                id: 47,
                name: 'Peinadora Hollywood',
                category: 'gallery',
                price: 825000,
                image: peinadora,
                specs: ['Con espejo y luces integrado', '5 cajones de almacenamiento', 'Acabado en móncoro', '1 año de garantía']
            },
            // Electrodomésticos: usar imágenes locales en assets/appliances
            {
                id: 48,
                name: 'Nevera No Frost 320L',
                category: 'appliances',
                price: 1850000,
                image: nevera,
                specs: ['Capacidad 320 L', 'No Frost', 'Ahorro energía']
            },
            {
                id: 49,
                name: 'Lavadora 12kg Digital',
                category: 'appliances',
                price: 980000,
                image: lavadora,
                specs: ['Capacidad 12 kg', 'Varios programas', 'Panel digital']
            },
            {
                id: 50,
                name: 'Ventilador Turbo',
                category: 'appliances',
                price: 160000,
                image: ventilador, // <-- usa la variable corregida
                specs: ['3 velocidades', 'Oscilante', 'Bajo ruido']
            },
            {
                id: 51,
                name: 'Licuadora de Alta Potencia',
                category: 'appliances',
                price: 120000,
                image: licuadora,
                specs: ['Vaso vidrio', 'Potencia 800W', 'Varios accesorios']
            },
            { id: 52, name: 'sala s1', category: 'gallery', price: 2840000, image: s1, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 53, name: 'sala s2', category: 'gallery', price: 2840000, image: s2, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 54, name: 'sala s3', category: 'gallery', price: 2840000, image: s3, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 55, name: 'sala s4', category: 'gallery', price: 2840000, image: s4, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 56, name: 'sala s5', category: 'gallery', price: 2840000, image: s5, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 57, name: 'sala s6', category: 'gallery', price: 2840000, image: s6, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 58, name: 'sala s7', category: 'gallery', price: 2840000, image: s7, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 59, name: 'sala s8', category: 'gallery', price: 2840000, image: s8, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 60, name: 'sala s9', category: 'gallery', price: 2840000, image: s9, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 61, name: 'sala s10', category: 'gallery', price: 2840000, image: s10, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 62, name: 'sala s11', category: 'gallery', price: 2840000, image: s11, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 63, name: 'sala s12', category: 'gallery', price: 2840000, image: s12, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 64, name: 'sala s13', category: 'gallery', price: 2840000, image: s13, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 65, name: 'sala s14', category: 'gallery', price: 2840000, image: s14, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 66, name: 'sala s15', category: 'gallery', price: 2840000, image: s15, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 67, name: 'sala s16', category: 'gallery', price: 2840000, image: s16, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 68, name: 'sala s17', category: 'gallery', price: 2840000, image: s17, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 69, name: 'sala s18', category: 'gallery', price: 2840000, image: s18, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 70, name: 'sala s19', category: 'gallery', price: 2840000, image: s19, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 71, name: 'sala s20', category: 'gallery', price: 2840000, image: s20, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 72, name: 'sala s21', category: 'gallery', price: 2840000, image: s21, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 73, name: 'sala s22', category: 'gallery', price: 2840000, image: s22, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 74, name: 'sala s23', category: 'gallery', price: 2840000, image: s23, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 75, name: 'sala s24', category: 'gallery', price: 2840000, image: s24, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 76, name: 'sala s25', category: 'gallery', price: 2840000, image: s25, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 77, name: 'sala s26', category: 'gallery', price: 2840000, image: s26, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 78, name: 'sala s27', category: 'gallery', price: 2840000, image: s27, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 79, name: 'sala s28', category: 'gallery', price: 2840000, image: s28, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 80, name: 'sala s29', category: 'gallery', price: 2840000, image: s29, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 81, name: 'sala s30', category: 'gallery', price: 2840000, image: s30, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 82, name: 'sala s31', category: 'gallery', price: 2840000, image: s31, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 83, name: 'sala s32', category: 'gallery', price: 2840000, image: s32, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 84, name: 'sala s33', category: 'gallery', price: 2840000, image: s33, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 85, name: 'sala s34', category: 'gallery', price: 2840000, image: s34, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 86, name: 'sala s35', category: 'gallery', price: 2840000, image: s35, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 87, name: 'sala s36', category: 'gallery', price: 2840000, image: s36, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 88, name: 'sala s37', category: 'gallery', price: 2840000, image: s37, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 89, name: 'sala s38', category: 'gallery', price: 2840000, image: s38, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 90, name: 'sala s39', category: 'gallery', price: 2840000, image: s39, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 91, name: 'sala s40', category: 'gallery', price: 2840000, image: s40, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 92, name: 'sala s41', category: 'gallery', price: 2840000, image: s41, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 93, name: 'sala s42', category: 'gallery', price: 2840000, image: s42, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 94, name: 'sala s43', category: 'gallery', price: 2840000, image: s43, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 95, name: 'sala s44', category: 'gallery', price: 2840000, image: s44, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 96, name: 'sala s45', category: 'gallery', price: 2840000, image: s45, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 97, name: 'sala s46', category: 'gallery', price: 2840000, image: s46, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 98, name: 'sala s47', category: 'gallery', price: 2840000, image: s47, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 99, name: 'sala s48', category: 'gallery', price: 2840000, image: s48, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 100, name: 'sala s49', category: 'gallery', price: 2840000, image: s49, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 101, name: 'sala s50', category: 'gallery', price: 2840000, image: s50, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 102, name: 'sala s51', category: 'gallery', price: 2840000, image: s51, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 103, name: 'sala s52', category: 'gallery', price: 2840000, image: s52, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 104, name: 'sala s53', category: 'gallery', price: 2840000, image: s53, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 105, name: 'sala s54', category: 'gallery', price: 2840000, image: s54, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 106, name: 'sala s55', category: 'gallery', price: 2840000, image: s55, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 107, name: 'sala s56', category: 'gallery', price: 2840000, image: s56, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 108, name: 'sala s57', category: 'gallery', price: 2840000, image: s57, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 109, name: 'sala s58', category: 'gallery', price: 2840000, image: s58, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 110, name: 'sala s59', category: 'gallery', price: 2840000, image: s59, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 111, name: 'sala s60', category: 'gallery', price: 2840000, image: s60, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 112, name: 'sala s61', category: 'gallery', price: 2840000, image: s61, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 113, name: 'sala s62', category: 'gallery', price: 2840000, image: s62, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 114, name: 'sala s63', category: 'gallery', price: 2840000, image: s63, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 116, name: 'sala s65', category: 'gallery', price: 2840000, image: s65, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 117, name: 'sala s66', category: 'gallery', price: 2840000, image: s66, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 118, name: 'sala s67', category: 'gallery', price: 2840000, image: s67, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 119, name: 'sala s68', category: 'gallery', price: 2840000, image: s68, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 120, name: 'sala s69', category: 'gallery', price: 2840000, image: s69, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 121, name: 'sala s70', category: 'gallery', price: 2840000, image: s70, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 122, name: 'sala s71', category: 'gallery', price: 2840000, image: s71, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 123, name: 'sala s72', category: 'gallery', price: 2840000, image: s72, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 124, name: 'sala s73', category: 'gallery', price: 2840000, image: s73, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 125, name: 'sala s74', category: 'gallery', price: 2840000, image: s74, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 126, name: 'sala s75', category: 'gallery', price: 2840000, image: s75, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
            { id: 127, name: 'sala s76', category: 'gallery', price: 2840000, image: s76, specs: ['Sillas tela antifluidos', 'Sillas tela antifluidos', '1 año de garantía'] },
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