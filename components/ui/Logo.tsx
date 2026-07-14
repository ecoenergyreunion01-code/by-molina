import Image from 'next/image'

export function Logo() {
  return (
    <Image
      src="/images/logo/logo-by-molina.jpg"
      alt="Logo by MOLINA — étiquette tissu brodée"
      width={280}
      height={64}
      className="h-10 w-auto lg:h-12"
      priority
    />
  )
}
