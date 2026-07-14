import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: "Politique de confidentialité By Molina — collecte et traitement des données personnelles.",
}

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-8">Politique de confidentialité</h1>
      <div className="space-y-6 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">1. Collecte des données</h2>
          <p>
            Les informations recueillies via le formulaire de contact (nom, email, téléphone, message) sont
            exclusivement destinées à By Molina pour le traitement de votre demande. Elles ne sont ni
            revendues ni partagées avec des tiers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">2. Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire au traitement de votre
            demande, puis archivées conformément aux obligations légales.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">3. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un
            droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données. Vous
            pouvez également vous opposer au traitement ou en demander la limitation.
          </p>
          <p className="mt-2">
            Pour exercer vos droits, contactez-nous à <a href="mailto:contact@bymolina.com" className="underline underline-offset-2 hover:text-texte">contact@bymolina.com</a>
            ou par téléphone au <a href="tel:+33692033553" className="underline underline-offset-2 hover:text-texte">06 92 03 35 53</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">4. Cookies</h2>
          <p>
            Ce site utilise des cookies strictement nécessaires à son fonctionnement (session, panier).
            Aucun cookie publicitaire ou de traçage tiers n&apos;est déposé sans votre consentement explicite.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">5. Sécurité</h2>
          <p>
            By Molina s&apos;engage à prendre toutes les mesures techniques et organisationnelles nécessaires
            pour garantir la sécurité et la confidentialité de vos données personnelles.
          </p>
        </section>
      </div>
    </div>
  )
}
