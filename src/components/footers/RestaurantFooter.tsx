import { motion } from "framer-motion"
import { Clock, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function RestaurantFooter() {
  return (
    <footer className="bg-[#1c1917] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hours & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif text-[#c8a97e]">Hours & Location</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-[#c8a97e] mr-3 mt-1" />
                <div>
                  <h3 className="font-serif mb-2">Hours</h3>
                  <p className="text-gray-400">Lunch: Tue-Sun 11:30 AM - 2:30 PM</p>
                  <p className="text-gray-400">Dinner: Tue-Sun 5:30 PM - 10:00 PM</p>
                  <p className="text-gray-400">Closed Mondays</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#c8a97e] mr-3 mt-1" />
                <div>
                  <h3 className="font-serif mb-2">Location</h3>
                  <p className="text-gray-400">123 Dining Avenue</p>
                  <p className="text-gray-400">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif text-[#c8a97e]">Reservations</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#c8a97e] mr-3" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-[#c8a97e]">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#c8a97e] mr-3" />
                <a href="mailto:reservations@example.com" className="text-gray-400 hover:text-[#c8a97e]">
                  reservations@example.com
                </a>
              </div>
              <Button
                variant="outline"
                className="mt-4 border-[#c8a97e] text-[#c8a97e] hover:bg-[#c8a97e] hover:text-black"
              >
                Make a Reservation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-gray-800">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#c8a97e]">Newsletter</h2>
            <p className="text-gray-400">
              Subscribe to our newsletter for special events, new menu items, and other updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-gray-800 text-white placeholder:text-gray-600"
              />
              <Button className="bg-[#c8a97e] hover:bg-[#b69669] text-black">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#c8a97e]">Follow Us</h2>
            <p className="text-gray-400">
              Stay connected with us on social media for daily specials and behind-the-scenes content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#c8a97e]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c8a97e]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c8a97e]">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}