import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { imageProduitSafe, altProduit } from '@/lib/images'
import { getFamilleLabel } from '@/lib/data/familles'
import type { Produit } from '@/types'

export function ProductCard({
  produit,
  size = 'default',
}: {
  produit: Produit
  size?: 'default' | 'large'
}) {
  const couleur = produit.couleurs?.[0]?.hex
  const nbColoris = produit.couleurs?.length ?? 0
  const familleLabel = produit.famille ? getFamilleLabel(produit.famille) : null
  const tissuLabel = produit.fabricRef
    ? `${produit.materiaux} · ${produit.fabricRef}`
    : produit.materiaux

  return (
    <Link
      href={`/produit/${produit.slug}`}
      className="group block active:scale-[0.97] transition-transform duration-200 h-full"
    >
      <div className="bg-fond-fonce mb-3 overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-500 max-h-[480px] flex items-center justify-center">
        <Image
          src={imageProduitSafe(produit.slug, 0, couleur)}
          alt={altProduit(produit.slug, 0) || produit.nom}
          width={800}
          height={600}
          className="w-full h-auto max-h-[480px] object-contain group-hover:scale-[1.02] transition-transform duration-700"
          loading="lazy"
          sizes={size === 'large' ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'}
        />
        {produit.badge && (
          <div className="absolute top-3 left-3">
            <Badge type={produit.badge} />
          </div>
        )}
        {familleLabel && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-[10px] tracking-wider uppercase bg-fond/90 text-texte-secondaire backdrop-blur-sm">
              {produit.famille === 'canape-classique' ? '2-3 pl.' : familleLabel.split(' ').slice(0, 2).join(' ')}
            </span>
          </div>
        )}
        {produit.couleurs && produit.couleurs.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {produit.couleurs.slice(0, 4).map((c) => (
              <span
                key={c.hex}
                className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-sm"
                style={{ backgroundColor: c.hex }}
              />
            ))}
            {nbColoris > 4 && (
              <span className="text-[10px] text-white/90 bg-black/30 px-1.5 rounded-full self-center">
                +{nbColoris - 4}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="space-y-1 px-0.5">
        <h3 className="font-display text-fluid-base group-hover:translate-x-0.5 transition-transform duration-300">
          {produit.nom}
        </h3>
        {produit.sousTitre && (
          <p className="text-xs text-texte-gris line-clamp-1">{produit.sousTitre}</p>
        )}
        <div className="flex items-center justify-between gap-2 text-sm text-texte-gris">
          <span>L {produit.largeurCm} cm</span>
          {tissuLabel && (
            <span className="text-xs truncate">{tissuLabel}</span>
          )}
        </div>
        {nbColoris > 0 && (
          <p className="text-xs text-texte-gris/80">{nbColoris} coloris</p>
        )}
      </div>
    </Link>
  )
}
