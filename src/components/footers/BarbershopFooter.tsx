import { motion } from "framer-motion"
import { Scissors, Clock, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function BarbershopFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Services & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-black uppercase tracking-wider">Services</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { service: "Classic Cut", price: "$35" },
                { service: "Beard Trim", price: "$25" },
                { service: "Hot Towel Shave", price: "$40" },
                { service: "Hair Design", price: "$50" },
                { service: "Kids Cut", price: "$25" },
                { service: "Royal Treatment", price: "$75" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-white/10 py-2">
                  <span className="text-gray-400">{item.service}</span>
                  <span className="text-white">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-black uppercase tracking-wider">Hours & Location</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-white mr-3" />
                <div>
                  <p className="text-gray-400">Tuesday - Friday: 10AM - 8PM</p>
                  <p className="text-gray-400">Saturday: 9AM - 6PM</p>
                  <p className="text-gray-400">Sunday - Monday: Closed</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-white mr-3" />
                <p className="text-gray-400">321 Style Blvd, Los Angeles, CA 90001</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-3" />
                <a href="tel:+15554567890" className="text-gray-400 hover:text-white">
                  (555) 456-7890
                </a>
              </div>
              <Button
                variant="outline"
                className="mt-4 border-white text-white hover:bg-white hover:text-black uppercase tracking-wider"
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-white/10">
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-wider">Stay Updated</h2>
            <p className="text-gray-400">
              Subscribe to our newsletter for grooming tips, special offers, and updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-white/20 text-white placeholder:text-gray-600"
              />
              <Button className="bg-white text-black hover:bg-gray-200 uppercase tracking-wider">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-wider">Follow Us</h2>
            <p className="text-gray-400">
              Follow us on social media for the latest styles and behind-the-scenes content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Classic Cuts Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}