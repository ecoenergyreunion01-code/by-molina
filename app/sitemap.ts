import { tousLesProduits } from '@/lib/data/produits'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://by-molina.re'

  const pages = [
    '', '/collection', '/contact', '/a-propos', '/savoir-faire', '/materiaux',
    '/tissus', '/livraison', '/retours', '/garantie', '/entretien',
    '/panier', '/mentions-legales', '/cgv', '/confidentialite',
  ]

  const staticEntries = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.7,
  }))

  const productEntries = tousLesProduits.map((p) => ({
    url: `${baseUrl}/produit/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...productEntries]
}
