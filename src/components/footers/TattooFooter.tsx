import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function TattooFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Artists & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-black">ARTISTS</h2>
            <div className="grid grid-cols-2 gap-8">
              {[
                {
                  name: "Jake Black",
                  specialty: "Realism",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
                },
                {
                  name: "Luna Chen",
                  specialty: "Japanese",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
                },
                {
                  name: "Alex Grey",
                  specialty: "Blackwork",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
                },
                {
                  name: "Sofia Martinez",
                  specialty: "Neo Traditional",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
                }
              ].map((artist, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 border border-red-600">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-white">{artist.name}</h3>
                  <p className="text-red-600">{artist.specialty}</p>
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
            <h2 className="text-4xl font-black">CONTACT</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-3" />
                <a href="tel:+15555678901" className="text-gray-400 hover:text-white">
                  (555) 567-8901
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-3" />
                <a href="mailto:art@example.com" className="text-gray-400 hover:text-white">
                  art@example.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-red-600 mr-3" />
                <p className="text-gray-400">654 Ink Ave, Miami, FL 33101</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-black mb-4">HOURS</h3>
                <p className="text-gray-400">Wednesday - Sunday: 12PM - 9PM</p>
                <p className="text-gray-400">Monday - Tuesday: By Appointment</p>
              </div>
              <Button
                variant="outline"
                className="mt-4 border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full"
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-red-600/20">
          <div className="space-y-6">
            <h2 className="text-4xl font-black">NEWSLETTER</h2>
            <p className="text-gray-400">
              Subscribe for exclusive artwork previews, flash sales, and event updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-red-600/20 text-white placeholder:text-gray-600"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-black">FOLLOW</h2>
            <p className="text-gray-400">
              Follow us on social media for daily artwork and inspiration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-red-600/20">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ink Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}