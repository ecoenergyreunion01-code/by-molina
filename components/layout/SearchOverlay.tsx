'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { tousLesProduits } from '@/lib/data/produits'
import { getFamilleLabel } from '@/lib/data/familles'
import { imageProduitSafe } from '@/lib/images'
import type { FamilleProduit } from '@/types'

export function SearchOverlay() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedQuery(e.target.value), 300)
  }, [])

  useEffect(() => {
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      setDebouncedQuery('')
    }
  }, [open])

  const [searching, setSearching] = useState(false)

  const results = useMemo(() => {
    if (!debouncedQuery) return tousLesProduits
    const q = debouncedQuery.toLowerCase()
    return tousLesProduits.filter(
      (p) =>
        p.nom.toLowerCase().includes(q) ||
        p.sousTitre?.toLowerCase().includes(q) ||
        p.famille?.toLowerCase().includes(q) ||
        p.fabricRef?.toLowerCase().includes(q) ||
        p.materiaux?.toLowerCase().includes(q) ||
        getFamilleLabel(p.famille as FamilleProduit).toLowerCase().includes(q)
    )
  }, [debouncedQuery])

  useEffect(() => {
    if (!debouncedQuery) return
    let cancelled = false
    setSearching(true)
    import('@/lib/meilisearch/client')
      .then(({ rechercherProduits }) =>
        rechercherProduits(debouncedQuery)
          .then((res) => {
            if (!cancelled && res.hits.length > 0) {
              console.debug(`Meilisearch : ${res.hits.length} résultats pour "${debouncedQuery}"`)
            }
          })
          .catch(() => {})
          .finally(() => {
            if (!cancelled) setSearching(false)
          })
      )
    return () => {
      cancelled = true
    }
  }, [debouncedQuery])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="min-h-touch min-w-touch flex items-center justify-center text-texte-secondaire hover:text-texte transition-colors"
        aria-label="Rechercher"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="7.5" cy="7.5" r="5.5" />
          <path d="M11.5 11.5L16 16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-center pt-[15vh] px-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg bg-fond animate-fade-in max-h-[60vh] flex flex-col shadow-xl">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EFEBE9]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="7.5" cy="7.5" r="5.5" />
                <path d="M11.5 11.5L16 16" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Rechercher un modèle, tissu..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-texte-gris focus-visible:ring-0"
              />
              <span className="text-xs text-texte-gris hidden sm:inline">⌘K</span>
            </div>

            <div className="overflow-y-auto flex-1 p-2 scrollbar-thin">
              {results.length === 0 && !searching ? (
                <p className="text-sm text-texte-gris text-center py-8">Aucun résultat</p>
              ) : results.length === 0 && searching ? (
                <p className="text-sm text-texte-gris text-center py-8">Recherche en cours...</p>
              ) : (
                <div className="space-y-1">
                  {results.map((p) => (
                    <Link
                      key={p._id}
                      href={`/produit/${p.slug}`}
                      onClick={() => {
                        setOpen(false)
                        setQuery('')
                      }}
                      className="flex items-center gap-4 p-3 hover:bg-fond-fonce transition-colors rounded-sm"
                    >
                      <div className="relative w-14 h-14 shrink-0 bg-fond-fonce rounded-sm overflow-hidden">
                        <Image
                          src={imageProduitSafe(p.slug, 0, p.couleurs?.[0]?.hex)}
                          alt={p.nom}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{p.nom}</p>
                        <p className="text-xs text-texte-gris truncate">
                          {p.famille ? getFamilleLabel(p.famille) : ''}
                          {p.fabricRef ? ` · ${p.fabricRef}` : ''}
                          {` · L ${p.largeurCm} cm`}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
