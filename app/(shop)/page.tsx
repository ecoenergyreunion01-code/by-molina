import { Hero } from '@/components/accueil/Hero'
import { FamillesGrid } from '@/components/accueil/FamillesGrid'
import { AmbianceGrid } from '@/components/accueil/AmbianceGrid'
import { PourquoiMolina } from '@/components/accueil/PourquoiMolina'
import { ShowroomSection } from '@/components/accueil/ShowroomSection'
import { CoupDeCoeur } from '@/components/accueil/CoupDeCoeur'

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <FamillesGrid />
      <PourquoiMolina />
      <AmbianceGrid />
      <ShowroomSection />
      <CoupDeCoeur />
    </>
  )
}
