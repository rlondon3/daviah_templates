import { motion } from "framer-motion"
import { Palette, MessageSquare } from "lucide-react"
import { Button } from "../ui/button"

export function TattooCTA() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-red-600/20 p-12 text-center"
          >
            <h2 className="text-6xl font-black text-white mb-6">
              MAKE YOUR MARK
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Turn your vision into a masterpiece. Book a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 group"
              >
                <MessageSquare className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              >
                <Palette className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}