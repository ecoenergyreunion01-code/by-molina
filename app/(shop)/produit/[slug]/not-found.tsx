import Link from 'next/link'

export default function ProduitNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-8xl font-display text-fond-fonce mb-4">404</p>
      <h1 className="font-display text-fluid-2xl mb-3">Modèle introuvable</h1>
      <p className="text-texte-secondaire text-fluid-sm mb-8 max-w-md">
        Ce modèle ne fait pas partie de notre collection. Peut-être cherchez-vous un autre canapé ?
      </p>
      <Link
        href="/collection"
        className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-sm tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
      >
        Découvrir la collection
      </Link>
    </div>
  )
}
