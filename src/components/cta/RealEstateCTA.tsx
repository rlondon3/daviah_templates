import { motion } from "framer-motion"
import { Home, Phone } from "lucide-react"
import { Button } from "../ui/button"

export function RealEstateCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-12 text-center"
          >
            <h2 className="text-4xl font-serif text-white mb-6">
              Find Your Dream Home
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert agents guide you to your perfect property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 group"
              >
                <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Contact Agent
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Home className="mr-2 h-5 w-5" />
                View Listings
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}