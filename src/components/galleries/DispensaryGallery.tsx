import { motion } from "framer-motion"
import { Leaf, Star, Heart } from "lucide-react"

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=800&q=80",
    title: "Wellness Tincture",
    price: "$65",
    category: "Tinctures",
    description: "Full-spectrum CBD oil for daily wellness",
    potency: "1000mg CBD",
    effects: "Calming",
    type: "Full Spectrum"
  },
  {
    image: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=800&q=80",
    title: "Relief Balm",
    price: "$45",
    category: "Topicals",
    description: "Soothing botanical blend for targeted relief",
    potency: "500mg CBD",
    effects: "Relief",
    type: "Broad Spectrum"
  },
  {
    image: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=800&q=80",
    title: "Sleep Gummies",
    price: "$35",
    category: "Edibles",
    description: "Natural sleep support with CBD and melatonin",
    potency: "25mg CBD/gummy",
    effects: "Sleep",
    type: "Isolate"
  },
  {
    image: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=800&q=80",
    title: "Focus Capsules",
    price: "$55",
    category: "Capsules",
    description: "Enhanced clarity and concentration blend",
    potency: "30mg CBD/capsule",
    effects: "Focus",
    type: "Broad Spectrum"
  },
  {
    image: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=800&q=80",
    title: "Recovery Oil",
    price: "$75",
    category: "Oils",
    description: "Post-workout recovery formula",
    potency: "1500mg CBD",
    effects: "Recovery",
    type: "Full Spectrum"
  },
  {
    image: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=800&q=80",
    title: "Calm Bundle",
    price: "$120",
    category: "Bundles",
    description: "Complete wellness package for stress relief",
    potency: "Various",
    effects: "Relaxation",
    type: "Mixed"
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

export function DispensaryGallery() {
  return (
    <div className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-emerald-600 font-medium mb-2"
          >
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-light text-emerald-900 mb-4"
          >
            Premium Wellness Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-700 max-w-2xl mx-auto"
          >
            Discover our curated selection of high-quality wellness products
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden bg-emerald-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-emerald-100 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-emerald-800">{item.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-medium text-emerald-900">{item.title}</h3>
                  <span className="text-lg font-medium text-emerald-600">{item.price}</span>
                </div>

                <p className="text-emerald-700 mb-4">{item.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-emerald-800">
                    <Leaf className="h-4 w-4 text-emerald-600 mr-2" />
                    {item.potency}
                  </div>
                  <div className="flex items-center text-sm text-emerald-800">
                    <Heart className="h-4 w-4 text-emerald-600 mr-2" />
                    {item.effects}
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-600">{item.type}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-emerald-400 fill-current" />
                      <Star className="h-4 w-4 text-emerald-400 fill-current" />
                      <Star className="h-4 w-4 text-emerald-400 fill-current" />
                      <Star className="h-4 w-4 text-emerald-400 fill-current" />
                      <Star className="h-4 w-4 text-emerald-400 fill-current" />
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