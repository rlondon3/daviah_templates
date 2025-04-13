import { motion } from "framer-motion"
import { Home, MapPin, Ruler, BedDouble } from "lucide-react"

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    title: "Modern Townhouse",
    price: "$750,000",
    location: "Downtown",
    beds: 3,
    baths: 2.5,
    sqft: "2,200",
    type: "Townhouse"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    title: "Luxury High-Rise",
    price: "$1,200,000",
    location: "Financial District",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    type: "Condo"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    title: "Waterfront Villa",
    price: "$2,500,000",
    location: "Coastal",
    beds: 5,
    baths: 4.5,
    sqft: "4,500",
    type: "Single Family"
  },
  {
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    title: "Urban Loft",
    price: "$650,000",
    location: "Arts District",
    beds: 1,
    baths: 1,
    sqft: "1,100",
    type: "Loft"
  },
  {
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=800&q=80",
    title: "Garden Estate",
    price: "$1,850,000",
    location: "Suburban",
    beds: 4,
    baths: 3.5,
    sqft: "3,800",
    type: "Single Family"
  },
  {
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80",
    title: "Penthouse Suite",
    price: "$3,200,000",
    location: "City Center",
    beds: 3,
    baths: 3.5,
    sqft: "3,200",
    type: "Penthouse"
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

export function RealEstateGallery() {
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
            Featured Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Discover our collection of exceptional properties
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-serif text-xl">{item.title}</h3>
                    <span className="text-blue-300 font-serif text-xl">{item.price}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-300">
                      <BedDouble className="h-5 w-5 text-blue-400 mr-2" />
                      {item.beds} Beds
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Home className="h-5 w-5 text-blue-400 mr-2" />
                      {item.baths} Baths
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Ruler className="h-5 w-5 text-blue-400 mr-2" />
                      {item.sqft} sqft
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                      {item.location}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <span className="text-blue-300">{item.type}</span>
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