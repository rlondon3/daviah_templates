import { motion } from "framer-motion"
import { Leaf, Shield, Heart } from "lucide-react"
import { Button } from "../ui/button"

export function DispensaryBanner() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.1)_0%,rgba(6,95,70,0.1)_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-emerald-900">
              Natural Wellness
              <span className="block font-normal">For Modern Living</span>
            </h1>
            <p className="text-xl text-emerald-700 mb-8">
              Discover premium quality, lab-tested products tailored to your wellness journey
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Browse Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Leaf, label: "Premium Quality" },
                { icon: Shield, label: "Lab Tested" },
                { icon: Heart, label: "Expert Guidance" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-emerald-800">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=800&q=80"
                alt="Natural wellness products"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-emerald-900">100% Organic</p>
                  <p className="text-sm text-emerald-600">Certified Products</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}