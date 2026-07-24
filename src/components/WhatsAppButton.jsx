import WhatsAppIcon from './icons/WhatsAppIcon'
import { buildWhatsappLink, whatsappMessages } from '../data/siteConfig'

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="animate-pulse-ring fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
