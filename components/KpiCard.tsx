import type { LucideIcon } from "lucide-react"

interface KpiCardProps {
  label: string
  value: string | number
  Icon: LucideIcon
  color: string
  subtitle?: string
}

export default function KpiCard({ label, value, Icon, color, subtitle }: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: color + "14" }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <p className="text-sm text-[var(--color-muted)]">{label}</p>
      </div>
      <p
        className="text-2xl font-bold"
        style={{ color, fontFamily: "var(--font-display)" }}
      >
        {value}
      </p>
      {subtitle && (
        <p className="text-xs text-[var(--color-muted)] mt-1">{subtitle}</p>
      )}
    </div>
  )
}
