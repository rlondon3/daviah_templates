import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function ContractorFooter() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Services & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-yellow-400 px-4 py-2">
              <h2 className="font-mono text-black text-xl">SERVICES</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Kitchen Remodeling",
                "Bathroom Renovation",
                "Home Additions",
                "Custom Homes",
                "Commercial Construction",
                "Project Management"
              ].map((service, index) => (
                <li key={index} className="flex items-center text-gray-600 font-mono">
                  <span className="h-1 w-4 bg-yellow-400 mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-block bg-yellow-400 px-4 py-2">
              <h2 className="font-mono text-black text-xl">CONTACT</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-600 mr-3" />
                <a href="tel:+15556789012" className="text-gray-600 hover:text-black font-mono">
                  (555) 678-9012
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-600 mr-3" />
                <a href="mailto:projects@example.com" className="text-gray-600 hover:text-black font-mono">
                  projects@example.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-600 mr-3" />
                <p className="text-gray-600 font-mono">987 Build St, Houston, TX 77001</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-yellow-600 mr-3" />
                <p className="text-gray-600 font-mono">Mon-Fri: 8AM-5PM</p>
              </div>
            </div>
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-mono">
              Get Quote
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block bg-yellow-400 px-4 py-2">
              <h2 className="font-mono text-black text-xl">CERTIFICATIONS</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Licensed Contractor",
                "Insured",
                "Bonded",
                "OSHA Certified",
                "Green Building",
                "Master Builder"
              ].map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mr-3">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <span className="text-gray-600 font-mono text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-gray-200">
          <div className="space-y-6">
            <div className="inline-block bg-yellow-400 px-4 py-2">
              <h2 className="font-mono text-black text-xl">NEWSLETTER</h2>
            </div>
            <p className="text-gray-600 font-mono">
              Subscribe to receive project updates, industry news, and special offers.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="font-mono"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-mono">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-yellow-400 px-4 py-2">
              <h2 className="font-mono text-black text-xl">FOLLOW US</h2>
            </div>
            <p className="text-gray-600 font-mono">
              Follow our social media for project updates and inspiration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yellow-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 font-mono">
            © {new Date().getFullYear()} Your Construction Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}