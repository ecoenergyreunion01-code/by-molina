import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-8xl font-display text-fond-fonce mb-4">404</p>
      <h1 className="font-display text-fluid-2xl mb-3">Page introuvable</h1>
      <p className="text-texte-secondaire text-fluid-sm mb-8 max-w-md">
        Désolé, cette page n&apos;existe pas. Peut-être cherchez-vous un canapé qui n&apos;a pas encore été inventé ?
      </p>
      <Link
        href="/"
        className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-sm tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
