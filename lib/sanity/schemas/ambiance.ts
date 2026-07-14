import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ambiance',
  title: 'Ambiance',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titre' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image héroïque',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texte du bouton CTA',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'titre',
      media: 'heroImage',
    },
  },
})
