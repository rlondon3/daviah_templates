import { motion } from "framer-motion"
import { Star, Hammer, Clock, CheckCircle } from "lucide-react"

const testimonials = [
  {
    name: "Robert Wilson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    content: "Exceptional workmanship and attention to detail. They transformed our home.",
    rating: 5,
    project: "Kitchen Remodel",
    projectImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=150&h=150",
    duration: "6 weeks",
    value: "$45,000"
  },
  {
    name: "Amanda Chen",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    content: "Professional, reliable, and quality work every time. Highly recommended.",
    rating: 5,
    project: "Commercial Renovation",
    projectImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=150&h=150",
    duration: "3 months",
    value: "$150,000"
  },
  {
    name: "Thomas Brown",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    content: "Their craftsmanship and project management are outstanding.",
    rating: 5,
    project: "Custom Home Build",
    projectImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=150&h=150",
    duration: "8 months",
    value: "$750,000"
  }
]

export function ContractorTestimonials() {
  return (
    <div className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-400 px-4 py-2 mb-4"
          >
            <span className="font-mono text-black text-sm">CLIENT TESTIMONIALS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold font-mono text-gray-900 mb-4"
          >
            SUCCESS STORIES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-mono"
          >
            See what our clients say about their construction experience
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
              className="bg-white shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-yellow-600 font-mono">{testimonial.role}</p>
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

                <p className="text-gray-600 mb-6 font-mono">{testimonial.content}</p>

                <div className="relative mb-6">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={testimonial.projectImage}
                      alt={testimonial.project}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 left-0 bg-yellow-400 px-3 py-1">
                    <span className="text-black font-mono text-sm">{testimonial.project}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500 font-mono">Duration</p>
                      <p className="text-gray-900 font-bold">{testimonial.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Hammer className="h-5 w-5 text-yellow-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500 font-mono">Value</p>
                      <p className="text-gray-900 font-bold">{testimonial.value}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-4 border-t border-gray-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-mono text-sm">Project Completed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}