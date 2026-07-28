'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'

export function ContactForm({ produitInitial }: { produitInitial?: string }) {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: produitInitial ? `Bonjour, je suis intéressé(e) par le modèle ${produitInitial}. Pourriez-vous me faire un devis ?` : '',
  })
  const [produit] = useState(produitInitial)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(): boolean {
    const e: Record<string, string> = {}
    if (!form.nom.trim()) e.nom = 'Votre nom est requis'
    if (!form.email.trim()) {
      e.email = 'Votre email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Format d\'email invalide'
    }
    if (!form.message.trim()) e.message = 'Votre message est requis'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setErrorMsg('')

    try {
      const formData = new URLSearchParams()
      formData.append('form-name', 'devis')
      formData.append('nom', form.nom)
      formData.append('email', form.email)
      if (form.telephone) formData.append('telephone', form.telephone)
      formData.append('message', form.message)
      if (produit) formData.append('produit', produit)

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ nom: '', email: '', telephone: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg('Une erreur est survenue. Réessayez.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Impossible d\'envoyer le formulaire.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#4A7C59]/10 border border-[#4A7C59]/30 rounded p-8 text-center">
        <p className="text-fluid-base font-medium text-[#4A7C59]">Demande envoyée ✓</p>
        <p className="text-sm text-texte-secondaire mt-2">Nous vous contacterons rapidement pour votre devis.</p>
        <Button variant="ghost" className="mt-4" onClick={() => setStatus('idle')}>
          Envoyer une autre demande
        </Button>
      </div>
    )
  }

  return (
    <form
      name="devis"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="devis" />
      <input type="hidden" name="produit" value={produit || ''} />
      <p className="hidden">
        <label>Ne pas remplir : <input name="bot-field" /></label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
            Nom *
          </label>
          <input
            id="nom"
            name="nom"
            required
            value={form.nom}
            onChange={(e) => { setForm({ ...form, nom: e.target.value }); if (errors.nom) setErrors((prev) => { const copy = { ...prev }; delete copy.nom; return copy }) }}
            className={`w-full bg-fond-clair border px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors min-h-[44px] ${errors.nom ? 'border-red-400' : 'border-[#ddd]'}`}
            placeholder="Votre nom"
          />
          {errors.nom && <p className="text-xs text-red-500 mt-1">{errors.nom}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors((prev) => { const copy = { ...prev }; delete copy.email; return copy }) }}
            className={`w-full bg-fond-clair border px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors min-h-[44px] ${errors.email ? 'border-red-400' : 'border-[#ddd]'}`}
            placeholder="votre@email.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="telephone" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
          Téléphone
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          value={form.telephone}
          onChange={(e) => setForm({ ...form, telephone: e.target.value })}
          className="w-full bg-fond-clair border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors min-h-[44px]"
          placeholder="06 92 03 35 53"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => { setForm({ ...form, message: e.target.value }); if (errors.message) setErrors((prev) => { const copy = { ...prev }; delete copy.message; return copy }) }}
          className={`w-full bg-fond-clair border px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors resize-y min-h-[132px] ${errors.message ? 'border-red-400' : 'border-[#ddd]'}`}
          placeholder="Décrivez votre projet : modèle souhaité, dimensions, tissu, etc."
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <Button type="submit" fullWidth disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </Button>

      <p className="text-xs text-texte-gris text-center">
        Vous pouvez aussi nous contacter via{' '}
        <a
          href="https://wa.me/262692033553"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-texte transition-colors"
        >
          WhatsApp
        </a>
      </p>
    </form>
  )
}
