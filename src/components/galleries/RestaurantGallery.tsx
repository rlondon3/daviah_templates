import { motion } from "framer-motion"
import { Utensils, Clock, Star } from "lucide-react"

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    title: "Wagyu Beef Tartare",
    price: "$32",
    category: "Main Course",
    description: "Hand-cut wagyu beef with quail egg and traditional garnishes",
    prepTime: "25 min",
    spiceLevel: "Mild",
    dietary: "Gluten-Free"
  },
  {
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
    title: "Truffle Risotto",
    price: "$28",
    category: "Pasta & Risotto",
    description: "Carnaroli rice, black truffle, aged parmesan",
    prepTime: "30 min",
    spiceLevel: "None",
    dietary: "Vegetarian"
  },
  {
    image: "https://images.unsplash.com/photo-1533477359335-daddb89cf5b3?auto=format&fit=crop&w=800&q=80",
    title: "Lobster Thermidor",
    price: "$45",
    category: "Seafood",
    description: "Maine lobster, cognac cream sauce, gruyere cheese",
    prepTime: "35 min",
    spiceLevel: "Medium",
    dietary: "Seafood"
  },
  {
    image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=800&q=80",
    title: "Duck à l'Orange",
    price: "$38",
    category: "Main Course",
    description: "Roasted duck breast, orange sauce, seasonal vegetables",
    prepTime: "40 min",
    spiceLevel: "None",
    dietary: "None"
  },
  {
    image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&w=800&q=80",
    title: "Tuna Crudo",
    price: "$24",
    category: "Appetizer",
    description: "Yellowfin tuna, citrus, avocado, radish",
    prepTime: "15 min",
    spiceLevel: "Medium",
    dietary: "Gluten-Free"
  },
  {
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    title: "Seasonal Salad",
    price: "$18",
    category: "Salads",
    description: "Local greens, shaved vegetables, house vinaigrette",
    prepTime: "10 min",
    spiceLevel: "None",
    dietary: "Vegan"
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

export function RestaurantGallery() {
  return (
    <div className="py-24 bg-[#1c1917]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-[#c8a97e] mb-4"
          >
            Our Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A curated selection of our finest dishes, crafted with passion and precision
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
              className="group relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="border border-[#c8a97e]/30 bg-black/80 backdrop-blur-sm p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif text-white">{item.title}</h3>
                    <span className="text-[#c8a97e] font-serif">{item.price}</span>
                  </div>

                  <p className="text-gray-400 mb-4">{item.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 text-[#c8a97e] mr-2" />
                      {item.prepTime}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Star className="h-4 w-4 text-[#c8a97e] mr-2" />
                      {item.spiceLevel}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Utensils className="h-4 w-4 text-[#c8a97e] mr-2" />
                      {item.category}
                    </div>
                  </div>

                  {item.dietary !== "None" && (
                    <div className="mt-4 pt-4 border-t border-[#c8a97e]/20">
                      <span className="text-[#c8a97e] text-sm">{item.dietary}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}