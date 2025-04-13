import { motion } from "framer-motion"
import { Hammer, Phone } from "lucide-react"
import { Button } from "../ui/button"

export function ContractorCTA() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl p-12 text-center"
          >
            <motion.div className="inline-block bg-yellow-400 px-4 py-2 mb-6">
              <span className="font-mono text-black text-sm">START YOUR PROJECT</span>
            </motion.div>
            <h2 className="text-4xl font-bold font-mono text-gray-900 mb-6">
              TRANSFORM YOUR SPACE
            </h2>
            <p className="text-xl text-gray-600 font-mono mb-8">
              Get a free quote for your construction or renovation project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-mono group"
              >
                <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-600 hover:bg-yellow-50 font-mono"
              >
                <Hammer className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}