import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: "Mentions légales de By Molina — édition, direction, hébergement du site by-molina.re.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-8">Mentions légales</h1>
      <div className="space-y-6 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">Édition du site</h2>
          <p>Le site by-molina.re est édité par :</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Responsable de la publication :</strong> Stéphane Molina</li>
            <li><strong>Téléphone :</strong> <a href="tel:+33692033553" className="underline underline-offset-2 hover:text-texte">06 92 03 35 53</a></li>
            <li><strong>Email :</strong> <a href="mailto:contact@bymolina.com" className="underline underline-offset-2 hover:text-texte">contact@bymolina.com</a></li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus du site (textes, images, photographies, vidéos, logos, etc.) est protégé
            par le droit d&apos;auteur et les lois en vigueur. Toute reproduction, représentation, modification
            ou exploitation, partielle ou totale, sans autorisation écrite préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">Responsabilité</h2>
          <p>
            Les informations fournies sur ce site le sont à titre indicatif. By Molina s&apos;efforce d&apos;assurer
            l&apos;exactitude des informations, mais ne saurait garantir leur exhaustivité. L&apos;utilisateur
            reconnaît utiliser ces informations sous sa responsabilité exclusive.
          </p>
        </section>
      </div>
    </div>
  )
}
