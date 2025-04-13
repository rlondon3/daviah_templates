import { motion } from "framer-motion"
import { Star, Palette, Clock } from "lucide-react"

const testimonials = [
  {
    name: "Ryan Black",
    role: "Art Collector",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    content: "Incredible artistry and attention to detail. They brought my vision to life perfectly.",
    rating: 5,
    style: "Neo-Traditional",
    artist: "Jake Black",
    piece: "Custom Sleeve",
    pieceImage: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Sofia Martinez",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    content: "Professional, creative, and extremely skilled. The best studio in town.",
    rating: 5,
    style: "Minimalist",
    artist: "Luna Chen",
    piece: "Geometric Design",
    pieceImage: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Mike Thompson",
    role: "Musician",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    content: "Clean, professional, and talented. Every piece is a masterpiece.",
    rating: 5,
    style: "Japanese",
    artist: "Alex Grey",
    piece: "Back Piece",
    pieceImage: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&w=150&h=150"
  }
]

export function TattooTestimonials() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-black text-white mb-4"
          >
            CLIENT STORIES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Real experiences from clients who trusted us with their permanent art
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-red-600/20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black"
            >
              <div className="p-8 border border-red-600/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-none overflow-hidden border border-red-600 mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-black">{testimonial.name}</h3>
                    <p className="text-red-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-red-600 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-400 mb-6">{testimonial.content}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Palette className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Style</p>
                      <p className="text-white">{testimonial.style}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Artist</p>
                      <p className="text-white">{testimonial.artist}</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square overflow-hidden border border-red-600/20">
                    <img
                      src={testimonial.pieceImage}
                      alt={testimonial.piece}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                    <p className="text-white text-sm">{testimonial.piece}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}