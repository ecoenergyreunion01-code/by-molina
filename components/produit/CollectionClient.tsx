'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ProductGrid } from '@/components/produit/ProductGrid'
import {
  FiltresSidebar,
  largeursOptions,
  couleursOptions,
  fabricTypeOptions,
  famillesOptions,
  type FiltresEtat,
} from '@/components/produit/FiltresSidebar'
import { FiltresMobile } from '@/components/produit/FiltresMobile'
import { tousLesProduits } from '@/lib/data/produits'
import { ambiancesNav } from '@/lib/data/ambiances'
import { getFamilleLabel } from '@/lib/data/familles'
import type { FamilleProduit } from '@/types'

function buildCollectionHref(famille?: string, ambiance?: string): string {
  const params = new URLSearchParams()
  if (famille) params.set('famille', famille)
  if (ambiance) params.set('ambiance', ambiance)
  const q = params.toString()
  return q ? `/collection?${q}` : '/collection'
}

export function CollectionClient({
  ambiance,
  famille,
}: {
  ambiance?: string
  famille?: string
}) {
  const [etat, setEtat] = useState<FiltresEtat>({
    selectedLargeurs: [],
    selectedCouleurs: [],
    selectedFabricTypes: [],
    selectedFamilles: [],
    tri: 'pertinence',
  })

  const produits = useMemo(() => {
    let result = [...tousLesProduits]

    if (famille) {
      result = result.filter((p) => p.famille === famille)
    }

    if (ambiance) {
      const slug = ambiance.toLowerCase()
      result = result.filter((p) =>
        p.ambiances?.some((a) => a.toLowerCase().includes(slug))
      )
    }

    if (etat.selectedFamilles.length > 0) {
      result = result.filter(
        (p) => p.famille && etat.selectedFamilles.includes(p.famille)
      )
    }

    if (etat.selectedLargeurs.length > 0) {
      result = result.filter((p) =>
        etat.selectedLargeurs.some((min) => {
          const opt = largeursOptions.find((o) => o.min === min)
          return opt && p.largeurCm >= opt.min && p.largeurCm <= opt.max
        })
      )
    }

    if (etat.selectedCouleurs.length > 0) {
      result = result.filter((p) =>
        p.couleurs?.some((c) => etat.selectedCouleurs.includes(c.hex))
      )
    }

    if (etat.selectedFabricTypes.length > 0) {
      result = result.filter(
        (p) => p.fabricType && etat.selectedFabricTypes.includes(p.fabricType)
      )
    }

    return result
  }, [ambiance, famille, etat])

  const familleLabel = famille ? getFamilleLabel(famille as FamilleProduit) : undefined
  const ambianceInfo = ambiancesNav.find((a) => a.slug === ambiance)

  const pageTitle = familleLabel
    ? familleLabel
    : ambianceInfo
      ? `Ambiance ${ambianceInfo.nom}`
      : 'Nos canapés'

  const pageDesc = familleLabel
    ? famillesOptions.find((f) => f.value === famille)?.description
    : ambianceInfo?.desc ?? 'Découvrez notre sélection de canapés et fauteuils'

  function onLargeurChange(min: number) {
    setEtat((prev) => ({
      ...prev,
      selectedLargeurs: prev.selectedLargeurs.includes(min)
        ? prev.selectedLargeurs.filter((v) => v !== min)
        : [...prev.selectedLargeurs, min],
    }))
  }

  function onCouleurChange(hex: string) {
    setEtat((prev) => ({
      ...prev,
      selectedCouleurs: prev.selectedCouleurs.includes(hex)
        ? prev.selectedCouleurs.filter((v) => v !== hex)
        : [...prev.selectedCouleurs, hex],
    }))
  }

  function onFabricTypeChange(value: string) {
    setEtat((prev) => ({
      ...prev,
      selectedFabricTypes: prev.selectedFabricTypes.includes(value)
        ? prev.selectedFabricTypes.filter((v) => v !== value)
        : [...prev.selectedFabricTypes, value],
    }))
  }

  function onFamilleChange(value: string) {
    setEtat((prev) => ({
      ...prev,
      selectedFamilles: prev.selectedFamilles.includes(value)
        ? prev.selectedFamilles.filter((v) => v !== value)
        : [...prev.selectedFamilles, value],
    }))
  }

  function onTriChange(tri: string) {
    setEtat((prev) => ({ ...prev, tri }))
  }

  const groupByFamille = !famille && !ambiance && etat.selectedFamilles.length === 0

  return (
    <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
      <aside className="hidden lg:block">
        <FiltresSidebar
          etat={etat}
          onLargeurChange={onLargeurChange}
          onCouleurChange={onCouleurChange}
          onFabricTypeChange={onFabricTypeChange}
          onFamilleChange={onFamilleChange}
          onTriChange={onTriChange}
        />
      </aside>
      <div>
        <h1 className="font-display text-fluid-2xl mb-1 text-balance">{pageTitle}</h1>
        <p className="text-texte-secondaire text-fluid-sm mb-6">{pageDesc}</p>

        {/* Nav niveau 1 — Type de produit */}
        <p className="text-xs tracking-[0.2em] uppercase text-texte-gris mb-2 font-medium">
          Par type
        </p>
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
          <Link
            href={buildCollectionHref(undefined, ambiance)}
            className={`shrink-0 px-4 py-2 text-xs tracking-wider uppercase border transition-all whitespace-nowrap font-medium ${
              !famille
                ? 'bg-texte text-fond border-texte'
                : 'border-[#ddd] text-texte-secondaire hover:border-texte'
            }`}
          >
            Tous
          </Link>
          {famillesOptions.map((f) => (
            <Link
              key={f.value}
              href={buildCollectionHref(f.value, ambiance)}
              className={`shrink-0 px-4 py-2 text-xs tracking-wider uppercase border transition-all whitespace-nowrap font-medium ${
                famille === f.value
                  ? 'bg-texte text-fond border-texte'
                  : 'border-[#ddd] text-texte-secondaire hover:border-texte'
              }`}
            >
              {f.labelCourt}
            </Link>
          ))}
        </div>

        {/* Nav niveau 2 — Ambiance */}
        <p className="text-xs tracking-[0.2em] uppercase text-texte-gris mb-2 font-medium">
          Par ambiance
        </p>
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <Link
            href={buildCollectionHref(famille, undefined)}
            className={`shrink-0 px-4 py-2 text-xs tracking-wider uppercase border transition-all whitespace-nowrap font-medium ${
              !ambiance
                ? 'bg-texte text-fond border-texte'
                : 'border-[#ddd] text-texte-secondaire hover:border-texte'
            }`}
          >
            Toutes
          </Link>
          {ambiancesNav.map((a) => (
            <Link
              key={a.slug}
              href={buildCollectionHref(famille, a.slug)}
              className={`shrink-0 px-4 py-2 text-xs tracking-wider uppercase border transition-all whitespace-nowrap font-medium ${
                ambiance === a.slug
                  ? 'bg-texte text-fond border-texte'
                  : 'border-[#ddd] text-texte-secondaire hover:border-texte'
              }`}
            >
              {a.nom}
            </Link>
          ))}
        </div>

        {(etat.selectedLargeurs.length > 0 ||
          etat.selectedCouleurs.length > 0 ||
          etat.selectedFabricTypes.length > 0 ||
          etat.selectedFamilles.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {etat.selectedFamilles.map((value) => {
              const opt = famillesOptions.find((f) => f.value === value)
              return opt ? (
                <button
                  key={value}
                  type="button"
                  onClick={() => onFamilleChange(value)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs border border-texte bg-fond hover:bg-fond-fonce transition-colors"
                >
                  {opt.labelCourt}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 3L3 9M3 3l6 6" /></svg>
                </button>
              ) : null
            })}
            {etat.selectedLargeurs.map((min) => {
              const opt = largeursOptions.find((o) => o.min === min)
              return opt ? (
                <button
                  key={min}
                  type="button"
                  onClick={() => onLargeurChange(min)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs border border-texte bg-fond hover:bg-fond-fonce transition-colors"
                >
                  {opt.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 3L3 9M3 3l6 6" /></svg>
                </button>
              ) : null
            })}
            {etat.selectedCouleurs.map((hex) => {
              const opt = couleursOptions.find((c) => c.hex === hex)
              return opt ? (
                <button
                  key={hex}
                  type="button"
                  onClick={() => onCouleurChange(hex)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs border border-texte bg-fond hover:bg-fond-fonce transition-colors"
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: opt.hex }} />
                  {opt.nom}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 3L3 9M3 3l6 6" /></svg>
                </button>
              ) : null
            })}
            {etat.selectedFabricTypes.map((value) => {
              const opt = fabricTypeOptions.find((f) => f.value === value)
              return opt ? (
                <button
                  key={value}
                  type="button"
                  onClick={() => onFabricTypeChange(value)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs border border-texte bg-fond hover:bg-fond-fonce transition-colors"
                >
                  {opt.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 3L3 9M3 3l6 6" /></svg>
                </button>
              ) : null
            })}
          </div>
        )}

        <FiltresMobile
          etat={etat}
          onLargeurChange={onLargeurChange}
          onCouleurChange={onCouleurChange}
          onFabricTypeChange={onFabricTypeChange}
          onFamilleChange={onFamilleChange}
          onTriChange={onTriChange}
        />

        <p className="text-sm text-texte-gris mb-4">
          {produits.length} modèle{produits.length !== 1 ? 's' : ''}
        </p>

        {produits.length === 0 ? (
          <div className="py-16 text-center border border-[#EFEBE9] bg-fond-fonce">
            <p className="font-display text-fluid-lg mb-2">Aucun modèle ne correspond</p>
            <p className="text-sm text-texte-gris mb-6">
              Essayez d&apos;élargir vos filtres ou parcourez toute la collection.
            </p>
            <Link
              href="/collection"
              className="inline-flex min-h-touch items-center px-6 bg-texte text-fond text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
            >
              Voir toute la collection
            </Link>
          </div>
        ) : (
          <ProductGrid produits={produits} groupByFamille={groupByFamille} />
        )}
      </div>
    </div>
  )
}
