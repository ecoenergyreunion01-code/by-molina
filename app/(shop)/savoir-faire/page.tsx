import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre savoir-faire',
  description: 'Savoir-faire By Molina. Fabrication soignée, matériaux sélectionnés avec passion.',
}

export default function SavoirFairePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-6">Notre savoir-faire</h1>
      <div className="space-y-8 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Sourcing direct usine</h2>
          <p>
            En partenariat avec KAQINADE FURNITURE LTD, nous sélectionnons chaque produit à la source
            pour garantir qualité et prix sans intermédiaire.
          </p>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Contrôle qualité</h2>
          <p>
            Chaque modèle est soumis à des tests rigoureux : coutures, tissus, structures et confort d&apos;assise.
          </p>
        </section>
      </div>
    </div>
  )
}
