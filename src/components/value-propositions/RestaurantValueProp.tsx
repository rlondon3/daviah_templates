import { motion } from "framer-motion"
import { ChefHat, Utensils, Wine, Star, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: ChefHat,
    title: "Expert Chefs",
    description: "Culinary masters at your service"
  },
  {
    icon: Utensils,
    title: "Fresh Ingredients",
    description: "Locally sourced, seasonal produce"
  },
  {
    icon: Wine,
    title: "Curated Wines",
    description: "Extensive selection of fine wines"
  },
  {
    icon: Star,
    title: "Michelin Quality",
    description: "Award-winning cuisine"
  },
  {
    icon: Clock,
    title: "Perfect Timing",
    description: "Impeccable service, every time"
  },
  {
    icon: Heart,
    title: "Memorable Experience",
    description: "Creating moments to cherish"
  }
]

export function RestaurantValueProp() {
  return (
    <section className="py-24 bg-[#1c1917]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-[#c8a97e] mb-4">
            A Taste of Excellence
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience dining at its finest, where every dish tells a story and every meal creates memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c8a97e]/20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1c1917] p-8 border border-[#c8a97e]/20"
            >
              <div className="h-16 w-16 border border-[#c8a97e] flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-[#c8a97e]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-[#c8a97e]/20"
        >
          {[
            { value: "4.9★", label: "Customer Rating" },
            { value: "15+", label: "Years of Service" },
            { value: "1000+", label: "Weekly Guests" },
            { value: "200+", label: "Wine Selection" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#1c1917] p-8 text-center">
              <div className="text-3xl font-serif text-[#c8a97e] mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}