import Image from 'next/image'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos tissus',
  description: 'Velours côtelé K3072 et velours lisse — les tissus de nos canapés et fauteuils By Molina.',
  openGraph: {
    title: 'Nos tissus | By Molina',
    description: 'Velours côtelé K3072 et velours lisse — les tissus de nos canapés et fauteuils.',
  },
}

const famillesTissus = [
  {
    titre: 'Velours côtelé',
    ref: 'K3072',
    description: '15 coloris disponibles. Tissu doux et résistant, idéal pour un usage quotidien. Aspect côtelé élégant qui traverse les tendances.',
    coloris: [
      'terracotta', 'gris', 'kaki', 'anthracite', 'gris-bleuté',
      'taupe', 'marron', 'beige', 'beige rosé', 'moutarde',
      'vert foncé', 'jaune moutarde', 'blanc',
    ],
    images: ['nuancier-multicolore-01.jpg', 'tissu-gris-01.jpg'],
    grammage: null,
  },
  {
    titre: 'Velours lisse',
    ref: null,
    description: 'Aspect satiné, toucher soyeux. Idéal pour une ambiance chic et intemporelle.',
    coloris: ['moutarde', 'taupe', 'vert'],
    images: ['nuancier-multicolore-02.jpg', 'tissu-beige-sable-01.jpg'],
    grammage: null,
  },
]

export default function TissusPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <Breadcrumbs items={[{ label: 'Nos tissus' }]} />
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-fluid-3xl mb-4">Nos tissus</h1>
        <p className="text-texte-secondaire text-fluid-base leading-relaxed">
          Découvrez les tissus qui habillent nos canapés et fauteuils.
          Chaque matière est sélectionnée pour sa qualité, son toucher et sa durabilité.
        </p>
      </div>

      <div className="space-y-24">
        {famillesTissus.map((famille, index) => (
          <section key={index}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-3">
                <h2 className="font-display text-fluid-2xl">{famille.titre}</h2>
                {famille.ref && (
                  <p className="text-sm text-texte-gris tracking-wider uppercase font-mono">{famille.ref}</p>
                )}
                {famille.grammage && (
                  <p className="text-xs text-texte-gris uppercase tracking-wider">{famille.grammage}</p>
                )}
                <p className="text-texte-secondaire leading-relaxed">{famille.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {famille.coloris.map((c) => (
                    <span key={c} className="px-3 py-1.5 text-xs bg-fond-fonce text-texte-secondaire">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`grid gap-3 ${famille.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                {famille.images.map((img) => (
                  <div key={img} className="bg-fond-fonce">
                    <Image
                      src={`/images/tissus/${img}`}
                      alt={`${famille.titre} ${famille.ref || ''}`}
                      width={600}
                      height={450}
                      className="w-full h-auto block"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            {index < famillesTissus.length - 1 && (
              <div className="mt-16 border-b border-[#EFEBE9]" />
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
