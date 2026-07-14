'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils/cn'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', onKeyDown)
      return () => document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        className={cn(
          'relative w-full max-w-lg mx-4 bg-fond animate-scale-in',
          'max-h-[85vh] overflow-y-auto',
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            <h2 className="font-display text-fluid-lg">{title}</h2>
            <button
              onClick={onClose}
              className="min-h-touch min-w-touch flex items-center justify-center text-texte-gris hover:text-texte"
              aria-label="Fermer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
