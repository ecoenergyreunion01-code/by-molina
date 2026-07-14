import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos matériaux',
  description: 'Tissus velours côtelé K3072, bouclette S651, maille 3D — qualité By Molina.',
}

export default function MateriauxPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-6">Nos matériaux</h1>
      <div className="space-y-8 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Velours côtelé — K3072</h2>
          <p>15 coloris disponibles. Tissu doux et résistant pour un usage quotidien.</p>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Bouclette — S651</h2>
          <p>420 g/m². Tissu texturé au toucher unique, parfait pour les intérieurs cocooning.</p>
        </section>
      </div>
    </div>
  )
}
