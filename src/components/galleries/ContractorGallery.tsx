import { motion } from "framer-motion"
import { Hammer, Calendar, Home } from "lucide-react"

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
    title: "Modern Kitchen Remodel",
    type: "Kitchen",
    duration: "6 weeks",
    value: "$45,000",
    location: "Downtown"
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    title: "Office Building Renovation",
    type: "Commercial",
    duration: "3 months",
    value: "$150,000",
    location: "Business District"
  },
  {
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Home Construction",
    type: "Residential",
    duration: "8 months",
    value: "$750,000",
    location: "Suburban"
  },
  {
    image: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=800&q=80",
    title: "Bathroom Renovation",
    type: "Bathroom",
    duration: "4 weeks",
    value: "$25,000",
    location: "Urban"
  },
  {
    image: "https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=800&q=80",
    title: "Restaurant Remodel",
    type: "Commercial",
    duration: "2 months",
    value: "$200,000",
    location: "City Center"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    title: "Custom Home Build",
    type: "Residential",
    duration: "10 months",
    value: "$950,000",
    location: "Waterfront"
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

export function ContractorGallery() {
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
            <span className="font-mono text-black text-sm">PROJECT PORTFOLIO</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold font-mono text-gray-900 mb-4"
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-mono"
          >
            Showcasing our finest construction and renovation work
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
              className="group bg-white shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-yellow-400 px-3 py-1">
                  <span className="text-black font-mono text-sm">{item.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4">{item.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-yellow-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500 font-mono">Duration</p>
                      <p className="text-gray-900">{item.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Hammer className="h-5 w-5 text-yellow-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500 font-mono">Value</p>
                      <p className="text-gray-900">{item.value}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center pt-4 border-t border-gray-200">
                  <Home className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-gray-600 font-mono">{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}