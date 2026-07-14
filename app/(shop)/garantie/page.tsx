import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Garantie',
  description: 'Garantie By Molina : vos canapés et fauteuils sont couverts.',
}

export default function GarantiePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-6">Garantie</h1>
      <div className="space-y-6 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Garantie 2 ans</h2>
          <p>Tous nos canapés sont couverts par une garantie légale de conformité de 2 ans à compter de la date de livraison.</p>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Procédure</h2>
          <p>Contactez-nous à <a href="mailto:garantie@bymolina.com" className="underline hover:text-texte transition-colors">garantie@bymolina.com</a> avec votre numéro de commande. Réponse sous 48h.</p>
        </section>
      </div>
    </div>
  )
}
