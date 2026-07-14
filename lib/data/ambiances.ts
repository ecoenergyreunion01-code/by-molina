export interface AmbianceNav {
  slug: string
  nom: string
  desc: string
}

export const ambiancesNav: AmbianceNav[] = [
  { slug: 'cocooning', nom: 'Cocooning', desc: 'Plaid moelleux, coussins généreux' },
  { slug: 'scandinave', nom: 'Design Scandinave', desc: 'Lignes épurées, bois clair' },
  { slug: 'boheme', nom: 'Bohème', desc: 'Textures naturelles, couleurs chaudes' },
  { slug: 'minimaliste', nom: 'Minimaliste', desc: 'Monochrome, formes franches' },
]

export function getAmbianceNom(slug: string | undefined): string | undefined {
  if (!slug) return undefined
  return ambiancesNav.find((a) => a.slug === slug)?.nom
}

export function getAmbianceDesc(slug: string | undefined): string | undefined {
  if (!slug) return undefined
  return ambiancesNav.find((a) => a.slug === slug)?.desc
}
