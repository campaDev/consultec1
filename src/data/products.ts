// 1. Importamos el tipo para las imágenes de Astro
import type { ImageMetadata } from "astro";
import HeroServer from "../assets/images/hero-server.jpeg";

export interface Product {
  id: string;
  name: string;
  category: "software" | "hardware";
  price: string;
  isFeatured: boolean;
  tagline: string;
  description: string;
  features: string[];
  specs: Record<string, string>; // Ej: { "Procesador": "Intel i5", "RAM": "8GB" }
  idealFor: string[];
  imagePlaceholder: string; // Color para el placeholder visual
  //image?: string;
  image?: ImageMetadata;
}

export const PRODUCTS: Product[] = [
  // --- SOFTWARE ---
  {
    id: "aguarai-erp",
    name: "Aguarai ERP: Gestión Comercial",
    category: "software",
    price: "Desde 15.000.000 Gs",
    isFeatured: true,
    tagline: "El estándar industrial para comercios de alto volumen.",
    image: HeroServer, // <--- Cuando tengas la foto, descomentas esto
    description:
      "Sistema integral desarrollado nativamente para la legislación paraguaya. Maneja desde la compra a proveedores hasta la facturación electrónica SIFEN, con control estricto de stock y cuentas corrientes.",
    features: [
      "Facturación Electrónica SIFEN (Nativa)",
      "Manejo de múltiples depósitos y sucursales",
      "Reportes de rentabilidad por producto/familia",
      "Auditoría completa de acciones de usuarios",
    ],
    specs: {
      Licencia: "Perpetua (Pago único)",
      "Base de Datos": "PostgreSQL (Alta performance)",
      Compatibilidad: "Windows 10/11, Server 2019+",
      Soporte: "Local (Itapúa) 24/7",
    },
    idealFor: ["Supermercados", "Ferreterías Industriales", "Mayoristas"],
    imagePlaceholder: "bg-tech-blue",
  },
  {
    id: "aguarai-gastronomia",
    name: "Aguarai Gastronomía",
    category: "software",
    price: "Desde 9.000.000 Gs",
    isFeatured: true,
    tagline: "Velocidad para cocinas y control para la caja.",
    image: HeroServer, // <--- Cuando tengas la foto, descomentas esto
    description:
      "Optimiza el flujo de tu restaurante. Comandas digitales que viajan directo a cocina, control de recetas para descuento automático de insumos y cierre de caja blindado.",
    features: [
      "Sistema KDS (Pantalla de Cocina)",
      "División de cuentas fácil",
      "Control de mermas e insumos",
      "App para mozos (Android)",
    ],
    specs: {
      Licencia: "Perpetua",
      "Hardware Req": "PC i3 + 4GB RAM (Servidor)",
      Módulos: "Salón, Delivery, Pick-up",
    },
    idealFor: ["Restaurantes", "Bares", "Cafeterías"],
    imagePlaceholder: "bg-neon-cyan",
  },
  {
    id: "aguarai-farmacia",
    name: "Aguarai Farmacias",
    category: "software",
    isFeatured: false, // NO sale en Home, solo en Catálogo
    price: "Desde 12.000.000 Gs",
    tagline: "Control de lotes y vencimientos estricto.",
    description:
      "Optimizado para droguerías. Integración con Vademécum y reportes DINAVISA.",
    features: ["Alertas Vencimiento", "Lotes", "Psicotrópicos"],
    specs: { Licencia: "Perpetua", Norma: "DINAVISA" },
    idealFor: ["Farmacias", "Droguerías"],
    imagePlaceholder: "bg-purple-600",
  },
  {
    id: "aguarai-pos-lite",
    name: "Aguarai POS Lite",
    category: "software",
    isFeatured: false, // NO sale en Home
    price: "Desde 3.500.000 Gs",
    tagline: "Facturación rápida para pequeños comercios.",
    description:
      "La versión ligera para kioscos y boutiques que necesitan facturar rápido sin complicaciones.",
    features: ["Facturación Electrónica", "Caja Diaria", "Stock Simple"],
    specs: { Licencia: "Perpetua", Req: "PC Básica" },
    idealFor: ["Boutiques", "Kioscos"],
    imagePlaceholder: "bg-pink-600",
  },

  // --- HARDWARE ---
  {
    id: "balanza-systel-cuora",
    name: "Balanza Systel Cuora 30kg",
    category: "hardware",
    price: "7.900.000 Gs",
    isFeatured: true,
    tagline: "Pesaje de precisión con impresión de etiquetas.",
    // image: imgERP, // <--- Cuando tengas la foto, descomentas esto
    description:
      "Equipo robusto para pesaje comercial. Imprime etiquetas autoadhesivas con códigos de barra leíbles por cualquier sistema POS. Interfaz TCP/IP para gestión remota de precios.",
    features: [
      "Capacidad 30kg (precisión 5g)",
      "Impresora térmica incorporada",
      "Reportes de venta por PLU",
      "Batería interna anti-cortes",
    ],
    specs: {
      Conectividad: "Ethernet / Wi-Fi",
      Display: "LCD Retroiluminado",
      Plato: "Acero Inoxidable (Bandeja)",
      Garantía: "1 Año Oficial",
    },
    idealFor: ["Carnicerías", "Verdulerías", "Minimercados"],
    imagePlaceholder: "bg-emerald-600",
  },
  {
    id: "servidor-dell-t150",
    name: "Servidor Dell PowerEdge T150",
    category: "hardware",
    price: "Consultar cotización",
    isFeatured: true,
    tagline: "El motor silencioso para tu infraestructura.",
    // image: HeroServer, // <--- Cuando tengas la foto, descomentas esto
    description:
      "Servidor de torre de entrada ideal para Pymes que necesitan centralizar sus datos, correr su sistema ERP o gestionar archivos de forma segura. Fiabilidad 24/7.",
    features: [
      "Procesador Intel Xeon E-2300",
      "Memoria ECC (Corrección de errores)",
      "RAID por Hardware para protección de datos",
      "Gestión remota iDRAC",
    ],
    specs: {
      Formato: "Torre (Mini)",
      Discos: 'Soporta hasta 4x 3.5" Cabled',
      Fuente: "Certificada 80 Plus Bronze",
      OS: "Certificado para Windows Server / Linux",
    },
    idealFor: ["Oficinas", "Sistemas Centrales", "Backups"],
    imagePlaceholder: "bg-indigo-600",
  },
];
