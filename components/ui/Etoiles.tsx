import { cn } from '@/lib/utils/cn'

export function Etoiles({ note, className }: { note: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${note} sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className={i <= note ? 'text-amber-700' : 'text-gray-300'}
        >
          <path
            d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.75l-3.52 1.85.67-3.93L2.3 5.64l3.94-.57L8 1.5z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  )
}
