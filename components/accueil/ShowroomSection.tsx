'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const showroomImages = [
  { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', alt: 'Showroom By Molina — salon cocooning' },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', alt: 'Showroom By Molina — espace lounge' },
  { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', alt: 'Showroom By Molina — ambiance moderne' },
]

export function ShowroomSection() {
  return (
    <section className="bg-fond-fonce py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Galerie */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 overflow-hidden">
              <img
                src={showroomImages[0].src}
                alt={showroomImages[0].alt}
                className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={showroomImages[1].src}
                alt={showroomImages[1].alt}
                className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={showroomImages[2].src}
                alt={showroomImages[2].alt}
                className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
              Showroom
            </p>
            <h2 className="font-display text-fluid-2xl lg:text-fluid-3xl mb-6 text-balance">
              Voyez, touchez, ressentez
            </h2>
            <p className="text-texte-secondaire text-fluid-base leading-relaxed mb-4">
              Rien ne remplace l&apos;expérience du toucher. Venez dans notre showroom
              pour découvrir les tissus, comparer les coloris et vous asseoir
              sur nos modèles.
            </p>
            <p className="text-texte-secondaire text-fluid-base leading-relaxed mb-8">
              Notre équipe vous accueille sur rendez-vous pour vous conseiller
              et vous accompagner dans votre choix.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-texte/5 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                    <circle cx="9" cy="9" r="7" />
                    <path d="M9 5v4l2.5 2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Lun — Sam</p>
                  <p className="text-xs text-texte-gris">9h00 — 18h00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-texte/5 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                    <path d="M15 12.5c0 2.5-2.5 4.5-6 4.5S3 15 3 12.5 5.5 8 9 8s6 2 6 4.5z" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Sur rendez-vous</p>
                  <p className="text-xs text-texte-gris">06 92 03 35 53</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-all rounded-sm"
            >
              Réserver un créneau
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
