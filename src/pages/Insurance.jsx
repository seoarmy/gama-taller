import { CheckCircle2, Scale, FileText, PhoneCall, Wrench, Car } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionBadge from '../components/SectionBadge'
import FAQAccordion from '../components/FAQAccordion'
import { siteConfig, buildWhatsappLink, whatsappMessages } from '../data/siteConfig'

const steps = [
  {
    icon: PhoneCall,
    title: 'Nos contás qué pasó',
    desc: 'Nos escribís por WhatsApp apenas ocurre el siniestro. Te decimos qué documentación necesitás tener a mano antes de mover el auto.',
  },
  {
    icon: FileText,
    title: 'Armamos el expediente completo',
    desc: 'Reunimos denuncia, cédula, póliza y presupuesto de reparación en el formato que exige cada compañía de seguros.',
  },
  {
    icon: Scale,
    title: 'Gestionamos el reclamo con la aseguradora',
    desc: 'Presentamos el caso y hacemos seguimiento activo del expediente hasta obtener la aprobación del siniestro.',
  },
  {
    icon: Wrench,
    title: 'Coordinamos la reparación completa',
    desc: 'Chapa, pintura, mecánica o lo que corresponda según el daño, sin que tengas que coordinar nada con terceros.',
  },
  {
    icon: Car,
    title: 'Te entregamos el auto listo',
    desc: 'Control de calidad final y entrega, con el trámite administrativo del seguro ya cerrado.',
  },
]

const bullets = [
  'Asesoramos al cliente inmediatamente después del accidente',
  'Gestionamos toda la documentación del siniestro',
  'Tramitamos el reclamo ante la aseguradora',
  'Coordinamos la reparación completa del vehículo',
  'Trabajamos con todas las compañías de seguros',
  'Respaldo de un buffet de abogados especializado si hace falta',
]

const faq = [
  {
    q: '¿Qué necesito llevar si tuve un siniestro?',
    a: 'DNI, cédula verde o azul del vehículo y los datos de tu póliza. Con eso iniciamos la denuncia y el expediente ante la aseguradora.',
  },
  {
    q: '¿Trabajan con cualquier compañía de seguros?',
    a: 'Sí, gestionamos siniestros con todas las aseguradoras del mercado argentino, sin importar con cuál tengas contratada tu póliza.',
  },
  {
    q: '¿Qué pasa si la aseguradora rechaza el reclamo?',
    a: 'Contamos con respaldo de un buffet de abogados especializado en derecho de seguros para reclamos que requieren instancia legal.',
  },
  {
    q: '¿Tengo que hacer algún trámite yo mismo?',
    a: 'No. Nuestro objetivo es que el único contacto que tengas con el proceso sea dejar el auto y coordinar el retiro una vez reparado.',
  },
  {
    q: '¿Cuánto tarda en resolverse un siniestro?',
    a: 'Depende de la aseguradora y la complejidad del daño. Con seguimiento activo del expediente, evitamos las demoras típicas de gestionarlo por tu cuenta.',
  },
]

export default function Insurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gestión de siniestros y reclamos de seguro automotor',
    name: `Gestión de siniestros — ${siteConfig.name}`,
    description:
      'Gestión integral de siniestros automotores con todas las compañías de seguros: documentación, reclamo, reparación y respaldo legal especializado.',
    provider: {
      '@type': 'AutoRepair',
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      sameAs: [siteConfig.instagramUrl],
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.zone,
        addressRegion: 'Ciudad Autónoma de Buenos Aires',
        addressCountry: 'AR',
      },
    },
    areaServed: 'Ciudad Autónoma de Buenos Aires',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SEO
        title="Gestión de Siniestros y Reclamos de Seguro | GAMA Taller Integral"
        description="Gestionamos tu siniestro automotor de principio a fin: documentación, reclamo ante la aseguradora, reparación completa y respaldo legal. Buenos Aires."
        path="/seguros"
        jsonLd={[jsonLd, faqJsonLd]}
      />

      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionBadge>◆ Nuestro Diferencial</SectionBadge>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Gestionamos tu siniestro de principio a fin
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Después de un choque, granizo o cualquier siniestro, te hacés cargo de una sola cosa: avisarnos. Nosotros gestionamos la documentación, el reclamo ante tu aseguradora y la reparación completa del vehículo.
            </p>
            <a
              href={buildWhatsappLink(whatsappMessages.seguro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-brand-blue-light"
            >
              <WhatsAppIcon size={18} /> Quiero asesoramiento con mi seguro
            </a>
          </Reveal>
        </div>
      </section>

      {/* BULLETS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {bullets.map((bullet) => (
            <Reveal key={bullet}>
              <div className="flex items-start gap-3 rounded-2xl border border-brand-silver-light bg-white p-5">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-blue" />
                <span className="text-sm text-brand-ink/70">{bullet}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-brand-silver-light/25 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-brand-ink">Así gestionamos tu siniestro paso a paso</h2>
          </Reveal>
          <div className="mt-12 space-y-5">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="flex items-start gap-5 rounded-2xl border border-brand-silver-light bg-white p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-ink">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-brand-ink/60">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL BACKUP */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-brand-silver-light">
              {/* TODO: reemplazar con foto real del cliente */}
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80"
                alt="Gestión de documentación de siniestro automotor"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Scale size={28} className="text-brand-blue" />
            <h2 className="mt-3 text-2xl font-extrabold text-brand-ink sm:text-3xl">
              Respaldo legal si la aseguradora complica el reclamo
            </h2>
            <p className="mt-4 text-brand-ink/60">
              Cuando una aseguradora demora o rechaza un reclamo sin fundamento, contamos con el respaldo de un buffet de abogados especializado en derecho de seguros que interviene en representación del cliente, sin costo adicional de gestión de nuestra parte.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-silver-light/25 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-brand-ink">Preguntas sobre gestión de siniestros</h2>
          </Reveal>
          <FAQAccordion items={faq} />
        </div>
      </section>
    </>
  )
}
