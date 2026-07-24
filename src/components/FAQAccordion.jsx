import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-brand-silver-light rounded-2xl border border-brand-silver-light bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-brand-ink">{item.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-brand-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm leading-relaxed text-brand-ink/60">{item.a}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
