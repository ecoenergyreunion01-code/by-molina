import Link from 'next/link'
import { ProductCard } from '@/components/produit/ProductCard'
import { getProduitsSimilaires } from '@/lib/data/produits'
import type { Produit } from '@/types'

export function ModelesSimilaires({ produit }: { produit: Produit }) {
  const similaires = getProduitsSimilaires(produit, 3)
  if (similaires.length === 0) return null

  return (
    <section className="mt-20 pt-12 border-t border-[#EFEBE9]">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-texte-gris mb-2 font-medium">
            Vous aimerez aussi
          </p>
          <h2 className="font-display text-fluid-xl">Modèles similaires</h2>
        </div>
        {produit.famille && (
          <Link
            href={`/collection?famille=${produit.famille}`}
            className="text-xs tracking-wider uppercase text-texte-gris hover:text-texte transition-colors shrink-0"
          >
            Voir la catégorie →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
        {similaires.map((p) => (
          <ProductCard key={p._id} produit={p} />
        ))}
      </div>
    </section>
  )
}
