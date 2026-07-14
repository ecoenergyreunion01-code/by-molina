'use client'

import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
import { usePanier } from '@/lib/panier/context'
import { Logo } from '@/components/ui/Logo'
import { famillesProduit } from '@/lib/data/familles'
import { ambiancesNav } from '@/lib/data/ambiances'

const SearchOverlay = dynamic(() => import('./SearchOverlay').then((m) => m.SearchOverlay), {
  ssr: false,
})

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { nbArticles } = usePanier()

  return (
    <header className="sticky top-0 z-40 bg-fond/90 backdrop-blur-md border-b border-[#EFEBE9]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center shrink-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/collection" className="text-xs tracking-[0.2em] uppercase text-texte-secondaire hover:text-texte transition-colors duration-300">
            Collection
          </Link>

          <div className="relative group">
            <span className="text-xs tracking-[0.2em] uppercase text-texte-secondaire cursor-default hover:text-texte transition-colors duration-300">
              Nos modèles
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-fond border border-[#EFEBE9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
              {famillesProduit.map((f) => (
                <Link
                  key={f.value}
                  href={`/collection?famille=${f.value}`}
                  className="block px-4 py-3 text-sm text-texte-secondaire hover:text-texte hover:bg-fond-fonce transition-colors"
                >
                  <span className="font-medium">{f.labelCourt}</span>
                  <span className="block text-xs text-texte-gris mt-0.5">{f.description}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/tissus" className="text-xs tracking-[0.2em] uppercase text-texte-secondaire hover:text-texte transition-colors duration-300">
            Tissus
          </Link>
          <Link href="/contact" className="text-xs tracking-[0.2em] uppercase text-texte-secondaire hover:text-texte transition-colors duration-300">
            Devis
          </Link>

          <div className="relative group">
            <span className="text-xs tracking-[0.2em] uppercase text-texte-secondaire cursor-default hover:text-texte transition-colors duration-300">
              Ambiances
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-fond border border-[#EFEBE9] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
              {ambiancesNav.map((a) => (
                <Link
                  key={a.slug}
                  href={`/collection?ambiance=${a.slug}`}
                  className="block px-4 py-3 text-sm text-texte-secondaire hover:text-texte hover:bg-fond-fonce transition-colors text-center"
                >
                  {a.nom}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <SearchOverlay />
          <Link
            href="/panier"
            className="relative min-h-touch min-w-touch flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Shortlist"
          >
            <svg width="20" height="20" viewBox="0 0 22 20" fill="none" className="text-texte">
              <path d="M11 18L3.5 12.5C1.5 10.8 1 7.5 3 5C4.5 3 7 2.5 9 4L11 6L13 4C15 2.5 17.5 3 19 5C21 7.5 20.5 10.8 18.5 12.5L11 18Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            {nbArticles > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-texte text-fond text-[11px] font-medium flex items-center justify-center">
                {nbArticles > 99 ? '99+' : nbArticles}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="md:hidden min-h-touch min-w-touch flex items-center justify-center hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-texte">
              {menuOpen ? (
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden border-t border-[#EFEBE9] bg-fond max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-1">
              <Link href="/collection" className="flex min-h-touch items-center text-sm tracking-wider uppercase font-medium hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
                Collection
              </Link>
              <Link href="/tissus" className="flex min-h-touch items-center text-sm tracking-wider uppercase font-medium hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
                Tissus
              </Link>
              <Link href="/contact" className="flex min-h-touch items-center text-sm tracking-wider uppercase font-medium hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
                Devis
              </Link>
              <hr className="border-[#EFEBE9] my-2" />
              <p className="text-xs text-texte-gris uppercase tracking-wider font-medium pt-1">Nos modèles</p>
              <div className="space-y-1 pb-2">
                {famillesProduit.map((f) => (
                  <Link
                    key={f.value}
                    href={`/collection?famille=${f.value}`}
                    className="flex min-h-touch items-center text-sm hover:opacity-70 transition-opacity"
                    onClick={() => setMenuOpen(false)}
                  >
                    {f.label}
                  </Link>
                ))}
              </div>
              <hr className="border-[#EFEBE9]" />
              <p className="text-xs text-texte-gris uppercase tracking-wider font-medium pt-1">Ambiances</p>
              <div className="space-y-1">
                {ambiancesNav.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/collection?ambiance=${a.slug}`}
                    className="flex min-h-touch items-center text-sm hover:opacity-70 transition-opacity"
                    onClick={() => setMenuOpen(false)}
                  >
                    {a.nom}
                  </Link>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
