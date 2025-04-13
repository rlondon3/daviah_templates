import { EcommerceNav } from "./EcommerceNav"
import { RestaurantNav } from "./RestaurantNav"
import { DispensaryNav } from "./DispensaryNav"
import { BarbershopNav } from "./BarbershopNav"
import { TattooNav } from "./TattooNav"
import { ContractorNav } from "./ContractorNav.tsx"
import { RealEstateNav } from "./RealEstateNav"
import { type Industry } from "@/types/industry"

interface NavigationProps {
  industry: Industry
  visible: boolean
}

export function Navigation({ industry, visible }: NavigationProps) {
  if (!visible) return null

  const NavComponent = {
    ecommerce: EcommerceNav,
    restaurant: RestaurantNav,
    dispensary: DispensaryNav,
    barbershop: BarbershopNav,
    tattoo: TattooNav,
    contractor: ContractorNav,
    realestate: RealEstateNav
  }[industry]

  return <NavComponent />
}