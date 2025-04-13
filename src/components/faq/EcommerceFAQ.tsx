import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ShoppingBag, Truck, CreditCard, Shield, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Domestic orders typically arrive within 3-5 business days. International shipping may take 7-14 business days. Express shipping options are available at checkout.",
    icon: Truck
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.",
    icon: CreditCard
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Products must be unused and in original packaging. Return shipping is free for defective items.",
    icon: ShoppingBag
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers.",
    icon: Shield
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can track your delivery status through our website or shipping carrier's platform.",
    icon: Clock
  }
]

export function EcommerceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about our products and services
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
                  "w-full text-left transition-all",
                  "bg-white rounded-2xl shadow-lg hover:shadow-xl"
                )}
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-6">
                      <faq.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          openIndex === index ? "mt-4 max-h-40" : "max-h-0"
                        )}
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 text-blue-600 transition-transform",
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