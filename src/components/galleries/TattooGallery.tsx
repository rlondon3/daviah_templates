import { motion } from "framer-motion"
import { Palette, Clock, User } from "lucide-react"

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&w=800&q=80",
    title: "Japanese Dragon",
    artist: "Alex Grey",
    style: "Traditional Japanese",
    duration: "12 hours",
    category: "Full Back"
  },
  {
    image: "https://images.unsplash.com/photo-1543059080-0d1c6f50974f?auto=format&fit=crop&w=800&q=80",
    title: "Geometric Wolf",
    artist: "Luna Chen",
    style: "Geometric",
    duration: "6 hours",
    category: "Half Sleeve"
  },
  {
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80",
    title: "Floral Mandala",
    artist: "Jake Black",
    style: "Dotwork",
    duration: "8 hours",
    category: "Thigh Piece"
  },
  {
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80",
    title: "Neo Traditional Rose",
    artist: "Sofia Martinez",
    style: "Neo Traditional",
    duration: "4 hours",
    category: "Forearm"
  },
  {
    image: "https://images.unsplash.com/photo-1590246814982-176de3e7d3f1?auto=format&fit=crop&w=800&q=80",
    title: "Minimalist Lines",
    artist: "Luna Chen",
    style: "Minimalist",
    duration: "2 hours",
    category: "Wrist"
  },
  {
    image: "https://images.unsplash.com/photo-1586335927485-38f4657dde6d?auto=format&fit=crop&w=800&q=80",
    title: "Blackwork Portrait",
    artist: "Alex Grey",
    style: "Blackwork",
    duration: "10 hours",
    category: "Chest Piece"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
}

export function TattooGallery() {
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
            PORTFOLIO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of our finest custom tattoo designs
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-red-600/20"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-black overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="border border-red-600/20 bg-black/90 backdrop-blur-sm p-6">
                  <h3 className="text-white font-black text-xl mb-2">{item.title}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <User className="h-4 w-4 text-red-600 mr-2" />
                      {item.artist}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Palette className="h-4 w-4 text-red-600 mr-2" />
                      {item.style}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="h-4 w-4 text-red-600 mr-2" />
                      {item.duration}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}