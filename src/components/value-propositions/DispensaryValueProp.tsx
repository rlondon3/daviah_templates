import { motion } from "framer-motion"
import { Leaf, Shield, Heart, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Premium Quality",
    description: "Lab-tested, certified products"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Licensed and regulated dispensary"
  },
  {
    icon: Heart,
    title: "Expert Guidance",
    description: "Personalized wellness consultations"
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Efficient ordering and pickup"
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "Third-party lab tested"
  }
]

export function DispensaryValueProp() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-600 font-medium mb-2">
            Your Trusted Source
          </span>
          <h2 className="text-4xl font-light text-emerald-900 mb-4">
            Natural Wellness Solutions
          </h2>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Discover premium quality products tailored to your wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium text-emerald-900 mb-4">{feature.title}</h3>
              <p className="text-emerald-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Lab Tested" },
              { value: "1000+", label: "Products" },
              { value: "24/7", label: "Support" },
              { value: "5000+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-emerald-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}