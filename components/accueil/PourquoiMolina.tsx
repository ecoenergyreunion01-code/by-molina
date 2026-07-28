'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const avantages = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14h20M4 14c0 5.5 4.5 10 10 10s10-4.5 10-10M4 14c0-5.5 4.5-10 10-10s10 4.5 10 10" />
        <circle cx="14" cy="14" r="3" />
      </svg>
    ),
    titre: 'Sourcing direct usine',
    description: 'Pas d\'intermédiaire. Nous importons directement KAQINADE FURNITURE LTD, pour un rapport qualité-prix imbattable.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <path d="M3 10h22M10 3v22" />
      </svg>
    ),
    titre: 'Personnalisation totale',
    description: 'Choisissez parmi 50+ coloris de tissus. Velours côtelé, bouclette, maille 3D — le vôtre, sur mesure.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3v22M3 14h22" />
        <path d="M6 6l16 16M22 6L6 22" opacity="0.3" />
        <circle cx="14" cy="14" r="11" />
      </svg>
    ),
    titre: 'Livraison à La Réunion',
    description: 'Livraison offerte sur l\'île. Installation et conseils inclus pour les professionnels.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3l3 6h7l-5.5 4.5L20 21l-6-4-6 4 1.5-7.5L4 9h7z" />
      </svg>
    ),
    titre: 'Tarifs professionnels',
    description: 'Conditions spéciales pour les architectes, décorateurs et aménageurs. Devis gratuit sous 24h.',
  },
]

export function PourquoiMolina() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Colonne gauche — texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
              Pour les professionnels
            </p>
            <h2 className="font-display text-fluid-2xl lg:text-fluid-3xl mb-6 text-balance">
              Votre partenaire canapé<br />à La Réunion
            </h2>
            <p className="text-texte-secondaire text-fluid-base leading-relaxed mb-8">
              Architectes d&apos;intérieur, decorators, promoteurs — By Molina vous accompagne
              dans vos projets avec des canapés d&apos;exception, des tarifs dédiés et un
              service personnalisé.
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-all rounded-sm"
            >
              Demander un devis pro
            </Link>
          </motion.div>

          {/* Colonne droite — avantages */}
          <div className="grid sm:grid-cols-2 gap-8">
            {avantages.map((a, i) => (
              <motion.div
                key={a.titre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="text-texte mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {a.icon}
                </div>
                <h3 className="font-display text-lg mb-2">{a.titre}</h3>
                <p className="text-sm text-texte-secondaire leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
