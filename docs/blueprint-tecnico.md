# Blueprint Técnico: consultec.com.py (Astro Edition)

Este documento sirve como guía maestra para el desarrollo del sitio, asegurando un estándar de calidad técnica superior, rendimiento extremo y optimización para motores de respuesta de IA (AIO).

## 1. Arquitectura de Rutas (File-based Routing)
Estructura de páginas optimizada para SEO y navegación intuitiva:

* `/` (Home): Landing principal con propuesta de valor, Bento Grid de servicios y destacados.
* `/servicios` (Parent): Directorio de soluciones tecnológicas.
* `/servicios/[slug]` (Dynamic): Detalles de infraestructura, redes, CCTV, etc.
* `/productos` (Catalog): Buscador facetado de hardware y software con filtros por industria.
* `/productos/[slug]` (Dynamic): Ficha técnica detallada con esquema JSON-LD.
* `/casos-exito`: Galería de proyectos con métricas de impacto.
* `/contacto`: Formulario con validación en cliente/servidor y enlaces de soporte técnico.

## 2. Inventario de Componentes (Atomic Design)
Diseño modular para garantizar consistencia y rendimiento.

### Globales (Layout)
* `Navbar.astro`: Navegación híbrida con detección de scroll y accesibilidad de teclado (A11y).
* `Footer.astro`: Datos de SEO local, RUC, y año dinámico.
* `WhatsAppButton.astro`: Botón flotante que utiliza `loading="lazy"` para no afectar el TTI.

### UI / Elementos (Atoms & Molecules)
* `MainLayout.astro`: Contenedor maestro con soporte para `ViewTransitions`.
* `Section.astro`: Estándar de espaciado (`padding`, `max-width`) para consistencia visual.
* `ProductCard.astro`: Tarjetas con `aspect-ratio` fijo para evitar saltos de diseño (CLS).
* `BentoGrid.astro`: Layout responsivo para servicios usando CSS Grid moderno.
* `ContactForm.tsx/vue`: Componente interactivo (Astro Island) para validación en tiempo real.

## 3. Estrategia de Estilos y Diseño
* **CSS Moderno & Tailwind:** Uso de variables CSS (`--primary-color`) para facilitar el mantenimiento.
* **Tipografía Local:** Fuentes alojadas en el servidor (`public/fonts/`) para eliminar peticiones a Google Fonts y mejorar el FCP.
* **Dark Mode Nativo:** Implementación vía `prefers-color-scheme` y toggle persistente en `localStorage`.
* **HTML Semántico:** Uso estricto de `<main>`, `<section>`, `<article>`, `<aside>` y jerarquía de encabezados (`H1-H6`) para accesibilidad y lectura de IAs.

## 4. Pipeline de Optimización de Assets
* **Imágenes:** Uso del componente `<Image />` de Astro para generar formatos `.avif` y `.webp` automáticamente.
* **Lazy Loading:** Imágenes debajo del "above-the-fold" cargarán con `loading="lazy"`.
* **SVG:** Los iconos se manejarán como componentes internos o sprites para reducir peticiones HTTP.

## 5. SEO Técnico, GEO y AIO
* **JSON-LD (Linked Data):** Inserción dinámica de esquemas `LocalBusiness`, `Product` y `BreadcrumbList`.
* **Sitemap & Robots:** Generación automática vía `@astrojs/sitemap`.
* **Meta Tags Dinámicos:** OpenGraph y Twitter Cards específicos para cada producto y servicio.
* **Partytown:** Ejecución de scripts de terceros (Analytics/GTM) en un web worker para no bloquear el hilo principal de JavaScript.

## 6. Rendimiento (Garantía Lighthouse 100)
Para mantener el puntaje perfecto, se aplicarán las siguientes tácticas:
1. **Critical CSS:** Inyección del CSS mínimo necesario para renderizar la primera vista.
2. **Prefetching:** Uso de `data-astro-prefetch` en enlaces críticos para anticipar la navegación del usuario.
3. **Optimización de Fuentes:** Uso de `font-display: swap` y pre-carga de archivos `.woff2`.
4. **Zero-JS:** El 90% del sitio será HTML estático sin JavaScript en el cliente.

## 7. Mantenimiento y Despliegue
* **Control de Versiones:** Repositorio privado en GitHub.
* **CI/CD:** Despliegue automatizado en **Vercel** o **Netlify** cada vez que se actualice un producto en el repositorio.
* **Mantenimiento Mensual:** Auditoría de performance y actualización de datos de catálogo (Sistemas Aguarai y Hardware).

## 8. Estrategia de Islas e Interactividad
* **Componentes Dinámicos:** Solo se hidratarán componentes críticos. El formulario de contacto usará `client:visible` para retrasar la carga de JS hasta que el usuario llegue a la sección.
* **Estado Ligero:** En caso de necesitar comunicación entre componentes, se utilizará **Nano Stores** para evitar el peso de librerías de estado complejas.

## 9. Aseguramiento de Calidad (QA)
* **Lighthouse CI:** Integración de auditorías automáticas en cada despliegue para prohibir cambios que degraden el rendimiento por debajo de 95/100.
* **Validación Semántica:** Pruebas con `W3C Validator` para asegurar que el HTML sea perfectamente legible para algoritmos de IA (AIO).

## 10. Infraestructura y Despliegue
* **Plataforma:** Despliegue en Edge (Vercel/Netlify) para latencia mínima.
* **Seguridad:** Configuración de headers de seguridad estrictos (CSP, X-Frame-Options).
* **Migración de Autoridad:** Mapeo de redirecciones 301 para todas las rutas antiguas de WordPress, conservando el posicionamiento histórico de `consultec.com.py`.
