'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function PourquoiMolina() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
            Pourquoi By Molina
          </p>
          <h2 className="font-display text-fluid-2xl lg:text-fluid-3xl mb-6 text-balance">
            Le canapé des professionnels,<br />direct usine à La Réunion
          </h2>
          <p className="text-texte-secondaire text-fluid-base leading-relaxed mb-8">
            Sourcing direct KAQINADE FURNITURE LTD — 50+ coloris de velours côtelé,
            bouclette et maille 3D. Tarifs professionnels, livraison offerte, installation incluse.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-all rounded-sm"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
