import { motion } from "framer-motion"
import { Hammer, Phone, Mail } from "lucide-react"
import { Button } from "../ui/button"

export function ContractorNav() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-bold font-mono text-gray-900">
              BUILD
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-mono">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-mono">Projects</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-mono">About</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="font-mono">
              <Phone className="h-5 w-5 mr-2" />
              (555) 678-9012
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-mono">
              <Mail className="h-5 w-5 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}