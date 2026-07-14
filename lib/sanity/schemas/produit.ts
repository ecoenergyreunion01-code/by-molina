import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'produit',
  title: 'Produit',
  type: 'document',
  fields: [
    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nom' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prixBase',
      title: 'Prix de base (€)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'prixPromo',
      title: 'Prix promotionnel (€)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'largeurCm',
      title: 'Largeur (cm)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'profondeurCm',
      title: 'Profondeur (cm)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'hauteurCm',
      title: 'Hauteur (cm)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'materiaux',
      title: 'Matériaux',
      type: 'string',
    }),
    defineField({
      name: 'couleurs',
      title: 'Couleurs disponibles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nom', type: 'string', title: 'Nom' },
            { name: 'hex', type: 'string', title: 'Code hex' },
            { name: 'image', type: 'image', title: 'Photo avec cette couleur' },
            { name: 'disponible', type: 'boolean', title: 'Disponible' },
          ],
          preview: {
            select: { title: 'nom', subtitle: 'hex' },
          },
        },
      ],
    }),
    defineField({
      name: 'pieds',
      title: 'Pieds disponibles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nom', type: 'string', title: 'Nom' },
            { name: 'matiere', type: 'string', title: 'Matière' },
            { name: 'image', type: 'image', title: 'Photo' },
            { name: 'disponible', type: 'boolean', title: 'Disponible' },
          ],
          preview: {
            select: { title: 'nom' },
          },
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Photos du produit',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'details',
      title: 'Détails (micro-photos)',
      type: 'object',
      fields: [
        {
          name: 'couture',
          title: 'Coutures',
          type: 'array',
          of: [{ type: 'image' }],
        },
        {
          name: 'accoudoir',
          title: 'Accoudoir',
          type: 'array',
          of: [{ type: 'image' }],
        },
        {
          name: 'pieds',
          title: 'Pieds',
          type: 'array',
          of: [{ type: 'image' }],
        },
      ],
    }),
    defineField({
      name: 'ambiances',
      title: 'Ambiances associées',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'ambiance' }] }],
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'Tissu tendance', value: 'tendance' },
          { title: 'Meilleure note clients', value: 'meilleure-note' },
          { title: 'Nouveau', value: 'nouveau' },
          { title: 'Promo', value: 'promo' },
        ],
      },
    }),
    defineField({
      name: 'tissuTendance',
      title: 'Tissu tendance',
      type: 'boolean',
    }),
    defineField({
      name: 'famille',
      title: 'Famille de produit',
      type: 'string',
      options: {
        list: [
          { title: 'Canapé classique', value: 'canape-classique' },
          { title: 'Canapé d\'angle', value: 'canape-angle' },
          { title: 'Canapé convertible', value: 'canape-convertible' },
          { title: 'Canapé modulable', value: 'canape-modulable' },
          { title: 'Fauteuil', value: 'fauteuil' },
          { title: 'Banquette / lit', value: 'banquette-lit' },
          { title: 'Pouf / méridienne', value: 'pouf' },
        ],
      },
    }),
    defineField({
      name: 'fabricRef',
      title: 'Référence tissu',
      type: 'string',
      description: 'Ex: K3072, S618, S651, K3239, 8671',
    }),
    defineField({
      name: 'fabricType',
      title: 'Type de revêtement',
      type: 'string',
      options: {
        list: [
          { title: 'Velours côtelé', value: 'velours-cotele' },
          { title: 'Velours lisse', value: 'velours-lisse' },
          { title: 'Bouclette', value: 'bouclette' },
          { title: 'Velours côtelé gros grain', value: 'velours-cotele-gros-grain' },
          { title: 'Maille 3D technique', value: 'maille-3d' },
          { title: 'Tissu texturé', value: 'tissu-texture' },
        ],
      },
    }),
    defineField({
      name: 'origine',
      title: 'Origine / Fabricant',
      type: 'string',
    }),
    defineField({
      name: 'poidsGrammage',
      title: 'Grammage (g/m²)',
      type: 'number',
    }),
    defineField({
      name: 'sousTitre',
      title: 'Sous-titre court',
      type: 'string',
      description: 'Accroche sous le nom du produit',
    }),
  ],
  preview: {
    select: {
      title: 'nom',
      subtitle: 'prixBase',
      media: 'images.0',
    },
  },
})
