// Stripe - installez avec : npm run stripe
// Cette fonction n'est appelée que si le package est installé

export async function getStripe() {
  try {
    const { loadStripe } = await import('@stripe/stripe-js')
    return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  } catch {
    console.warn('⚠️ Stripe non installé. Lancez : npm run stripe')
    return null
  }
}

export async function creerSessionCheckout(items: Array<{
  produitId: string
  nom: string
  prix: number
  quantite: number
  image: string
}>) {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  })
  return response.json()
}
