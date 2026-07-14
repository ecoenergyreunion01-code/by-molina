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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.nom.trim() || !form.email.trim() || !form.message.trim()) return
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, produit }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ nom: '', email: '', telephone: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Une erreur est survenue')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Impossible de contacter le serveur')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#4A7C59]/10 border border-[#4A7C59]/30 rounded p-8 text-center">
        <p className="text-fluid-base font-medium text-[#4A7C59]">Message envoyé ✓</p>
        <p className="text-sm text-texte-secondaire mt-2">Nous vous répondrons dans les plus brefs délais.</p>
        <Button variant="ghost" className="mt-4" onClick={() => setStatus('idle')}>
          Envoyer une autre demande
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
            Nom *
          </label>
          <input
            id="nom"
            required
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="w-full bg-fond-clair border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors min-h-[44px]"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-fond-clair border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors min-h-[44px]"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="telephone" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
          Téléphone
        </label>
        <input
          id="telephone"
          type="tel"
          value={form.telephone}
          onChange={(e) => setForm({ ...form, telephone: e.target.value })}
          className="w-full bg-fond-clair border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors min-h-[44px]"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-texte-gris uppercase tracking-wider mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-fond-clair border border-[#ddd] px-4 py-3 text-sm focus:outline-none focus:border-texte transition-colors resize-y min-h-[132px]"
          placeholder="Décrivez votre projet : modèle souhaité, dimensions, tissu, etc."
        />
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
          href="https://wa.me/33692033553"
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
