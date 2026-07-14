'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  taille?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', taille = 'md', fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200',
          'select-none disabled:opacity-50 disabled:cursor-not-allowed',
          'hover:translate-y-[-1px] active:translate-y-0',
          'min-h-touch',
          {
            'bg-texte text-fond hover:opacity-90 active:scale-[0.98]': variant === 'primary',
            'border-2 border-texte text-texte hover:bg-texte hover:text-fond': variant === 'secondary',
            'text-texte hover:text-texte-gris': variant === 'ghost',
          },
          {
            'px-4 text-sm': taille === 'sm',
            'px-8 text-sm tracking-wider uppercase': taille === 'md',
            'px-10 text-base tracking-wider uppercase': taille === 'lg',
          },
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
