# Canapé & Vous — Plan de Bataille

## Analyse Produits — By Molina 🛋️

### Gamme identifiée (6 familles)
| Famille | Modèles | Réf. Tissu |
|---------|---------|-----------|
| Canapés classiques 2/3 places | Milo, Sanna, Otto | K3072 (velours côtelé, 15 coloris) |
| Canapés d'angle (L/U/modulables) | Sanna | S651 (bouclette, 420 g/m²) |
| Canapés convertibles (couchage) | Otto | 8671 (maille 3D technique) |
| Canapés modulables | Nova | K3239 (velours côtelé gros grain) |
| Fauteuils & loungers | Luna | Velours lisse (8 coloris) |
| Banquettes BZ / lits gigognes | Kai | S618 (tissu texturé, 4 réf.) |

### Palette couleurs par type de tissu
| Type | Coloris |
|------|---------|
| Velours côtelé (K3072) | Bleu, gris, jaune moutarde, terracotta, rose poudré, vert sapin, beige, camel |
| Velours lisse | Vert forêt, vert olive, terracotta, jaune, blanc cassé |
| Bouclette (S651) | Blanc, crème, beige, noir, gris, taupe |
| Velours côtelé gros grain (K3239) | Noir, gris foncé, vert, crème, bleu marine |

### Fabrication
- **Origine** : Chine — KAQINADE FURNITURE LTD (+86)
- **Sourcing** : Direct usine

---

## Architecture du Projet

```
canape/
├── app/
│   ├── layout.tsx                    # Layout racine (polices, header, footer)
│   ├── (shop)/
│   │   ├── layout.tsx                # Layout boutique
│   │   ├── page.tsx                  # Accueil (Hero + Ambiances + Coup de cœur)
│   │   ├── collection/page.tsx       # Grille collection avec filtres
│   │   ├── produit/[slug]/page.tsx   # Fiche produit détaillée
│   │   └── panier/page.tsx           # Panier
│   └── api/
│       └── checkout/route.ts         # API Stripe checkout
├── components/
│   ├── ui/                           # Composants atomiques
│   │   ├── Button.tsx                # Bouton (primary/secondary/ghost)
│   │   ├── Badge.tsx                 # Badge (tendance/note/nouveau/promo)
│   │   ├── Swatch.tsx                # Rond de couleur
│   │   ├── Modal.tsx                 # Fenêtre modale
│   │   └── Etoiles.tsx              # Étoiles d'avis
│   ├── layout/
│   │   ├── Header.tsx                # Header sticky + menu mobile
│   │   └── Footer.tsx                # Footer 4 colonnes
│   ├── accueil/
│   │   ├── Hero.tsx                  # Hero plein écran
│   │   ├── AmbianceGrid.tsx          # Grille 4 ambiances
│   │   └── CoupDeCoeur.tsx           # 3 produits coup de cœur
│   └── produit/
│       ├── ProductCard.tsx           # Carte produit avec hover
│       ├── ProductGrid.tsx           # Grille asymétrique
│       ├── FiltresSidebar.tsx        # Filtres largeur + couleur
│       ├── ImageZoom.tsx             # Zoom au survol
│       ├── GuideTailles.tsx          # Guide des tailles (modal)
│       ├── Configurateur3D.tsx       # Tapissier virtuel (SVG vectoriel)
│       ├── AmbianceGallery.tsx       # 3 ambiances (moderne/classique/bohème)
│       └── ProduitClient.tsx         # Fiche produit complète
├── lib/
│   ├── sanity/
│   │   ├── client.ts                 # Client Sanity + urlFor
│   │   ├── queries.ts                # Requêtes GROQ
│   │   └── schemas/
│   │       ├── index.ts
│   │       ├── ambiance.ts           # Schema Ambiance
│   │       └── produit.ts            # Schema Produit
│   ├── meilisearch/
│   │   └── client.ts                 # Client Meilisearch + fonctions
│   ├── stripe/
│   │   └── client.ts                 # Client Stripe frontend
│   └── utils/
│       ├── cn.ts                     # clsx + tailwind-merge
│       ├── formatPrice.ts            # Formatage prix €
│       └── sizeGuide.ts             # Guide des tailles
├── styles/
│   └── globals.css                   # Styles Tailwind + custom
├── types/
│   └── index.ts                      # Types TypeScript
├── tailwind.config.ts                # Design tokens
├── next.config.js                    # Next.js config
└── package.json
```

---

## Design System (Tokens)

| Token | Valeur | Usage |
|-------|--------|-------|
| `fond` | `#F7F5F2` | Fond principal |
| `fond-fonce` | `#EFEBE9` | Fond secondaire |
| `fond-clair` | `#FAF9F7` | Surfaces claires |
| `texte` | `#1A1A1A` | Texte principal |
| `texte-secondaire` | `#4A4A4A` | Sous-titres |
| `texte-gris` | `#8A8A8A` | Infos secondaires |
| `texte-barre` | `#999999` | Prix barrés |
| `texte-prix` | `#000000` | Prix en noir gras |
| `badge-tendance` | `#D4A574` | Badge "Tissu tendance" |
| `badge-note` | `#4A7C59` | Badge "Meilleure note" |
| `badge-nouveau` | `#6B8E9E` | Badge "Nouveau" |
| `badge-promo` | `#C17060` | Badge "Promo" |

### Règles d'or
- **Mobile-first** : zones tactiles ≥ 44px de hauteur
- **Pas de fonds blancs** : toujours #F7F5F2 ou dérivés
- **Pas de prix sous les photos** : les cartes produits n'affichent que le nom et les dimensions
- **Prix visibles uniquement sur la fiche produit** : pour ne pas brusquer le visiteur
- **Prix en noir gras** : jamais de rouge pour les promos
- **Prix barrés en gris** `#999999` : jamais rouge

---

## Checklist des Pages

### ✅ Accueil (`/`)
- [x] Hero plein écran avec photo d'ambiance
- [x] Grille 4 ambiances (Cocooning, Scandinave, Bohème, Minimaliste)
- [x] Module "Coup de cœur" avec 3 produits + badges

### ✅ Collection (`/collection`)
- [x] Grille asymétrique (1 grand + 2 petits)
- [x] Hover révélateur (image avant/arrière)
- [x] Filtres prioritaires : Largeur (cm) > Couleur
- [x] Badge sur les produits mis en avant

### ✅ Fiche Produit (`/produit/[slug]`)
- [x] Zoom curseur sur l'image principale
- [x] Vignettes détails (couture, accoudoir, pieds)
- [x] Changement couleur en temps réel au survol
- [x] Guide des tailles (15m² / 20m² / 25m² / 30m²+)
- [x] Galerie "3 ambiances" (moderne, classique, bohème)
- [x] 3 avis éclairs à côté du prix
- [x] Sticky Add-to-Cart
- [x] Prix en noir gras, barré en gris

### ✅ Configurateur 3D (optionnel)
- [x] SVG vectoriel (léger, rapide)
- [x] Changement tissu (couleurs)
- [x] Changement pieds (bois/métal)

### ✅ Panier (`/panier`)
- [x] Panier CRUD avec localStorage
- [x] Page merci (confirmation)
- [x] Checkout Stripe connecté (avec fallback démo)
- [x] Bouton "Commander" avec onClick

---

## Prochaines Étapes

1. ~~**[BLOQUANT] Images produits**~~ → En cours (photos en préparation par le client)
2. ~~**[BLOQUANT] Sanity**~~ → ✅ Schemas exportés, queries enrichies, types mis à jour
3. ~~**[BLOQUANT] Stripe**~~ → ✅ Checkout débloqué (Stripe + fallback démo)
4. ~~**[IMPORTANT] Données mockées**~~ → ✅ Enrichies avec familles, réf. tissus, avis, descriptions
5. ~~**[IMPORTANT] Meilisearch**~~ → ✅ Branché au SearchOverlay (fallback local auto)
6. ~~**[POLISH] Footer**~~ → ✅ Liens réels + réseaux sociaux
7. ~~**[POLISH] .env.example**~~ → ✅ Variables documentées

### Nouveaux items
8. ~~**[EN COURS] Fiches produits modèles**~~ → ✅ 6 fiches enrichies avec les données By Molina
9. ~~**[EN COURS] Arborescence SEO**~~ → ✅ 7 pages statiques créées (/a-propos, /livraison, /savoir-faire, /materiaux, /retours, /garantie, /entretien)
10. ~~**[À FAIRE] Charte graphique**~~ → ✅ Palette By Molina intégrée dans les tokens Tailwind (molina-*)
11. ~~**[À FAIRE] Guide photo**~~ → ✅ Guide créé (`GUIDE_PHOTO.md`) : shot list, specs, nommage, détourage

---

## Arborescence Site

```
/                           → Accueil (Hero + Ambiances + Coup de cœur)
├── collection              → Grille collection avec filtres
│   └── ?ambiance=slug      → Filtre par ambiance
├── produit/[slug]          → Fiche produit détaillée
├── panier                  → Panier + checkout
│   └── merci               → Page de confirmation
├── a-propos                → Notre histoire
├── savoir-faire            → Savoir-faire artisanal
├── materiaux               → Nos matériaux (tissus, bois, etc.)
├── livraison               → Infos livraison
├── retours                 → Politique retours 30 jours
├── garantie                → Garantie produits
└── entretien               → Guide d'entretien
```

---

## Commandes

```bash
npm install        # Installer les dépendances
npm run dev        # Lancer en développement (http://localhost:3000)
npm run build      # Build production
npm run lint       # Vérifier le code
npm run typecheck  # Vérifier TypeScript
```

---

## Contacts Agents

Projet structuré en modules indépendants :
- **Agent UI** : `components/ui/*` — composants atomiques réutilisables
- **Agent Accueil** : `components/accueil/*` — page d'accueil
- **Agent Collection** : `components/produit/ProductCard.tsx`, `ProductGrid.tsx`, `FiltresSidebar.tsx`
- **Agent PDP** : `components/produit/ProduitClient.tsx`, `ImageZoom.tsx`, `GuideTailles.tsx`, `Configurateur3D.tsx`, `AmbianceGallery.tsx`
- **Agent CMS** : `lib/sanity/*` — Sanity schemas + queries
- **Agent Paiement** : `lib/stripe/*` + `app/api/checkout/*`
