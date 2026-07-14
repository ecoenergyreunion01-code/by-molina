import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Livraison',
  description: 'Livraison offerte. Délais, zones de livraison et suivi de commande By Molina.',
}

export default function LivraisonPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-6">Livraison</h1>
      <div className="space-y-6 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Livraison offerte</h2>
          <p>La livraison est offerte à partir de 99 € d&apos;achat.</p>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Délais</h2>
          <p>Sous 7 à 15 jours ouvrés selon disponibilité.</p>
        </section>
      </div>
    </div>
  )
}
