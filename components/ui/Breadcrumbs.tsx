import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-texte-gris mb-6">
      <Link href="/" className="hover:text-texte transition-colors">
        Accueil
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-[#ddd]">&rsaquo;</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-texte transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-texte font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
