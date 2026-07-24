import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../data/siteConfig'

export default function SEO({ title, description, path = '/', jsonLd }) {
  const canonical = `https://gamatallerintegral.com.ar${path}` // TODO: reemplazar por dominio real
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="es_AR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="geo.region" content="AR-C" />
      <meta name="geo.placename" content="Buenos Aires" />
      <meta name="geo.position" content={`${siteConfig.address.lat};${siteConfig.address.lng}`} />
      <meta name="ICBM" content={`${siteConfig.address.lat}, ${siteConfig.address.lng}`} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
