import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PanierProvider } from '@/lib/panier/context'
import { PageTransition } from '@/components/layout/PageTransition'

export const metadata: Metadata = {
  title: {
    default: "By Molina | Canapés d'exception — Showroom La Réunion",
    template: "%s | By Molina",
  },
  description: 'Canapés et fauteuils d\'exception pour intérieurs tropicaux. Showroom à La Réunion. Sourcing direct usine, 50+ coloris, sur rendez-vous.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "By Molina | Canapés d'exception — Showroom La Réunion",
    description: 'Canapés et fauteuils d\'exception pour intérieurs tropicaux. Showroom à La Réunion, sur rendez-vous.',
    url: 'https://bymolina.re',
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
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-fond min-h-screen antialiased">
        <PanierProvider>
          <Header />
          <main className="pb-16 sm:pb-0">
            <Suspense fallback={
              <div className="min-h-[50vh] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-texte/20 border-t-texte rounded-full animate-spin" />
              </div>
            }>
              <PageTransition>{children}</PageTransition>
            </Suspense>
          </main>
          <Footer />

          {/* CTA flottant mobile */}
          <Link
            href="/contact"
            className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-texte text-fond text-center text-xs tracking-wider uppercase font-medium py-4 hover:opacity-90 transition-opacity"
          >
            Demander un devis
          </Link>
        </PanierProvider>
      </body>
    </html>
  )
}
