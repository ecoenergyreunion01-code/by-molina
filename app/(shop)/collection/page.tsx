import { CollectionClient } from '@/components/produit/CollectionClient'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { getFamilleLabel } from '@/lib/data/familles'
import { getAmbianceNom } from '@/lib/data/ambiances'
import type { FamilleProduit } from '@/types'
import type { Metadata } from 'next'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<Metadata> {
  const params = await searchParams
  const ambiance = typeof params.ambiance === 'string' ? params.ambiance : undefined
  const famille = typeof params.famille === 'string' ? params.famille : undefined

  let titre = 'Collection'
  if (famille) titre = getFamilleLabel(famille as FamilleProduit) || 'Collection'
  else if (ambiance) titre = `Ambiance ${getAmbianceNom(ambiance) || ambiance}`

  return {
    title: titre,
    description: `Découvrez notre sélection de canapés et fauteuils By Molina${famille ? ` — ${titre}` : ''}${ambiance ? ` dans l'ambiance ${getAmbianceNom(ambiance)}` : ''}.`,
    openGraph: {
      title: `${titre} | By Molina`,
      description: `Canapés et fauteuils d'exception — qualité artisanale et design intemporel.`,
    },
  }
}

export default async function CollectionPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const ambiance = typeof params.ambiance === 'string' ? params.ambiance : undefined
  const famille = typeof params.famille === 'string' ? params.famille : undefined

  const breadcrumbItems: { label: string; href?: string }[] = []
  if (famille || ambiance) {
    breadcrumbItems.push({ label: 'Collection', href: '/collection' })
    if (famille) {
      breadcrumbItems.push({ label: getFamilleLabel(famille as FamilleProduit) || famille })
    } else if (ambiance) {
      breadcrumbItems.push({ label: `Ambiance ${getAmbianceNom(ambiance) || ambiance}` })
    }
  } else {
    breadcrumbItems.push({ label: 'Collection' })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <Breadcrumbs items={breadcrumbItems} />
      <CollectionClient ambiance={ambiance} famille={famille} />
    </div>
  )
}
