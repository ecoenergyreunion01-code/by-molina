'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { imageAmbianceSafe, ambiancesAlt } from '@/lib/images'
import { ambiancesNav } from '@/lib/data/ambiances'

const ambianceCouleurs: Record<string, string> = {
  cocooning: '#C4A882',
  scandinave: '#5B7B5A',
  boheme: '#C17060',
  minimaliste: '#6B8E9E',
}

export function AmbianceGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
          Ambiances
        </p>
        <h2 className="font-display text-fluid-2xl mb-3">
          Trouvez votre ambiance
        </h2>
        <p className="text-texte-secondaire text-fluid-sm max-w-lg mx-auto">
          Chaque pièce raconte une histoire. Dites-nous la vôtre.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {ambiancesNav.map((ambiance) => (
          <motion.div
            key={ambiance.slug}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
              <Link
                href={`/collection?ambiance=${ambiance.slug}`}
                className="group relative overflow-hidden bg-fond-fonce shadow-card hover:shadow-card-hover transition-shadow duration-500 block aspect-[4/5] flex items-center justify-center"
              >
                <Image
                  src={imageAmbianceSafe(ambiance.slug)}
                  alt={ambiancesAlt[ambiance.slug] || ambiance.nom}
                  fill
                  className="object-contain transition-all duration-700 scale-95 group-hover:scale-100"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="w-8 h-0.5 mb-3 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: ambianceCouleurs[ambiance.slug] || '#C4A882' }}
                />
                <h3 className="font-display text-xl text-white mb-1 transition-all duration-300 group-hover:translate-x-1">
                  {ambiance.nom}
                </h3>
                <p className="text-white/70 text-sm transition-all duration-300 group-hover:translate-x-1">
                  {ambiance.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
