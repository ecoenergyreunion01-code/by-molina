'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ItemPanier } from '@/types'

interface PanierContextType {
  items: ItemPanier[]
  nbArticles: number
  total: number
  ajouter: (item: Omit<ItemPanier, 'quantite'>) => void
  supprimer: (produitId: string, couleur: string, pieds: string) => void
  changerQuantite: (produitId: string, couleur: string, pieds: string, delta: number) => void
  vider: () => void
}

const PanierContext = createContext<PanierContextType | null>(null)

const STORAGE_KEY = 'canape-panier'

function chargerPanier(): ItemPanier[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function sauvegarderPanier(items: ItemPanier[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function PanierProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ItemPanier[]>([])

  useEffect(() => {
    setItems(chargerPanier())
  }, [])

  useEffect(() => {
    sauvegarderPanier(items)
  }, [items])

  const nbArticles = items.reduce((sum, i) => sum + i.quantite, 0)
  const total = items.reduce((sum, i) => sum + i.prix * i.quantite, 0)

  const ajouter = useCallback((item: Omit<ItemPanier, 'quantite'>) => {
    setItems((prev) => {
      const existant = prev.find(
        (i) => i.produitId === item.produitId && i.couleur === item.couleur && i.pieds === item.pieds
      )
      if (existant) {
        return prev.map((i) =>
          i.produitId === item.produitId && i.couleur === item.couleur && i.pieds === item.pieds
            ? { ...i, quantite: i.quantite + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantite: 1 }]
    })
  }, [])

  const supprimer = useCallback((produitId: string, couleur: string, pieds: string) => {
    setItems((prev) => prev.filter((i) => !(i.produitId === produitId && i.couleur === couleur && i.pieds === pieds)))
  }, [])

  const changerQuantite = useCallback((produitId: string, couleur: string, pieds: string, delta: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.produitId === produitId && i.couleur === couleur && i.pieds === pieds
          ? { ...i, quantite: Math.max(1, i.quantite + delta) }
          : i
      )
    )
  }, [])

  const vider = useCallback(() => setItems([]), [])

  return (
    <PanierContext.Provider value={{ items, nbArticles, total, ajouter, supprimer, changerQuantite, vider }}>
      {children}
    </PanierContext.Provider>
  )
}

export function usePanier() {
  const ctx = useContext(PanierContext)
  if (!ctx) throw new Error('usePanier doit être utilisé dans un PanierProvider')
  return ctx
}
