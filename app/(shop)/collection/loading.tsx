import { ProductGridSkeleton } from '@/components/ui/Skeleton'

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="space-y-8">
            <div className="animate-pulse space-y-4">
              <div className="h-4 w-16 bg-fond-fonce rounded" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-5 w-32 bg-fond-fonce rounded" />
              ))}
            </div>
          </div>
        </aside>
        <div>
          <div className="h-8 w-48 bg-fond-fonce rounded animate-pulse mb-2" />
          <div className="h-5 w-64 bg-fond-fonce rounded animate-pulse mb-8" />
          <ProductGridSkeleton />
        </div>
      </div>
    </div>
  )
}
