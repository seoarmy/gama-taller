import { Link } from 'react-router-dom'
import {
  ShieldAlert,
  Wrench,
  SprayCan,
  Zap,
  KeyRound,
  ShieldCheck,
  CalendarClock,
  CheckCircle2,
  Navigation2,
  Mail,
} from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import InsurersCarousel from '../components/InsurersCarousel'
import SectionBadge from '../components/SectionBadge'
import ServiceCard from '../components/ServiceCard'
import Gallery from '../components/Gallery'
import WorkCarousel from '../components/WorkCarousel'
import StatsFeatures from '../components/StatsFeatures'
import Testimonials from '../components/Testimonials'
import FAQAccordion from '../components/FAQAccordion'
import { services } from '../data/services'
import { faqGlobal } from '../data/faqGlobal'
import { reviewsSummary } from '../data/reviews'
import { workGallery } from '../data/gallery'
import { siteConfig, buildWhatsappLink, whatsappMessages } from '../data/siteConfig'

// TODO: reemplazar imágenes placeholder por fotos reales del taller GAMA
const quickIcons = [
  { icon: Wrench, label: 'Mecánica' },
  { icon: SprayCan, label: 'Chapa y Pintura' },
  { icon: Zap, label: 'Electricidad' },
  { icon: KeyRound, label: 'Cerrajería' },
  { icon: ShieldCheck, label: 'Seguros' },
  { icon: CalendarClock, label: 'Turnos' },
]

const gallery1 = [
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80', alt: 'Auto reparado listo para entrega' },
  { src: 'https://images.unsplash.com/photo-1632823469850-1b7b1e8b7e6f?auto=format&fit=crop&w=800&q=80', alt: 'Trabajo de chapa y pintura terminado' },
  { src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80', alt: 'Vehículo con pintura en cabina presurizada finalizada' },
  { src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80', alt: 'Auto entregado al cliente' },
]

const gallery2 = [
  { src: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80', alt: 'Interior del taller GAMA' },
  { src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80', alt: 'Mecánico trabajando en un vehículo' },
  { src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80', alt: 'Herramientas de taller mecánico' },
  { src: 'https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?auto=format&fit=crop&w=800&q=80', alt: 'Entrega de vehículo reparado' },
]

const insuranceBullets = [
  'Asesoramos al cliente inmediatamente después del accidente',
  'Te decimos qué documentación necesitás presentar',
  'Tramitamos el reclamo ante la aseguradora',
  'Coordinamos la reparación completa del vehículo',
  'Trabajamos con todas las compañías de seguros',
  'Respaldo de un buffet de abogados especializado si hace falta',
]

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: siteConfig.name,
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.zone,
      addressRegion: 'Ciudad Autónoma de Buenos Aires',
      postalCode: 'C1417',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    openingHours: 'Mo-Fr 08:00-13:00,14:00-19:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewsSummary.average,
      reviewCount: reviewsSummary.total,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de taller integral',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title },
      })),
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGlobal.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SEO
        title="GAMA Taller Integral | Taller Mecánico y Chapa y Pintura en Buenos Aires"
        description="Taller mecánico integral en Buenos Aires: chapa y pintura, mecánica general, electricidad, cerrajería vehicular y gestión completa de siniestros con tu aseguradora. Presupuesto sin cargo."
        path="/"
        jsonLd={[jsonLd, faqJsonLd]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-silver-light/60 via-white to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:pt-24 lg:px-8">
          <Reveal>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              Tu auto en las mejores manos, <span className="text-brand-blue">de principio a fin</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-brand-ink/60 sm:text-lg">
              Mecánica, chapa y pintura, electricidad y gestión de seguros en un solo lugar. Vos nos contás qué pasó, nosotros nos ocupamos de todo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={buildWhatsappLink(whatsappMessages.presupuesto)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-colors hover:bg-brand-blue-light"
              >
                <WhatsAppIcon size={18} /> Pedí tu presupuesto por WhatsApp
              </a>
              <Link
                to="/servicios/chapa-y-pintura"
                className="flex items-center gap-2 rounded-full border border-brand-silver px-6 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                Ver servicios
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-brand-silver-light shadow-2xl">
                {/* TODO: reemplazar con foto real del cliente */}
                <img
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=80"
                  alt="Mecánico de GAMA Taller Integral trabajando en un vehículo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-brand-blue text-white shadow-xl">
                <ShieldCheck size={30} />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-brand-silver-light bg-white/70 py-6 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 lg:px-8">
            {quickIcons.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-brand-ink/70">
                <Icon size={18} className="text-brand-blue" /> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALERT CARD */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-silver-light">
            <div className="grid grid-cols-2">
              <div className="relative h-28 sm:h-40 md:h-48">
                {/* TODO: reemplazar con foto real de daño / granizo del cliente */}
                <img
                  src="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&w=1000&q=80"
                  alt="Vehículo con daño de chapa por granizo"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-brand-dark p-3 text-white sm:p-7">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-400/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300 sm:px-3 sm:text-xs">
                  <ShieldAlert size={14} /> Atención
                </span>
                <h2 className="mt-2 text-sm font-bold sm:mt-3 sm:text-2xl">
                  ¿Tu auto tuvo un choque, granizo o un siniestro?
                </h2>
                <p className="mt-1.5 text-xs text-white/70 sm:mt-2 sm:text-sm">
                  Nos ocupamos de todo el proceso: desde la reparación hasta el trámite con tu aseguradora. Vos no tenés que lidiar con nada.
                </p>
                <a
                  href="/seguros"
                  className="mt-2.5 flex w-fit items-center gap-1.5 rounded-full bg-brand-blue px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-blue-light sm:mt-4 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                  Quiero que se ocupen de todo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* INSURERS CAROUSEL */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-brand-ink-soft">
            Trabajamos con todas las aseguradoras
          </p>
          <InsurersCarousel />
        </Reveal>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="bg-brand-silver-light/25 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge>Servicios</SectionBadge>
            <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Soluciones para cada necesidad de tu vehículo
            </h2>
            <p className="mt-3 text-brand-ink/60">
              Reparación integral bajo un mismo techo, con equipo especializado por área.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section id="seguros" className="bg-brand-dark py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionBadge>◆ Nuestro Diferencial</SectionBadge>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Gestionamos tu siniestro de principio a fin
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {insuranceBullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2 text-sm text-white/75">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-blue-accent" />
                  {bullet}
                </div>
              ))}
            </div>
            <a
              href={buildWhatsappLink(whatsappMessages.seguro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-light"
            >
              Quiero asesoramiento con mi seguro
            </a>
            <div className="mt-4">
              <Link to="/seguros" className="text-sm text-brand-blue-accent hover:underline">
                Ver todo el proceso de gestión de siniestros →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-white/10">
              {/* TODO: reemplazar con foto real del cliente */}
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80"
                alt="Gestión de documentación de siniestro junto a un vehículo"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* NUESTROS TRABAJOS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <SectionBadge>Nuestros trabajos</SectionBadge>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Reparaciones reales, en todos nuestros servicios
          </h2>
        </Reveal>
        <WorkCarousel images={workGallery} />
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-brand-silver-light">
              {/* TODO: reemplazar con foto real de la fachada / interior del taller GAMA */}
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=80"
                alt="Interior del taller GAMA Taller Integral"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionBadge>Nosotros</SectionBadge>
            <h2 className="mt-4 text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Más de 23 años de trayectoria en Buenos Aires
            </h2>
            <p className="mt-4 text-brand-ink/60">
              GAMA Taller Integral acompaña a clientes de toda la Ciudad de Buenos Aires desde hace más de 23 años, reparando vehículos con el mismo compromiso desde el primer día. Esa trayectoria nos permitió sumar equipamiento moderno —diagnóstico computarizado, cabina de pintura presurizada, alineadora 3D— sin perder el trato cercano y personalizado con cada cliente.
            </p>
            <p className="mt-3 text-brand-ink/60">
              Cada vehículo que entra al taller se sigue de punta a punta con el mismo asesor, desde el diagnóstico inicial hasta la entrega final.
            </p>
            <a
              href={buildWhatsappLink(whatsappMessages.asesor)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-light"
            >
              Hablar con un asesor
            </a>
          </Reveal>
        </div>
      </section>

      {/* GALLERY 1 */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Gallery images={gallery1} />
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <StatsFeatures />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand-silver-light/25 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">
              La confianza de quienes ya recuperaron su auto
            </h2>
          </Reveal>
          <Testimonials />
          <div className="mt-10 text-center">
            <Link to="/opiniones" className="text-sm font-semibold text-brand-blue hover:underline">
              Ver todas las opiniones de Google →
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY 2 */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Gallery images={gallery2} />
      </section>

      {/* LOCATION */}
      <section id="ubicacion" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl border border-brand-silver-light">
            <iframe
              title="Ubicación de GAMA Taller Integral"
              src={siteConfig.address.mapsEmbedSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">Encontranos en Buenos Aires</h2>
            <p className="mt-4 text-brand-ink/60">{siteConfig.address.full}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-brand-ink/70">
              <CalendarClock size={17} className="text-brand-blue" />
              {siteConfig.hours.weekday}: {siteConfig.hours.shifts.join(' y ')}
            </div>
            <a
              href={siteConfig.address.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-light"
            >
              <Navigation2 size={16} /> Cómo llegar
            </a>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-light py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              ¿Tu auto necesita atención? Escribinos ahora
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={buildWhatsappLink(whatsappMessages.presupuesto)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-blue shadow-lg hover:bg-brand-silver-light"
              >
                <WhatsAppIcon size={20} /> Escribir por WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.insuranceEmail}?subject=${encodeURIComponent('Consulta sobre gestión de siniestro')}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10"
              >
                <Mail size={20} /> Consultá por tu seguro
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
              <span>{siteConfig.phoneDisplay}</span>
              <span>{siteConfig.email}</span>
              <span>{siteConfig.instagram}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Preguntas <span className="text-brand-blue">frecuentes</span>
          </h2>
        </Reveal>
        <FAQAccordion items={faqGlobal} />
      </section>
    </>
  )
}
