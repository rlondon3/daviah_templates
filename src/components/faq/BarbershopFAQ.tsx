import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Scissors, Clock, CreditCard, MapPin, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a full range of premium grooming services including classic cuts, modern styles, hot towel shaves, beard trimming and styling, hair coloring, and our signature Royal Treatment package.",
    icon: Scissors
  },
  {
    question: "How long does a typical appointment take?",
    answer: "A standard haircut takes about 30-45 minutes. Beard services add 15-30 minutes, and our Royal Treatment can take up to 90 minutes for the full experience.",
    icon: Clock
  },
  {
    question: "Do you accept walk-ins?",
    answer: "While we welcome walk-ins, we recommend booking an appointment to ensure availability with your preferred barber and minimize wait times.",
    icon: MapPin
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, digital payments (Apple Pay, Google Pay), and cash. We also offer membership packages for regular clients.",
    icon: CreditCard
  },
  {
    question: "What safety measures do you follow?",
    answer: "We maintain strict hygiene standards with sterilized equipment, fresh towels for each client, and regular sanitization of all surfaces and tools.",
    icon: Shield
  }
]

export function BarbershopFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Common Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto uppercase tracking-wide"
          >
            Everything you need to know about our services
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
                className={cn(
                  "w-full text-left transition-colors",
                  "border border-white/10 hover:border-white/20",
                  openIndex === index && "border-white/20"
                )}
              >
                <div className="p-6 flex items-center">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-6">
                    <faq.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white uppercase tracking-wide">
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
                      "h-6 w-6 text-white transition-transform",
                      openIndex === index && "transform rotate-180"
                    )}
                  />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}