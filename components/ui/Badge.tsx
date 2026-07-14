import { cn } from '@/lib/utils/cn'
import type { BadgeType } from '@/types'

const styles: Record<BadgeType, string> = {
  tendance: 'bg-badge-tendance text-white',
  'meilleure-note': 'bg-badge-note text-white',
  nouveau: 'bg-badge-nouveau text-white',
  promo: 'bg-badge-promo text-white',
}

const labels: Record<BadgeType, string> = {
  tendance: 'Tissu tendance',
  'meilleure-note': 'Meilleure note clients',
  nouveau: 'Nouveau',
  promo: 'Promo',
}

export function Badge({ type, className }: { type: BadgeType; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase',
        styles[type],
        className
      )}
    >
      {labels[type]}
    </span>
  )
}
