import { motion } from "framer-motion"
import { Check, Code, Rocket, Crown, Lock, CreditCard, Calendar, ShoppingCart, Mail, HelpCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import '../styles/colors.css'

const templatePackages = [
  {
    name: "Standard Template",
    price: "$499",
    description: "Perfect for small businesses needing a professional web presence",
    icon: Code,
    features: [
      "Industry-specific template",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media links",
      "Google Maps integration",
      "2 rounds of revisions",
      "Launch within 1 week"
    ]
  },
  {
    name: "Flexible Template",
    price: "$799",
    description: "Enhanced customization for growing businesses",
    icon: Rocket,
    features: [
      "Everything in Standard, plus:",
      "Advanced customization options",
      "Custom color schemes",
      "Premium font selection",
      "Image gallery optimization",
      "Basic analytics setup",
      "4 rounds of revisions",
      "Launch within 2 weeks"
    ]
  },
  {
    name: "Premium Custom",
    price: "$1,299",
    description: "Fully customized solution for unique business needs",
    icon: Crown,
    features: [
      "Everything in Flexible, plus:",
      "Complete design customization",
      "Custom animations",
      "Advanced SEO setup",
      "Performance optimization",
      "Content strategy guidance",
      "Unlimited revisions",
      "Launch within 3 weeks"
    ]
  }
]

const backendAddons = [
  {
    name: "User Authentication",
    price: "$399",
    icon: Lock,
    description: "Secure user accounts and login system"
  },
  {
    name: "Payment Processing",
    price: "$599",
    icon: CreditCard,
    description: "Integrated payment gateway setup"
  },
  {
    name: "Booking System",
    price: "$499",
    icon: Calendar,
    description: "Appointment scheduling functionality"
  },
  {
    name: "E-commerce",
    price: "$699",
    icon: ShoppingCart,
    description: "Full online store functionality"
  },
  {
    name: "Lead Generation",
    price: "$349",
    icon: Mail,
    description: "Advanced contact forms and lead capture"
  }
]

const faqs = [
  {
    question: "How long does it take to complete a website?",
    answer: "Timeline varies by package: Standard Template (1 week), Flexible Template (2 weeks), Premium Custom (3 weeks). This includes design, development, and revision phases."
  },
  {
    question: "What happens after I purchase a package?",
    answer: "We'll schedule an initial consultation to discuss your requirements, gather content, and create a project timeline. You'll receive regular updates throughout the process."
  },
  {
    question: "Can I customize my template further after launch?",
    answer: "Yes! You can purchase additional customization hours or upgrade to a maintenance plan that includes monthly changes."
  },
  {
    question: "Do you offer hosting services?",
    answer: "Yes, hosting is included with all our packages. We handle the technical details so you can focus on your business."
  }
]

export function PricingPage() {
  return (
    <div style={{ background: 'var(--steel-gray)' }} className="min-h-screen">
      <nav style={{ background: 'var(--deep-navy)' }} className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/daviah-logo.png" alt="Daviah IO" className="h-10 w-10" />
              <h1 className="text-2xl font-bold text-white">Daviah IO</h1>
            </Link>
            <Link to="/templates">
              <Button 
                variant="outline" 
                style={{ 
                  color: 'var(--accent-color)',
                  borderColor: 'var(--accent-color)'
                }}
                className="hover:bg-accent-color/10"
              >
                View Templates
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'var(--accent-color)' }}
            className="inline-block font-medium mb-2"
          >
            Professional Web Development
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--deep-navy)' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional websites tailored to your industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--deep-navy)' }}
            className="text-xl max-w-2xl mx-auto"
          >
            As a solo developer, I specialize in creating custom-tailored websites using industry-specific templates that can be enhanced with powerful backend features.
          </motion.p>
        </div>

        {/* Template Packages */}
        <div className="mb-24">
          <h2 style={{ color: 'var(--deep-navy)' }} className="text-3xl font-bold text-center mb-12">Template Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templatePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div style={{ background: 'var(--deep-navy)' }} className="p-8">
                  <pkg.icon style={{ color: 'var(--accent-color)' }} className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white/80 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline">
                    <span style={{ color: 'var(--accent-color)' }} className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-white/80 ml-2">one-time</span>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check style={{ color: 'var(--accent-color)' }} className="h-5 w-5 mr-3" />
                        <span style={{ color: 'var(--deep-navy)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://www.daviah.io/daviah/book" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full mt-8"
                  >
                    <Button 
                      className="w-full" 
                      style={{ 
                        background: 'var(--deep-navy)',
                        color: 'white'
                      }}
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Add-ons */}
        <div className="mb-24">
          <h2 style={{ color: 'var(--deep-navy)' }} className="text-3xl font-bold text-center mb-12">Backend Add-ons</h2>
          <div className="max-w-4xl mx-auto">
            {backendAddons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between py-6 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-center">
                  <div 
                    style={{ background: 'var(--deep-navy)' }} 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-6"
                  >
                    <addon.icon style={{ color: 'var(--accent-color)' }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--deep-navy)' }} className="text-xl font-bold mb-1">{addon.name}</h3>
                    <p style={{ color: 'var(--deep-navy)' }} className="text-sm opacity-80">{addon.description}</p>
                  </div>
                </div>
                <div style={{ color: 'var(--accent-color)' }} className="text-2xl font-bold">{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <h2 style={{ color: 'var(--deep-navy)' }} className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-8"
              >
                <h3 style={{ color: 'var(--deep-navy)' }} className="text-xl font-bold mb-2 flex items-center">
                  <HelpCircle style={{ color: 'var(--accent-color)' }} className="w-6 h-6 mr-2" />
                  {faq.question}
                </h3>
                <p style={{ color: 'var(--deep-navy)' }} className="ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: 'var(--deep-navy)' }}
          className="text-center rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to get started?</h2>
          <p className="text-xl mb-8 text-white/80">Book a free consultation to discuss your project</p>
          <a 
            href="https://www.daviah.io/daviah/book" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white hover:bg-white/90"
              style={{ color: 'var(--deep-navy)' }}
            >
              Schedule Consultation
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}