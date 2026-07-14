'use client'

import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { getRecommandation, surfaceSuggeree, type TaillePiece } from '@/lib/utils/sizeGuide'

export function GuideTailles({ largeurCm }: { largeurCm: number }) {
  const [open, setOpen] = useState(false)
  const [surface, setSurface] = useState<TaillePiece>(surfaceSuggeree(largeurCm))

  const reco = getRecommandation(surface)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-texte-gris underline underline-offset-2 hover:text-texte transition-colors"
      >
        Convient pour pièce de 15m² ou 25m² ?
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Guide des tailles">
        <div className="space-y-6">
          <p className="text-sm text-texte-secondaire">
            Sélectionnez la surface de votre pièce pour savoir quel canapé convient.
          </p>

          <div className="flex gap-2">
            {(['15m²', '20m²', '25m²', '30m²+'] as TaillePiece[]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSurface(s)}
                className={`flex-1 min-h-touch flex items-center justify-center text-sm font-medium border transition-all ${
                  surface === s
                    ? 'bg-texte text-fond border-texte'
                    : 'border-[#ddd] text-texte-secondaire hover:border-texte'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="p-4 bg-fond-fonce">
            <p className="text-sm text-texte-secondaire mb-1">
              Largeur max recommandée : <strong className="text-texte">{reco.largeurMax} cm</strong>
            </p>
            <p className="text-sm text-texte-secondaire mb-3">
              Profondeur max recommandée : <strong className="text-texte">{reco.profondeurMax} cm</strong>
            </p>
            <p className="text-sm text-texte">
              {reco.conseil}
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 border border-[#EFEBE9]">
            <div className="w-12 h-12 bg-fond-fonce flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M7 20v2M17 20v2M3 11h18" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Ce canapé : {largeurCm} cm</p>
              <p className="text-xs text-texte-gris">
                {largeurCm <= reco.largeurMax ? '✅ Compatible avec cette pièce' : '⚠️ Peut être grand pour cette pièce'}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
