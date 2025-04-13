import { useState } from "react"
import { motion } from "framer-motion"
import { Hammer, Clock, MapPin, Phone, Mail, Building } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const contactInfo = [
  {
    icon: Building,
    label: "Main Office",
    info: ["987 Build St", "Houston, TX 77001"]
  },
  {
    icon: Clock,
    label: "Business Hours",
    info: [
      "Monday - Friday: 8AM - 5PM",
      "Saturday: By Appointment",
      "Sunday: Closed"
    ]
  },
  {
    icon: Phone,
    label: "Contact",
    info: [
      "(555) 678-9012",
      "projects@example.com"
    ]
  }
]

const services = [
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Home Additions",
  "Custom Homes",
  "Commercial Construction"
]

export function ContractorContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [projectType, setProjectType] = useState("")
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
      setProjectType("")
      setMessage("")
    }, 2000)
  }

  return (
    <div className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-400 px-4 py-2 mb-4"
          >
            <span className="font-mono text-black text-sm">GET IN TOUCH</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold font-mono text-gray-900 mb-4"
          >
            START YOUR PROJECT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-mono"
          >
            Request a quote or ask us anything about your construction needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white shadow-xl p-8">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mr-6">
                      <item.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold font-mono text-gray-900 mb-2">
                        {item.label}
                      </h3>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-gray-600 font-mono">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-bold font-mono text-gray-900 mb-4">Our Services</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <Hammer className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="text-gray-600 font-mono">{service}</span>
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
            <div className="bg-white shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="font-mono"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="font-mono"
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
                      className="font-mono"
                      required
                    />
                  </div>
                  <div>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-mono"
                      required
                    >
                      <option value="">Select Project Type</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Project Details"
                    rows={4}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-mono"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-mono"
                  disabled={submitted}
                >
                  {submitted ? "Request Sent!" : "Request Quote"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}