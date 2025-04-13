import { motion } from "framer-motion"
import { Hammer, Shield, Clock } from "lucide-react"
import { Button } from "../ui/button"

export function ContractorBanner() {
  return (
    <div className="relative min-h-[90vh] bg-gray-100">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-yellow-400 px-4 py-2 mb-6">
              <span className="font-mono text-black text-sm">LICENSED & INSURED</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
              BUILDING
              <span className="block">EXCELLENCE</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              Professional construction services with a focus on quality, safety, and customer satisfaction
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-mono"
              >
                Get Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-mono"
              >
                Our Projects
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Hammer, label: "Quality Work" },
                { icon: Shield, label: "Licensed" },
                { icon: Clock, label: "On Time" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-yellow-400 flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-black" />
                  </div>
                  <p className="text-sm font-mono text-white">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                  alt="Construction work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] mt-8">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
                  alt="Finished project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-mono font-bold">25+ Years</p>
                  <p className="text-sm text-gray-600">Of Excellence</p>
                </div>
              </div>
              <div className="h-1 w-full bg-yellow-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}