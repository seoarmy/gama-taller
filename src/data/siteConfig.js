export const siteConfig = {
  name: 'GAMA Taller Integral',
  shortName: 'GAMA',
  slogan: 'Nosotros nos ocupamos de todo, de principio a fin.',
  phoneDisplay: '+54 9 11 3698-0603',
  whatsappNumber: '5491136980603',
  email: 'contacto@gamatallerintegral.com.ar', // TODO: email real del cliente
  instagram: '@gamacentrointegraldelautomovil',
  instagramUrl: 'https://instagram.com/gamacentrointegraldelautomovil',
  address: {
    street: 'Marcos Sastre 4474',
    zone: 'Ciudad Autónoma de Buenos Aires',
    city: 'C1417 GAL, Cdad. Autónoma de Buenos Aires',
    country: 'Argentina',
    full: 'Marcos Sastre 4474, C1417 GAL, Cdad. Autónoma de Buenos Aires, Argentina',
    mapsEmbedSrc:
      'https://www.google.com/maps?q=Marcos+Sastre+4474,+CABA&output=embed',
    mapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Marcos+Sastre+4474,+CABA,+Argentina',
    lat: -34.6013,
    lng: -58.5147,
  },
  hours: {
    weekday: 'Lunes a viernes',
    shifts: ['08:00 a 13:00', '14:00 a 19:00'],
  },
  year: new Date().getFullYear(),
}

export function buildWhatsappLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}

export const whatsappMessages = {
  presupuesto: 'Hola, quiero pedir un presupuesto para mi auto.',
  siniestro: 'Hola, quiero que se ocupen de todo el trámite de mi siniestro.',
  asesor: 'Hola, quiero hablar con un asesor de GAMA Taller Integral.',
  seguro: 'Hola, quiero asesoramiento con mi seguro.',
  general: 'Hola, tengo una consulta para GAMA Taller Integral.',
}
