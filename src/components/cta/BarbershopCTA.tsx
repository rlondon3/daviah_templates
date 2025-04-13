import { motion } from "framer-motion"
import { Scissors, Calendar } from "lucide-react"
import { Button } from "../ui/button"

export function BarbershopCTA() {
  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 p-12 text-center"
          >
            <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-6">
              Look Sharp, Feel Confident
            </h2>
            <p className="text-xl text-gray-400 uppercase tracking-wide mb-8">
              Book your appointment with our expert barbers today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 uppercase tracking-wider group"
              >
                <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 uppercase tracking-wider"
              >
                <Scissors className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}