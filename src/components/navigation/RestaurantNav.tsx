import { motion } from "framer-motion"
import { Menu, Wine, Calendar } from "lucide-react"
import { Button } from "../ui/button"

export function RestaurantNav() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-[#1c1917]"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-serif text-[#c8a97e]">
              Bistro
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white font-serif">About</a>
              <a href="#" className="text-gray-400 hover:text-white font-serif">Menu</a>
              <a href="#" className="text-gray-400 hover:text-white font-serif">Events</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-[#c8a97e] hover:text-white">
              <Menu className="h-5 w-5 mr-2" />
              Menu
            </Button>
            <Button variant="ghost" className="text-[#c8a97e] hover:text-white">
              <Wine className="h-5 w-5 mr-2" />
              Wine List
            </Button>
            <Button className="bg-[#c8a97e] hover:bg-[#b69669] text-black">
              <Calendar className="h-5 w-5 mr-2" />
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}