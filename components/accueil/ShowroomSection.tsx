'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function ShowroomSection() {
  return (
    <section className="bg-fond-fonce py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
            Notre showroom
          </p>
          <h2 className="font-display text-fluid-2xl lg:text-fluid-3xl mb-6 text-balance">
            Voyez, touchez, ressentez
          </h2>
          <p className="text-texte-secondaire text-fluid-base leading-relaxed mb-10">
            Rien ne remplace l&apos;expérience du toucher. Venez essayer nos modèles,
            comparer les tissus et rencontrer notre équipe.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-texte-gris mb-1">Horaires</p>
              <p className="font-medium">Lun — Sam · 9h — 18h</p>
            </div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-texte-gris mb-1">Téléphone</p>
              <p className="font-medium">
                <a href="tel:+262692033553" className="hover:underline">06 92 03 35 53</a>
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-texte-gris mb-1">Email</p>
              <p className="font-medium">
                <a href="mailto:contact@bymolina.re" className="hover:underline">contact@bymolina.re</a>
              </p>
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
    </section>
  )
}
