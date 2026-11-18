import type { Metadata } from 'next'
import { Suspense } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PanierProvider } from '@/lib/panier/context'
import { PageTransition } from '@/components/layout/PageTransition'
import { ShortlistBar } from '@/components/layout/ShortlistBar'
import { MotionConfig } from 'framer-motion'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'By Molina',
  description: "Canapés et fauteuils d'exception pour intérieurs tropicaux. Showroom à Saint-Leu, La Réunion.",
  url: 'https://bymolina.re',
  telephone: '+262692033553',
  email: 'contact@bymolina.re',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '7 E, 7 Chemin Maurice Courtin',
      addressLocality: 'Saint-Leu',
      addressRegion: 'La Réunion',
      postalCode: '97424',
      addressCountry: 'RE',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '33 rue Jean Chatel',
      addressLocality: 'Saint-Denis',
      addressRegion: 'La Réunion',
      postalCode: '97400',
      addressCountry: 'RE',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '12 rue Victor Le Vigoureux',
      addressLocality: 'Saint-Pierre',
      addressRegion: 'La Réunion',
      postalCode: '97410',
      addressCountry: 'RE',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -21.15,
    longitude: 55.23,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  image: 'https://bymolina.re/images/canapes/canape-hero-accueil.png',
}

export const metadata: Metadata = {
  title: {
    default: "Canapés d'exception à La Réunion — Showroom Saint-Leu",
    template: "%s | By Molina",
  },
  description: 'Canapés et fauteuils d\'exception pour intérieurs tropicaux. Showroom à Saint-Leu, La Réunion — sur rendez-vous. Sourcing direct usine, 50+ coloris, sur devis.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Canapés d'exception à La Réunion — Showroom Saint-Leu",
    description: 'Canapés et fauteuils d\'exception pour intérieurs tropicaux. Showroom à Saint-Leu, La Réunion — sur rendez-vous.',
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
        <Script
          id="local-business-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <PanierProvider>
          {/* Top bar showroom */}
          <div className="bg-texte text-fond">
            <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0 px-4 py-2.5 sm:py-2 text-xs tracking-wider">
              <span className="hidden sm:inline text-fond/60">
                Showroom à Saint-Leu — sur rendez-vous
              </span>
              <span className="sm:hidden text-fond/70 text-[11px]">
                Showroom à Saint-Leu
              </span>
              <span className="hidden sm:inline mx-3 text-fond/30">·</span>
              <div className="flex items-center gap-3 sm:gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=7+E+7+Chemin+Maurice+Courtin+97424+Saint-Leu+La+Réunion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-fond hover:text-fond/70 transition-colors min-h-touch"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 11l3-1.2L10.5 3.5a1.2 1.2 0 0 0-1.7-1.7L2.5 8.5z" />
                    <path d="M8 2.5h3v3" />
                  </svg>
                  Itinéraire
                </a>
                <span className="text-fond/30">·</span>
                <a
                  href="tel:+262692033553"
                  className="inline-flex items-center gap-1.5 text-fond hover:text-fond/70 transition-colors min-h-touch"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 1.5h3l1 2.5-1.5 1a7 7 0 0 0 3 3l1-1.5 2.5 1v3a1 1 0 0 1-1 1C4 10.5 1.5 8 1.5 2.5a1 1 0 0 1 1-1z" />
                  </svg>
                  06 92 03 35 53
                </a>
              </div>
            </div>
          </div>
          <Header />
          <main className="pb-16 sm:pb-0">
            <Suspense fallback={
              <div className="min-h-[50vh] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-texte/20 border-t-texte rounded-full animate-spin" />
              </div>
            }>
              <MotionConfig reducedMotion="user">
                <PageTransition>{children}</PageTransition>
              </MotionConfig>
            </Suspense>
          </main>
          <Footer />

          {/* Bandeau shortlist desktop */}
          <ShortlistBar />

          {/* CTA flottant mobile */}
          <Link
            href="/contact"
            className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-texte text-fond text-center text-xs tracking-wider uppercase font-medium py-4 hover:opacity-90 transition-opacity"
          >
            Réserver une visite
          </Link>
        </PanierProvider>
      </body>
    </html>
  )
}
