import { cn } from '@/lib/utils/cn'

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('animate-pulse bg-fond-fonce rounded', className)} />
}

export function ProductCardSkeleton() {
  return (
    <div className="block">
      <Skeleton className="aspect-[3/4] mb-3" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
      <div className="row-span-2">
        <ProductCardSkeleton />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function ProduitSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <Skeleton className="aspect-[4/5] w-full" />
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-20 h-20 shrink-0" />
            ))}
          </div>
        </div>
        <div className="mt-8 lg:mt-0 space-y-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-6 w-24" />
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-10 h-10 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  )
}
