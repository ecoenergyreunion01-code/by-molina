'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getCoupsDeCoeur } from '@/lib/data/produits'
import { imageProduitSafe, altProduit } from '@/lib/images'

export function CoupDeCoeur() {
  const coupsDeCoeur = getCoupsDeCoeur()

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-texte-gris mb-4 font-medium">
            Nos modèles phares
          </p>
          <h2 className="font-display text-fluid-2xl lg:text-fluid-3xl mb-3 text-balance">
            Découvrez la collection
          </h2>
          <p className="text-texte-secondaire text-fluid-sm max-w-lg mx-auto">
            Canapés et fauteuils d&apos;exception, disponibles dans 50+ coloris.
            Tous nos modèles sont visibles dans notre showroom.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {coupsDeCoeur.map((item) => (
            <motion.div
              key={item.slug}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Link href={`/produit/${item.slug}`} className="group block">
                <div className="relative overflow-hidden bg-fond-fonce mb-4 shadow-card group-hover:shadow-card-hover transition-shadow duration-500 max-h-[480px] flex items-center justify-center">
                  <Image
                    src={imageProduitSafe(item.slug, 0, item.couleurs?.[0]?.hex)}
                    alt={altProduit(item.slug, 0) || item.nom}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[480px] object-contain group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-lg group-hover:translate-x-1 transition-transform duration-300">
                  {item.nom}
                </h3>
                {item.sousTitre && (
                  <p className="text-sm text-texte-gris mt-1">{item.sousTitre}</p>
                )}
                <p className="text-xs text-texte-gris mt-2">L {item.largeurCm} cm · {item.couleurs?.length ?? 0} coloris</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/collection"
            className="inline-flex min-h-touch items-center justify-center px-8 border border-texte text-texte text-xs tracking-wider uppercase font-medium hover:bg-texte hover:text-fond transition-all rounded-sm"
          >
            Voir toute la collection
          </Link>
        </div>
      </div>
    </section>
  )
}
