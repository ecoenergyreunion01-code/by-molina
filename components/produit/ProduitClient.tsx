'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Swatch } from '@/components/ui/Swatch'
import { Badge } from '@/components/ui/Badge'
import { Etoiles } from '@/components/ui/Etoiles'
import { ImageZoom } from './ImageZoom'
import { GuideTailles } from './GuideTailles'
import { AmbianceGallery } from './AmbianceGallery'
import { imageProduitSafe, altProduit } from '@/lib/images'
import { usePanier } from '@/lib/panier/context'
import { ModelesSimilaires } from './ModelesSimilaires'
import type { Produit } from '@/types'

const Configurateur3D = dynamic(() => import('./Configurateur3D').then((m) => m.Configurateur3D), {
  ssr: false,
  loading: () => <div className="aspect-[4/3] bg-fond-fonce animate-pulse" />,
})

const fabricLabels: Record<string, string> = {
  'velours-cotele': 'Velours côtelé',
  'velours-lisse': 'Velours lisse',
  'bouclette': 'Bouclette',
  'velours-cotele-gros-grain': 'Velours côtelé gros grain',
  'maille-3d': 'Maille 3D',
  'tissu-texture': 'Tissu texturé',
}

function descriptionParties(desc: string) {
  const idx = desc.indexOf('—')
  if (idx === -1) return { accroche: desc, specs: null }
  return { accroche: desc.slice(0, idx).trim(), specs: desc.slice(idx + 1).trim() }
}

function specsList(specs: string): string[] {
  return specs.split('·').map((s) => s.trim()).filter(Boolean)
}

export function ProduitClient({ produit }: { produit: Produit }) {
  const [imageActive, setImageActive] = useState(0)
  const [couleurActive, setCouleurActive] = useState<number | null>(null)
  const [showConfig, setShowConfig] = useState(false)
  const [added, setAdded] = useState(false)

  const couleurs = useMemo(() => produit.couleurs || [], [produit.couleurs])
  const pieds = produit.pieds || []
  const images = useMemo(
    () => [0, 1, 2].map((i) =>
      imageProduitSafe(produit.slug, i, couleurs[i]?.hex || couleurs[0]?.hex)
    ),
    [produit.slug, couleurs]
  )
  const { ajouter } = usePanier()
  const { accroche, specs } = useMemo(
    () => descriptionParties(produit.description || ''),
    [produit.description]
  )
  const fabricLabel = produit.fabricType ? fabricLabels[produit.fabricType] || produit.fabricType : null

  const specsMemo = useMemo(() => specs ? specsList(specs) : [], [specs])

  function handleAjout() {
    ajouter({
      produitId: produit._id,
      slug: produit.slug,
      nom: produit.nom,
      prix: 0,
      couleur: couleurs[couleurActive ?? 0]?.nom || '',
      pieds: '',
      image: images[imageActive],
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  function handleColorHover(index: number) {
    setCouleurActive(index)
    const refCible = couleurs[index]?.image?.asset?._ref
    if (refCible) {
      const imgIndex = produit.images?.findIndex(
        (img) => img.asset._ref === refCible
      )
      if (imgIndex != null && imgIndex >= 0) {
        setImageActive(imgIndex)
      }
    }
  }

  return (
    <>
      <div className="lg:grid lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        {/* Côté gauche - Visuel (60%) */}
        <div className="space-y-4">
          <ImageZoom
            src={images[imageActive] || images[0]}
            alt={altProduit(produit.slug, imageActive) || produit.nom}
            className="w-full"
          />

          {images.length > 1 && [...new Set(images)].length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setImageActive(i)}
                className={`shrink-0 w-20 h-20 border-2 transition-all ${
                  imageActive === i ? 'border-texte' : 'border-transparent hover:border-texte/30'
                }`}
              >
                  <div className="w-full h-full">
                    <Image src={img} alt={altProduit(produit.slug, i) || `Vue ${i + 1}`} width={80} height={80} className="w-full h-full object-contain" loading="lazy" />
                  </div>
              </button>
            ))}
          </div>
          )}
        </div>

        {/* Côté droit - Informations (40%) */}
        <div className="mt-8 lg:mt-0">
          <div className="lg:sticky lg:top-[100px] space-y-6">
            {/* Badge + Titre */}
            <div>
              {produit.badge && (
                <Badge type={produit.badge} className="mb-3" />
              )}
              <h1 className="font-display text-fluid-2xl">{produit.nom}</h1>
              {fabricLabel && (
                <p className="text-sm text-texte-gris mt-1">{fabricLabel}{produit.fabricRef && <> · {produit.fabricRef}</>}</p>
              )}
            </div>

            {/* Description — remontée juste sous le titre */}
            {accroche && (
              <p className="text-texte-secondaire text-fluid-base leading-relaxed">{accroche}</p>
            )}

            {/* Avis éclairs */}
            {produit.nbAvis > 0 && (
              <div className="flex items-center gap-3">
                <Etoiles note={produit.noteMoyenne} />
                <span className="text-xs text-texte-gris">{produit.noteMoyenne.toFixed(1)} · {produit.nbAvis} avis</span>
              </div>
            )}

            {/* Sur devis + invitation showroom */}
            <p className="text-xs text-texte-gris/60 uppercase tracking-wider">Sur devis — contactez-nous</p>
            <p className="text-xs text-texte-gris/60 leading-relaxed">
              Venez découvrir nos modèles et nos coloris en magasin — notre équipe vous accueille sur rendez-vous.
            </p>

            {/* Couleurs */}
            {couleurs.length > 0 && (
              <div>
                <p className="text-sm text-texte-gris mb-3">{couleurs[couleurActive ?? 0]?.nom}</p>
                {couleurs.length === 1 ? (
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border border-[#ddd]" style={{ backgroundColor: couleurs[0].hex }} />
                    <span className="text-sm text-texte-secondaire">{couleurs[0].nom}</span>
                  </div>
                ) : (
                <div className="flex gap-3">
                  {couleurs.map((c, i) => (
                    <Swatch
                      key={c.hex}
                      couleur={c.hex}
                      nom={c.nom}
                      selected={couleurActive === i}
                      disabled={!c.disponible}
                      onClick={() => handleColorHover(i)}
                    />
                  ))}
                </div>
                )}
              </div>
            )}

            {/* Dimensions */}
            <div className="flex gap-6 py-3 border-t border-[#EFEBE9]">
              <div>
                <p className="text-xs text-texte-gris uppercase tracking-wider">L</p>
                <p className="text-sm font-medium">{produit.largeurCm} cm</p>
              </div>
              <div>
                <p className="text-xs text-texte-gris uppercase tracking-wider">P</p>
                <p className="text-sm font-medium">{produit.profondeurCm} cm</p>
              </div>
              <div>
                <p className="text-xs text-texte-gris uppercase tracking-wider">H</p>
                <p className="text-sm font-medium">{produit.hauteurCm} cm</p>
              </div>
            </div>

            {/* Spécifications techniques */}
            {specs && (
              <ul className="space-y-1">
                {specsMemo.map((s, i) => (
                  <li key={i} className="text-xs text-texte-gris flex items-start gap-2">
                    <span className="text-texte-gris/30 mt-0.5">—</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tissu */}
            {produit.fabricType && (
              <div>
                <Link
                  href="/tissus"
                  className="text-xs text-texte-gris underline underline-offset-2 hover:text-texte transition-colors"
                >
                  Voir toutes les nuances de {fabricLabel?.toLowerCase() || 'tissu'}
                </Link>
              </div>
            )}

            {/* Guide des tailles */}
            <GuideTailles largeurCm={produit.largeurCm} />

            {/* Configurateur virtuel */}
            {couleurs.length > 0 && (
              <div>
                <button
                  type="button"
                  onClick={() => setShowConfig(!showConfig)}
                  className="flex items-center gap-2 text-sm tracking-wider uppercase font-medium hover:opacity-70 transition-opacity"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="8" cy="8" r="2.5" />
                    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M2.9 13.1l1.4-1.4M11.7 4.3l1.4-1.4" />
                  </svg>
                  Tapissier virtuel
                </button>
                {showConfig && (
                  <div className="mt-4 animate-fade-in">
                    <Configurateur3D
                      tissus={couleurs}
                      pieds={pieds}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Galerie ambiances */}
            <AmbianceGallery />

            {/* Sticky bouton */}
            <div className="sticky-atc lg:static lg:sticky lg:top-[100px] space-y-3">
              <Button variant="primary" fullWidth onClick={handleAjout} className={added ? 'bg-[#4A7C59]' : ''}>
                {added ? (
                  <>Shortlisté <span aria-hidden>&#9829;</span></>
                ) : (
                  <>Ajouter à ma shortlist</>
                )}
              </Button>
              <Link
                href={`/contact?produit=${encodeURIComponent(produit.nom)}`}
                className="block text-center text-sm text-texte-secondaire underline underline-offset-4 hover:text-texte transition-colors min-h-touch leading-[44px]"
              >
                Demander un devis
              </Link>
            </div>
            </div>
          </div>
        </div>

      <ModelesSimilaires produit={produit} />
    </>
  )
}
