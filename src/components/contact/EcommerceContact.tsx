import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, Clock, MapPin, Phone, Mail, TrendingUp } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const contactInfo = [
  {
    icon: Clock,
    label: "Customer Service Hours",
    info: [
      "Monday - Friday: 9AM - 6PM EST",
      "Saturday: 10AM - 4PM EST",
      "Sunday: Closed"
    ]
  },
  {
    icon: MapPin,
    label: "Location",
    info: ["123 Commerce St", "New York, NY 10001"]
  },
  {
    icon: Phone,
    label: "Contact",
    info: [
      "(555) 123-4567",
      "support@example.com"
    ]
  }
]

const departments = [
  {
    name: "Customer Support",
    role: "General Inquiries",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    response: "1-2 hours"
  },
  {
    name: "Technical Support",
    role: "Product Help",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    response: "4 hours"
  },
  {
    name: "Sales Team",
    role: "Business Inquiries",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    response: "Same day"
  }
]

const inquiryTypes = [
  "Order Status",
  "Returns & Refunds",
  "Product Information",
  "Technical Support",
  "Business Inquiry"
]

export function EcommerceContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [orderNumber, setOrderNumber] = useState("")
  const [inquiryType, setInquiryType] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Handle form submission
    setTimeout(() => {
      setSubmitted(false)
      setName("")
      setEmail("")
      setOrderNumber("")
      setInquiryType("")
      setMessage("")
    }, 2000)
  }

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We're here to help with any questions about your order
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-6">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.label}
                      </h3>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-6">Our Team</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {departments.map((dept, index) => (
                      <div key={index} className="text-center">
                        <div className="aspect-square mb-3 rounded-xl overflow-hidden">
                          <img
                            src={dept.image}
                            alt={dept.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium text-gray-900">{dept.name}</h4>
                        <p className="text-blue-600 text-sm">{dept.role}</p>
                        <p className="text-gray-500 text-xs">Response: {dept.response}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder="Order Number (Optional)"
                    />
                  </div>
                  <div>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                      required
                    >
                      <option value="">Select Inquiry Type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}