'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { famillesProduit } from '@/lib/data/familles'
import { imageFamilleSafe } from '@/lib/images'

export function FamillesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
          Parcourir
        </p>
        <h2 className="font-display text-fluid-2xl mb-3">
          Trouvez votre silhouette
        </h2>
        <p className="text-texte-secondaire text-fluid-sm max-w-lg mx-auto">
          Du bloc modulaire à l&apos;angle chaise longue — explorez par famille.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6"
      >
        {famillesProduit.map((famille) => (
          <motion.div
            key={famille.value}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Link
              href={`/collection?famille=${famille.value}`}
              className="group block bg-fond-fonce overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imageFamilleSafe(famille.value)}
                  alt={famille.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-base md:text-lg text-white mb-0.5">
                    {famille.labelCourt}
                  </h3>
                  <p className="text-white/70 text-xs line-clamp-2">{famille.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
