import { motion } from "framer-motion"
import { Palette, Calendar, Instagram } from "lucide-react"
import { Button } from "../ui/button"

export function TattooNav() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-black text-white">
              INK
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Artists</a>
              <a href="#" className="text-gray-400 hover:text-white">Gallery</a>
              <a href="#" className="text-gray-400 hover:text-white">Flash</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-500">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-black">
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}