import { useParams, Link, Navigate } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionBadge from '../components/SectionBadge'
import FAQAccordion from '../components/FAQAccordion'
import ServiceCard from '../components/ServiceCard'
import WorkCarousel from '../components/WorkCarousel'
import { services, getServiceBySlug } from '../data/services'
import { getGalleryForService } from '../data/gallery'
import { siteConfig, buildWhatsappLink } from '../data/siteConfig'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/" replace />

  const Icon = Icons[service.icon] ?? Icons.Wrench
  const whatsappMsg = `Hola, quiero pedir un presupuesto para ${service.title.toLowerCase()}.`
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const gallery = getGalleryForService(service.title)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: `${service.title} — ${siteConfig.name}`,
    description: service.metaDescription,
    provider: {
      '@type': 'AutoRepair',
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.zone,
        addressRegion: 'Ciudad Autónoma de Buenos Aires',
        addressCountry: 'AR',
      },
      sameAs: [siteConfig.instagramUrl],
    },
    areaServed: 'Ciudad Autónoma de Buenos Aires',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://gamatallerintegral.com.ar/' },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://gamatallerintegral.com.ar/#servicios' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://gamatallerintegral.com.ar/servicios/${service.slug}` },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/servicios/${service.slug}`}
        jsonLd={[jsonLd, breadcrumbJsonLd, faqJsonLd]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-silver-light/60 via-white to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-14 sm:px-6 lg:grid-cols-2 lg:pt-20 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold text-brand-silver">{service.order}</span>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-4xl">
              {service.title} <span className="text-brand-blue">en Buenos Aires</span>
            </h1>
            <p className="mt-4 max-w-lg text-brand-ink/60">{service.intro}</p>
            <a
              href={buildWhatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light"
            >
              <WhatsAppIcon size={18} /> Pedir presupuesto por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-brand-silver-light shadow-2xl">
                {/* TODO: reemplazar con foto real del taller GAMA */}
                <img src={service.heroImage} alt={service.title} className="h-[320px] w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-brand-blue text-white shadow-xl">
                <Icon size={26} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-silver-light/25 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge>Nuestro proceso</SectionBadge>
            <h2 className="mt-4 text-3xl font-extrabold text-brand-ink">Cómo trabajamos {service.title.toLowerCase()}</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-brand-silver-light bg-white p-6">
                  <span className="text-xs font-bold text-brand-blue">Paso {i + 1}</span>
                  <h3 className="mt-2 text-sm font-bold text-brand-ink">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-brand-ink/60">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTROS TRABAJOS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <SectionBadge>Nuestros trabajos</SectionBadge>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-ink">
            Trabajos reales de {service.title.toLowerCase()}
          </h2>
        </Reveal>
        <WorkCarousel images={gallery} />
      </section>

      {/* BENEFITS + LOCAL SEO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand-ink sm:text-3xl">Qué incluye este servicio</h2>
            <div className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-sm text-brand-ink/70">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-blue" />
                  {benefit}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-brand-silver-light bg-brand-silver-light/30 p-6">
              <div className="flex items-center gap-2 text-brand-blue">
                <MapPin size={18} /> <span className="text-sm font-semibold">Zona de cobertura</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">{service.localSeo}</p>
              <p className="mt-4 text-xs font-medium text-brand-ink/50">{siteConfig.address.full}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-silver-light/25 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-brand-ink">
              Preguntas sobre {service.title.toLowerCase()}
            </h2>
          </Reveal>
          <FAQAccordion items={service.faq} />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-brand-ink">Otros servicios de GAMA</h2>
          <Link to="/#servicios" className="flex items-center gap-1 text-sm font-semibold text-brand-blue">
            Ver todos <ArrowRight size={15} />
          </Link>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  )
}
