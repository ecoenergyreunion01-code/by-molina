'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

interface ImageZoomProps {
  src: string
  alt?: string
  className?: string
}

export function ImageZoom({ src, alt, className }: ImageZoomProps) {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setFullscreen(true)}
        className={cn('relative overflow-hidden bg-fond-fonce w-full text-left group', className)}
        aria-label="Voir en plein écran"
      >
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={1000}
          className="w-full h-auto block"
          priority
        />
        <span className="absolute bottom-3 right-3 bg-fond/80 backdrop-blur-sm px-3 py-1.5 text-xs text-texte-gris flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 1H1v4M9 13h4V9M1 9v4h4M13 5V1H9"/>
          </svg>
          Plein écran
        </span>
      </button>

      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setFullscreen(false)}
        >
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 z-10 w-11 h-11 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Fermer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M15 5L5 15M5 5l10 10"/>
            </svg>
          </button>
          <div className="max-w-[90vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt || ''}
              width={1200}
              height={1500}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
