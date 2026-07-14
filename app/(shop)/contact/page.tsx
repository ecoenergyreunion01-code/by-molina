import { ContactForm } from '@/components/contact/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Devis',
  description: 'Demandez un devis personnalisé pour votre canapé By Molina. Réponse sous 24h.',
  openGraph: {
    title: 'Contact & Devis — By Molina',
    description: 'Demandez un devis personnalisé pour votre canapé. Réponse sous 24h.',
  },
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const produit = typeof params.produit === 'string' ? params.produit : undefined

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-2">Demande de devis</h1>
      <p className="text-texte-secondaire text-fluid-base mb-10">
        Vous avez un coup de cœur&nbsp;? Racontez-nous votre projet et nous revenons vers vous sous 24h.
      </p>
      <ContactForm produitInitial={produit} />

      <div className="mt-16 p-6 bg-fond-clair border border-[#EFEBE9] rounded-sm space-y-4">
        <div>
          <p className="text-sm text-texte-gris uppercase tracking-wider mb-2">Contact direct</p>
          <p className="text-texte font-medium">Stéphane Molina</p>
          <p className="text-texte-secondaire text-sm">Directeur</p>
          <a
            href="tel:+33692033553"
            className="inline-block mt-2 text-texte font-medium hover:opacity-70 transition-opacity min-h-touch leading-[44px]"
          >
            06 92 03 35 53
          </a>
        </div>
        <div className="border-t border-[#EFEBE9] pt-4">
          <p className="text-sm text-texte-gris uppercase tracking-wider mb-2">Venir en magasin</p>
          <p className="text-texte-secondaire text-sm leading-relaxed">
            Préférez-vous voir les modèles en vrai&nbsp;? Prenez rendez-vous avec Stéphane pour découvrir
            nos canapés et fauteuils en showroom, toucher les tissus et trouver la couleur qui vous correspond.
          </p>
        </div>
      </div>
    </div>
  )
}
