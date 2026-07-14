import { placeholderAmbiance, placeholderHero, placeholderProduit } from '@/lib/placeholders'

const canapes = (f: string) => `/images/canapes/${f}`
const fauteuils = (f: string) => `/images/fauteuils/${f}`

type VuesProduit = { face: string; troisQuarts: string; dos: string }

function vues(face: string, troisQuarts: string, dos: string): VuesProduit {
  return { face, troisQuarts, dos }
}

function uneVue(path: string): VuesProduit {
  return { face: path, troisQuarts: path, dos: path }
}

const imagesProduits: Record<string, VuesProduit> = {
  // Groupe 1 — Bloc modulaire
  'bloc-modulaire-terracotta': vues(
    canapes('canape-terracotta-01.jpg'),
    canapes('canape-vert-kaki-01.jpg'),
    canapes('canape-terracotta-01.jpg'),
  ),
  'bloc-modulaire-gris': uneVue(canapes('canape-gris-01.jpg')),
  'bloc-modulaire-kaki': uneVue(canapes('canape-kaki-01.jpg')),

  // Groupe 2 — Angle chaise longue
  'angle-chaise-longue-anthracite': vues(
    canapes('canape-anthracite-01.jpg'),
    canapes('canape-anthracite-02.jpg'),
    canapes('canape-studio-fond-blanc-01.jpg'),
  ),
  'angle-chaise-longue-gris-bleute': uneVue(canapes('canape-gris-bleute-01.jpg')),
  'angle-chaise-longue-taupe': uneVue(canapes('canape-taupe-01.jpg')),
  'angle-chaise-longue-marron': uneVue(canapes('canape-marron-01.jpg')),
  'angle-chaise-longue-beige': uneVue(canapes('canape-beige-02.jpg')),
  'angle-chaise-longue-beige-rose': uneVue(canapes('canape-beige-rose-01.jpg')),
  'angle-chaise-longue-terracotta': uneVue(canapes('canape-terracotta-02-alt.jpg')),
  'angle-chaise-longue-moutarde': uneVue(canapes('canape-moutarde-01.jpg')),
  'angle-chaise-longue-vert-fonce': uneVue(canapes('canape-vert-fonce-01.jpg')),
  // Indépendant
  'canape-blanc': uneVue(canapes('canape-blanc-01.jpeg')),
  // Fauteuils
  'fauteuil-moutarde': uneVue(fauteuils('fauteuil-jaune-moutarde-01.jpg')),
  'fauteuil-taupe': uneVue(fauteuils('fauteuil-taupe-01.jpg')),
  'fauteuil-vert': uneVue(fauteuils('fauteuil-showroom-vue-large-01.jpg')),
}

const altParFichier: Record<string, string> = {
  // Groupe 1
  [canapes('canape-terracotta-01.jpg')]: 'Canapé modulaire bloc coloris terracotta, dossier bas, velours côtelé épais',
  [canapes('canape-vert-kaki-01.jpg')]: 'Canapé modulaire bloc coloris vert kaki, variante secondaire du terracotta',
  [canapes('canape-gris-01.jpg')]: "Canapé modulaire bloc coloris gris, dossier bas, salon d'angle cosy",
  [canapes('canape-kaki-01.jpg')]: 'Canapé modulaire bloc coloris kaki, assise basse, style contemporain',
  // Groupe 2
  [canapes('canape-anthracite-01.jpg')]: "Canapé d'angle chaise longue anthracite, vue showroom avec bibliothèque",
  [canapes('canape-anthracite-02.jpg')]: "Canapé d'angle chaise longue anthracite, vue secondaire showroom",
  [canapes('canape-studio-fond-blanc-01.jpg')]: "Canapé d'angle chaise longue coloris anthracite, dossier à coussins ronds sur fond blanc",
  [canapes('canape-gris-bleute-01.jpg')]: "Canapé d'angle chaise longue coloris gris-bleuté, accoudoir arrondi",
  [canapes('canape-taupe-01.jpg')]: "Canapé d'angle chaise longue coloris taupe, style cocooning",
  [canapes('canape-marron-01.jpg')]: "Canapé d'angle chaise longue coloris marron, coussins de dossier assortis",
  [canapes('canape-beige-02.jpg')]: "Canapé d'angle chaise longue coloris beige, nuancier de tissu",
  [canapes('canape-beige-rose-01.jpg')]: "Canapé d'angle chaise longue coloris beige rosé, échantillons de tissus",
  [canapes('canape-terracotta-02-alt.jpg')]: "Canapé d'angle chaise longue coloris terracotta, variante en showroom",
  [canapes('canape-moutarde-01.jpg')]: "Canapé d'angle chaise longue coloris moutarde, coussins ronds",
  [canapes('canape-vert-fonce-01.jpg')]: "Canapé d'angle chaise longue coloris vert foncé, ligne cosy",
  // Indépendant
  [canapes('canape-blanc-01.jpeg')]: 'Canapé 2 places coloris blanc, silhouette incurvée, style organique',
  // Fauteuils
  [fauteuils('fauteuil-jaune-moutarde-01.jpg')]: 'Fauteuil lounge coloris moutarde, velours lisse, assise enveloppante',
  [fauteuils('fauteuil-taupe-01.jpg')]: 'Fauteuil assorti coloris taupe, pouf assorti, silhouette arrondie',
  [fauteuils('fauteuil-showroom-vue-large-01.jpg')]: 'Fauteuil rond coloris vert, capitonnage arrondi, showroom',
}

export function imageProduit(slug: string, index: number = 0): string | undefined {
  const source = imagesProduits[slug]
  if (!source) return undefined
  return [source.face, source.troisQuarts, source.dos][index] || source.face
}

export function imageProduitSafe(slug: string, index: number = 0, couleur?: string): string {
  return imageProduit(slug, index) ?? placeholderProduit(couleur)
}

export function altProduit(slug: string, index: number = 0): string | undefined {
  const path = imageProduit(slug, index)
  if (!path) return undefined
  return altParFichier[path]
}

export const imagesHero = canapes('canape-hero-accueil.png')
export const imagesHeroFallback = placeholderHero()
export const altHero = "Canapé modulaire By Molina — collection canapés d'exception"

export const imagesAmbiance: Record<string, string> = {
  cocooning: canapes('canape-taupe-01.jpg'),
  scandinave: canapes('canape-terracotta-01.jpg'),
  boheme: canapes('canape-studio-fond-blanc-01.jpg'),
  minimaliste: canapes('canape-gris-01.jpg'),
}

export function imageAmbianceSafe(slug: string): string {
  return imagesAmbiance[slug] ?? placeholderAmbiance(slug)
}

export const ambiancesAlt: Record<string, string> = {
  cocooning: "Ambiance cocooning — canapé d'angle taupe aux lignes douces",
  scandinave: 'Ambiance scandinave — canapé bloc terracotta au design épuré',
  boheme: "Ambiance bohème — canapé d'angle anthracite, textures naturelles",
  minimaliste: "Ambiance minimaliste — canapé bloc gris au style contemporain",
}

export const imagesFamille: Record<string, string> = {
  'canape-classique': canapes('canape-terracotta-01.jpg'),
  'canape-angle': canapes('canape-studio-fond-blanc-01.jpg'),
  fauteuil: fauteuils('fauteuil-jaune-moutarde-01.jpg'),
}

export function imageFamilleSafe(famille: string): string {
  return imagesFamille[famille] ?? placeholderProduit('#D4C5A9')
}
