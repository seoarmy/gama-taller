import Reveal from './Reveal'

// TODO: reemplazar por fotos reales del taller y trabajos de GAMA
export default function Gallery({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {images.map((img, i) => (
        <Reveal key={img.src} delay={i * 0.06}>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-brand-silver-light">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Reveal>
      ))}
    </div>
  )
}
