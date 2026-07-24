import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function WorkCarousel({ images }) {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const step = card ? card.offsetWidth + 16 : 320
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <div
            key={img.src + i}
            data-card
            className="relative aspect-[4/3] w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-brand-silver-light sm:w-[46%] lg:w-[30%]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {img.tag && (
              <span className="absolute bottom-3 left-3 rounded-full bg-brand-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {img.tag}
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Ver trabajo anterior"
        className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-silver-light bg-white p-2.5 text-brand-ink shadow-lg hover:text-brand-blue sm:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Ver siguiente trabajo"
        className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-silver-light bg-white p-2.5 text-brand-ink shadow-lg hover:text-brand-blue sm:flex"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
