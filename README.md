# GAMA Taller Integral

Sitio web de GAMA Taller Integral — taller mecánico integral (chapa y pintura, mecánica general, electricidad, gomería, alineación) y gestión de siniestros con aseguradoras, Buenos Aires.

React + Vite + TailwindCSS, multi-página con React Router, SEO por página (meta tags + JSON-LD) via `react-helmet-async`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Estructura

- `src/pages/` — Home, ServiceDetail (7 servicios), Insurance, Reviews, NotFound
- `src/components/` — Navbar, Footer, WhatsAppButton, Gallery, WorkCarousel, etc.
- `src/data/` — contenido editable: servicios, reviews, FAQ, config del sitio (WhatsApp, dirección, horarios)
