import { motion } from "framer-motion"
import { ShoppingBag, TrendingUp, Truck } from "lucide-react"
import { Button } from "../ui/button"

export function EcommerceBanner() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_0%,rgba(147,51,234,0.1)_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_-20%,rgba(59,130,246,0.2),transparent_70%)]" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Discover Your Style
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Curated collections that blend comfort with contemporary design. Transform your space with our premium selection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <ShoppingBag className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Shop Now
              </Button>
              <Button size="lg" variant="outline">
                View Collections
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, label: "Trending Styles" },
                { icon: Truck, label: "Fast Delivery" },
                { icon: ShoppingBag, label: "Easy Returns" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Modern interior"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <p className="font-semibold">New Collection</p>
                  <p className="text-sm text-gray-500">Just Launched</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}