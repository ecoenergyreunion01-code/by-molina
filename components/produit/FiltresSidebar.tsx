'use client'

import { cn } from '@/lib/utils/cn'
import { famillesProduit } from '@/lib/data/familles'

export const largeursOptions = [
  { label: 'Moins de 180 cm', min: 0, max: 180 },
  { label: '180 - 220 cm', min: 180, max: 220 },
  { label: '220 - 280 cm', min: 220, max: 280 },
  { label: 'Plus de 280 cm', min: 280, max: 999 },
]

export const couleursOptions = [
  { nom: 'Beige & Lin', hex: '#D4C5A9' },
  { nom: 'Gris', hex: '#8A8A8A' },
  { nom: 'Vert', hex: '#5B7B5A' },
  { nom: 'Bleu', hex: '#6B8E9E' },
  { nom: 'Terracotta', hex: '#C17060' },
  { nom: 'Rose', hex: '#D4A5A5' },
  { nom: 'Blanc', hex: '#F2EFE8' },
  { nom: 'Noir & Foncé', hex: '#1A1A1A' },
]

export const fabricTypeOptions = [
  { value: 'velours-cotele', label: 'Velours côtelé' },
  { value: 'velours-lisse', label: 'Velours lisse' },
  { value: 'bouclette', label: 'Bouclette' },
  { value: 'velours-cotele-gros-grain', label: 'Velours côtelé gros grain' },
  { value: 'maille-3d', label: 'Maille 3D technique' },
  { value: 'tissu-texture', label: 'Tissu texturé' },
]

export const famillesOptions = famillesProduit.map((f) => ({
  value: f.value,
  label: f.label,
  labelCourt: f.labelCourt,
  description: f.description,
}))

export const trisOptions = [
  { label: 'Pertinence', value: 'pertinence' },
]

export type FiltresEtat = {
  selectedLargeurs: number[]
  selectedCouleurs: string[]
  selectedFabricTypes: string[]
  selectedFamilles: string[]
  tri: string
}

export function FiltresSidebar({
  etat,
  onLargeurChange,
  onCouleurChange,
  onFabricTypeChange,
  onFamilleChange,
  onTriChange,
}: {
  etat: FiltresEtat
  onLargeurChange: (min: number) => void
  onCouleurChange: (hex: string) => void
  onFabricTypeChange: (value: string) => void
  onFamilleChange: (value: string) => void
  onTriChange: (tri: string) => void
}) {
  return (
    <div className="space-y-8">
      {trisOptions.length > 1 && (
        <div>
          <h3 className="font-display text-sm tracking-wider uppercase mb-4">Tri</h3>
          <select
            value={etat.tri}
            onChange={(e) => onTriChange(e.target.value)}
            className="w-full border border-[#ddd] bg-transparent p-3 text-sm focus:outline-none focus:border-texte focus-visible:ring-1 focus-visible:ring-texte/30"
          >
            {trisOptions.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <h3 className="font-display text-sm tracking-wider uppercase mb-4">
          Type de produit
        </h3>
        <div className="space-y-2">
          {famillesOptions.map((f) => (
            <label
              key={f.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-5 h-5 accent-texte"
                checked={etat.selectedFamilles.includes(f.value)}
                onChange={() => onFamilleChange(f.value)}
              />
              <span className="text-sm text-texte-secondaire group-hover:text-texte transition-colors">
                {f.labelCourt}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm tracking-wider uppercase mb-4">
          Type de tissu
        </h3>
        <div className="space-y-2">
          {fabricTypeOptions.map((f) => (
            <label
              key={f.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-5 h-5 accent-texte"
                checked={etat.selectedFabricTypes.includes(f.value)}
                onChange={() => onFabricTypeChange(f.value)}
              />
              <span className="text-sm text-texte-secondaire group-hover:text-texte transition-colors">
                {f.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm tracking-wider uppercase mb-4">
          Largeur (cm)
        </h3>
        <div className="space-y-2">
          {largeursOptions.map((l) => (
            <label
              key={l.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-5 h-5 accent-texte"
                checked={etat.selectedLargeurs.includes(l.min)}
                onChange={() => onLargeurChange(l.min)}
              />
              <span className="text-sm text-texte-secondaire group-hover:text-texte transition-colors">
                {l.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm tracking-wider uppercase mb-4">
          Couleur
        </h3>
        <div className="flex flex-wrap gap-3">
          {couleursOptions.map((c) => (
            <button
              key={c.hex}
              type="button"
              onClick={() => onCouleurChange(c.hex)}
              className={cn(
                'w-11 h-11 rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-texte/40',
                etat.selectedCouleurs.includes(c.hex)
                  ? 'border-texte scale-110'
                  : 'border-transparent hover:border-texte/30'
              )}
              style={{ backgroundColor: c.hex }}
              title={c.nom}
              aria-label={c.nom}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
