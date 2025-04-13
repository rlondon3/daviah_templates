import { motion } from "framer-motion"
import { Home, Key, Search } from "lucide-react"
import { Button } from "../ui/button"

export function RealEstateBanner() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover exceptional properties in prime locations. Our expert agents are here to guide you through every step.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3  bg-white/10 border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                </select>
              </div>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Search Properties
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Premium Properties",
                description: "Curated selection of luxury homes"
              },
              {
                icon: Key,
                title: "Expert Agents",
                description: "Professional guidance throughout"
              },
              {
                icon: Search,
                title: "Smart Search",
                description: "Find your perfect match"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}