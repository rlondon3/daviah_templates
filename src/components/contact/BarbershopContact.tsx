import { useState } from "react"
import { motion } from "framer-motion"
import { Scissors, Clock, MapPin, Phone, Mail, Instagram } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const contactInfo = [
  {
    icon: Clock,
    label: "Hours",
    info: [
      "Tuesday - Friday: 10AM - 8PM",
      "Saturday: 9AM - 6PM",
      "Sunday - Monday: Closed"
    ]
  },
  {
    icon: MapPin,
    label: "Location",
    info: ["321 Style Blvd", "Los Angeles, CA 90001"]
  },
  {
    icon: Phone,
    label: "Phone",
    info: ["(555) 456-7890"]
  }
]

export function BarbershopContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
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
      setMessage("")
    }, 2000)
  }

  return (
    <div className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white uppercase tracking-tight mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto uppercase tracking-wide"
          >
            Book your appointment or ask us anything
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-6">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-wide mb-2">
                      {item.label}
                    </h3>
                    {item.info.map((line, i) => (
                      <p key={i} className="text-gray-400">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-center space-x-4 pt-8 border-t border-white/10">
                <a href="#" className="text-white hover:text-gray-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-transparent border-white/20 text-white placeholder:text-gray-600"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="bg-transparent border-white/20 text-white placeholder:text-gray-600"
                  required
                />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-transparent border border-white/20 rounded-none p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 uppercase tracking-wider"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}