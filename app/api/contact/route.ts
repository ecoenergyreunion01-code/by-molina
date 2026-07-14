import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nom, email, telephone, message, produit } = body

    if (!nom || !email || !message) {
      return NextResponse.json({ error: 'Nom, email et message requis' }, { status: 400 })
    }

    let sent = false
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY!)
      const contactEmail = process.env.CONTACT_EMAIL || 'contact@bymolina.com'

      let subject = `Nouvelle demande de devis de ${nom}`
      let html = `
        <h2>Demande de devis</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ''}
        ${produit ? `<p><strong>Produit :</strong> ${produit}</p>` : ''}
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `

      if (produit) {
        subject = `Demande de devis - ${produit} - ${nom}`
        html = `
          <h2>Demande de devis pour ${produit}</h2>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          ${telephone ? `<p><strong>Téléphone :</strong> ${telephone}</p>` : ''}
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
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
