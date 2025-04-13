import { motion } from "framer-motion"
import { Clock, MapPin, Phone, Mail, Leaf, Heart, Shield } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function DispensaryFooter() {
  return (
    <footer className="bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Leaf,
              title: "Premium Quality",
              description: "Lab-tested products for your wellness"
            },
            {
              icon: Heart,
              title: "Expert Guidance",
              description: "Personalized wellness consultations"
            },
            {
              icon: Shield,
              title: "Safe & Secure",
              description: "Licensed and regulated dispensary"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start p-6 bg-white rounded-lg shadow-sm"
            >
              <feature.icon className="h-8 w-8 text-emerald-600 mr-4" />
              <div>
                <h3 className="font-medium text-emerald-900 mb-2">{feature.title}</h3>
                <p className="text-emerald-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* About */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-emerald-900">About Us</h2>
            <p className="text-emerald-700">
              Dedicated to providing natural wellness solutions through premium quality products and expert guidance.
            </p>
            <div className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=50&h=50"
                alt="License"
                className="h-12 w-12 object-contain"
              />
              <img
                src="https://images.unsplash.com/photo-1542525187-892c83a77f0f?auto=format&fit=crop&w=50&h=50"
                alt="Certification"
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-medium text-emerald-900 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {[
                "Products",
                "Education",
                "Lab Results",
                "Wellness Guide"
              ].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-emerald-700 hover:text-emerald-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-medium text-emerald-900 mb-4">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-emerald-600 mr-3" />
                <span className="text-emerald-700">Mon-Sat: 10AM-8PM</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                <a href="tel:+15551234567" className="text-emerald-700 hover:text-emerald-900">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                <a href="mailto:info@example.com" className="text-emerald-700 hover:text-emerald-900">
                  info@example.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-emerald-600 mr-3" />
                <span className="text-emerald-700">789 Wellness Ave</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-medium text-emerald-900 mb-4">Newsletter</h2>
            <p className="text-emerald-700 mb-4">
              Stay updated with new products, wellness tips, and special offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-emerald-200"
              />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-emerald-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-emerald-700 text-sm">
              © {new Date().getFullYear()} Your Dispensary. All rights reserved.
            </p>
            <div className="flex justify-start md:justify-end space-x-4">
              <a href="#" className="text-emerald-700 hover:text-emerald-900 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 text-sm">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}