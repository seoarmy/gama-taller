const insurers = [
  { src: '/insurers/sancor.png', alt: 'Sancor Seguros' },
  { src: '/insurers/la-caja.png', alt: 'La Caja de Ahorro y Seguro' },
  { src: '/insurers/federacion-patronal.png', alt: 'Federación Patronal Seguros' },
  { src: '/insurers/rivadavia.png', alt: 'Rivadavia Seguros' },
  { src: '/insurers/mercantil-andina.png', alt: 'Mercantil Andina' },
  { src: '/insurers/zurich.png', alt: 'Zurich' },
  { src: '/insurers/allianz.png', alt: 'Allianz' },
  { src: '/insurers/san-cristobal.png', alt: 'San Cristóbal Seguros' },
  { src: '/insurers/swiss-medical.png', alt: 'Swiss Medical Seguros' },
  { src: '/insurers/iunigo.png', alt: 'Iunigo' },
  { src: '/insurers/atm-seguros.png', alt: 'ATM Seguros' },
  { src: '/insurers/provincia-seguros.png', alt: 'Provincia Seguros' },
  { src: '/insurers/barbuss.png', alt: 'Barbuss' },
  { src: '/insurers/la-segunda.png', alt: 'La Segunda Seguros' },
  { src: '/insurers/sura.png', alt: 'Sura' },
  { src: '/insurers/rus.png', alt: 'Río Uruguay Seguros' },
]

export default function InsurersCarousel() {
  const track = [...insurers, ...insurers]

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-3 hover:[animation-play-state:paused]">
        {track.map((insurer, i) => (
          <div
            key={insurer.src + i}
            className="flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28"
          >
            <img
              src={insurer.src}
              alt={insurer.alt}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
