import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre histoire',
  description: "Découvrez l'histoire de By Molina, artisan canapier depuis 2010. Savoir-faire français et passion du meuble.",
}

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-6">Notre histoire</h1>
      <div className="space-y-6 text-texte-secondaire text-fluid-base leading-relaxed">
        <p>
          By Molina est né d&apos;une conviction simple : le canapé n&apos;est pas un meuble comme les autres.
          C&apos;est le cœur du salon, le témoin des soirées entre amis, le refuge des dimanches pluvieux.
        </p>
        <p>
          Nous sourçons nos produits directement auprès de KAQINADE FURNITURE LTD, manufacture chinoise
          reconnue pour la qualité de ses finitions et la richesse de ses tissus. En supprimant les
          intermédiaires, nous proposons des canapés d&apos;exception à des prix justes.
        </p>
        <p>
          Chaque modèle est sélectionné avec soin : robustesse des structures, densité des assises,
          richesse des revêtements. Nous voyageons, comparons, testons pour vous offrir ce que
          l&apos;industrie fait de mieux.
        </p>
      </div>
    </div>
  )
}
