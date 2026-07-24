# GAMA Taller Integral — Landing Page Design

## Purpose
Demo landing (single page, anchored sections) for cliente real GAMA Taller Integral, taller mecánico integral + gestión de siniestros. Mostrar antes de producción. No backend real.

## Stack
React + Vite + TailwindCSS, `lucide-react` iconos, `framer-motion` para scroll-reveal. Scaffold en raíz de `gama taller/` (sin subcarpeta extra).

## Structure
Componentes por sección en `src/components/`: Navbar, Hero, AlertCard, Services, AboutGama, Gallery (reutilizable, 2 instancias), InsuranceClaims, WhyUs, Testimonials, Location, FinalCTA, FAQ, Footer, WhatsAppButton.

Datos (textos/imágenes/links) como arrays/constantes al tope de cada componente — fácil de editar sin tocar JSX.

## Brand tokens (tailwind.config.js)
- `brand-blue`: #0B4F9E (primary), `brand-blue-light`: #1565C0 / celeste accent
- `brand-silver`: #B0B8C1 – #E5E8EC
- Dark backgrounds: gris muy oscuro / negro para hero, services, testimonials, seguros, gallery
- Fuente: Inter (Google Fonts import)

## WhatsApp
Número real: +54 9 11 3698-0603 → link format `https://wa.me/5491136980603?text=...` con mensaje predefinido por CTA (presupuesto, seguro, asesor). Botón flotante fijo bottom-right, pulse animation, todas las secciones.

## Sections (orden, contenido resumido)
1. Navbar sticky blur oscuro, logo texto, 2 botones pill (outline → #servicios, sólido azul → #presupuesto/WhatsApp), mobile hamburguesa.
2. Hero: imagen taller/auto Unsplash + overlay degradado azul oscuro/negro, título 2-3 líneas con frase destacada celeste, subtítulo integral, CTA WhatsApp, imagen flotante + badge sello circular. Franja de 6 iconos rápidos debajo (Mecánica, Chapa y Pintura, Electricidad, Gomería, Seguros, Turnos).
3. AlertCard: split imagen auto dañado + card flotante badge "⚠ ATENCIÓN", copy siniestro, CTA → #seguros.
4. Services: grid 7 cards (chapa/pintura, mecánica general, electricidad, tapizados, granizo, gomería, alineación/balanceo), numeradas 01-07, iconos lucide, hover glow azul, fondo oscuro.
5. AboutGama: split imagen mecánico + texto presentación, CTA WhatsApp "Hablar con un asesor".
6. Gallery (instancia 1): grid 4 fotos autos reparados.
7. InsuranceClaims: badge "◆ NUESTRO DIFERENCIAL", título gestión siniestro, 6 bullets en 2 columnas con check-icons, imagen documentación/auto, CTA WhatsApp.
8. WhyUs: split stats grandes (+500 vehículos, 100% satisfacción, 10+ años) + grid 2x3 features (equipo especializado, todas las aseguradoras, equipamiento moderno, menos tiempos espera, atención personalizada, garantía).
9. Testimonials: 3 cards, 5 estrellas, cita placeholder marcada explícitamente como reemplazable, avatar iniciales, badge "Cliente verificado".
10. Gallery (instancia 2): otras 4 fotos (taller, mecánicos, herramientas, entrega).
11. Location: iframe Google Maps placeholder + dirección, horarios (Lun-Vie 08-13 y 14-19), botón "Cómo llegar".
12. FinalCTA: banner claro fondo blanco/plateado, título, botón WhatsApp grande, contacto (tel/email/Instagram @gamacentrointegraldelautomovil) en lista con iconos.
13. FAQ: acordeón, 6 preguntas dadas.
14. Footer: oscuro, logo, links ancla, contacto, redes, horarios, copyright 2025.
15. WhatsAppButton: flotante global.

## Non-goals
Sin backend, sin formularios funcionales (CTAs → wa.me directo), sin fotos reales del cliente (Unsplash placeholders + comentario `// TODO: reemplazar con foto real del cliente`).

## SEO
title, meta description, header/main/section/footer semántico, un solo `<h1>` (en Hero).

## Open items marcados en código
- `// TODO: reemplazar con foto real del cliente` en cada imagen placeholder.
- Dirección y horarios de Location: usar placeholder genérico marcado TODO (no provisto por cliente).
