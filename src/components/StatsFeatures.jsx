import * as Icons from 'lucide-react'
import Reveal from './Reveal'

const stats = [
  { value: '+500', label: 'vehículos reparados' },
  { value: '100%', label: 'de clientes satisfechos' },
  { value: '10+', label: 'años de experiencia' },
]

const features = [
  {
    icon: 'Users',
    title: 'Equipo especializado',
    desc: 'Técnicos certificados por área: chapa, mecánica, electricidad y cerrajería vehicular.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Todas las compañías de seguros',
    desc: 'Gestionamos el siniestro con cualquier aseguradora del mercado.',
  },
  {
    icon: 'Settings2',
    title: 'Equipamiento moderno',
    desc: 'Diagnóstico computarizado, PDR, alineadora 3D y cabina de pintura presurizada.',
  },
  {
    icon: 'Clock',
    title: 'Reducción de tiempos de espera',
    desc: 'Procesos ordenados que evitan demoras innecesarias en cada etapa.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Atención personalizada',
    desc: 'Seguimiento directo por WhatsApp durante todo el proceso.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Garantía de servicio',
    desc: 'Respaldo por escrito sobre los trabajos realizados en el taller.',
  },
]

export default function StatsFeatures() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <div>
          <h2 className="text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Por qué elegir a <span className="text-brand-blue">GAMA Taller Integral</span>
          </h2>
          <p className="mt-4 text-brand-ink/60">
            Más de una década resolviendo reparaciones automotrices y siniestros de principio a fin, en el mismo lugar.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-brand-silver-light bg-brand-silver-light/30 p-4 text-center">
                <div className="text-2xl font-extrabold text-brand-blue sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-brand-ink/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature, i) => {
          const Icon = Icons[feature.icon] ?? Icons.Star
          return (
            <Reveal key={feature.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-brand-silver-light p-5">
                <Icon size={22} className="text-brand-blue" />
                <h3 className="mt-3 text-sm font-bold text-brand-ink">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-ink/60">{feature.desc}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
