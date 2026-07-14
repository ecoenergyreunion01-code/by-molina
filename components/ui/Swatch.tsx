'use client'

import { cn } from '@/lib/utils/cn'

interface SwatchProps {
  couleur: string
  nom: string
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  taille?: 'sm' | 'md'
}

export function Swatch({ couleur, nom, selected, disabled, onClick, taille = 'md' }: SwatchProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={nom}
      className={cn(
        'rounded-full border-2 transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texte',
        selected ? 'border-texte scale-110' : 'border-transparent hover:border-texte/30',
        disabled && 'opacity-30 cursor-not-allowed',
        taille === 'sm' ? 'w-8 h-8' : 'w-11 h-11',
      )}
      style={{ backgroundColor: couleur }}
      aria-label={nom}
    />
  )
}
