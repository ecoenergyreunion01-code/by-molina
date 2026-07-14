import { Hero } from '@/components/accueil/Hero'
import { FamillesGrid } from '@/components/accueil/FamillesGrid'
import { AmbianceGrid } from '@/components/accueil/AmbianceGrid'
import { CoupDeCoeur } from '@/components/accueil/CoupDeCoeur'

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <FamillesGrid />
      <AmbianceGrid />
      <CoupDeCoeur />
    </>
  )
}
