import { motion } from "framer-motion"
import { ShoppingBag, Star, Truck } from "lucide-react"

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
    title: "Modern Lounge Chair",
    price: "$599",
    rating: 4.8,
    reviews: 124,
    category: "Furniture",
    availability: "In Stock",
    shipping: "Free Shipping"
  },
  {
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80",
    title: "Minimalist Desk Lamp",
    price: "$89",
    rating: 4.9,
    reviews: 89,
    category: "Lighting",
    availability: "In Stock",
    shipping: "2-3 Days"
  },
  {
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",
    title: "Artisan Vase Collection",
    price: "$129",
    rating: 4.7,
    reviews: 56,
    category: "Decor",
    availability: "Limited Stock",
    shipping: "Free Shipping"
  },
  {
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=800&q=80",
    title: "Geometric Wall Art",
    price: "$199",
    rating: 4.9,
    reviews: 78,
    category: "Art",
    availability: "In Stock",
    shipping: "3-5 Days"
  },
  {
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=800&q=80",
    title: "Scandinavian Sofa",
    price: "$1,299",
    rating: 4.8,
    reviews: 145,
    category: "Furniture",
    availability: "Pre-order",
    shipping: "Free Shipping"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    title: "Ceramic Dining Set",
    price: "$249",
    rating: 4.6,
    reviews: 92,
    category: "Dining",
    availability: "In Stock",
    shipping: "Free Shipping"
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

export function EcommerceGallery() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Featured Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover our curated selection of premium home decor and furniture
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
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-900">{item.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-xl font-bold text-blue-600">{item.price}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({item.reviews})</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <ShoppingBag className="h-4 w-4 text-blue-600 mr-2" />
                    {item.availability}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck className="h-4 w-4 text-blue-600 mr-2" />
                    {item.shipping}
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}