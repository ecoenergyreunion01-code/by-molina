import { groq } from './groq'

export const ambiancesQuery = groq`*[_type == "ambiance"] {
  _id,
  titre,
  description,
  "slug": slug.current,
  heroImage,
  ctaLabel
}`

export const produitsMiseAvantQuery = groq`*[_type == "produit" && defined(badge)] | order(_createdAt desc) [0...6] {
  _id,
  nom,
  "slug": slug.current,
  prixBase,
  prixPromo,
  largeurCm,
  couleurs[] { nom, hex },
  images[0..1],
  badge,
  noteMoyenne,
  nbAvis,
  famille,
  fabricRef,
  sousTitre
}`

export const produitsCollectionQuery = groq`*[_type == "produit"] | order(_createdAt desc) {
  _id,
  nom,
  "slug": slug.current,
  prixBase,
  prixPromo,
  largeurCm,
  profondeurCm,
  hauteurCm,
  couleurs[] { nom, hex },
  images[0..1],
  badge,
  noteMoyenne,
  nbAvis,
  famille,
  fabricRef,
  sousTitre
}`

export const produitBySlugQuery = groq`*[_type == "produit" && slug.current == $slug][0] {
  _id,
  nom,
  "slug": slug.current,
  prixBase,
  prixPromo,
  largeurCm,
  profondeurCm,
  hauteurCm,
  description,
  materiaux,
  couleurs[] { nom, hex, image, disponible },
  pieds[] { nom, matiere, image, disponible },
  images,
  details { couture, accoudoir, pieds },
  badge,
  tissuTendance,
  noteMoyenne,
  nbAvis,
  avis[] { auteur, note, extrait, date },
  "ambiances": ambiances[]->titre,
  famille,
  fabricRef,
  fabricType,
  origine,
  poidsGrammage,
  sousTitre
}`
