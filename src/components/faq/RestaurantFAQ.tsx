import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Utensils, Clock, CreditCard, MapPin, Wine } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Do you take reservations?",
    answer: "Yes, we accept reservations up to 30 days in advance. For parties of 6 or more, a reservation is required. Special events and private dining require advance booking.",
    icon: Clock
  },
  {
    question: "What is your dress code?",
    answer: "We maintain an elegant casual dress code. While formal attire is not required, we ask that guests refrain from wearing athletic wear, beachwear, or overly casual attire.",
    icon: Utensils
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely. Our chefs can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and allergies. Please inform us of any restrictions when making your reservation.",
    icon: Wine
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, digital payments (Apple Pay, Google Pay), and cash. For private events, we require a deposit via credit card.",
    icon: CreditCard
  },
  {
    question: "Is parking available?",
    answer: "We offer complimentary valet parking for dinner service. There is also a public parking garage one block away and street parking in the surrounding area.",
    icon: MapPin
  }
]

export function RestaurantFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to know about dining with us
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
                <div className="border border-[#c8a97e]/30 bg-black/40 backdrop-blur-sm p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 border border-[#c8a97e] flex items-center justify-center mr-6">
                      <faq.icon className="h-6 w-6 text-[#c8a97e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-white">
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
                        "h-6 w-6 text-[#c8a97e] transition-transform",
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