import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retours',
  description: 'Retours sous 30 jours. Procédure simple et remboursement rapide By Molina.',
}

export default function RetoursPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-6">Retours</h1>
      <div className="space-y-6 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Politique de retour 30 jours</h2>
          <p>Vous disposez de 30 jours à compter de la réception de votre commande pour retourner un article.</p>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Contact</h2>
          <p>Écrivez-nous à <a href="mailto:retour@bymolina.com" className="underline hover:text-texte transition-colors">retour@bymolina.com</a>. Réponse sous 48h.</p>
        </section>
      </div>
    </div>
  )
}
