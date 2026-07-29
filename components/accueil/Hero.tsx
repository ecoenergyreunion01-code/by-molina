'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { imagesHero, imagesHeroFallback, altHero } from '@/lib/images'

export function Hero() {
  const [imgSrc, setImgSrc] = useState(imagesHero)

  return (
    <section className="bg-fond">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 pt-6 sm:pt-12">
        <div className="grid sm:grid-cols-2 bg-fond-clair shadow-lg overflow-hidden">
          {/* Côté texte */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14 order-2 sm:order-1">
            <p className="text-xs tracking-[0.3em] uppercase text-texte-gris mb-3 font-medium">
              Showroom à La Réunion
            </p>
            <h1 className="font-display text-fluid-3xl lg:text-fluid-4xl text-texte mb-4 text-balance leading-tight">
              L&apos;art de vivre à La Réunion
            </h1>
            <p className="text-texte-secondaire text-fluid-sm mb-6 max-w-md leading-relaxed">
              Canapés et fauteuils d&apos;exception, conçus pour les intérieurs tropicaux.
              Venez découvrir nos modèles dans notre showroom — sur rendez-vous.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-all rounded-sm"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/collection"
                className="inline-flex min-h-touch items-center justify-center px-8 border border-texte text-texte text-xs tracking-wider uppercase font-medium hover:bg-texte hover:text-fond transition-all rounded-sm"
              >
                Voir la collection
              </Link>
            </div>
          </div>

          {/* Côté image */}
          <div className="relative order-1 sm:order-2">
            <Image
              src={imgSrc}
              alt={altHero}
              width={700}
              height={700}
              className="w-full h-full object-cover"
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              onError={() => setImgSrc(imagesHeroFallback)}
            />
          </div>
        </div>
      </div>

      {/* Bandeau confiance simplifié — 2 colonnes */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center py-5 border-t border-[#EFEBE9]">
          <p className="text-xs tracking-wider uppercase text-texte-secondaire font-medium">Livraison La Réunion</p>
          <p className="text-xs tracking-wider uppercase text-texte-secondaire font-medium">Retour 30 jours</p>
          <p className="text-xs tracking-wider uppercase text-texte-secondaire font-medium">Paiement sécurisé</p>
          <p className="text-xs tracking-wider uppercase text-texte-secondaire font-medium">Sur rendez-vous</p>
        </div>
      </div>
    </section>
  )
}
