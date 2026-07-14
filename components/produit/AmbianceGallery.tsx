'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import { imagesAmbiance, ambiancesAlt } from '@/lib/images'

const ambiances = [
  {
    nom: 'Cocooning',
    key: 'cocooning' as const,
    description: 'Atmosphère douce et enveloppante pour se ressourcer',
  },
  {
    nom: 'Scandinave',
    key: 'scandinave' as const,
    description: 'Lignes épurées, tons naturels et luminosité nordique',
  },
  {
    nom: 'Bohème',
    key: 'boheme' as const,
    description: 'Textures naturelles, plantes et coussins colorés',
  },
  {
    nom: 'Minimaliste',
    key: 'minimaliste' as const,
    description: 'Sobriété et élégance dans un espace dégagé',
  },
]

export function AmbianceGallery() {
  const [active, setActive] = useState(0)

  const current = ambiances[active]

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {ambiances.map((a, i) => (
          <button
            key={a.nom}
            type="button"
            onClick={() => setActive(i)}
              className={cn(
                'px-4 py-2 min-h-touch text-sm border transition-all',
                active === i
                  ? 'bg-texte text-fond border-texte'
                  : 'border-[#ddd] text-texte-secondaire hover:border-texte'
              )}
          >
            {a.nom}
          </button>
        ))}
      </div>

      <div className="bg-fond-fonce overflow-hidden">
        <Image
          src={imagesAmbiance[current.key]}
          alt={ambiancesAlt[current.key] || current.nom}
          width={800}
          height={600}
          className="w-full h-auto block transition-opacity duration-500"
          loading="lazy"
        />
      </div>

      <p className="text-sm text-texte-secondaire">{current.description}</p>
    </div>
  )
}
