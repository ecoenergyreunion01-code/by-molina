type TypePlaceholder = 'hero' | 'ambiance' | 'produit' | 'detail'

const PALETTE: Record<string, string> = {
  cocooning: '#D4C5A9',
  scandinave: '#8BA888',
  boheme: '#C17060',
  minimaliste: '#6B8E9E',
  'lin-nature': '#D4C5A9',
  'gris-perle': '#B8B8B8',
  'vert-sauge': '#8BA888',
  beige: '#E8DCD0',
  'bleu-nuit': '#1B2A3B',
  terracotta: '#C17060',
}

function b64(svg: string): string {
  if (typeof btoa === 'function') return `data:image/svg+xml;base64,${btoa(svg)}`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

function heroSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#D4C5A9;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#D4C5A9;stop-opacity:0"/></linearGradient></defs>
    <rect width="1440" height="700" fill="#EFEBE9"/><rect width="1440" height="700" fill="url(#g)"/>
    <circle cx="200" cy="150" r="120" fill="#D4C5A9" opacity="0.08"/>
    <circle cx="1200" cy="500" r="200" fill="#6B8E9E" opacity="0.06"/>
    <path d="M320 350 L1120 350 L1120 450 C1120 470 1100 480 1080 480 L360 480 C340 480 320 470 320 450Z" fill="#D4C5A9"/>
    <path d="M300 350 L1140 350 L1140 280 C1140 260 1120 250 1100 250 L340 250 C320 250 300 260 300 280Z" fill="#D4C5A9" opacity="0.7"/>
    <rect x="270" y="270" width="35" height="200" rx="10" fill="#D4C5A9" opacity="0.85"/>
    <rect x="1135" y="270" width="35" height="200" rx="10" fill="#D4C5A9" opacity="0.85"/>
    <rect x="350" y="365" width="230" height="100" rx="8" fill="#D4C5A9" opacity="0.9"/>
    <rect x="600" y="365" width="230" height="100" rx="8" fill="#D4C5A9" opacity="0.9"/>
    <rect x="850" y="365" width="230" height="100" rx="8" fill="#D4C5A9" opacity="0.9"/>
    <path d="M100 600 Q130 500 160 550 Q140 480 180 450 Q150 520 120 580Z" fill="#8BA888" opacity="0.4"/>
    <path d="M1300 600 Q1330 500 1360 550 Q1340 480 1380 450 Q1350 520 1320 580Z" fill="#6B8E9E" opacity="0.3"/>
  </svg>`
}

function ambianceSVG(type: string): string {
  const c = PALETTE[type] || '#D4C5A9'
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
    <rect width="400" height="500" fill="${c}18"/>
    <rect x="50" y="40" width="300" height="4" rx="2" fill="${c}" opacity="0.3"/>
    <rect x="50" y="460" width="300" height="4" rx="2" fill="${c}" opacity="0.3"/>
    <path d="M80 210 L320 210 L320 280 C320 290 310 300 300 300 L100 300 C90 300 80 290 80 280Z" fill="${c}"/>
    <path d="M70 210 L330 210 L330 170 C330 160 320 150 310 150 L90 150 C80 150 70 160 70 170Z" fill="${c}" opacity="0.7"/>
    <rect x="55" y="160" width="18" height="130" rx="5" fill="${c}" opacity="0.85"/>
    <rect x="327" y="160" width="18" height="130" rx="5" fill="${c}" opacity="0.85"/>
    <path d="M330 380 Q350 340 370 360 Q360 330 380 320 Q355 350 340 380Z" fill="${c}" opacity="0.5"/>
    <rect x="60" y="320" width="280" height="120" rx="4" fill="${c}" opacity="0.12"/>
  </svg>`
}

function canapeSVG(c: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#EFEBE9"/>
    <path d="M60 80 L340 80 L340 130 L60 130Z" fill="${c}" opacity="0.7"/>
    <path d="M50 130 L350 130 L350 220 C350 230 340 240 330 240 L70 240 C60 240 50 230 50 220Z" fill="${c}"/>
    <rect x="35" y="90" width="20" height="140" rx="6" fill="${c}" opacity="0.85"/>
    <rect x="345" y="90" width="20" height="140" rx="6" fill="${c}" opacity="0.85"/>
    <rect x="65" y="135" width="130" height="95" rx="8" fill="${c}" opacity="0.9"/>
    <rect x="205" y="135" width="130" height="95" rx="8" fill="${c}" opacity="0.9"/>
    <line x1="200" y1="130" x2="200" y2="240" stroke="#1A1A1A" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.3"/>
    <rect x="70" y="238" width="10" height="35" rx="3" fill="#C4A882"/>
    <rect x="320" y="238" width="10" height="35" rx="3" fill="#C4A882"/>
    <rect x="195" y="238" width="8" height="30" rx="3" fill="#C4A882"/>
  </svg>`
}

function detailSVG(type: string): string {
  const svgs: Record<string, string> = {
    couture: `<path d="M20 20 L180 20" stroke="#1A1A1A" stroke-width="1" stroke-dasharray="4 4"/><path d="M20 40 L180 40" stroke="#1A1A1A" stroke-width="0.5"/><path d="M20 60 L180 60" stroke="#1A1A1A" stroke-width="0.5"/>`,
    accoudoir: `<rect x="30" y="20" width="140" height="100" rx="12" fill="#D4C5A9" stroke="#1A1A1A" stroke-width="0.5"/><rect x="45" y="35" width="110" height="70" rx="6" fill="#E8DCD0"/>`,
    pieds: `<rect x="40" y="40" width="20" height="80" rx="4" fill="#C4A882" stroke="#1A1A1A" stroke-width="0.5"/><rect x="140" y="40" width="20" height="80" rx="4" fill="#8A8A8A" stroke="#1A1A1A" stroke-width="0.5"/>`,
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140"><rect width="200" height="140" fill="#EFEBE9"/>${svgs[type] || svgs.couture}</svg>`
}

export function placeholderHero(): string {
  return b64(heroSVG())
}

export function placeholderAmbiance(type: string): string {
  return b64(ambianceSVG(type))
}

export function placeholderProduit(couleur?: string): string {
  return b64(canapeSVG(couleur || '#D4C5A9'))
}

export function placeholderDetail(type: string): string {
  return b64(detailSVG(type))
}

export function placeholderImage(type: TypePlaceholder, variante?: string): string {
  switch (type) {
    case 'hero': return placeholderHero()
    case 'ambiance': return placeholderAmbiance(variante || 'cocooning')
    case 'produit': return placeholderProduit(PALETTE[variante || ''] || '#D4C5A9')
    case 'detail': return placeholderDetail(variante || 'couture')
  }
}

export function extraireCouleur(nom: string): string {
  return PALETTE[nom] || '#D4C5A9'
}
