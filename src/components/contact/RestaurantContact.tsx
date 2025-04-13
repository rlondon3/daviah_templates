import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, Phone, Mail, Utensils, Calendar } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const contactInfo = [
  {
    icon: Clock,
    label: "Hours",
    info: [
      "Lunch: Tue-Sun 11:30 AM - 2:30 PM",
      "Dinner: Tue-Sun 5:30 PM - 10:00 PM",
      "Closed Mondays"
    ]
  },
  {
    icon: MapPin,
    label: "Location",
    info: ["123 Dining Avenue", "New York, NY 10001"]
  },
  {
    icon: Phone,
    label: "Contact",
    info: [
      "(555) 123-4567",
      "reservations@example.com"
    ]
  }
]

const staff = [
  {
    name: "Chef Michael Torres",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    accolades: "Michelin-Trained"
  },
  {
    name: "Lisa Wang",
    role: "Sommelier",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    accolades: "Master Sommelier"
  },
  {
    name: "James Smith",
    role: "Maître d'",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    accolades: "20 Years Experience"
  }
]

const occasions = [
  "Regular Dining",
  "Special Occasion",
  "Private Event",
  "Wine Tasting",
  "Chef's Table Experience"
]

export function RestaurantContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")
  const [occasion, setOccasion] = useState("")
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
      setDate("")
      setTime("")
      setGuests("")
      setOccasion("")
      setMessage("")
    }, 2000)
  }

  return (
    <div className="py-24 bg-[#1c1917]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-[#c8a97e] mb-4"
          >
            Make a Reservation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Join us for an unforgettable dining experience
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
                    <div className="w-12 h-12 border border-[#c8a97e] flex items-center justify-center mr-6">
                      <item.icon className="h-6 w-6 text-[#c8a97e]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-white mb-2">
                        {item.label}
                      </h3>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-gray-400">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#c8a97e]/30 pt-12">
                <h3 className="font-serif text-white mb-6">Meet Our Team</h3>
                <div className="grid grid-cols-3 gap-6">
                  {staff.map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="aspect-square mb-3 rounded-full overflow-hidden border-2 border-[#c8a97e]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-serif text-white">{member.name}</h4>
                      <p className="text-[#c8a97e] text-sm">{member.role}</p>
                      <p className="text-gray-500 text-xs">{member.accolades}</p>
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
            <div className="border border-[#c8a97e]/30 bg-black/40 backdrop-blur-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="bg-transparent border-[#c8a97e]/30 text-white placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="bg-transparent border-[#c8a97e]/30 text-white placeholder:text-gray-600"
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
                      className="bg-transparent border-[#c8a97e]/30 text-white placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="number"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      placeholder="Number of Guests"
                      min="1"
                      max="20"
                      className="bg-transparent border-[#c8a97e]/30 text-white placeholder:text-gray-600"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-transparent border-[#c8a97e]/30 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="bg-transparent border-[#c8a97e]/30 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full h-9 bg-transparent border border-[#c8a97e]/30 rounded-md px-3 py-1 text-white placeholder:text-gray-600"
                    required
                  >
                    <option value="" className="bg-[#1c1917]">Select Occasion</option>
                    {occasions.map((type, index) => (
                      <option key={index} value={type} className="bg-[#1c1917]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Special Requests"
                    rows={4}
                    className="w-full bg-transparent border border-[#c8a97e]/30 rounded-md p-4 text-white placeholder:text-gray-600"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#c8a97e] hover:bg-[#b69669] text-black font-serif"
                  disabled={submitted}
                >
                  {submitted ? "Reservation Sent!" : "Make Reservation"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}