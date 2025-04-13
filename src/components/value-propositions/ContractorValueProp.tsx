import { motion } from "framer-motion"
import { Hammer, Shield, PenTool as Tool, Clock, Building, Award } from "lucide-react"

const features = [
  {
    icon: Hammer,
    title: "Expert Team",
    description: "Licensed and experienced professionals"
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete project protection"
  },
  {
    icon: Tool,
    title: "Quality Work",
    description: "Superior materials and craftsmanship"
  },
  {
    icon: Clock,
    title: "On Time",
    description: "Project completion when promised"
  },
  {
    icon: Building,
    title: "Custom Solutions",
    description: "Tailored to your needs"
  },
  {
    icon: Award,
    title: "Certified",
    description: "Industry-leading standards"
  }
]

export function ContractorValueProp() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block bg-yellow-400 px-4 py-2 mb-4">
            <span className="font-mono text-black text-sm">BUILDING EXCELLENCE</span>
          </motion.div>
          <h2 className="text-4xl font-bold font-mono text-gray-900 mb-4">
            QUALITY CRAFTSMANSHIP
          </h2>
          <p className="text-gray-600 font-mono">
            Professional construction services with a focus on quality and reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-xl"
            >
              <div className="p-8">
                <div className="h-16 w-16 bg-yellow-400 flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold font-mono text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-mono">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "25+", label: "Years Experience" },
            { value: "100%", label: "Satisfaction" },
            { value: "50+", label: "Awards" }
          ].map((stat, index) => (
            <div key={index} className="bg-white shadow-xl p-8 text-center">
              <div className="text-3xl font-bold font-mono text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}