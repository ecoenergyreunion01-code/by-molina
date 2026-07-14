import type { Metadata } from 'next'
import { Suspense } from 'react'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PanierProvider } from '@/lib/panier/context'
import { PageTransition } from '@/components/layout/PageTransition'

export const metadata: Metadata = {
  title: {
    default: "By Molina | Canapés d'exception",
    template: "%s | By Molina",
  },
  description: 'Des canapés conçus avec soin pour votre intérieur. Qualité, confort et design intemporel.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "By Molina | Canapés d'exception",
    description: 'Des canapés conçus avec soin pour votre intérieur. Qualité, confort et design intemporel.',
    url: 'https://by-molina.fr',
    siteName: 'By Molina',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="--font-display 'Cormorant Garamond', serif --font-body Inter, sans-serif">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-fond min-h-screen antialiased">
        <PanierProvider>
          <Header />
          <main>
            <Suspense fallback={<div className="min-h-[50vh]">{children}</div>}>
              <PageTransition>{children}</PageTransition>
            </Suspense>
          </main>
          <Footer />
        </PanierProvider>
      </body>
    </html>
  )
}
