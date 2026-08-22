import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { services } from '../data/services'
import { buildWhatsappLink, whatsappMessages } from '../data/siteConfig'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-brand-blue' : 'text-brand-ink/70 hover:text-brand-blue'
  }`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm shadow-brand-ink/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="GAMA Taller Integral" className="h-10 w-auto sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-brand-ink/70 transition-colors hover:text-brand-blue">
              Servicios <ChevronDown size={15} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-xl border border-brand-silver-light bg-white p-2 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/servicios/${service.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-brand-ink/80 hover:bg-brand-silver-light/60 hover:text-brand-blue"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/seguros" className={navLinkClass}>
            Seguros
          </NavLink>
          <NavLink to="/opiniones" className={navLinkClass}>
            Opiniones
          </NavLink>
          <a href="/#ubicacion" className="text-sm font-medium text-brand-ink/70 transition-colors hover:text-brand-blue">
            Ubicación
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={buildWhatsappLink(whatsappMessages.presupuesto)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-light"
          >
            <WhatsAppIcon size={16} />
            Pedí tu Presupuesto
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-brand-silver-light bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            <span className="px-2 pt-1 text-xs font-semibold uppercase tracking-wide text-brand-ink/40">
              Servicios
            </span>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/servicios/${service.slug}`}
                className="rounded-lg px-2 py-2 text-sm text-brand-ink/80"
                onClick={() => setMobileOpen(false)}
              >
                {service.title}
              </Link>
            ))}
            <Link to="/seguros" className="mt-2 rounded-lg px-2 py-2 text-sm font-medium text-brand-ink/80" onClick={() => setMobileOpen(false)}>
              Seguros
            </Link>
            <Link to="/opiniones" className="rounded-lg px-2 py-2 text-sm font-medium text-brand-ink/80" onClick={() => setMobileOpen(false)}>
              Opiniones
            </Link>
            <a href="/#ubicacion" className="rounded-lg px-2 py-2 text-sm font-medium text-brand-ink/80" onClick={() => setMobileOpen(false)}>
              Ubicación
            </a>
            <a
              href={buildWhatsappLink(whatsappMessages.presupuesto)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon size={16} />
              Pedí tu Presupuesto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
