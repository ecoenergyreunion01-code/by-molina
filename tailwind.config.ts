import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fond: {
          DEFAULT: '#F7F5F2',
          fonce: '#EFEBE9',
          clair: '#FAF9F7',
        },
        texte: {
          DEFAULT: '#1A1A1A',
          secondaire: '#4A4A4A',
          gris: '#8A8A8A',
          barre: '#999999',
          prix: '#000000',
        },
        accent: {
          bois: '#C4A882',
          vert: '#5B7B5A',
          terracotta: '#C17060',
          bleu: '#6B8E9E',
        },
        badge: {
          tendance: '#D4A574',
          note: '#4A7C59',
          nouveau: '#6B8E9E',
          promo: '#C17060',
        },
        molina: {
          'velours-cotele': '#D4A574',
          'velours-lisse': '#5B7B5A',
          bouclette: '#E8DCD0',
          'velours-gros-grain': '#1B2A3B',
          'maille-3d': '#6B8E9E',
          'tissu-texture': '#C4A882',
          kaki: '#4A5D3E',
          camel: '#C4A882',
          sable: '#E8DCD0',
          taupe: '#8A8A8A',
          'vert-sapin': '#2D4A32',
          'vert-foret': '#1B3A2D',
          'vert-olive': '#5B7B5A',
          'bleu-marine': '#1B2A3B',
          'gris-fonce': '#4A4A4A',
          'blanc-casse': '#F2EFE8',
          'rose-poudre': '#D4A5A5',
          'jaune-moutarde': '#C4A84A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 1.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.5vw, 1.375rem)',
        'fluid-xl': 'clamp(1.375rem, 3vw, 1.75rem)',
        'fluid-2xl': 'clamp(1.75rem, 4vw, 2.5rem)',
        'fluid-3xl': 'clamp(2rem, 5vw, 3.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 6vw, 4rem)',
      },
      borderRadius: {
        sm: '2px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      minHeight: {
        touch: '44px',
      },
      minWidth: {
        touch: '44px',
      },
      boxShadow: {
        sticky: '0 -2px 12px rgba(0, 0, 0, 0.08)',
        card: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

export default config
