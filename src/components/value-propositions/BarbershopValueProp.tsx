import { motion } from "framer-motion"
import { Scissors, Clock, Star, Shield, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Scissors,
    title: "Expert Barbers",
    description: "Years of experience in classic and modern styles"
  },
  {
    icon: Clock,
    title: "Efficient Service",
    description: "No long waiting times"
  },
  {
    icon: Star,
    title: "Premium Products",
    description: "Top-quality grooming supplies"
  },
  {
    icon: Shield,
    title: "Clean & Safe",
    description: "Sterilized equipment, hygienic environment"
  },
  {
    icon: Award,
    title: "Skilled Team",
    description: "Certified master barbers"
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "Customized grooming experience"
  }
]

export function BarbershopValueProp() {
  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
            Grooming Excellence
          </h2>
          <p className="text-gray-400 uppercase tracking-wide">
            Where style meets tradition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] p-8"
            >
              <div className="h-16 w-16 border border-white/20 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10"
        >
          {[
            { value: "10k+", label: "Happy Clients" },
            { value: "15+", label: "Expert Barbers" },
            { value: "4.9★", label: "Rating" },
            { value: "10+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#1a1a1a] p-8 text-center">
              <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}