import { motion } from "framer-motion"
import { Palette, Shield, Star } from "lucide-react"
import { Button } from "../ui/button"

export function TattooBanner() {
  return (
    <div className="relative min-h-[90vh] bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/80" />
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1920&q=80"
          alt="Tattoo studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-7xl md:text-9xl font-black text-white mb-6 leading-none"
              >
                INK
                <span className="block text-red-600">YOUR</span>
                STORY
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 mb-8"
              >
                Where artistry meets skin. Custom designs that tell your unique story.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Book Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  View Gallery
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-red-600/20">
                <img
                  src="https://images.unsplash.com/photo-1598371839873-a547a0e80392?auto=format&fit=crop&w=800&q=80"
                  alt="Tattoo art"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 right-8 bg-black/90 border border-red-600/20 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Palette, label: "Custom Design" },
                    { icon: Shield, label: "Safe Practice" },
                    { icon: Star, label: "Award Winning" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="mx-auto w-10 h-10 border border-red-600/40 flex items-center justify-center mb-2">
                        <item.icon className="h-5 w-5 text-red-600" />
                      </div>
                      <p className="text-xs text-gray-400">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}