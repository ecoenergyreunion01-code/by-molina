'use client'

export default function ProduitError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="font-display text-fluid-2xl mb-3">Produit indisponible</h1>
      <p className="text-texte-secondaire text-fluid-sm mb-8 max-w-md">
        Ce produit n&apos;est pas disponible pour le moment. Veuillez réessayer ou découvrir nos autres modèles.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-sm tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
        >
          Réessayer
        </button>
        <a
          href="/collection"
          className="inline-flex min-h-touch items-center justify-center px-8 border-2 border-texte text-texte text-sm tracking-wider uppercase font-medium hover:bg-texte hover:text-fond transition-all"
        >
          Voir la collection
        </a>
      </div>
    </div>
  )
}
