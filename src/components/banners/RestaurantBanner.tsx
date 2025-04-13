import { motion } from "framer-motion"
import { Clock, Award, Utensils } from "lucide-react"
import { Button } from "../ui/button"

export function RestaurantBanner() {
  return (
    <div className="relative min-h-[90vh] bg-[#1c1917]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60" />
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h1 className="font-serif text-6xl md:text-8xl mb-6">
            Culinary Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Experience the art of fine dining in an atmosphere of understated elegance
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="bg-[#c8a97e] hover:bg-[#b69669] text-black"
            >
              Reserve a Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-black"
            >
              View Menu
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Opening Hours",
                description: "Tue-Sun: 5:30 PM - 11:00 PM"
              },
              {
                icon: Award,
                title: "Michelin Starred",
                description: "Fine Dining Excellence"
              },
              {
                icon: Utensils,
                title: "Chef's Tasting",
                description: "7-Course Experience"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="text-center p-6 border border-[#c8a97e]/30 rounded-sm backdrop-blur-sm bg-black/20"
              >
                <div className="mx-auto w-12 h-12 rounded-full border-2 border-[#c8a97e] flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-[#c8a97e]" />
                </div>
                <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  )
}