import { motion } from "framer-motion"
import { Star, Scissors, Clock } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    content: "The best haircuts I've ever had. They understand style and professionalism.",
    rating: 5,
    service: "Executive Cut & Style",
    barber: "Tony Richards",
    experience: "Regular client for 3 years"
  },
  {
    name: "Chris Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    content: "Creative, skilled, and always on point. My go-to place for a fresh look.",
    rating: 5,
    service: "Beard Sculpting",
    barber: "Mike Johnson",
    experience: "Weekly appointments"
  },
  {
    name: "Kevin Zhang",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150",
    content: "Consistent quality and great atmosphere. Worth every penny.",
    rating: 5,
    service: "Royal Treatment",
    barber: "Carlos Rodriguez",
    experience: "Monthly VIP member"
  }
]

export function BarbershopTestimonials() {
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
            Client Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto uppercase tracking-wide"
          >
            What our distinguished clients say about their grooming experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a1a1a]"
            >
              <div className="p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-none overflow-hidden border border-white/20 mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-white fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6">{testimonial.content}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Scissors className="h-5 w-5 text-white mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Preferred Service</p>
                      <p className="text-white">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-white mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Master Barber</p>
                      <p className="text-white">{testimonial.barber}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-400">
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