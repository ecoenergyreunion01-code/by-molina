'use client'

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center" style={{ backgroundColor: '#F7F5F2', color: '#1A1A1A' }}>
          <p className="text-8xl mb-4" style={{ fontFamily: 'serif' }}>Oups</p>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'serif', marginBottom: '0.75rem' }}>
            Erreur critique
          </h1>
          <p style={{ color: '#4A4A4A', marginBottom: '2rem', maxWidth: '24rem' }}>
            Une erreur inattendue est survenue. Veuillez recharger la page.
          </p>
          <button
            onClick={reset}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '44px',
              padding: '0 2rem',
              backgroundColor: '#1A1A1A',
              color: '#F7F5F2',
              border: 'none',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Recharger
          </button>
        </div>
      </body>
    </html>
  )
}
