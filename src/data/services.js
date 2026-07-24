// TODO: reemplazar imágenes placeholder por fotos reales del taller GAMA
export const services = [
  {
    slug: 'chapa-y-pintura',
    order: '01',
    icon: 'SprayCan',
    title: 'Chapa y Pintura',
    shortDesc: 'Reparación de carrocería y pintura al horno con acabado de fábrica.',
    metaTitle: 'Chapa y Pintura en Buenos Aires | GAMA Taller Integral',
    metaDescription:
      'Reparación de chapa y pintura al horno en Buenos Aires. Igualación de color por espectrofotómetro y trabajo con todas las aseguradoras. Presupuesto sin cargo.',
    heroImage:
      'https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e6f?auto=format&fit=crop&w=1600&q=80',
    intro:
      'En nuestro sector de chapa y pintura trabajamos con cabina de pintado al horno y bancada de enderezado por medición láser, lo que nos permite devolver la geometría original del chasis antes de aplicar cualquier pintura. No tapamos golpes: los corregimos desde la estructura.',
    process: [
      {
        title: 'Diagnóstico y medición de chasis',
        desc: 'Relevamos la deformación con banco de medición para saber si el golpe afectó la estructura, no solo la chapa visible.',
      },
      {
        title: 'Desabolladura y preparación de superficie',
        desc: 'Enderezado, masillado y lijado en varias pasadas hasta dejar la superficie lista para imprimación.',
      },
      {
        title: 'Igualación de color por espectrofotómetro',
        desc: 'Medimos el color original de fábrica de tu auto para que el sector pintado sea indistinguible del resto de la carrocería.',
      },
      {
        title: 'Horneado y pulido final',
        desc: 'Curado en cabina a temperatura controlada y pulido de terminación antes de la entrega.',
      },
    ],
    localSeo:
      'Atendemos siniestros de chapa y pintura de clientes de toda la Ciudad Autónoma de Buenos Aires que llegan derivados por su aseguradora o de forma particular a nuestro taller en Marcos Sastre 4474.',
    benefits: [
      'Igualación de color por espectrofotómetro, no a ojo',
      'Bancada de enderezado por medición láser',
      'Garantía escrita sobre el trabajo de pintura',
      'Auto de reemplazo a coordinar según disponibilidad',
    ],
    faq: [
      {
        q: '¿La pintura queda igual al color original de mi auto?',
        a: 'Sí. Medimos el color de fábrica con espectrofotómetro antes de mezclar la pintura, por eso el sector reparado no se nota a simple vista ni con luz solar directa.',
      },
      {
        q: '¿Cuánto tarda una reparación de chapa y pintura de un paragolpe?',
        a: 'Un paragolpe sin daño estructural suele estar entre 3 y 5 días hábiles, incluyendo secado y pulido. Si hay que enderezar chasis, el plazo se extiende según el diagnóstico inicial.',
      },
      {
        q: '¿Trabajan directo con la aseguradora para este tipo de daño?',
        a: 'Sí, gestionamos la documentación y el peritaje con la compañía para que solo tengas que dejar el auto y coordinar el retiro.',
      },
    ],
  },
  {
    slug: 'mecanica-general',
    order: '02',
    icon: 'Wrench',
    title: 'Mecánica General',
    shortDesc: 'Diagnóstico computarizado, service y reparación de motor y tren delantero.',
    metaTitle: 'Mecánica General en Buenos Aires | GAMA Taller Integral',
    metaDescription:
      'Taller de mecánica general en Buenos Aires: diagnóstico computarizado, service, distribución, frenos y tren delantero. Presupuesto sin cargo en Marcos Sastre 4474.',
    heroImage:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80',
    intro:
      'El sector de mecánica general de GAMA trabaja con escáner multimarca para leer las centralitas de motor, ABS y airbag antes de tocar una sola pieza. Así evitamos cambiar componentes que funcionan bien y vamos directo a la causa del problema.',
    process: [
      {
        title: 'Escaneo de fallas con equipo multimarca',
        desc: 'Leemos códigos de error de todas las centralitas del vehículo para acotar el diagnóstico antes de desarmar nada.',
      },
      {
        title: 'Inspección física del sistema afectado',
        desc: 'Verificamos motor, tren delantero, frenos o distribución según lo que indique el escaneo y la consulta del cliente.',
      },
      {
        title: 'Reparación con repuestos originales u homologados',
        desc: 'Trabajamos con marcas homologadas y, si el cliente lo pide, con repuesto original de concesionario.',
      },
      {
        title: 'Prueba de ruta y borrado de fallas',
        desc: 'Hacemos una prueba de manejo real antes de entregar el auto y confirmamos que no queden códigos de error activos.',
      },
    ],
    localSeo:
      'Recibimos vehículos para service y mecánica general de clientes de toda la Ciudad de Buenos Aires, con turno previo o de manera espontánea según disponibilidad del taller.',
    benefits: [
      'Escáner multimarca para motor, ABS y airbag',
      'Presupuesto detallado antes de iniciar cualquier trabajo',
      'Repuestos originales u homologados a elección del cliente',
      'Prueba de ruta post-reparación',
    ],
    faq: [
      {
        q: '¿Necesito sacar turno para un service?',
        a: 'Para service programado recomendamos coordinar turno previo por WhatsApp; para urgencias evaluamos disponibilidad del día.',
      },
      {
        q: '¿Usan repuestos originales?',
        a: 'Ofrecemos ambas opciones: repuesto original de concesionario o repuesto homologado de primera línea, y te mostramos el presupuesto de cada uno antes de decidir.',
      },
      {
        q: '¿Puedo pedir una segunda opinión sobre un diagnóstico de otro taller?',
        a: 'Sí, es habitual. Volvemos a escanear el vehículo y te mostramos el resultado antes de confirmar cualquier reparación.',
      },
    ],
  },
  {
    slug: 'electricidad-del-automovil',
    order: '03',
    icon: 'Zap',
    title: 'Electricidad del Automóvil',
    shortDesc: 'Diagnóstico de fallas eléctricas, arneses, sensores y sistemas de arranque.',
    metaTitle: 'Electricidad del Automóvil en Buenos Aires | GAMA Taller Integral',
    metaDescription:
      'Diagnóstico y reparación eléctrica automotriz en Buenos Aires: arneses, sensores, sistema de arranque y carga. Taller GAMA, Marcos Sastre 4474, CABA.',
    heroImage:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Las fallas eléctricas suelen ser intermitentes y difíciles de reproducir en el momento del diagnóstico. Nuestro electricista trabaja con osciloscopio y multímetro para medir señales reales de sensores y arneses, no solo leer un código genérico de falla.',
    process: [
      {
        title: 'Relevamiento del síntoma con el cliente',
        desc: 'Registramos en qué condiciones aparece la falla (arranque en frío, uso de aire acondicionado, ruta, ciudad) para poder reproducirla.',
      },
      {
        title: 'Medición con osciloscopio y multímetro',
        desc: 'Verificamos tensión, continuidad y forma de onda de los circuitos sospechosos en vez de reemplazar piezas al azar.',
      },
      {
        title: 'Reparación de arnés o reemplazo de componente',
        desc: 'Según el resultado, reparamos el cableado dañado o reemplazamos el sensor, módulo o batería involucrado.',
      },
      {
        title: 'Verificación de estabilidad de la falla',
        desc: 'Repetimos las condiciones que generaban el problema para confirmar que la solución se sostiene y no reaparece.',
      },
    ],
    localSeo:
      'Diagnosticamos fallas eléctricas intermitentes de autos de toda Buenos Aires que ya pasaron por otro taller sin solución definitiva, con equipo de medición dedicado a electrónica automotriz.',
    benefits: [
      'Osciloscopio para medir señales reales, no solo leer códigos',
      'Reparación de arnés en vez de reemplazo directo del mazo completo',
      'Diagnóstico de fallas intermitentes con protocolo de reproducción',
      'Presupuesto por componente antes de intervenir',
    ],
    faq: [
      {
        q: '¿Qué pasa si la falla es intermitente y no se manifiesta en el taller?',
        a: 'Te pedimos que describas exactamente cuándo aparece (clima, uso de accesorios, distancia recorrida) y armamos un protocolo de prueba en ruta para intentar reproducirla antes de medir.',
      },
      {
        q: '¿Reparan el cableado o directamente lo cambian?',
        a: 'Priorizamos la reparación puntual del arnés dañado. El reemplazo completo del mazo lo proponemos solo cuando el daño es extenso o afecta la seguridad del vehículo.',
      },
      {
        q: '¿Trabajan sistemas de arranque y carga de batería?',
        a: 'Sí, diagnosticamos motor de arranque, alternador y batería, y te decimos con precisión cuál de los tres es el origen del problema antes de cambiar nada.',
      },
    ],
  },
  {
    slug: 'limpieza-de-tapizados',
    order: '04',
    icon: 'Armchair',
    title: 'Limpieza de Tapizados',
    shortDesc: 'Lavado profundo de tapizados, techo y alfombras con inyección-extracción.',
    metaTitle: 'Limpieza de Tapizados en Buenos Aires | GAMA Taller Integral',
    metaDescription:
      'Limpieza profunda de tapizados de auto en Buenos Aires: inyección-extracción, tratamiento de manchas y desodorización. Taller GAMA, Marcos Sastre 4474.',
    heroImage:
      'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Usamos equipo de inyección-extracción, que aplica el producto de limpieza a presión sobre la fibra del tapizado y lo retira de inmediato junto con la suciedad, en vez de dejarlo secar sobre el asiento como el lavado con paño húmedo tradicional.',
    process: [
      {
        title: 'Aspirado profundo y remoción de residuos sólidos',
        desc: 'Retiramos arena, migas y residuos antes de aplicar cualquier producto líquido, para no ensuciar el tapizado durante el lavado.',
      },
      {
        title: 'Pretratamiento de manchas puntuales',
        desc: 'Aplicamos producto específico según el tipo de mancha (grasa, bebida, humedad) antes del lavado general.',
      },
      {
        title: 'Inyección-extracción en asientos, techo y alfombras',
        desc: 'Lavamos fibra por fibra con máquina de inyección-extracción, que no deja el tapizado empapado.',
      },
      {
        title: 'Secado y desodorización final',
        desc: 'Secado con aire forzado y desodorización para que el auto salga del taller sin olor a humedad.',
      },
    ],
    localSeo:
      'Servicio de limpieza de tapizados solicitado frecuentemente por clientes de toda Buenos Aires después de reparaciones por granizo o inundación parcial del habitáculo.',
    benefits: [
      'Equipo de inyección-extracción, no lavado con paño húmedo',
      'Tratamiento específico según tipo de mancha',
      'Secado con aire forzado, sin dejar humedad residual',
      'Compatible con tapizado de tela y cuero',
    ],
    faq: [
      {
        q: '¿Cuánto tarda en secar el tapizado después de la limpieza?',
        a: 'Con el secado forzado que aplicamos, el auto queda listo para usar el mismo día, sin humedad al tacto en asientos ni alfombras.',
      },
      {
        q: '¿Sacan olor a humedad o cigarrillo?',
        a: 'Sí, el proceso de inyección-extracción combinado con desodorización elimina el olor en la mayoría de los casos, no solo lo enmascara.',
      },
      {
        q: '¿Trabajan tapizado de cuero también?',
        a: 'Sí, usamos productos específicos para cuero que limpian sin resecar ni dañar el material.',
      },
    ],
  },
  {
    slug: 'reparacion-por-granizo',
    order: '05',
    icon: 'CloudHail',
    title: 'Reparación por Granizo',
    shortDesc: 'Reparación sin pintura (PDR) para abolladuras causadas por granizo.',
    metaTitle: 'Reparación de Granizo en Buenos Aires | GAMA Taller Integral',
    metaDescription:
      'Reparación de abolladuras por granizo con técnica PDR (sin pintura) en Buenos Aires. Gestión completa con tu aseguradora. Taller GAMA, Marcos Sastre 4474.',
    heroImage:
      'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&w=1600&q=80',
    intro:
      'La mayoría de los daños por granizo se pueden reparar con técnica PDR (Paintless Dent Repair), trabajando la chapa desde el reverso del panel sin necesidad de pintar. Esto conserva la pintura de fábrica del auto y reduce notablemente el tiempo de reparación frente a un arreglo tradicional.',
    process: [
      {
        title: 'Relevamiento de daño panel por panel',
        desc: 'Contamos y clasificamos cada abolladura por tamaño y profundidad para armar el informe que se presenta a la aseguradora.',
      },
      {
        title: 'Definición de técnica: PDR o chapa y pintura',
        desc: 'Si la abolladura no estiró ni fisuró la pintura, aplicamos PDR. Si el daño es severo, derivamos a chapa y pintura convencional.',
      },
      {
        title: 'Reparación desde el reverso del panel',
        desc: 'Con herramientas específicas de PDR, empujamos y modelamos la chapa desde adentro hasta devolver la superficie original.',
      },
      {
        title: 'Control de calidad con luz rasante',
        desc: 'Revisamos cada panel con lámpara de inspección para confirmar que no queden marcas visibles antes de entregar el vehículo.',
      },
    ],
    localSeo:
      'Después de granizadas en Buenos Aires, atendemos alto volumen de vehículos de toda la ciudad derivados directamente por las aseguradoras para reparación por PDR.',
    benefits: [
      'Técnica PDR: conserva la pintura original de fábrica',
      'Tiempos de reparación más cortos que chapa y pintura tradicional',
      'Gestión completa del siniestro con la aseguradora',
      'Informe de daño panel por panel para el peritaje',
    ],
    faq: [
      {
        q: '¿La reparación por granizo deja marca?',
        a: 'Con técnica PDR bien aplicada, no. Revisamos cada panel con luz rasante antes de entregar para confirmar que la superficie volvió a su estado original.',
      },
      {
        q: '¿Todos los daños de granizo se reparan sin pintar?',
        a: 'No todos. Si la abolladura estiró o fisuró la pintura, hay que pasar por chapa y pintura convencional en ese panel puntual; el resto sí se resuelve con PDR.',
      },
      {
        q: '¿Cuánto tarda la reparación completa de un auto con granizo?',
        a: 'Depende de la cantidad de paneles afectados. Un daño leve a moderado se resuelve en pocos días; te damos el plazo exacto después del relevamiento inicial.',
      },
    ],
  },
  {
    slug: 'gomeria',
    order: '06',
    icon: 'Disc3',
    title: 'Gomería',
    shortDesc: 'Cambio, reparación y balanceo de neumáticos con equipo computarizado.',
    metaTitle: 'Gomería en Buenos Aires | GAMA Taller Integral',
    metaDescription:
      'Gomería en Buenos Aires: cambio de neumáticos, reparación de pinchaduras y balanceo computarizado. Taller GAMA, Marcos Sastre 4474, CABA.',
    heroImage:
      'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Revisamos el desgaste de la cubierta antes de recomendar un cambio: en muchos casos una pinchadura se repara de forma segura y en otros el desgaste irregular indica un problema de alineación que conviene resolver antes de invertir en neumáticos nuevos.',
    process: [
      {
        title: 'Inspección del patrón de desgaste',
        desc: 'Miramos si el desgaste es parejo o irregular, lo que indica si el problema es solo la cubierta o hay un tema de alineación de fondo.',
      },
      {
        title: 'Reparación o reemplazo según corresponda',
        desc: 'Si la pinchadura está en zona reparable, la solucionamos con parche interno. Si no, coordinamos el cambio según el uso del vehículo.',
      },
      {
        title: 'Balanceo computarizado de las cuatro ruedas',
        desc: 'Balanceamos con equipo computarizado para eliminar vibraciones en el volante a alta velocidad.',
      },
      {
        title: 'Control de presión y torque de tuercas',
        desc: 'Ajustamos presión según especificación de fábrica y verificamos torque de tuercas con llave calibrada.',
      },
    ],
    localSeo:
      'Servicio de gomería para clientes de toda Buenos Aires que combinan el cambio de neumáticos con alineación y balanceo en la misma visita, sin necesidad de otro turno.',
    benefits: [
      'Reparación de pinchaduras cuando es seguro hacerlo',
      'Balanceo computarizado de las cuatro ruedas',
      'Control de torque con llave calibrada',
      'Recomendación honesta: reparar vs. cambiar',
    ],
    faq: [
      {
        q: '¿Toda pinchadura se puede reparar?',
        a: 'No. Depende de la ubicación y el tamaño del daño en la banda de rodamiento. Si la pinchadura está en la zona lateral o es muy grande, recomendamos el cambio por seguridad.',
      },
      {
        q: '¿Hacen balanceo si compro los neumáticos en otro lado?',
        a: 'Sí, balanceamos neumáticos aunque no los hayamos vendido nosotros.',
      },
      {
        q: '¿Cada cuánto conviene rotar los neumáticos?',
        a: 'En general cada 10.000 km, pero te lo confirmamos según el patrón de desgaste que veamos en la inspección.',
      },
    ],
  },
  {
    slug: 'alineacion-y-balanceo',
    order: '07',
    icon: 'Gauge',
    title: 'Alineación y Balanceo',
    shortDesc: 'Alineación 3D computarizada y balanceo para un manejo estable y seguro.',
    metaTitle: 'Alineación y Balanceo en Buenos Aires | GAMA Taller Integral',
    metaDescription:
      'Alineación 3D computarizada y balanceo de ruedas en Buenos Aires. Corregimos tiro al volante y desgaste irregular de neumáticos. Taller GAMA, Marcos Sastre 4474.',
    heroImage:
      'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1600&q=80',
    intro:
      'Trabajamos con alineadora 3D computarizada, que mide los ángulos de convergencia, caída y avance de cada rueda contra el valor exacto de fábrica del modelo, no contra un promedio general. Esto es clave después de un choque, un pozo fuerte o un cambio de suspensión.',
    process: [
      {
        title: 'Medición de ángulos con equipo 3D',
        desc: 'Colocamos sensores en las cuatro ruedas y medimos convergencia, caída y avance con precisión milimétrica.',
      },
      {
        title: 'Comparación contra valores de fábrica',
        desc: 'Contrastamos la medición contra la especificación exacta del fabricante para ese modelo y año.',
      },
      {
        title: 'Ajuste de tren delantero y trasero',
        desc: 'Corregimos los ángulos fuera de rango actuando sobre las bielas, excéntricos y demás puntos de regulación del vehículo.',
      },
      {
        title: 'Prueba de ruta para confirmar estabilidad',
        desc: 'Manejamos el auto para verificar que no tire hacia ningún lado y que el volante quede centrado.',
      },
    ],
    localSeo:
      'Muchos clientes de Buenos Aires llegan a alineación y balanceo derivados de nuestro propio sector de gomería o después de una reparación de suspensión, sin salir del taller de Marcos Sastre 4474.',
    benefits: [
      'Alineadora 3D contra valor exacto de fábrica',
      'Corrección de tiro al volante y desgaste irregular',
      'Ajuste de tren delantero y trasero',
      'Prueba de ruta incluida antes de la entrega',
    ],
    faq: [
      {
        q: '¿Cuándo conviene hacer una alineación?',
        a: 'Después de golpear un pozo fuerte, un choque, un cambio de amortiguadores o cuando notás que el auto tira hacia un lado o el volante queda torcido al ir derecho.',
      },
      {
        q: '¿La alineación soluciona la vibración del volante?',
        a: 'Si la vibración es por desgaste irregular de neumáticos, la alineación ayuda, pero primero verificamos el balanceo, que suele ser la causa directa de la vibración a alta velocidad.',
      },
      {
        q: '¿Cuánto tarda una alineación y balanceo completo?',
        a: 'Normalmente se resuelve en el día, en una sola visita al taller.',
      },
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
