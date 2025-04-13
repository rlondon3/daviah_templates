import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Leaf, Shield, CreditCard, Clock, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What documents do I need to visit?",
    answer: "You'll need a valid government-issued photo ID proving you're 21 or older. For medical patients, please bring your valid medical card and physician's recommendation.",
    icon: Shield
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash and debit cards. Due to federal regulations, we cannot accept credit cards. We have an ATM on-site for your convenience.",
    icon: CreditCard
  },
  {
    question: "Do you offer consultations?",
    answer: "Yes, our wellness experts provide free consultations to help you find the right products for your needs. Walk-ins are welcome, or you can schedule a consultation in advance.",
    icon: Heart
  },
  {
    question: "Are your products tested?",
    answer: "Yes, all our products undergo rigorous third-party laboratory testing for potency and purity. Test results are available upon request for any product.",
    icon: Leaf
  },
  {
    question: "What are your operating hours?",
    answer: "We're open Monday through Saturday from 10AM to 8PM, and Sundays from 11AM to 6PM. Last orders are accepted 15 minutes before closing.",
    icon: Clock
  }
]

export function DispensaryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-light text-emerald-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-700 max-w-2xl mx-auto"
          >
            Find answers to common questions about our products and services
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
                <div className={cn(
                  "bg-white rounded-lg shadow-sm p-6 transition-all duration-200",
                  openIndex === index ? "shadow-md" : "hover:shadow-md"
                )}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-6">
                      <faq.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-emerald-900">
                        {faq.question}
                      </h3>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          openIndex === index ? "mt-4 max-h-40" : "max-h-0"
                        )}
                      >
                        <p className="text-emerald-700">{faq.answer}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 text-emerald-600 transition-transform",
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