import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Guide d'entretien",
  description: 'Conseils pour entretenir votre canapé By Molina : nettoyage des tissus velours côtelé, bouclette et maille 3D.',
}

export default function EntretienPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-6">Guide d&apos;entretien</h1>
      <div className="space-y-8 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Nettoyage quotidien</h2>
          <p>Passez régulièrement l&apos;aspirateur avec un embout brosse doux pour éviter l&apos;accumulation de poussière dans les fibres. Pour les tissus bouclette, utilisez une brosse à tissus d&apos;ameublement.</p>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Tâches et accidents</h2>
          <p>Tamponnez immédiatement avec un chiffon blanc propre et sec (ne frottez pas !). Utilisez un nettoyant spécial tissus d&apos;ameublement. Testez toujours sur une zone cachée avant.</p>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Conseils par type de tissu</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Velours côtelé :</strong> Brossez dans le sens des côtes. Évitez l&apos;eau en excès.</li>
            <li><strong>Bouclette :</strong> Aspirez régulièrement. Évitez les brosses agressives.</li>
            <li><strong>Velours lisse :</strong> Nettoyage à sec recommandé.</li>
            <li><strong>Maille 3D :</strong> Lavable en machine à 30°C (housse amovible).</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-fluid-xl mb-3 text-texte">Rotation des coussins</h2>
          <p>Pour une usure uniforme, retournez et faites pivoter les coussins d&apos;assise toutes les semaines pendant les 3 premiers mois, puis une fois par mois.</p>
        </section>
      </div>
    </div>
  )
}
