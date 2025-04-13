import { motion } from "framer-motion"
import { Leaf, MessageSquare } from "lucide-react"
import { Button } from "../ui/button"

export function DispensaryCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-12 text-center"
          >
            <h2 className="text-4xl font-light text-emerald-900 mb-6">
              Start Your Wellness Journey
            </h2>
            <p className="text-xl text-emerald-700 mb-8">
              Schedule a consultation with our experts and discover the perfect products for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 group"
              >
                <Leaf className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Shop Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Get Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}