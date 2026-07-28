import { NextResponse } from 'next/server'

const rateLimit = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const window = 10 * 60 * 1000
  const max = 3
  const timestamps = (rateLimit.get(ip) || []).filter((t) => now - t < window)
  if (timestamps.length >= max) return true
  timestamps.push(now)
  rateLimit.set(ip, timestamps)
  return false
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Trop de demandes. Réessayez dans quelques minutes.' }, { status: 429 })
    }

    const { nom, email, telephone, message, produit } = body

    if (!nom || !email || !message) {
      return NextResponse.json({ error: 'Nom, email et message requis' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Format d\'email invalide' }, { status: 400 })
    }

    const safeNom = escapeHtml(String(nom))
    const safeEmail = escapeHtml(String(email))
    const safeTel = telephone ? escapeHtml(String(telephone)) : ''
    const safeMsg = escapeHtml(String(message)).replace(/\n/g, '<br>')
    const safeProduit = produit ? escapeHtml(String(produit)) : ''

    let sent = false
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY!)
      const contactEmail = process.env.CONTACT_EMAIL || 'contact@bymolina.com'

      let subject = `Nouvelle demande de devis de ${safeNom}`
      let html = `
        <h2>Demande de devis</h2>
        <p><strong>Nom :</strong> ${safeNom}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        ${safeTel ? `<p><strong>Téléphone :</strong> ${safeTel}</p>` : ''}
        ${safeProduit ? `<p><strong>Produit :</strong> ${safeProduit}</p>` : ''}
        <p><strong>Message :</strong></p>
        <p>${safeMsg}</p>
      `

      if (safeProduit) {
        subject = `Demande de devis - ${safeProduit} - ${safeNom}`
        html = `
          <h2>Demande de devis pour ${safeProduit}</h2>
          <p><strong>Nom :</strong> ${safeNom}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          ${safeTel ? `<p><strong>Téléphone :</strong> ${safeTel}</p>` : ''}
          <p><strong>Message :</strong></p>
          <p>${safeMsg}</p>
        `
      }

      await resend.emails.send({
        from: 'By Molina <onboarding@resend.dev>',
        to: contactEmail,
        subject,
        html,
      })
      sent = true
    } catch {
      sent = false
    }

    return NextResponse.json({
      success: true,
      sent,
      message: sent
        ? 'Votre demande a été envoyée. Nous vous répondrons rapidement.'
        : 'Votre demande a été reçue. Mode démo : aucun email envoyé.',
    })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 })
  }
}
