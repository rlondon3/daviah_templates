import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Home, Key, Clock, CreditCard, Search, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How long does the buying process take?",
    answer: "The typical home buying process takes 30-45 days from offer acceptance to closing. This timeline can vary based on factors like financing type, property condition, and market conditions.",
    icon: Clock
  },
  {
    question: "What are the upfront costs?",
    answer: "Common upfront costs include earnest money (1-3% of purchase price), down payment (varies by loan type, typically 3-20%), closing costs (2-5% of loan amount), and inspection fees ($300-500).",
    icon: CreditCard
  },
  {
    question: "Do I need a real estate agent?",
    answer: "While not required, a real estate agent provides valuable expertise in market analysis, negotiations, paperwork, and legal requirements. Our agents are highly trained professionals who work to protect your interests.",
    icon: Search
  },
  {
    question: "What's the first step in buying a home?",
    answer: "The first step is getting pre-approved for a mortgage. This helps you understand your budget and shows sellers you're a serious buyer. We can recommend trusted local lenders to help you start.",
    icon: Key
  },
  {
    question: "Which areas do you serve?",
    answer: "We serve the greater metropolitan area and surrounding communities, specializing in luxury homes, commercial properties, and investment opportunities throughout the region.",
    icon: MapPin
  }
]

export function RealEstateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Get answers to common questions about buying and selling properties
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
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-6">
                      <faq.icon className="h-6 w-6 text-blue-400" />
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
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 text-blue-400 transition-transform",
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