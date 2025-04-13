import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function RealEstateFooter() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif">About Us</h2>
            <p className="text-gray-300">
              We are dedicated to helping you find your perfect property. With years of experience and market expertise, we make your real estate journey seamless.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif">Quick Links</h2>
            <ul className="space-y-3">
              {[
                "Featured Properties",
                "Search Properties",
                "Buying Guide",
                "Selling Guide",
                "Market Analysis",
                "Investment Tips"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href="tel:+15557890123" className="text-gray-300 hover:text-white">
                  (555) 789-0123
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a href="mailto:sales@example.com" className="text-gray-300 hover:text-white">
                  sales@example.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">741 Property Lane, Seattle, WA 98101</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-300">Mon-Sun: 9AM-8PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif">Newsletter</h2>
            <p className="text-gray-300">
              Subscribe to receive updates on new properties and market insights.
            </p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Featured Properties */}
        <div className="py-12 border-t border-white/10">
          <h2 className="text-2xl font-serif mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=200&h=200",
                title: "Modern Townhouse",
                price: "$750,000"
              },
              {
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&h=200",
                title: "Luxury High-Rise",
                price: "$1,200,000"
              },
              {
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&h=200",
                title: "Waterfront Villa",
                price: "$2,500,000"
              },
              {
                image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&h=200",
                title: "Urban Loft",
                price: "$650,000"
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-white">{property.title}</h3>
                  <p className="text-blue-400">{property.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Your Real Estate Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}