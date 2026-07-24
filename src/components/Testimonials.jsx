import { Star, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <div>
      <p className="mb-2 text-center text-xs font-medium uppercase tracking-wide text-brand-ink/40">
        Contenido de ejemplo — testimonios reales próximamente
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-brand-silver-light bg-white p-6 shadow-sm">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-ink/70">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">{t.name}</div>
                  <div className="flex items-center gap-1 text-xs text-brand-ink/50">
                    <BadgeCheck size={13} className="text-brand-blue" /> Cliente verificado
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
