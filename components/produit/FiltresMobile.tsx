'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiltresSidebar, type FiltresEtat } from './FiltresSidebar'

export function FiltresMobile({
  etat,
  onLargeurChange,
  onCouleurChange,
  onFabricTypeChange,
  onFamilleChange,
  onTriChange,
}: {
  etat: FiltresEtat
  onLargeurChange: (min: number) => void
  onCouleurChange: (hex: string) => void
  onFabricTypeChange: (value: string) => void
  onFamilleChange: (value: string) => void
  onTriChange: (tri: string) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden mb-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 min-h-touch px-4 py-2 border border-[#ddd] text-sm hover:border-texte transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <path d="M2 4h12M4 8h8M6 12h4" />
        </svg>
        Filtres
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full bg-fond max-h-[80vh] overflow-y-auto px-4 pt-6 pb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg">Filtres</h3>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="min-h-touch min-w-touch flex items-center justify-center text-texte-gris hover:text-texte"
                  aria-label="Fermer"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M15 5L5 15M5 5l10 10" />
                  </svg>
                </button>
              </div>
              <FiltresSidebar
                etat={etat}
                onLargeurChange={onLargeurChange}
                onCouleurChange={onCouleurChange}
                onFabricTypeChange={onFabricTypeChange}
                onFamilleChange={onFamilleChange}
                onTriChange={onTriChange}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full mt-6 min-h-touch bg-texte text-fond text-sm tracking-wider uppercase font-medium"
              >
                Voir les résultats
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
