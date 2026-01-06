# Estructura de Datos y Gestión de Contenidos
Para garantizar un rendimiento del 100% en Lighthouse y una seguridad total, el sitio utiliza una arquitectura **Headless** basada en archivos planos (Markdown/JSON). El tipado y la validación de campos se gestionan mediante **Keystatic**.

## 1. Definición del Schema (Keystatic / Content Collections)
Este esquema define los campos obligatorios y el formato de datos para cada producto del catálogo. Se utiliza TypeScript para garantizar la integridad de la información durante el build.
```typescript
// keystatic.config.ts
import { collection, fields, config } from '@keystatic/core';

export default config({
  collections: {
    productos: collection({
      label: 'Catálogo de Productos',
      slugField: 'nombre',
      path: 'src/content/productos/*',
      format: { contentField: 'descripcion' },
      schema: {
        nombre: fields.slug({ name: { label: 'Nombre del Producto' } }),
        categoria: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Sistemas de Gestión (Software)', value: 'software' },
            { label: 'Equipamiento (Hardware)', value: 'hardware' },
            { label: 'Infraestructura', value: 'infraestructura' }
          ],
          defaultValue: 'hardware'
        }),
        precio: fields.number({ label: 'Precio (Gs.)' }),
        imagen: fields.image({
          label: 'Imagen del Producto',
          directory: 'public/images/productos',
          publicPath: '/images/productos'
        }),
        destacado: fields.checkbox({ label: '¿Mostrar en Inicio?', defaultValue: false }),
        // Campos específicos para SEO Técnico
        seo: fields.object({
          title: fields.string({ label: 'Meta Title (SEO)' }),
          description: fields.text({ label: 'Meta Description (SEO)' })
        }),
        descripcion: fields.document({
          label: 'Descripción Detallada',
          formatting: true,
          dividers: true,
          links: true
        }),
      }
    }),
  },
});

```

## 2. Ejemplo de salida (Markdown + Frontmatter)
Cada producto se almacena como un archivo físico en el repositorio, lo que permite un control de versiones total y despliegues instantáneos.
Ejemplo de archivo (`src/content/productos/sistema-ferreteria.md`):
```markdown
---
nombre: Sistema Aguarai para Ferreterías
categoria: software
precio: 15000000
destacado: true
imagen: /images/productos/aguarai-ferreteria.webp
seo:
  title: Sistema de Gestión para Ferreterías en Paraguay | Aguarai
  description: Optimiza tu inventario y facturación electrónica con el sistema líder para ferreterías de Consultec.
---

## Optimización de Inventario
El sistema permite el control de stock en tiempo real, integración con facturación electrónica y reportes de ventas diarios.

### Características Principales:
* Multicaja y Multiusuario.
* Compatible con lectores de códigos de barras.
* Reportes de IVA automáticos.
```

## 3. Ventajas de esta arquitectura

1. **Inmunidad a Inyecciones SQL:** Al no existir una base de datos relacional expuesta, el catálogo es imposible de hackear mediante métodos tradicionales.
2. **Optimización de Imágenes:** Al procesarse mediante Astro, cada imagen subida se convierte automáticamente a formatos `.webp` y `.avif` con tamaños responsivos.
3. **SEO Técnico Granular:** Permite el control exacto de las meta-etiquetas por cada ítem, facilitando el posicionamiento en GEO y AIO.
4. **Portabilidad:** Todo el contenido reside en el repositorio de código, facilitando migraciones o copias de seguridad inmediatas.
