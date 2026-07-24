import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-brand-silver-light bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="text-lg font-extrabold">
            GAMA <span className="text-brand-blue-accent">Taller Integral</span>
          </span>
          <p className="mt-3 text-sm text-white/60">{siteConfig.slogan}</p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <InstagramIcon /> {siteConfig.instagram}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">Servicios</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/servicios/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">Enlaces</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-white">Inicio</Link>
            </li>
            <li>
              <Link to="/seguros" className="hover:text-white">Seguros</Link>
            </li>
            <li>
              <Link to="/opiniones" className="hover:text-white">Opiniones</Link>
            </li>
            <li>
              <a href="/#ubicacion" className="hover:text-white">Ubicación</a>
            </li>
            <li>
              <a href="/#faq" className="hover:text-white">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" /> {siteConfig.phoneDisplay}
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" /> {siteConfig.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" /> {siteConfig.address.full}
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0" />
              {siteConfig.hours.weekday}: {siteConfig.hours.shifts.join(' y ')}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {siteConfig.year} Todos los derechos reservados — GAMA Taller Integral
      </div>
    </footer>
  )
}
