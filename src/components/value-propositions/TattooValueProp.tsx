import { motion } from "framer-motion"
import { Palette, Shield, Heart, Clock, Star, Award } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Unique artwork for every client"
  },
  {
    icon: Shield,
    title: "Safe Practice",
    description: "Sterile environment and new needles"
  },
  {
    icon: Star,
    title: "Award-Winning",
    description: "Recognized artistic excellence"
  },
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Dedicated to your vision"
  },
  {
    icon: Clock,
    title: "Detailed Process",
    description: "Thorough consultation and aftercare"
  },
  {
    icon: Award,
    title: "Expert Artists",
    description: "Years of experience in various styles"
  }
]

export function TattooValueProp() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-black text-white mb-4">
            ART THAT LASTS FOREVER
          </h2>
          <p className="text-gray-400">
            Your vision, our expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-red-600/20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-8 border border-red-600/20"
            >
              <div className="h-16 w-16 border border-red-600 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-red-600/20"
        >
          {[
            { value: "1000+", label: "Happy Clients" },
            { value: "100%", label: "Safety Record" },
            { value: "20+", label: "Years Experience" },
            { value: "50+", label: "Awards Won" }
          ].map((stat, index) => (
            <div key={index} className="bg-black p-8 text-center">
              <div className="text-3xl font-black text-red-600 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}