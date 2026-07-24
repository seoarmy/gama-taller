import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Página no encontrada | GAMA Taller Integral" description="La página que buscás no existe." path="/404" />
      <section className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-extrabold text-brand-ink">404</h1>
        <p className="mt-3 text-brand-ink/60">No encontramos la página que buscás.</p>
        <Link to="/" className="mt-6 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-light">
          Volver al inicio
        </Link>
      </section>
    </>
  )
}
