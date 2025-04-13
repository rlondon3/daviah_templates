import { motion } from "framer-motion"
import { Scissors, Clock, Star } from "lucide-react"
import { Button } from "../ui/button"

export function BarbershopBanner() {
  return (
    <div className="relative min-h-[90vh] bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70" />
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=80"
          alt="Barbershop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, transparent 1px)",
          backgroundSize: "10px 10px"
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <img
                src="https://images.unsplash.com/photo-1588771930296-88c2cb03f386?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Barbershop logo"
                className="w-24 h-24 rounded-full border-4 border-white/10"
              />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
              Classic Cuts
            </h1>
            <p className="text-xl text-gray-400 mb-8 uppercase tracking-wide">
              Where tradition meets style
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 uppercase tracking-wider"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 uppercase tracking-wider"
              >
                Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Premium Cuts",
                description: "Expert barbers with years of experience"
              },
              {
                icon: Clock,
                title: "Quick Service",
                description: "In and out in 30 minutes"
              },
              {
                icon: Star,
                title: "5-Star Rated",
                description: "Consistently top-rated service"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="text-center p-6 border border-white/10 backdrop-blur-sm bg-black/20"
              >
                <div className="mx-auto w-12 h-12 rounded-none border border-white/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}