import { motion } from "framer-motion"
import { Home, Search, Phone, MapPin } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function RealEstateNav() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-blue-900 to-indigo-900"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-serif text-white">
              Estates
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">Buy</a>
              <a href="#" className="text-gray-300 hover:text-white">Sell</a>
              <a href="#" className="text-gray-300 hover:text-white">Agents</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search properties..."
                className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white">
              <Phone className="h-5 w-5 mr-2" />
              Contact
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <MapPin className="h-5 w-5 mr-2" />
              View Listings
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}