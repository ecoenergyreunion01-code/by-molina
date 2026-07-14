import type { FamilleProduit } from '@/types'

export interface FamilleInfo {
  value: FamilleProduit
  label: string
  labelCourt: string
  description: string
}

export const famillesProduit: FamilleInfo[] = [
  {
    value: 'canape-classique',
    label: 'Bloc modulaire',
    labelCourt: 'Bloc',
    description: 'Silhouette basse et généreuse, velours côtelé épais, style contemporain',
  },
  {
    value: 'canape-angle',
    label: 'Angle chaise longue',
    labelCourt: 'Angle',
    description: 'Dossier à coussins ronds, accoudoir arrondi, cosy et intemporel',
  },
  {
    value: 'fauteuil',
    label: 'Fauteuil',
    labelCourt: 'Fauteuil',
    description: 'Complément assorti du canapé, idéal en coin lecture',
  },
]

export function getFamilleLabel(famille: FamilleProduit | undefined): string {
  if (!famille) return ''
  return famillesProduit.find((f) => f.value === famille)?.label ?? famille
}

export function getFamilleInfo(famille: FamilleProduit): FamilleInfo | undefined {
  return famillesProduit.find((f) => f.value === famille)
}
