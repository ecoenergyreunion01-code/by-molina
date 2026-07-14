import type { FamilleProduit, Produit } from '@/types'

export const tousLesProduits: Produit[] = [
  // ── Groupe 1 : Bloc modulaire (velours côtelé épais, dossier bas) ──
  ...[
    { slug: 'bloc-modulaire-terracotta', nom: 'Canapé — Terracotta', hex: '#C17060', couleurNom: 'Terracotta', secondaire: 'Vert kaki', badge: 'nouveau' as const },
    { slug: 'bloc-modulaire-gris', nom: 'Canapé — Gris', hex: '#8A8A8A', couleurNom: 'Gris' },
    { slug: 'bloc-modulaire-kaki', nom: 'Canapé — Kaki', hex: '#A09060', couleurNom: 'Kaki' },
  ].map(({ slug, nom, hex, couleurNom, secondaire, badge }: { slug: string; nom: string; hex: string; couleurNom: string; secondaire?: string; badge?: 'tendance' | 'meilleure-note' | 'nouveau' | 'promo' }) => ({
    _id: slug, nom, slug,
    badge,
    sousTitre: 'Velours côtelé K3072',
    prixBase: 0, largeurCm: 200, profondeurCm: 95, hauteurCm: 80,
    images: [],
    couleurs: [
      { nom: couleurNom, hex, disponible: true },
      ...(secondaire ? [{ nom: secondaire, hex: '#6B7050', disponible: true }] : []),
      { nom: 'Terracotta', hex: '#C17060', disponible: couleurNom !== 'Terracotta' },
      { nom: 'Gris', hex: '#8A8A8A', disponible: couleurNom !== 'Gris' },
      { nom: 'Kaki', hex: '#A09060', disponible: couleurNom !== 'Kaki' },
    ],
    pieds: [], details: { couture: [], accoudoir: [], pieds: [] },
    noteMoyenne: 0, nbAvis: 0,
    description: `Une silhouette basse et généreuse, pensée pour composer un salon à sa façon. Ses modules carrés en velours côtelé s'assemblent selon l'espace disponible, pour un confort décontracté au quotidien. Disponible en plusieurs coloris — terracotta, gris, kaki, beige — pour s'adapter à toutes les ambiances. — Tissu : velours côtelé K3072 · 15 coloris · L 200 cm`,
    materiaux: 'Velours côtelé', avis: [],
    ambiances: ['Minimaliste', 'Design Scandinave'],
    famille: 'canape-classique' as FamilleProduit,
    fabricType: 'velours-cotele' as const,
    fabricRef: 'K3072',
  })),

  // ── Groupe 2 : Angle chaise longue (coussins ronds, accoudoir arrondi) ──
  ...[
    { slug: 'angle-chaise-longue-anthracite', nom: "Canapé d'angle — Anthracite", hex: '#4A4A4A', couleurNom: 'Anthracite', badge: 'meilleure-note' as const, noteMoyenne: 4.7, nbAvis: 3, avis: [
      { auteur: 'Marie L.', note: 5, extrait: 'Magnifique canapé, très confortable et la couleur anthracite est superbe.', date: '2025-12-10' },
      { auteur: 'Thomas R.', note: 5, extrait: 'Qualité au rendez-vous, livraison soignée. Je recommande.', date: '2025-11-22' },
      { auteur: 'Sophie M.', note: 4, extrait: 'Très beau rendu dans mon salon, assise confortable.', date: '2025-10-15' },
    ] },
    { slug: 'angle-chaise-longue-gris-bleute', nom: "Canapé d'angle — Gris-bleuté", hex: '#8A9BA8', couleurNom: 'Gris-bleuté' },
    { slug: 'angle-chaise-longue-taupe', nom: "Canapé d'angle — Taupe", hex: '#A09080', couleurNom: 'Taupe' },
    { slug: 'angle-chaise-longue-marron', nom: "Canapé d'angle — Marron", hex: '#8B6F5C', couleurNom: 'Marron' },
    { slug: 'angle-chaise-longue-beige', nom: "Canapé d'angle — Beige", hex: '#E8DCD0', couleurNom: 'Beige' },
    { slug: 'angle-chaise-longue-beige-rose', nom: "Canapé d'angle — Beige rosé", hex: '#DFC8B8', couleurNom: 'Beige rosé' },
    { slug: 'angle-chaise-longue-terracotta', nom: "Canapé d'angle — Terracotta", hex: '#C17060', couleurNom: 'Terracotta' },
    { slug: 'angle-chaise-longue-moutarde', nom: "Canapé d'angle — Moutarde", hex: '#D4A574', couleurNom: 'Moutarde', badge: 'tendance' as const },
    { slug: 'angle-chaise-longue-vert-fonce', nom: "Canapé d'angle — Vert foncé", hex: '#2D5A3E', couleurNom: 'Vert foncé' },
  ].map(({ slug, nom, hex, couleurNom, badge, noteMoyenne, nbAvis, avis }) => ({
    _id: slug, nom, slug,
    sousTitre: 'Velours côtelé K3072',
    badge,
    prixBase: 0, largeurCm: 240, profondeurCm: 100, hauteurCm: 85,
    images: [],
    couleurs: [
      { nom: couleurNom, hex, disponible: true },
      { nom: 'Anthracite', hex: '#4A4A4A', disponible: couleurNom !== 'Anthracite' },
      { nom: 'Gris-bleuté', hex: '#8A9BA8', disponible: couleurNom !== 'Gris-bleuté' },
      { nom: 'Taupe', hex: '#A09080', disponible: couleurNom !== 'Taupe' },
      { nom: 'Marron', hex: '#8B6F5C', disponible: couleurNom !== 'Marron' },
      { nom: 'Beige', hex: '#E8DCD0', disponible: couleurNom !== 'Beige' },
      { nom: 'Beige rosé', hex: '#DFC8B8', disponible: couleurNom !== 'Beige rosé' },
      { nom: 'Terracotta', hex: '#C17060', disponible: couleurNom !== 'Terracotta' },
      { nom: 'Moutarde', hex: '#D4A574', disponible: couleurNom !== 'Moutarde' },
      { nom: 'Vert foncé', hex: '#2D5A3E', disponible: couleurNom !== 'Vert foncé' },
    ],
    pieds: [], details: { couture: [], accoudoir: [], pieds: [] },
    noteMoyenne: noteMoyenne ?? 0, nbAvis: nbAvis ?? 0,
    description: `Le confort d'un vrai salon cocooning : dossier généreux à coussins ronds, chaise longue accueillante, accoudoir arrondi. Un modèle intemporel qui s'installe aussi bien dans un salon classique que contemporain. Disponible en 9 coloris — de l'anthracite profond au beige rosé, en passant par le terracotta et le vert foncé — pour trouver la teinte qui vous ressemble. — Tissu : velours côtelé K3072 · 15 coloris · L 240 cm`,
    materiaux: 'Velours côtelé', avis: avis ?? [],
    ambiances: ['Cocooning', 'Bohème'],
    famille: 'canape-angle' as FamilleProduit,
    fabricType: 'velours-cotele' as const,
    fabricRef: 'K3072',
  })),

  // ── Canapé indépendant (silhouette incurvée, 2 places) ──
  {
    _id: 'canape-blanc', nom: 'Canapé 2 places — Blanc', slug: 'canape-blanc',
    sousTitre: 'Velours côtelé K3072',
    prixBase: 0, largeurCm: 150, profondeurCm: 85, hauteurCm: 75,
    images: [],
    couleurs: [
      { nom: 'Blanc', hex: '#F5F0E8', disponible: true },
      { nom: 'Gris', hex: '#8A8A8A', disponible: true },
      { nom: 'Jaune moutarde', hex: '#D4A574', disponible: true },
    ],
    pieds: [], details: { couture: [], accoudoir: [], pieds: [] },
    noteMoyenne: 0, nbAvis: 0,
    description: "Tout en rondeurs et en discrétion, ce canapé 2 places épouse vos soirées. Son assise profonde invite à l'abandon, un bon livre à la main. Idéal pour les petits espaces ou pour composer un salon modulable. — Tissu : velours côtelé K3072 · 15 coloris · L 150 cm",
    materiaux: 'Velours côtelé', avis: [],
    ambiances: ['Cocooning', 'Minimaliste'],
    famille: 'canape-classique' as FamilleProduit,
    fabricType: 'velours-cotele' as const,
    fabricRef: 'K3072',
  },

  // ── Fauteuils ──
  ...[
    { slug: 'fauteuil-moutarde', nom: 'Fauteuil — Moutarde', hex: '#D4A574', couleurNom: 'Moutarde' },
    { slug: 'fauteuil-taupe', nom: 'Fauteuil — Taupe', hex: '#A09080', couleurNom: 'Taupe' },
    { slug: 'fauteuil-vert', nom: 'Fauteuil — Vert', hex: '#8BA888', couleurNom: 'Vert' },
  ].map(({ slug, nom, hex, couleurNom, secondaire }: { slug: string; nom: string; hex: string; couleurNom: string; secondaire?: string }) => ({
    _id: slug, nom, slug,
    sousTitre: 'Velours lisse',
    prixBase: 0, largeurCm: 90, profondeurCm: 85, hauteurCm: 80,
    images: [],
    couleurs: [
      { nom: couleurNom, hex, disponible: true },
      ...(secondaire ? [{ nom: secondaire, hex: '#6B7050', disponible: true }] : []),
      { nom: 'Moutarde', hex: '#D4A574', disponible: couleurNom !== 'Moutarde' },
      { nom: 'Taupe', hex: '#A09080', disponible: couleurNom !== 'Taupe' },
      { nom: 'Vert', hex: '#8BA888', disponible: couleurNom !== 'Vert' },
    ],
    pieds: [], details: { couture: [], accoudoir: [], pieds: [] },
    noteMoyenne: 0, nbAvis: 0,
    description: "Le complément parfait du canapé d'angle, dans la même ligne et le même tissu. Idéal en appoint ou pour un coin lecture. Disponible dans les mêmes coloris que le canapé assorti. — Tissu : velours lisse · 8 coloris",
    materiaux: 'Velours lisse', avis: [],
    ambiances: ['Bohème', 'Cocooning'],
    famille: 'fauteuil' as FamilleProduit,
    fabricType: 'velours-lisse' as const,
  })),
]

export function getProduitBySlug(slug: string): Produit | undefined {
  return tousLesProduits.find((p) => p.slug === slug)
}

export function getProduitsByFamille(famille: FamilleProduit): Produit[] {
  return tousLesProduits.filter((p) => p.famille === famille)
}

export function getProduitsByAmbiance(ambianceSlug: string): Produit[] {
  const slug = ambianceSlug.toLowerCase()
  return tousLesProduits.filter((p) =>
    p.ambiances?.some((a) => a.toLowerCase().includes(slug))
  )
}

export function getProduitsSimilaires(produit: Produit, limit = 3): Produit[] {
  return tousLesProduits
    .filter(
      (p) =>
        p.slug !== produit.slug &&
        (p.famille === produit.famille || p.fabricRef === produit.fabricRef)
    )
    .slice(0, limit)
}

export function getCoupsDeCoeur(): Produit[] {
  const avecBadge = tousLesProduits.filter((p) => p.badge)
  return avecBadge.length >= 3 ? avecBadge.slice(0, 3) : tousLesProduits.slice(0, 3)
}
