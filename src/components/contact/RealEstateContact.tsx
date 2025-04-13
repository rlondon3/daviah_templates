import { useState } from "react"
import { motion } from "framer-motion"
import { Home, Clock, MapPin, Phone, Mail, Search } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const contactInfo = [
  {
    icon: Clock,
    label: "Office Hours",
    info: [
      "Monday - Friday: 9AM - 7PM",
      "Saturday: 10AM - 5PM",
      "Sunday: By Appointment"
    ]
  },
  {
    icon: MapPin,
    label: "Location",
    info: ["741 Property Lane", "Seattle, WA 98101"]
  },
  {
    icon: Phone,
    label: "Contact",
    info: [
      "(555) 789-0123",
      "sales@example.com"
    ]
  }
]

const agents = [
  {
    name: "Sarah Parker",
    role: "Luxury Homes",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    stats: "$50M+ in sales"
  },
  {
    name: "Michael Chen",
    role: "Commercial",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    stats: "15+ years exp."
  },
  {
    name: "Emily Rodriguez",
    role: "Residential",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    stats: "300+ homes sold"
  }
]

const propertyTypes = [
  "Single Family Home",
  "Condominium",
  "Luxury Estate",
  "Commercial Property",
  "Investment Property"
]

export function RealEstateContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [budget, setBudget] = useState("")
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
      setPhone("")
      setPropertyType("")
      setBudget("")
      setMessage("")
    }, 2000)
  }

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
            Connect With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Let's find your perfect property together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-6">
                      <item.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-serif mb-2">
                        {item.label}
                      </h3>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-gray-300">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-12">
                <h3 className="text-white font-serif mb-6">Our Expert Agents</h3>
                <div className="grid grid-cols-3 gap-6">
                  {agents.map((agent, index) => (
                    <div key={index} className="text-center">
                      <div className="aspect-square mb-3 rounded-lg overflow-hidden">
                        <img
                          src={agent.image}
                          alt={agent.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-white font-medium">{agent.name}</h4>
                      <p className="text-blue-400 text-sm">{agent.role}</p>
                      <p className="text-gray-400 text-xs">{agent.stats}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full h-9 bg-white/5 border border-white/20 rounded-md px-3 py-1 text-white placeholder:text-gray-400"
                      required
                    >
                      <option value="" className="bg-blue-900">Select Property Type</option>
                      {propertyTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-blue-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Budget Range"
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your property requirements"
                    rows={4}
                    className="w-full bg-white/5 border border-white/20 rounded-md p-4 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Schedule Consultation"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}