import { motion } from "framer-motion"
import { Star, Quote, Award } from "lucide-react"

const testimonials = [
  {
    name: "David Wilson",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    content: "An exceptional dining experience. The flavors are authentic and the presentation is stunning.",
    rating: 5,
    dish: "Wagyu Beef Tartare",
    dishImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=150&h=150",
    publication: "The Daily Gazette"
  },
  {
    name: "Lisa Martinez",
    role: "Regular Patron",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    content: "The atmosphere and service are as outstanding as the food. A true culinary gem.",
    rating: 5,
    dish: "Truffle Risotto",
    dishImage: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=150&h=150",
    visits: "50+ visits"
  },
  {
    name: "James Thompson",
    role: "Celebrity Chef",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    content: "Every dish tells a story. The chef's passion is evident in every bite.",
    rating: 5,
    dish: "Lobster Thermidor",
    dishImage: "https://images.unsplash.com/photo-1533477359335-daddb89cf5b3?auto=format&fit=crop&w=150&h=150",
    accolade: "Michelin Guide"
  }
]

export function RestaurantTestimonials() {
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
            Guest Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            What culinary connoisseurs and valued guests say about their dining experience with us.
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
              <div className="border border-[#c8a97e]/30 bg-black/40 backdrop-blur-sm p-8">
                <Quote className="h-8 w-8 text-[#c8a97e] mb-6" />
                
                <p className="text-gray-300 mb-8 font-serif italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#c8a97e] mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-white">{testimonial.name}</h3>
                    <p className="text-[#c8a97e]">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[#c8a97e] fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center p-4 border border-[#c8a97e]/20 bg-black/40">
                  <div className="w-16 h-16 overflow-hidden mr-4">
                    <img
                      src={testimonial.dishImage}
                      alt={testimonial.dish}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#c8a97e] text-sm">Featured Dish</p>
                    <p className="text-white font-serif">{testimonial.dish}</p>
                  </div>
                  <Award className="h-6 w-6 text-[#c8a97e] ml-auto" />
                </div>

                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">
                    {testimonial.publication || testimonial.visits || testimonial.accolade}
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