import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: "Conditions générales de vente By Molina — commandes sur devis, livraison La Réunion, garanties.",
}

export default function CgvPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="font-display text-fluid-3xl mb-8">Conditions générales de vente</h1>
      <div className="space-y-6 text-texte-secondaire text-fluid-base leading-relaxed">
        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">1. Objet</h2>
          <p>
            Les présentes conditions générales de vente régissent les relations contractuelles entre By Molina
            et tout client souhaitant acquérir un produit présenté sur le site by-molina.re.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">2. Produits et devis</h2>
          <p>
            Les produits présentés sur le site le sont à titre illustratif. Chaque commande fait l&apos;objet
            d&apos;un devis personnalisé établi par By Molina, incluant le choix du modèle, du tissu, des
            coloris et des dimensions.
          </p>
          <p className="mt-2">
            Les photographies sont données à titre indicatif et peuvent varier selon les écrans et les lots
            de tissu.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">3. Commande</h2>
          <p>
            Toute commande est réputée ferme et définitive après acceptation du devis et versement d&apos;un
            acompte. Le solde est dû à la livraison.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">4. Prix et paiement</h2>
          <p>
            Les prix sont indiqués sur devis. Ils s&apos;entendent toutes taxes comprises (TTC). Le paiement
            s&apos;effectue par virement bancaire, carte bancaire ou chèque.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">5. Livraison</h2>
          <p>
            La livraison est assurée à La Réunion. Les délais sont indiqués sur le devis et peuvent varier
            en fonction de la disponibilité des matériaux et de la charge de l&apos;atelier. By Molina
            s&apos;engage à informer le client de tout retard significatif.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">6. Droit de rétractation</h2>
          <p>
            Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation ne
            s&apos;applique pas aux biens confectionnés selon les spécifications du client (meubles sur
            mesure). En cas de produit standard, le client dispose d&apos;un délai de 14 jours pour se
            rétracter à compter de la réception.
          </p>
        </section>

        <section>
          <h2 className="font-display text-fluid-lg mb-3 text-texte">7. Garantie</h2>
          <p>
            Tous nos produits bénéficient de la garantie légale de conformité (2 ans) et de la garantie
            contre les vices cachés. By Molina apporte une attention particulière à la qualité de ses
            produits et s&apos;engage à traiter tout litige dans les meilleurs délais.
          </p>
        </section>
      </div>
    </div>
  )
}
