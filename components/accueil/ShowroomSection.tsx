'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AccentBar } from '@/components/ui/AccentBar'

export function ShowroomSection() {
  return (
    <section className="bg-fond-fonce">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 sm:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
            Notre showroom
          </p>
          <h2 className="font-display text-fluid-2xl lg:text-fluid-3xl mb-4 text-balance">
            Voyez, touchez, ressentez
          </h2>
          <AccentBar className="mx-auto mb-4" />
          <p className="text-texte-secondaire text-fluid-base leading-relaxed max-w-lg mx-auto">
            Rien ne remplace l&apos;expérience du toucher. 15 modèles à essayer,
            18 tissus à comparer — venez nous rendre visite à Saint-Leu.
          </p>
        </motion.div>

        {/* Cards info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-3 gap-4 lg:gap-6 mb-10 max-w-3xl mx-auto"
        >
          {/* Adresse */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-fond rounded-sm border border-[#EFEBE9] p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-fond-fonce rounded-full mb-4">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-texte">
                <path d="M9 2C6.2 2 4 4.2 4 7c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" />
                <circle cx="9" cy="7" r="2" />
              </svg>
            </div>
            <p className="text-xs tracking-wider uppercase text-texte-gris font-medium mb-1.5">Adresse</p>
            <p className="font-medium text-sm text-texte leading-relaxed">
              7 Chemin Maurice Courtin<br />97424 Saint-Leu<br /><span className="text-xs text-texte-gris">Également : 33 rue Jean Chatel, 97400 Saint-Denis · 12 rue Victor Le Vigoureux, 97410 Saint-Pierre</span>
            </p>
          </motion.div>

          {/* Horaires */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-fond rounded-sm border border-[#EFEBE9] p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-fond-fonce rounded-full mb-4">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-texte">
                <circle cx="9" cy="9" r="7" />
                <path d="M9 5v4l3 2" />
              </svg>
            </div>
            <p className="text-xs tracking-wider uppercase text-texte-gris font-medium mb-1.5">Horaires</p>
            <p className="font-medium text-sm text-texte">Lun — Sam · 9h — 18h</p>
          </motion.div>

          {/* Téléphone */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-fond rounded-sm border border-[#EFEBE9] p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-fond-fonce rounded-full mb-4">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-texte">
                <path d="M4.5 1.5h3l1 2.5-1.5 1a7 7 0 0 0 3 3l1-1.5 2.5 1v3a1 1 0 0 1-1 1C4 10.5 1.5 8 1.5 2.5a1 1 0 0 1 1-1z" />
              </svg>
            </div>
            <p className="text-xs tracking-wider uppercase text-texte-gris font-medium mb-1.5">Téléphone</p>
            <a href="tel:+262692033553" className="font-medium text-sm text-texte hover:underline underline-offset-2 transition-colors">
              06 92 03 35 53
            </a>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/showroom"
            className="inline-flex min-h-touch items-center justify-center px-8 border border-texte text-texte text-xs tracking-[0.2em] uppercase font-medium hover:bg-texte hover:text-fond transition-all rounded-sm w-full sm:w-auto"
          >
            Découvrir le showroom
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-xs tracking-[0.2em] uppercase font-medium hover:bg-texte/90 transition-all rounded-sm w-full sm:w-auto"
          >
            Réserver une visite
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
