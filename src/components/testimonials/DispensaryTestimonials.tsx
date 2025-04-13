import { motion } from "framer-motion"
import { Star, Heart, Leaf } from "lucide-react"

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Wellness Advocate",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150",
    content: "Knowledgeable staff who truly care about helping patients find the right products.",
    rating: 5,
    product: "CBD Wellness Oil",
    productImage: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=150&h=150",
    experience: "2 years as customer"
  },
  {
    name: "Jordan Lee",
    role: "Regular Client",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    content: "The product selection and quality control are unmatched. Always a pleasant experience.",
    rating: 5,
    product: "Organic Tincture",
    productImage: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=150&h=150",
    experience: "Monthly member"
  },
  {
    name: "Taylor Smith",
    role: "Health Coach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    content: "Their commitment to education and safety sets them apart. Highly recommended.",
    rating: 5,
    product: "Wellness Bundle",
    productImage: "https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=150&h=150",
    experience: "Certified partner"
  }
]

export function DispensaryTestimonials() {
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
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-light text-emerald-900 mb-4"
          >
            Wellness Journeys
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-700 max-w-2xl mx-auto"
          >
            Real stories from our community members about their experiences with our products and services.
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
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-emerald-900">{testimonial.name}</h3>
                    <p className="text-emerald-600">{testimonial.role}</p>
                  </div>
                  <Heart className="h-5 w-5 text-emerald-500 ml-auto" />
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-emerald-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-emerald-800 mb-6">{testimonial.content}</p>

                <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                    <img
                      src={testimonial.productImage}
                      alt={testimonial.product}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600">Favorite Product</p>
                    <p className="font-medium text-emerald-900">{testimonial.product}</p>
                  </div>
                  <Leaf className="h-5 w-5 text-emerald-500 ml-auto" />
                </div>

                <div className="mt-4 text-center">
                  <span className="text-sm text-emerald-600">
                    {testimonial.experience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}