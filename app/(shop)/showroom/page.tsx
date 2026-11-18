import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Notre Showroom — Saint-Leu, La Réunion',
  description:
    'Venez découvrir nos canapés et fauteuils dans notre showroom à Saint-Leu, La Réunion. 18 tissus à toucher, 15 modèles à essayer. Sur rendez-vous.',
  openGraph: {
    title: 'Notre Showroom — By Molina',
    description: 'Canapés d\'exception à essayer sur place. Saint-Leu, La Réunion. Sur rendez-vous.',
  },
}

const promesses = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C10.5 4 6 8.5 6 14c0 7.5 10 14 10 14s10-6.5 10-14c0-5.5-4.5-10-10-10z" />
        <circle cx="16" cy="14" r="3" />
      </svg>
    ),
    titre: '18 tissus à toucher',
    description: 'Velours côtelé, bouclette, maille 3D, velours lisse — comparez-les en vrai, à portée de main.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="14" width="24" height="10" rx="2" />
        <path d="M8 14V10a8 8 0 0 1 16 0v4" />
        <path d="M16 18v4" />
        <circle cx="16" cy="18" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    titre: '15 modèles à essayer',
    description: 'Blocs modulaires, angles chaises longues, fauteuils — asseyez-vous, testez, trouvez votre confort.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="12" r="5" />
        <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" />
      </svg>
    ),
    titre: 'Conseil personnalisé',
    description: 'Stéphane vous guide sur le dimensionnement, les tissus et les coloris adaptés à votre intérieur.',
  },
]

const horaires = [
  { jour: 'Lundi — Vendredi', horaire: '9h00 — 18h00', ouvert: true },
  { jour: 'Samedi', horaire: '9h00 — 18h00', ouvert: true },
  { jour: 'Dimanche', horaire: 'Fermé', ouvert: false },
]

export default function ShowroomPage() {
  return (
    <div className="bg-fond">

      {/* ─── Hero ─── */}
      <section className="bg-fond-fonce">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-28 text-center">
          <Breadcrumbs items={[{ label: 'Showroom' }]} />
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-texte-gris font-medium mb-5">
              <span className="w-8 h-px bg-texte-gris/30" />
              Saint-Leu, La Réunion
              <span className="w-8 h-px bg-texte-gris/30" />
            </span>
            <h1 className="font-display text-fluid-3xl sm:text-fluid-4xl mb-5 text-balance">
              Venez voir, toucher, essayer
            </h1>
            <p className="text-texte-secondaire text-fluid-base leading-relaxed max-w-lg mx-auto mb-8">
              Rien ne remplace le réel. Dans notre showroom, vous découvrirez
              l&apos;ensemble de nos modèles, testerez les assises et choisirez
              vos tissus parmi 18 coloris.
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-touch items-center justify-center px-9 bg-texte text-fond text-xs tracking-[0.2em] uppercase font-medium hover:bg-texte/90 transition-all rounded-sm"
            >
              Réserver une visite
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3 Promesses ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {promesses.map((p) => (
            <div
              key={p.titre}
              className="group text-center px-4 py-8 bg-fond-clair rounded-sm border border-[#EFEBE9] hover:shadow-card-hover hover:border-transparent transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-fond-fonce rounded-full mb-6 group-hover:scale-105 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="font-display text-lg sm:text-xl mb-3">{p.titre}</h3>
              <p className="text-texte-secondaire text-sm leading-relaxed max-w-[260px] mx-auto">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Adresse + Horaires + Carte ─── */}
      <section className="bg-fond-fonce">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-texte-gris font-medium">
              Nous trouver
            </span>
            <h2 className="font-display text-fluid-2xl sm:text-fluid-3xl mt-3 mb-2">
              Notre showroom
            </h2>
            <p className="text-texte-secondaire text-fluid-sm">
              Sur rendez-vous, pour un accueil personnalisé
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">

            {/* Carte */}
            <div className="lg:col-span-3 order-1 lg:order-none">
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] bg-fond rounded-sm overflow-hidden border border-[#EFEBE9]">
                <iframe
                  src="https://www.google.com/maps?q=By+Molina+La+Réunion&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="By Molina — Nos showrooms à La Réunion"
                />
              </div>
            </div>

            {/* Infos */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-none">

              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-texte text-fond rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 2C6.2 2 4 4.2 4 7c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" />
                    <circle cx="9" cy="7" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-texte-gris font-medium mb-1">Adresse</p>
                  <p className="font-medium text-texte leading-relaxed">
                    7 E, 7 Chemin Maurice Courtin<br />
                    97424 Saint-Leu<br />
                    La Réunion
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-texte text-fond rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="9" r="7" />
                    <path d="M9 5v4l3 2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs tracking-wider uppercase text-texte-gris font-medium mb-2">Horaires</p>
                  <div className="space-y-1.5">
                    {horaires.map((h) => (
                      <div key={h.jour} className="flex justify-between items-center text-sm">
                        <span className="text-texte-secondaire">{h.jour}</span>
                        <span className={`font-medium ${h.ouvert ? 'text-texte' : 'text-texte-gris'}`}>
                          {h.horaire}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-texte text-fond rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5l6 4.5L15 5" />
                    <rect x="3" y="5" width="12" height="9" rx="1" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-texte-gris font-medium mb-1">Contact</p>
                  <p className="text-sm">
                    <a href="mailto:contact@bymolina.re" className="text-texte hover:underline underline-offset-2 transition-colors">
                      contact@bymolina.re
                    </a>
                  </p>
                  <p className="text-sm mt-1">
                    <a href="tel:+262692033553" className="text-texte hover:underline underline-offset-2 transition-colors">
                      06 92 03 35 53
                    </a>
                  </p>
                </div>
              </div>

              {/* Bouton itinéraire */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=7+E+7+Chemin+Maurice+Courtin+97424+Saint-Leu+La+Réunion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-touch items-center gap-2.5 px-7 bg-texte text-fond text-xs tracking-[0.2em] uppercase font-medium hover:bg-texte/90 transition-all rounded-sm w-full justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 13l4-1.5L12.5 4a1.5 1.5 0 0 0-2-2L3 9.5z" />
                  <path d="M9 3h4v4" />
                </svg>
                Itinéraire Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Nos autres adresses ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.25em] uppercase text-texte-gris font-medium">
            Nos adresses
          </span>
          <h2 className="font-display text-fluid-2xl sm:text-fluid-3xl mt-3 mb-2">
            Nous retrouver à La Réunion
          </h2>
          <p className="text-texte-secondaire text-fluid-sm">
            Trois points de présence pour vous accompagner
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { nom: 'Saint-Leu', adresse: '7 E, 7 Chemin Maurice Courtin', cp: '97424 Saint-Leu', url: '7+E+7+Chemin+Maurice+Courtin+97424+Saint-Leu+La+Réunion', embed: 'https://www.google.com/maps?q=7+E,+7+Chemin+Maurice+Courtin,+97424+Saint-Leu,+La+Réunion&output=embed' },
            { nom: 'Saint-Denis', adresse: '33 rue Jean Chatel', cp: '97400 Saint-Denis', url: '33+rue+Jean+Chatel+97400+Saint-Denis+La+Réunion', embed: 'https://www.google.com/maps?q=33+rue+Jean+Chatel,+97400+Saint-Denis,+La+Réunion&output=embed' },
            { nom: 'Saint-Pierre', adresse: '12 rue Victor Le Vigoureux', cp: '97410 Saint-Pierre', url: '12+rue+Victor+Le+Vigoureux+97410+Saint-Pierre+La+Réunion', embed: 'https://www.google.com/maps?q=12+rue+Victor+Le+Vigoureux,+97410+Saint-Pierre,+La+Réunion&output=embed' },
          ].map((a) => (
            <div
              key={a.nom}
              className="bg-fond-clair rounded-sm border border-[#EFEBE9] overflow-hidden"
            >
              <div className="w-full aspect-[4/3] bg-fond">
                <iframe
                  src={a.embed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Carte — ${a.nom}`}
                />
              </div>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-texte text-fond rounded-full mb-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 2C6.2 2 4 4.2 4 7c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" />
                    <circle cx="9" cy="7" r="2" />
                  </svg>
                </div>
                <p className="font-display text-lg mb-2">{a.nom}</p>
                <p className="text-texte-secondaire text-sm leading-relaxed">
                  {a.adresse}<br />
                  {a.cp}<br />
                  La Réunion
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${a.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-4 text-xs tracking-wider uppercase text-texte hover:underline underline-offset-2 transition-colors"
                >
                  Itinéraire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA final ─── */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:py-24 text-center">
        <h2 className="font-display text-fluid-2xl sm:text-fluid-3xl mb-4 text-balance">
          Prêt à découvrir nos modèles&nbsp;?
        </h2>
        <p className="text-texte-secondaire text-fluid-base leading-relaxed max-w-md mx-auto mb-8">
          Prenez rendez-vous — nous réservons un créneau dédié
          pour vous accueillir et répondre à toutes vos questions.
        </p>
        <Link
          href="/contact"
          className="inline-flex min-h-touch items-center justify-center px-9 bg-texte text-fond text-xs tracking-[0.2em] uppercase font-medium hover:bg-texte/90 transition-all rounded-sm"
        >
          Réserver une visite
        </Link>
      </section>
    </div>
  )
}
