import { getProduitBySlug } from '@/lib/data/produits'
import { getFamilleLabel } from '@/lib/data/familles'
import { ProduitClient } from '@/components/produit/ProduitClient'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { fetchSanity } from '@/lib/sanity/client'
import { produitBySlugQuery } from '@/lib/sanity/queries'
import { imageProduitSafe } from '@/lib/images'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { Produit } from '@/types'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug
  const mock = getProduitBySlug(slug)
  if (!mock) return { title: 'Produit' }
  return {
    title: mock.nom,
    description: mock.description || `Découvrez le ${mock.nom} — By Molina`,
    openGraph: {
      title: mock.nom,
      description: mock.description || `Découvrez le ${mock.nom} — By Molina`,
      images: [{ url: imageProduitSafe(slug, 0) }],
    },
  }
}

export default async function ProduitPage({
  params,
}: {
  params: { slug: string }
}) {

  const slug = params.slug
  const produitSanity: Produit | null = await fetchSanity<Produit>(produitBySlugQuery, { slug })

  const produitData: Produit | null = produitSanity ?? getProduitBySlug(slug) ?? null

  if (!produitData) {
    notFound()
  }

  const familleLabel = produitData.famille ? getFamilleLabel(produitData.famille) : undefined

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Collection', href: '/collection' },
          ...(produitData.famille
            ? [
                {
                  label: familleLabel || 'Modèle',
                  href: `/collection?famille=${produitData.famille}`,
                },
              ]
            : []),
          { label: produitData.nom },
        ]}
      />
      <ProduitClient produit={produitData} />
    </div>
  )
}
