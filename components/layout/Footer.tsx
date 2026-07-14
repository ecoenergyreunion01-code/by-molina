import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  return (
    <footer className="border-t border-[#EFEBE9] mt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-10">
          <Logo />
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase mb-4">
              À propos
            </h3>
            <ul className="space-y-2 text-sm text-texte-secondaire">
              <li><Link href="/a-propos" className="hover:text-texte transition-colors">Notre histoire</Link></li>
              <li><Link href="/savoir-faire" className="hover:text-texte transition-colors">Savoir-faire</Link></li>
              <li><Link href="/materiaux" className="hover:text-texte transition-colors">Nos matériaux</Link></li>
              <li><Link href="/tissus" className="hover:text-texte transition-colors">Nos tissus</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase mb-4">
              Service client
            </h3>
            <ul className="space-y-2 text-sm text-texte-secondaire">
              <li><Link href="/contact" className="hover:text-texte transition-colors">Contact &amp; devis</Link></li>
              <li><Link href="/livraison" className="hover:text-texte transition-colors">Livraison</Link></li>
              <li><Link href="/retours" className="hover:text-texte transition-colors">Retours</Link></li>
              <li><Link href="/garantie" className="hover:text-texte transition-colors">Garantie</Link></li>
              <li>
                <a href="tel:+33692033553" className="hover:text-texte transition-colors">
                  Directeur Stéphane Molina — 06 92 03 35 53
                </a>
              </li>
              <li className="text-xs text-texte-gris/70 leading-relaxed pt-2">
                Venez découvrir nos modèles en magasin — sur rendez-vous.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase mb-4">
              Conseils
            </h3>
            <ul className="space-y-2 text-sm text-texte-secondaire">
              <li><Link href="/collection" className="hover:text-texte transition-colors">Guide des tailles</Link></li>
              <li><Link href="/tissus" className="hover:text-texte transition-colors">Guide des tissus</Link></li>
              <li><Link href="/entretien" className="hover:text-texte transition-colors">Entretien</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-texte-secondaire">
              <li>
                <a href="tel:+33692033553" className="hover:text-texte transition-colors">
                  06 92 03 35 53
                </a>
              </li>
              <li>
                <a href="mailto:contact@bymolina.com" className="hover:text-texte transition-colors">
                  contact@bymolina.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#EFEBE9] text-center text-sm text-texte-gris space-y-2">
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/mentions-legales" className="hover:text-texte transition-colors">Mentions légales</Link>
            <span className="text-texte-gris/30">|</span>
            <Link href="/cgv" className="hover:text-texte transition-colors">CGV</Link>
            <span className="text-texte-gris/30">|</span>
            <Link href="/confidentialite" className="hover:text-texte transition-colors">Confidentialité</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} By Molina. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
