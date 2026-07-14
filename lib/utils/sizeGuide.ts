export type TaillePiece = '15m²' | '20m²' | '25m²' | '30m²+'

export interface RecommandationTaille {
  largeurMax: number
  profondeurMax: number
  conseil: string
}

const guide: Record<TaillePiece, RecommandationTaille> = {
  '15m²': {
    largeurMax: 180,
    profondeurMax: 85,
    conseil: 'Canapé 2 places ou petit canapé d\'angle. Privilégiez un modèle sur pieds pour alléger visuellement.',
  },
  '20m²': {
    largeurMax: 220,
    profondeurMax: 95,
    conseil: 'Canapé 3 places ou petit angle. Un canapé droit avec méridienne peut aussi convenir.',
  },
  '25m²': {
    largeurMax: 280,
    profondeurMax: 100,
    conseil: 'Grand canapé droit ou canapé d\'angle confortable. Vous avez de la place pour un pouf assorti.',
  },
  '30m²+': {
    largeurMax: 350,
    profondeurMax: 110,
    conseil: 'Toutes les configurations sont possibles. Pensez à un ensemble canapé + fauteuil.',
  },
}

export function getRecommandation(surface: TaillePiece): RecommandationTaille {
  return guide[surface]
}

export function surfaceSuggeree(largeurCm: number): TaillePiece {
  if (largeurCm <= 180) return '15m²'
  if (largeurCm <= 220) return '20m²'
  if (largeurCm <= 280) return '25m²'
  return '30m²+'
}
