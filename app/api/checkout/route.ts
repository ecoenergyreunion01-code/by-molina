import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let StripeCtor: any = null

async function getStripe() {
  if (StripeCtor) return new StripeCtor(process.env.STRIPE_SECRET_KEY!)
  try {
    const mod = await import('stripe')
    StripeCtor = mod.default || mod.Stripe
    if (StripeCtor) return new StripeCtor(process.env.STRIPE_SECRET_KEY!)
    return null
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items } = body

    if (!items?.length) {
      return NextResponse.json({ error: 'Panier vide' }, { status: 400 })
    }

    const stripe = await getStripe()

    if (!stripe) {
      // Mode démo : pas de Stripe installé, on simule
      return NextResponse.json({ url: '/panier/merci' })
    }

    const session = await stripe.checkout.sessions.create({
      line_items: items.map((item: { nom: string; image: string; prix: number; quantite: number }) => ({
        price_data: {
          currency: 'eur',
          product_data: { name: item.nom, images: [item.image] },
          unit_amount: Math.round(item.prix * 100),
        },
        quantity: item.quantite,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/panier/merci`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/panier`,
    })

    return NextResponse.json({ url: session.url })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la création du checkout' }, { status: 500 })
  }
}
