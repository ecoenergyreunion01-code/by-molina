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
        <div className="relative bg-fond-fonce shadow-lg overflow-hidden">
          <Image
            src={imgSrc}
            alt={altHero}
            width={1400}
            height={800}
            className="w-full h-auto"
            priority
            sizes="100vw"
            onError={() => setImgSrc(imagesHeroFallback)}
          />

          {/* Gradient overlay — plus fort en bas pour la carte */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 via-40% to-transparent" />

          {/* Carte desktop — bas gauche */}
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 p-8 lg:p-14">
            <div className="bg-black/30 backdrop-blur-sm rounded-sm p-6 lg:p-8 max-w-xl border-l-2 border-white/20">
              <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3 font-medium">
                Showroom à La Réunion
              </p>
              <h1 className="font-display text-fluid-3xl lg:text-fluid-4xl text-white mb-3 text-balance leading-tight">
                L&apos;art de vivre<br />à La Réunion
              </h1>
              <p className="text-white/80 text-fluid-sm mb-6 max-w-md leading-relaxed">
                Canapés et fauteuils d&apos;exception, conçus pour les intérieurs tropicaux.
                Venez découvrir nos modèles dans notre showroom — sur rendez-vous.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-touch items-center justify-center px-8 bg-white text-texte text-xs tracking-wider uppercase font-medium hover:bg-white/90 transition-all rounded-sm"
                >
                  Prendre rendez-vous
                </Link>
                <Link
                  href="/collection"
                  className="inline-flex min-h-touch items-center justify-center px-8 border border-white/60 text-white text-xs tracking-wider uppercase font-medium hover:bg-white/10 transition-all rounded-sm"
                >
                  Voir la collection
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="sm:hidden absolute bottom-0 left-0 right-0 p-5">
            <div className="bg-black/30 backdrop-blur-sm rounded-sm p-5 border-l-2 border-white/20">
              <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-2 font-medium">
                Showroom — La Réunion
              </p>
              <h1 className="font-display text-fluid-2xl text-white mb-2 text-balance leading-tight">
                L&apos;art de vivre à La Réunion
              </h1>
              <p className="text-white/85 text-sm mb-4 leading-relaxed">
                Canapés d&apos;exception pour intérieurs tropicaux. Sur rendez-vous.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-touch items-center justify-center px-6 bg-white text-texte text-xs tracking-wider uppercase font-medium hover:bg-white/90 transition-all rounded-sm"
                >
                  Rendez-vous
                </Link>
                <Link
                  href="/collection"
                  className="inline-flex min-h-touch items-center justify-center px-6 border border-white/60 text-white text-xs tracking-wider uppercase font-medium hover:bg-white/10 transition-all rounded-sm"
                >
                  Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau confiance */}
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
