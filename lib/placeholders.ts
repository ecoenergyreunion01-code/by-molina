function svgDataUri(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

function baseSvg(w: number, h: number, bg: string, text: string, textColor: string = '#8A8A8A'): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter,sans-serif" font-size="14" fill="${textColor}">${text}</text>
</svg>`
}

export function placeholderProduit(couleur?: string): string {
  const bg = couleur || '#EFEBE9'
  return svgDataUri(baseSvg(800, 600, bg, 'By Molina'))
}

export function placeholderHero(): string {
  return svgDataUri(baseSvg(1400, 900, '#EFEBE9', 'By Molina — Collection 2026'))
}

export function placeholderAmbiance(slug: string): string {
  const labels: Record<string, string> = {
    cocooning: 'Cocooning',
    scandinave: 'Scandinave',
    boheme: 'Bohème',
    minimaliste: 'Minimaliste',
  }
  return svgDataUri(baseSvg(600, 750, '#EFEBE9', labels[slug] || slug))
}
