'use client'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-8xl font-display text-fond-fonce mb-4">Oups</p>
      <h1 className="font-display text-fluid-2xl mb-3">Une erreur est survenue</h1>
      <p className="text-texte-secondaire text-fluid-sm mb-8 max-w-md">
        Désolé, quelque chose s&apos;est mal passé. Notre équipe a été prévenue.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-sm tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
        >
          Réessayer
        </button>
        <a
          href="/"
          className="inline-flex min-h-touch items-center justify-center px-8 border-2 border-texte text-texte text-sm tracking-wider uppercase font-medium hover:bg-texte hover:text-fond transition-all"
        >
          Accueil
        </a>
      </div>
    </div>
  )
}
