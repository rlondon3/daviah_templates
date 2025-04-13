import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Palette, Clock, Shield, CreditCard, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How do I book a consultation?",
    answer: "Schedule a consultation through our website or visit the studio. We require a $50 deposit that goes toward your final tattoo cost. During the consultation, we'll discuss your design, placement, and pricing.",
    icon: Palette
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Bring a valid ID, reference materials for your design, and wear comfortable clothing that allows easy access to the tattoo area. Make sure to eat beforehand and stay hydrated.",
    icon: Heart
  },
  {
    question: "How do you price tattoos?",
    answer: "Pricing is based on size, complexity, and time required. Small pieces start at $150, while larger works are priced at $200 per hour. We provide detailed quotes during consultation.",
    icon: CreditCard
  },
  {
    question: "What about aftercare?",
    answer: "We provide detailed aftercare instructions and recommend specific products. Generally, keep the area clean, avoid direct sunlight, and follow the healing process guidelines for 2-4 weeks.",
    icon: Shield
  },
  {
    question: "How long does a session take?",
    answer: "Session length varies by design complexity. Small pieces might take 1-2 hours, while larger works could require multiple sessions. We'll discuss timing during your consultation.",
    icon: Clock
  }
]

export function TattooFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            FAQ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Everything you need to know about getting tattooed
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="border border-red-600/20 bg-black p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 border border-red-600 flex items-center justify-center mr-6">
                      <faq.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-white">
                        {faq.question}
                      </h3>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          openIndex === index ? "mt-4 max-h-40" : "max-h-0"
                        )}
                      >
                        <p className="text-gray-400">{faq.answer}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 text-red-600 transition-transform",
                        openIndex === index && "transform rotate-180"
                      )}
                    />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}