import { motion } from "framer-motion"
import { Star, Quote, ShoppingBag } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    content: "The quality of their products exceeded my expectations. Fast shipping and excellent customer service!",
    rating: 5,
    product: "Modern Lounge Chair",
    productImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Michael Chen",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    content: "Their curated collection helped me find exactly what I was looking for. Will definitely shop here again!",
    rating: 5,
    product: "Minimalist Desk Lamp",
    productImage: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150",
    content: "A go-to source for unique pieces that my clients love. The attention to detail is remarkable.",
    rating: 5,
    product: "Artisan Vase Collection",
    productImage: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=150&h=150"
  }
]

export function EcommerceTestimonials() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Real experiences from our valued customers who have transformed their spaces with our products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-blue-100 mb-4" />
                
                <p className="text-gray-600 mb-6">{testimonial.content}</p>

                <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                    <img
                      src={testimonial.productImage}
                      alt={testimonial.product}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Purchased</p>
                    <p className="font-medium text-gray-900">{testimonial.product}</p>
                  </div>
                  <ShoppingBag className="h-5 w-5 text-blue-600 ml-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}