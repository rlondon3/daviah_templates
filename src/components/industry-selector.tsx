import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface IndustrySelectorProps {
  selectedIndustry: string
  onIndustryChange: (industry: Industry) => void
  showNav: boolean
  onToggleNav: () => void
}

type Industry = 'ecommerce' | 'restaurant' | 'dispensary' | 'barbershop' | 'tattoo' | 'contractor' | 'realestate'

const industries = [
  { id: 'ecommerce', label: 'E-Commerce', icon: '🛍️' },
  { id: 'restaurant', label: 'Restaurant', icon: '🍽️' },
  { id: 'dispensary', label: 'Dispensary', icon: '🌿' },
  { id: 'barbershop', label: 'Barbershop', icon: '💈' },
  { id: 'tattoo', label: 'Tattoo Studio', icon: '🎨' },
  { id: 'contractor', label: 'Contractor', icon: '🏗️' },
  { id: 'realestate', label: 'Real Estate', icon: '🏠' }
] as const

export function IndustrySelector({ selectedIndustry, onIndustryChange, showNav, onToggleNav }: IndustrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedIndustryData = industries.find(i => i.id === selectedIndustry)

  if (showNav) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          size="icon"
          className="rounded-full h-12 w-12 shadow-lg"
          onClick={onToggleNav}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
              className="text-left justify-between"
            >
              <span className="flex items-center">
                <span className="mr-2">{selectedIndustryData?.icon}</span>
                {selectedIndustryData?.label} Template
              </span>
              <ChevronDown className={cn(
                "ml-2 h-4 w-4 transition-transform",
                isOpen && "transform rotate-180"
              )} />
            </Button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className={cn(
                "absolute mt-2 w-[300px] bg-background rounded-lg shadow-lg border overflow-hidden",
                !isOpen && "hidden"
              )}
            >
              {industries.map((industry, index) => (
                <motion.button
                  key={industry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onIndustryChange(industry.id as Industry)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "w-full px-4 py-3 text-left hover:bg-accent flex items-center",
                    selectedIndustry === industry.id && "bg-accent"
                  )}
                >
                  <span className="mr-2 text-xl">{industry.icon}</span>
                  {industry.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline">
                Pricing
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={onToggleNav}
            >
              Show Navigation
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}