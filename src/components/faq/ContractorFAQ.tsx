import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Hammer, Clock, Shield, Building, CreditCard, PenTool as Tool } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What types of projects do you handle?",
    answer: "We specialize in residential and commercial construction, including kitchen remodels, bathroom renovations, home additions, custom homes, and commercial build-outs. Our team has extensive experience in both new construction and renovation projects.",
    icon: Building
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Kitchen remodels typically take 4-6 weeks, bathroom renovations 2-3 weeks, and custom homes 6-8 months. We provide detailed timelines during the planning phase.",
    icon: Clock
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured. We maintain comprehensive liability insurance and workers' compensation coverage for all our projects and team members.",
    icon: Shield
  },
  {
    question: "What is your payment structure?",
    answer: "We typically require a 25% deposit to begin work, with progress payments at predetermined project milestones. Final payment is due upon completion and your satisfaction. We accept checks, bank transfers, and major credit cards.",
    icon: CreditCard
  },
  {
    question: "Do you provide warranties?",
    answer: "Yes, we offer a comprehensive 2-year warranty on workmanship and coordinate with manufacturers' warranties on materials. Extended warranty options are available for specific projects.",
    icon: Tool
  }
]

export function ContractorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            <span className="font-mono text-black text-sm">FREQUENTLY ASKED QUESTIONS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold font-mono text-gray-900 mb-4"
          >
            COMMON PROJECT QUESTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-mono"
          >
            Get answers to frequently asked questions about our construction services
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
                  "w-full text-left bg-white shadow-lg hover:shadow-xl transition-all",
                  openIndex === index && "shadow-xl"
                )}
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mr-6">
                      <faq.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold font-mono text-gray-900">
                        {faq.question}
                      </h3>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          openIndex === index ? "mt-4 max-h-40" : "max-h-0"
                        )}
                      >
                        <p className="text-gray-600 font-mono">{faq.answer}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 text-yellow-600 transition-transform",
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