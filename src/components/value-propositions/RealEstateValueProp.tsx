import { motion } from "framer-motion"
import { Home, Search, Key, MapPin, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "Exclusive Listings",
    description: "Access to premium properties"
  },
  {
    icon: Search,
    title: "Market Insight",
    description: "Deep local market knowledge"
  },
  {
    icon: Key,
    title: "Easy Process",
    description: "Streamlined buying and selling"
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Properties in sought-after areas"
  },
  {
    icon: Shield,
    title: "Trusted Agency",
    description: "Licensed and experienced agents"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help"
  }
]

export function RealEstateValueProp() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-white mb-4">
            Your Dream Home Awaits
          </h2>
          <p className="text-gray-300">
            Expert guidance in real estate, helping you make the right choice
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
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
            >
              <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$1B+", label: "Properties Sold" },
              { value: "1000+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-serif text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}