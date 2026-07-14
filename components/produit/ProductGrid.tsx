'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from './ProductCard'
import { getFamilleLabel, famillesProduit } from '@/lib/data/familles'
import type { Produit, FamilleProduit } from '@/types'

export function ProductGrid({
  produits,
  groupByFamille = false,
}: {
  produits: Produit[]
  groupByFamille?: boolean
}) {
  const grouped = useMemo(() => {
    if (!groupByFamille) return null
    const map = new Map<FamilleProduit, Produit[]>()
    for (const f of famillesProduit) {
      const items = produits.filter((p) => p.famille === f.value)
      if (items.length > 0) map.set(f.value, items)
    }
    return map
  }, [produits, groupByFamille])

  if (grouped && grouped.size > 0) {
    return (
      <div className="space-y-14">
        {Array.from(grouped.entries()).map(([famille, items]) => (
          <section key={famille}>
            <h2 className="font-display text-fluid-lg mb-6 pb-3 border-b border-[#EFEBE9]">
              {getFamilleLabel(famille)}
            </h2>
            <AsymmetricGrid produits={items} />
          </section>
        ))}
      </div>
    )
  }

  return <AsymmetricGrid produits={produits} />
}

function AsymmetricGrid({ produits }: { produits: Produit[] }) {
  return (
    <>
      {/* Mobile & tablette — grille uniforme */}
      <motion.div
        className="grid grid-cols-2 gap-5 md:gap-8 lg:hidden"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {produits.map((produit) => (
          <motion.div
            key={produit._id}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <ProductCard produit={produit} />
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop — grille asymétrique */}
      <div className="hidden lg:flex lg:flex-col lg:gap-10">
        {chunkAsymmetric(produits).map((chunk, idx) => (
          <AsymmetricRow key={idx} produits={chunk.produits} largeFirst={chunk.largeFirst} />
        ))}
      </div>
    </>
  )
}

function chunkAsymmetric(produits: Produit[]): { produits: Produit[]; largeFirst: boolean }[] {
  const rows: { produits: Produit[]; largeFirst: boolean }[] = []
  let i = 0
  let largeFirst = true
  while (i < produits.length) {
    if (i + 2 < produits.length) {
      rows.push({ produits: produits.slice(i, i + 3), largeFirst })
      i += 3
      largeFirst = !largeFirst
    } else {
      rows.push({ produits: produits.slice(i), largeFirst: false })
      break
    }
  }
  return rows
}

function AsymmetricRow({
  produits,
  largeFirst,
}: {
  produits: Produit[]
  largeFirst: boolean
}) {
  if (produits.length === 1) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md"
      >
        <ProductCard produit={produits[0]} />
      </motion.div>
    )
  }

  if (produits.length === 2) {
    return (
      <motion.div
        className="grid grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {produits.map((p) => (
          <motion.div key={p._id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ProductCard produit={p} />
          </motion.div>
        ))}
      </motion.div>
    )
  }

  const [a, b, c] = produits
  const large = largeFirst ? a : c
  const small1 = largeFirst ? b : a
  const small2 = largeFirst ? c : b

  const largeCol = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <ProductCard produit={large} size="large" />
    </motion.div>
  )
  const smallCol = (
    <div className="grid grid-rows-2 gap-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <ProductCard produit={small1} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <ProductCard produit={small2} />
      </motion.div>
    </div>
  )

  return (
    <div className="grid grid-cols-2 gap-8">
      {largeFirst ? (
        <>
          {largeCol}
          {smallCol}
        </>
      ) : (
        <>
          {smallCol}
          {largeCol}
        </>
      )}
    </div>
  )
}
