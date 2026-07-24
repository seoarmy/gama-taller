import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] ?? Icons.Wrench

  return (
    <Link
      to={`/servicios/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-silver-light bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-brand-silver">{service.order}</span>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
          <Icon size={22} />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">{service.shortDesc}</p>
      <div className="mt-5 h-px w-full bg-brand-silver-light" />
      <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
        Ver más <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
