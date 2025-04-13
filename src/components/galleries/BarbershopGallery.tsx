import { motion } from "framer-motion"
import { Scissors, Clock, Star } from "lucide-react"

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    title: "Classic Cut",
    description: "Traditional barbering with modern style",
    category: "Haircuts",
    duration: "45 min",
    price: "$35"
  },
  {
    image: "https://images.unsplash.com/photo-1521322714240-ee1d383eab62?auto=format&fit=crop&w=800&q=80",
    title: "Beard Trim",
    description: "Expert beard sculpting and grooming",
    category: "Grooming",
    duration: "30 min",
    price: "$25"
  },
  {
    image: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?auto=format&fit=crop&w=800&q=80",
    title: "Hot Towel Shave",
    description: "Luxurious straight razor experience",
    category: "Shaving",
    duration: "45 min",
    price: "$40"
  },
  {
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=800&q=80",
    title: "Hair Design",
    description: "Creative cuts and styling",
    category: "Styling",
    duration: "60 min",
    price: "$50"
  },
  {
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80",
    title: "Royal Treatment",
    description: "Complete grooming package",
    category: "Premium",
    duration: "90 min",
    price: "$75"
  },
  {
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=800&q=80",
    title: "Kids Cut",
    description: "Gentle care for young gentlemen",
    category: "Children",
    duration: "30 min",
    price: "$25"
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function BarbershopGallery() {
  return (
    <div className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white uppercase tracking-tight mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto uppercase tracking-wide"
          >
            Premium grooming services for the modern gentleman
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-[#1a1a1a] overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="border border-white/20 bg-black/80 backdrop-blur-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold uppercase">{item.title}</span>
                    <span className="text-white font-mono">{item.price}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-white/80">
                      <Clock className="h-4 w-4 mr-2" />
                      {item.duration}
                    </div>
                    <div className="flex items-center text-white/80">
                      <Star className="h-4 w-4 mr-2" />
                      {item.category}
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