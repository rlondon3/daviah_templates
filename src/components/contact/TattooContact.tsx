import { useState } from "react"
import { motion } from "framer-motion"
import { Palette, Clock, MapPin, Phone, Mail, Instagram } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const contactInfo = [
  {
    icon: Clock,
    label: "Studio Hours",
    info: [
      "Wednesday - Sunday: 12PM - 9PM",
      "Monday - Tuesday: By Appointment"
    ]
  },
  {
    icon: MapPin,
    label: "Location",
    info: ["654 Ink Ave", "Miami, FL 33101"]
  },
  {
    icon: Phone,
    label: "Contact",
    info: [
      "(555) 567-8901",
      "art@example.com"
    ]
  }
]

const artists = [
  {
    name: "Jake Black",
    style: "Realism",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Luna Chen",
    style: "Japanese",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Alex Grey",
    style: "Blackwork",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  }
]

export function TattooContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [artist, setArtist] = useState("")
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
      setArtist("")
      setMessage("")
    }, 2000)
  }

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-black text-white mb-4"
          >
            GET IN TOUCH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Book a consultation or ask us anything
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
                    <div className="w-12 h-12 border border-red-600 flex items-center justify-center mr-6">
                      <item.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-white font-black mb-2">
                        {item.label}
                      </h3>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-gray-400">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-red-600/20 pt-12">
                <h3 className="text-white font-black mb-6">Our Artists</h3>
                <div className="grid grid-cols-3 gap-4">
                  {artists.map((artist, index) => (
                    <div key={index} className="text-center">
                      <div className="aspect-square mb-3 border border-red-600/20">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-white font-bold">{artist.name}</h4>
                      <p className="text-red-600 text-sm">{artist.style}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-8 border-t border-red-600/20">
                <a href="#" className="text-red-600 hover:text-red-500">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-red-600 hover:text-red-500">
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
                  className="bg-transparent border-red-600/20 text-white placeholder:text-gray-600"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="bg-transparent border-red-600/20 text-white placeholder:text-gray-600"
                  required
                />
              </div>
              <div>
                <select
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="w-full h-9 bg-transparent border border-red-600/20 rounded-sm px-3 py-1 text-white placeholder:text-gray-600"
                  required
                >
                  <option value="" className="bg-black">Select Artist</option>
                  {artists.map((a, index) => (
                    <option key={index} value={a.name} className="bg-black">
                      {a.name} - {a.style}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your tattoo idea"
                  rows={4}
                  className="w-full bg-transparent border border-red-600/20 rounded-sm p-4 text-white placeholder:text-gray-600"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Book Consultation"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}