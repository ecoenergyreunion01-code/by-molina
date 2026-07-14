'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { imagesHero, imagesHeroFallback, altHero } from '@/lib/images'

export function Hero() {
  const [imgSrc, setImgSrc] = useState(imagesHero)

  return (
    <section className="bg-fond-fonce">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 pt-6 sm:pt-12">
        <div className="relative bg-fond-clair shadow-lg overflow-hidden">
          <Image
            src={imgSrc}
            alt={altHero}
            width={1400}
            height={900}
            className="w-full h-auto animate-[scale-in_8s_ease-out_forwards]"
            priority
            sizes="100vw"
            onError={() => setImgSrc(imagesHeroFallback)}
          />
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
            <div className="bg-fond/80 backdrop-blur-md inline-block px-5 py-4 sm:px-8 sm:py-6 max-w-xl rounded-sm">
              <p className="text-xs tracking-[0.3em] uppercase text-texte-gris mb-2 font-medium">
                By Molina — Collection 2026
              </p>
              <h1 className="font-display text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl text-texte mb-3 text-balance leading-tight">
                L&apos;art de vivre posé
              </h1>
              <p className="text-texte-secondaire text-sm mb-5 max-w-md">
                Des canapés conçus dans les moindres détails pour faire de votre intérieur un refuge.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/collection"
                  className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-all rounded-sm"
                >
                  Découvrir la collection
                </Link>
                <Link
                  href="/collection?famille=canape-classique"
                  className="inline-flex min-h-touch items-center justify-center px-8 border border-texte text-texte text-xs tracking-wider uppercase font-medium hover:bg-texte hover:text-fond transition-all rounded-sm"
                >
                  Par type
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="block sm:hidden bg-fond/90 px-5 py-4 shadow-sm">
          <p className="text-xs tracking-[0.3em] uppercase text-texte-gris mb-2 font-medium">
            By Molina — Collection 2026
          </p>
          <h1 className="font-display text-fluid-2xl text-texte mb-2 text-balance leading-tight">
            L&apos;art de vivre posé
          </h1>
          <p className="text-texte-secondaire text-sm mb-4">
            Des canapés conçus dans les moindres détails pour faire de votre intérieur un refuge.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/collection"
              className="inline-flex min-h-touch items-center justify-center px-6 bg-texte text-fond text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-all rounded-sm"
            >
              Collection
            </Link>
            <Link
              href="/collection?famille=canape-classique"
              className="inline-flex min-h-touch items-center justify-center px-6 border border-texte text-texte text-xs tracking-wider uppercase font-medium hover:bg-texte hover:text-fond transition-all rounded-sm"
            >
              Par type
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-8">
        <div className="grid grid-cols-3 gap-4 text-center py-5 border-t border-[#EFEBE9]">
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#4A4A4A" strokeWidth="1.2" className="mx-auto mb-1.5">
              <path d="M17 8H3M17 8C17 8 19 10 19 12V17H17V14H3V17H1V12C1 10 3 8 3 8M17 8V3H3V8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-xs tracking-wider uppercase text-texte-secondaire font-medium">Livraison offerte</p>
          </div>
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#4A4A4A" strokeWidth="1.2" className="mx-auto mb-1.5">
              <path d="M4 5L6 7L10 3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="8" width="16" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-xs tracking-wider uppercase text-texte-secondaire font-medium">Retour 30 jours</p>
          </div>
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#4A4A4A" strokeWidth="1.2" className="mx-auto mb-1.5">
              <rect x="3" y="9" width="14" height="9" rx="1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 9V6C6 3.8 7.8 2 10 2C12.2 2 14 3.8 14 6V9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-xs tracking-wider uppercase text-texte-secondaire font-medium">Paiement sécurisé</p>
          </div>
        </div>
      </div>
    </section>
  )
}
