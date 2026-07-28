'use client'

import Link from 'next/link'

const footerLinks = {
  collection: [
    { label: 'Blocs modulaires', href: '/collection?famille=canape-classique' },
    { label: 'Angles chaises longues', href: '/collection?famille=canape-angle' },
    { label: 'Fauteuils', href: '/collection?famille=fauteuil' },
  ],
  decouvrir: [
    { label: 'Notre showroom', href: '/contact' },
    { label: 'Nos tissus', href: '/materiaux' },
    { label: 'Notre savoir-faire', href: '/savoir-faire' },
    { label: 'Notre histoire', href: '/a-propos' },
  ],
  pro: [
    { label: 'Devis professionnel', href: '/contact' },
    { label: 'Livraison', href: '/livraison' },
    { label: 'Retours', href: '/retours' },
    { label: 'Garantie', href: '/garantie' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/70">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Colonne Marque */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-xl text-white mb-1">By Molina</h3>
            <p className="text-xs tracking-wider uppercase text-white/40 mb-6">
              Canapés d&apos;exception
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="mt-0.5 shrink-0">
                  <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" />
                  <circle cx="8" cy="6" r="2" />
                </svg>
                <span>Showroom à La Réunion<br />Sur rendez-vous</span>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="mt-0.5 shrink-0">
                  <rect x="3" y="4" width="10" height="9" rx="1" />
                  <path d="M5 4V3a3 3 0 0 1 6 0v1" />
                </svg>
                <span>Lun — Sam : 9h00 — 18h00<br />Dimanche : fermé</span>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="mt-0.5 shrink-0">
                  <path d="M2 4l6 4.5L14 4" />
                  <rect x="2" y="4" width="12" height="9" rx="1" />
                </svg>
                <span>
                  <a href="mailto:contact@bymolina.re" className="hover:text-white transition-colors">contact@bymolina.re</a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="mt-0.5 shrink-0">
                  <path d="M3 3h10v10H3z" />
                  <path d="M3 7h10M7 3v10" />
                </svg>
                <span>
                  <a href="tel:+520692033553" className="hover:text-white transition-colors">06 92 03 35 53</a>
                </span>
              </div>
            </div>
          </div>

          {/* Colonne Collection */}
          <div>
            <h4 className="font-display text-sm text-white mb-5">Nos modèles</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.collection.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Découvrir */}
          <div>
            <h4 className="font-display text-sm text-white mb-5">Découvrir</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.decouvrir.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne Pro */}
          <div>
            <h4 className="font-display text-sm text-white mb-5">Professionnels</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.pro.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-5 py-3 transition-all rounded-sm"
              >
                Devis rapide
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 6h8M7 3l3 3-3 3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau bas */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} By Molina. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgv" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              CGV
            </Link>
            <Link href="/confidentialite" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
