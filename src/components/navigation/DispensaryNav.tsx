import { motion } from "framer-motion"
import { Leaf, User, ShoppingBag, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function DispensaryNav() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-light text-emerald-900">
              Wellness
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-emerald-700 hover:text-emerald-900">Products</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900">Education</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900">Consultation</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-600" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 border-emerald-200"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-emerald-600">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart (0)
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}