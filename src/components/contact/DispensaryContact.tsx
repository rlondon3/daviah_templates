import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Clock, MapPin, Phone, Mail, Heart } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const contactInfo = [
  {
    icon: Clock,
    label: "Hours",
    info: [
      "Monday - Saturday: 10AM - 8PM",
      "Sunday: 11AM - 6PM"
    ]
  },
  {
    icon: MapPin,
    label: "Location",
    info: ["789 Wellness Ave", "Denver, CO 80202"]
  },
  {
    icon: Phone,
    label: "Contact",
    info: [
      "(555) 345-6789",
      "info@example.com"
    ]
  }
]

const consultants = [
  {
    name: "Dr. Sarah Green",
    role: "Wellness Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    specialty: "Holistic Health"
  },
  {
    name: "Michael Chen",
    role: "Product Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    specialty: "Natural Remedies"
  },
  {
    name: "Emily Rodriguez",
    role: "Wellness Advisor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    specialty: "Therapeutic Care"
  }
]

const consultationTypes = [
  "General Wellness",
  "Sleep Support",
  "Pain Management",
  "Stress Relief",
  "Custom Consultation"
]

export function DispensaryContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [consultationType, setConsultationType] = useState("")
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
      setConsultationType("")
      setMessage("")
    }, 2000)
  }

  return (
    <div className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-emerald-600 font-medium mb-2"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-light text-emerald-900 mb-4"
          >
            Schedule a Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-700 max-w-2xl mx-auto"
          >
            Let our experts help you find the perfect wellness solution
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-6">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-emerald-900 mb-2">
                        {item.label}
                      </h3>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-emerald-700">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-8 border-t border-emerald-100">
                  <h3 className="font-medium text-emerald-900 mb-6">Our Wellness Experts</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {consultants.map((consultant, index) => (
                      <div key={index} className="text-center">
                        <div className="aspect-square mb-3 rounded-full overflow-hidden">
                          <img
                            src={consultant.image}
                            alt={consultant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-medium text-emerald-900">{consultant.name}</h4>
                        <p className="text-emerald-600 text-sm">{consultant.role}</p>
                        <p className="text-emerald-500 text-xs">{consultant.specialty}</p>
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
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="border-emerald-200"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="border-emerald-200"
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
                      className="border-emerald-200"
                      required
                    />
                  </div>
                  <div>
                    <select
                      value={consultationType}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="w-full h-9 rounded-md border border-emerald-200 px-3 py-1"
                      required
                    >
                      <option value="">Select Consultation Type</option>
                      {consultationTypes.map((type, index) => (
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
                    placeholder="Tell us about your wellness goals"
                    rows={4}
                    className="w-full rounded-md border border-emerald-200 p-4"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
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