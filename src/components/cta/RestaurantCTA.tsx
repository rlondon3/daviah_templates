import { motion } from "framer-motion"
import { Utensils, Calendar } from "lucide-react"
import { Button } from "../ui/button"

export function RestaurantCTA() {
  return (
    <section className="py-24 bg-[#1c1917]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#c8a97e]/30 p-12 text-center"
          >
            <h2 className="text-4xl font-serif text-[#c8a97e] mb-6">
              Experience Fine Dining
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join us for an unforgettable culinary journey. 
              Make your reservation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#c8a97e] hover:bg-[#b69669] text-black group"
              >
                <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Reserve a Table
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-black"
              >
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}