'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils/cn'

interface Configurateur3DProps {
  tissus: Array<{ nom: string; hex: string }>
  pieds?: Array<{ nom: string; matiere: string }>
}

export function Configurateur3D({ tissus, pieds = [] }: Configurateur3DProps) {
  const [tissuActif, setTissuActif] = useState(0)
  const [piedActif] = useState(0)
  const [auto, setAuto] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (auto && tissus.length > 1) {
      intervalRef.current = setInterval(() => {
        setTissuActif((prev) => (prev + 1) % tissus.length)
      }, 1500)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [auto, tissus.length])

  function toggleAuto() {
    if (auto) {
      setAuto(false)
      if (intervalRef.current) clearInterval(intervalRef.current)
    } else {
      setAuto(true)
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative aspect-[4/3] bg-fond-fonce overflow-hidden rounded">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M60 120 L340 120 L340 200 C340 210 330 220 320 220 L80 220 C70 220 60 210 60 200 Z"
            fill={tissus[tissuActif]?.hex || '#D4C5A9'} stroke="#1A1A1A" strokeWidth="1" />
          <path d="M50 120 L350 120 L350 80 C350 70 340 60 330 60 L70 60 C60 60 50 70 50 80 Z"
            fill={tissus[tissuActif]?.hex || '#D4C5A9'} stroke="#1A1A1A" strokeWidth="1" opacity="0.85" />
          <rect x="40" y="70" width="20" height="140" rx="4"
            fill={tissus[tissuActif]?.hex || '#D4C5A9'} stroke="#1A1A1A" strokeWidth="1" />
          <rect x="340" y="70" width="20" height="140" rx="4"
            fill={tissus[tissuActif]?.hex || '#D4C5A9'} stroke="#1A1A1A" strokeWidth="1" />
          <rect x="75" y="125" width="120" height="85" rx="6"
            fill={tissus[tissuActif]?.hex || '#D4C5A9'} stroke="#1A1A1A" strokeWidth="0.8" opacity="0.9" />
          <rect x="205" y="125" width="120" height="85" rx="6"
            fill={tissus[tissuActif]?.hex || '#D4C5A9'} stroke="#1A1A1A" strokeWidth="0.8" opacity="0.9" />
          <line x1="200" y1="120" x2="200" y2="220" stroke="#1A1A1A" strokeWidth="0.5" strokeDasharray="2 2" />
          {pieds[piedActif]?.matiere === 'bois' ? (
            <>
              <rect x="70" y="218" width="12" height="40" rx="2" fill="#C4A882" stroke="#1A1A1A" strokeWidth="0.8" />
              <rect x="318" y="218" width="12" height="40" rx="2" fill="#C4A882" stroke="#1A1A1A" strokeWidth="0.8" />
              <rect x="190" y="218" width="10" height="35" rx="2" fill="#C4A882" stroke="#1A1A1A" strokeWidth="0.8" />
            </>
          ) : pieds.length > 0 ? (
            <>
              <rect x="68" y="220" width="16" height="35" rx="2" fill="#8A8A8A" stroke="#1A1A1A" strokeWidth="0.8" />
              <rect x="316" y="220" width="16" height="35" rx="2" fill="#8A8A8A" stroke="#1A1A1A" strokeWidth="0.8" />
              <rect x="188" y="220" width="14" height="30" rx="2" fill="#8A8A8A" stroke="#1A1A1A" strokeWidth="0.8" />
            </>
          ) : null}
        </svg>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {tissus.map((t, i) => (
            <button
              key={t.nom}
              type="button"
              onClick={() => { setTissuActif(i); setAuto(false) }}
              className={cn(
                'w-11 h-11 rounded-full border-2 transition-all duration-200',
                tissuActif === i ? 'border-texte scale-110' : 'border-transparent hover:border-texte/30'
              )}
              style={{ backgroundColor: t.hex }}
              title={t.nom}
              aria-label={t.nom}
            />
          ))}
        </div>
        {tissus.length > 1 && (
          <button
            type="button"
            onClick={toggleAuto}
            className={cn(
              'min-h-touch px-4 text-xs tracking-wider uppercase font-medium border transition-all',
              auto ? 'bg-texte text-fond border-texte' : 'border-[#ddd] text-texte-secondaire hover:border-texte'
            )}
          >
            {auto ? 'Stop' : 'Auto'}
          </button>
        )}
      </div>
    </div>
  )
}
