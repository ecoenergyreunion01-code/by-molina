import Link from 'next/link'

export default function MerciPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-badge-note/20 flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h1 className="font-display text-fluid-2xl mb-3">Commande confirmée !</h1>
      <p className="text-texte-secondaire text-fluid-sm mb-8 max-w-md">
        Merci pour votre commande. Vous allez recevoir un e-mail de confirmation avec les détails de livraison.
      </p>
      <Link
        href="/collection"
        className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-sm tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
      >
        Continuer mes achats
      </Link>
    </div>
  )
}
