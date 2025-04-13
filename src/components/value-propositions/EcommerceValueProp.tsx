import { motion } from "framer-motion"
import { ShoppingBag, TrendingUp, Truck, Shield, CreditCard, Clock } from "lucide-react"

const features = [
  {
    icon: ShoppingBag,
    title: "Curated Selection",
    description: "Hand-picked products that meet our quality standards"
  },
  {
    icon: TrendingUp,
    title: "Latest Trends",
    description: "Stay ahead with our constantly updated collections"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free delivery on orders over $50"
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Protected payments and buyer guarantee"
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day hassle-free return policy"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Expert assistance whenever you need it"
  }
]

export function EcommerceValueProp() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Why Choose Our Store
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the difference quality makes. We're committed to providing the best shopping experience.
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
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 relative">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 py-4 px-8 bg-white rounded-full shadow-lg">
            {[
              { value: "50k+", label: "Happy Customers" },
              { value: "24/7", label: "Customer Support" },
              { value: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="px-8 border-r last:border-0 border-gray-200">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}