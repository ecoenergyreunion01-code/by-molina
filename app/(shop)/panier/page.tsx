'use client'

import Link from 'next/link'
import { usePanier } from '@/lib/panier/context'
import { formatPrice } from '@/lib/utils/formatPrice'
import { Button } from '@/components/ui/Button'

export default function PanierPage() {
  const { items, total, changerQuantite, supprimer, vider } = usePanier()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-fond-fonce flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 22 20" fill="none" stroke="#8A8A8A" strokeWidth="1.2">
            <path d="M11 18L3.5 12.5C1.5 10.8 1 7.5 3 5C4.5 3 7 2.5 9 4L11 6L13 4C15 2.5 17.5 3 19 5C21 7.5 20.5 10.8 18.5 12.5L11 18Z" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="font-display text-fluid-2xl mb-3">Votre shortlist est vide</h1>
        <p className="text-texte-secondaire text-fluid-sm mb-8">
          Découvrez notre collection et trouvez le canapé de vos rêves.
        </p>
        <Link
          href="/collection"
          className="inline-flex min-h-touch items-center justify-center px-8 bg-texte text-fond text-sm tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
        >
          Découvrir nos canapés
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-fluid-2xl">Votre shortlist</h1>
        <button
          onClick={vider}
          className="text-sm text-texte-gris underline underline-offset-2 hover:text-texte transition-colors"
        >
          Vider la shortlist
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.produitId}-${item.couleur}-${item.pieds}`} className="flex gap-4 p-4 bg-fond-clair border border-[#EFEBE9]">
            <div className="w-24 h-24 shrink-0 bg-fond-fonce">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
            </div>
            <div className="flex-1 min-w-0">
              <Link href={`/produit/${item.slug}`} className="font-display text-lg hover:underline underline-offset-2">
                {item.nom}
              </Link>
              {item.couleur && <p className="text-sm text-texte-gris">{item.couleur}</p>}
              {item.pieds && <p className="text-sm text-texte-gris">Pieds : {item.pieds}</p>}
              <p className="font-medium text-texte-prix mt-1">{formatPrice(item.prix * item.quantite)}</p>
            </div>
            <div className="flex flex-col items-end justify-between">
              <button
                onClick={() => supprimer(item.produitId, item.couleur, item.pieds)}
                className="text-texte-gris hover:text-texte transition-colors"
                aria-label="Supprimer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 4L4 12M4 4l8 8" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="flex border border-[#ddd]">
                <button
                  onClick={() => changerQuantite(item.produitId, item.couleur, item.pieds, -1)}
                  className="min-h-touch min-w-[44px] flex items-center justify-center text-sm"
                  disabled={item.quantite <= 1}
                >
                  −
                </button>
                <span className="min-h-touch w-10 flex items-center justify-center text-sm font-medium border-x border-[#ddd]">
                  {item.quantite}
                </span>
                <button
                  onClick={() => changerQuantite(item.produitId, item.couleur, item.pieds, 1)}
                  className="min-h-touch min-w-[44px] flex items-center justify-center text-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-fond-clair border border-[#EFEBE9]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-texte-secondaire">Sous-total</span>
          <span className="font-medium">{formatPrice(total)}</span>
        </div>
        <p className="text-xs text-texte-gris mb-6">Livraison offerte à partir de 99€</p>
        <Button variant="primary" fullWidth taille="lg" onClick={async () => {
          const stripeModule = await import('@stripe/stripe-js').catch(() => null)
          const stripe = stripeModule
            ? await stripeModule.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
            : null
          const { creerSessionCheckout } = await import('@/lib/stripe/client')
          const data = await creerSessionCheckout(items.map(i => ({
            produitId: i.produitId,
            nom: i.nom,
            prix: i.prix,
            quantite: i.quantite,
            image: i.image,
          })))
          if (stripe && data.url?.startsWith('https://checkout.stripe.com')) {
            await stripe.redirectToCheckout(data.url.split('/').pop()!)
          } else {
            window.location.href = data.url || '/panier/merci'
          }
        }}>
          Commander
        </Button>
      </div>
    </div>
  )
}
