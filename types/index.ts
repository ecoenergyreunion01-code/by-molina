export interface Ambiance {
  _id: string
  titre: string
  description: string
  slug: string
  heroImage: Image
  ctaLabel?: string
}

export type FamilleProduit = 'canape-classique' | 'canape-angle' | 'fauteuil'
export type TypeTissu = 'velours-cotele' | 'velours-lisse' | 'bouclette' | 'velours-cotele-gros-grain' | 'maille-3d' | 'tissu-texture'

export interface Produit {
  _id: string
  nom: string
  slug: string
  prixBase: number
  largeurCm: number
  profondeurCm: number
  hauteurCm: number
  description: string
  materiaux: string
  couleurs: Couleur[]
  pieds: Pied[]
  images: Image[]
  details: DetailsProduit
  ambiances: string[]
  avis: Avis[]
  noteMoyenne: number
  nbAvis: number
  badge?: BadgeType
  famille?: FamilleProduit
  fabricRef?: string
  fabricType?: TypeTissu
  poidsGrammage?: number
  sousTitre?: string
}

export interface Couleur {
  nom: string
  hex: string
  image?: Image
  disponible: boolean
}

export interface Pied {
  nom: string
  matiere: string
  image?: Image
  disponible: boolean
}

export interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface DetailsProduit {
  couture: Image[]
  accoudoir: Image[]
  pieds: Image[]
}

export type BadgeType = 'tendance' | 'meilleure-note' | 'nouveau' | 'promo'

export interface Avis {
  auteur: string
  note: number
  extrait: string
  date: string
}

export interface ItemPanier {
  produitId: string
  slug: string
  nom: string
  prix: number
  quantite: number
  couleur: string
  pieds: string
  image: string
}
