import { Star, BadgeCheck } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import { reviews, reviewsSummary } from '../data/reviews'
import { siteConfig, buildWhatsappLink, whatsappMessages } from '../data/siteConfig'

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: siteConfig.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewsSummary.average,
      reviewCount: reviewsSummary.total,
    },
    review: reviews.slice(0, 10).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.quote,
      reviewRating: { '@type': 'Rating', ratingValue: 5 },
    })),
  }

  return (
    <>
      <SEO
        title="Opiniones de Clientes | GAMA Taller Integral Buenos Aires"
        description="Reseñas reales de Google de clientes que repararon su auto en GAMA Taller Integral: chapa y pintura, siniestros y gestión de seguros en Buenos Aires."
        path="/opiniones"
        jsonLd={jsonLd}
      />

      <section className="bg-brand-silver-light/25 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Opiniones de <span className="text-brand-blue">nuestros clientes</span>
            </h1>
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-extrabold text-brand-ink">{reviewsSummary.average}</span>
                <StarRow />
              </div>
              <span className="text-sm text-brand-ink/50">
                basado en reseñas reales de Google de GAMA Taller Integral
              </span>
            </div>
            <a
              href={buildWhatsappLink(whatsappMessages.presupuesto)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-light"
            >
              <WhatsAppIcon size={18} /> Pedí tu presupuesto
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name + i} delay={(i % 6) * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-brand-silver-light bg-white p-6 shadow-sm">
                <StarRow />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-ink/70">“{r.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                    {r.name
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">{r.name}</div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-brand-ink/50">
                      <span className="flex items-center gap-1">
                        <BadgeCheck size={13} className="text-brand-blue" /> {r.meta}
                      </span>
                      <span>· {r.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
