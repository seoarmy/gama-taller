// TODO: reemplazar por fotos reales de trabajos terminados de GAMA
export const workGallery = [
  {
    src: 'https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e6f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Paragolpe reparado y pintado en cabina presurizada',
    tag: 'Chapa y Pintura',
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Diagnóstico de motor con escáner multimarca',
    tag: 'Mecánica General',
  },
  {
    src: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Reparación de abolladuras por granizo sin pintura',
    tag: 'Reparación de Granizo',
  },
  {
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Revisión de arnés y sistema eléctrico',
    tag: 'Electricidad',
  },
  {
    src: 'https://images.unsplash.com/photo-1621361365424-06f0e1eb0940?auto=format&fit=crop&w=1200&q=80',
    alt: 'Programación de llave con chip para automóvil',
    tag: 'Cerrajería Vehicular',
  },
  {
    src: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&w=1200&q=80',
    alt: 'Limpieza profunda de tapizados',
    tag: 'Tapizados',
  },
  {
    src: 'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=80',
    alt: 'Alineación 3D computarizada',
    tag: 'Alineación y Balanceo',
  },
  {
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vehículo con pintura en cabina presurizada finalizada',
    tag: 'Chapa y Pintura',
  },
  {
    src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    alt: 'Entrega de vehículo reparado al cliente',
    tag: 'Entrega',
  },
  {
    src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mecánico trabajando en el taller GAMA',
    tag: 'Taller',
  },
]

export function getGalleryForService(serviceTitle, min = 6) {
  const matched = workGallery.filter((img) => img.tag === serviceTitle)
  const rest = workGallery.filter((img) => img.tag !== serviceTitle)
  return [...matched, ...rest].slice(0, Math.max(min, matched.length))
}
