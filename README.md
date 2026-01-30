# Decora Store Vue

Este es un proyecto de tienda online desarrollado con Vue 3. La aplicación permite a los usuarios explorar un catálogo de productos en dos categorías: galería y electrodomésticos. Además, incluye un formulario para solicitar cotizaciones.

## Estructura del Proyecto

- **public/index.html**: Plantilla HTML principal que se carga en el navegador.
- **src/main.js**: Punto de entrada de la aplicación, inicializa Vue y monta la aplicación.
- **src/App.vue**: Componente raíz que contiene la estructura general de la aplicación.
- **src/assets**: Almacena recursos estáticos como imágenes y fuentes.
- **src/components**: Contiene componentes reutilizables:
  - `Header.vue`: Encabezado de la aplicación.
  - `Logo.vue`: Muestra el logo de la tienda.
  - `WelcomeBanner.vue`: Letrero de bienvenida.
  - `EntryButton.vue`: Botón de entrada para acceder a la tienda.
  - `CategorySelect.vue`: Selección de categorías.
  - `ProductCard.vue`: Tarjeta de producto.
  - `ProductList.vue`: Lista de productos.
  - `QuoteForm.vue`: Formulario de cotización.
  - `Pagination.vue`: Manejo de paginación.
- **src/views**: Contiene las vistas de la aplicación:
  - `HomeView.vue`: Pantalla de inicio.
  - `GalleryView.vue`: Vista de productos de la galería.
  - `AppliancesView.vue`: Vista de electrodomésticos.
  - `QuoteView.vue`: Vista del formulario de cotización.
- **src/router/index.js**: Configuración de rutas para navegar entre vistas.
- **src/store/index.js**: Configuración del estado global utilizando Vuex.
- **src/styles/main.css**: Estilos globales de la aplicación.
- **package.json**: Configuración de npm, dependencias y scripts.
- **vite.config.js**: Configuración para Vite.
- **.gitignore**: Archivos y directorios que deben ser ignorados por Git.

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd decora-store-vue
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

## Uso

Accede a la aplicación en tu navegador en `http://localhost:3000`. Explora las categorías de productos y utiliza el formulario de cotización para solicitar información adicional.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.