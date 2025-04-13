import { motion } from "framer-motion"
import { Scissors, Calendar, Phone } from "lucide-react"
import { Button } from "../ui/button"

export function BarbershopNav() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-[#1a1a1a]"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-black text-white uppercase tracking-wider">
              Cuts
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white uppercase tracking-wide">Services</a>
              <a href="#" className="text-gray-400 hover:text-white uppercase tracking-wide">Gallery</a>
              <a href="#" className="text-gray-400 hover:text-white uppercase tracking-wide">Team</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-300">
              <Phone className="h-5 w-5 mr-2" />
              (555) 456-7890
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200 uppercase tracking-wider">
              <Calendar className="h-5 w-5 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}