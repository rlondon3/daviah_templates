import { motion } from "framer-motion"
import { Star, Home, MapPin, Calendar } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Adams",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    content: "Made our dream of homeownership a reality. Professional and caring throughout.",
    rating: 5,
    property: "Modern Townhouse",
    propertyImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=150&h=150",
    location: "Downtown",
    closingTime: "45 days"
  },
  {
    name: "Daniel Park",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    content: "Deep market knowledge and excellent negotiation skills. A trusted partner.",
    rating: 5,
    property: "Commercial Complex",
    propertyImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=150&h=150",
    location: "Business District",
    closingTime: "60 days"
  },
  {
    name: "Maria Garcia",
    role: "Home Seller",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150",
    content: "Sold our home above asking price in just one week. Incredible service!",
    rating: 5,
    property: "Luxury Villa",
    propertyImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&h=150",
    location: "Suburban",
    closingTime: "30 days"
  }
]

export function RealEstateTestimonials() {
  return (
    <div className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-white mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Real experiences from clients who found their perfect property with us
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
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-serif">{testimonial.name}</h3>
                    <p className="text-blue-300">{testimonial.role}</p>
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

                <p className="text-gray-300 mb-6">{testimonial.content}</p>

                <div className="relative mb-6">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={testimonial.propertyImage}
                      alt={testimonial.property}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-blue-400 mr-2" />
                      <p className="text-white font-serif">{testimonial.property}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-400">Closing Time</p>
                      <p className="text-white">{testimonial.closingTime}</p>
                    </div>
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