export default function SectionBadge({ children, tone = 'blue' }) {
  const toneClasses =
    tone === 'warning'
      ? 'bg-amber-50 text-amber-700 border-amber-200'
      : 'bg-brand-blue/5 text-brand-blue border-brand-blue/20'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  )
}
