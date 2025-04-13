import { motion } from "framer-motion"
import { ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

export function EcommerceCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Space Today
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Discover our curated collection of premium home decor and furniture. 
              Get 10% off your first purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 group"
              >
                <ShoppingBag className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Collections
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}