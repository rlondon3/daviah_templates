import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IndustrySelector } from './components/industry-selector'
import { Navigation } from './components/navigation'
import { EcommerceBanner } from './components/banners/EcommerceBanner'
import { RestaurantBanner } from './components/banners/RestaurantBanner'
import { DispensaryBanner } from './components/banners/DispensaryBanner'
import { BarbershopBanner } from './components/banners/BarbershopBanner'
import { TattooBanner } from './components/banners/TattooBanner'
import { ContractorBanner } from './components/banners/ContractorBanner'
import { RealEstateBanner } from './components/banners/RealEstateBanner'
import { EcommerceValueProp } from './components/value-propositions/EcommerceValueProp'
import { RestaurantValueProp } from './components/value-propositions/RestaurantValueProp'
import { DispensaryValueProp } from './components/value-propositions/DispensaryValueProp'
import { BarbershopValueProp } from './components/value-propositions/BarbershopValueProp'
import { TattooValueProp } from './components/value-propositions/TattooValueProp'
import { ContractorValueProp } from './components/value-propositions/ContractorValueProp'
import { RealEstateValueProp } from './components/value-propositions/RealEstateValueProp'
import { EcommerceCTA } from './components/cta/EcommerceCTA'
import { RestaurantCTA } from './components/cta/RestaurantCTA'
import { DispensaryCTA } from './components/cta/DispensaryCTA'
import { BarbershopCTA } from './components/cta/BarbershopCTA'
import { TattooCTA } from './components/cta/TattooCTA'
import { ContractorCTA } from './components/cta/ContractorCTA'
import { RealEstateCTA } from './components/cta/RealEstateCTA'
import { EcommerceGallery } from './components/galleries/EcommerceGallery'
import { RestaurantGallery } from './components/galleries/RestaurantGallery'
import { DispensaryGallery } from './components/galleries/DispensaryGallery'
import { BarbershopGallery } from './components/galleries/BarbershopGallery'
import { TattooGallery } from './components/galleries/TattooGallery'
import { ContractorGallery } from './components/galleries/ContractorGallery'
import { RealEstateGallery } from './components/galleries/RealEstateGallery'
import { EcommerceTestimonials } from './components/testimonials/EcommerceTestimonials'
import { RestaurantTestimonials } from './components/testimonials/RestaurantTestimonials'
import { DispensaryTestimonials } from './components/testimonials/DispensaryTestimonials'
import { BarbershopTestimonials } from './components/testimonials/BarbershopTestimonials'
import { TattooTestimonials } from './components/testimonials/TattooTestimonials'
import { ContractorTestimonials } from './components/testimonials/ContractorTestimonials'
import { RealEstateTestimonials } from './components/testimonials/RealEstateTestimonials'
import { EcommerceFAQ } from './components/faq/EcommerceFAQ'
import { RestaurantFAQ } from './components/faq/RestaurantFAQ'
import { DispensaryFAQ } from './components/faq/DispensaryFAQ'
import { BarbershopFAQ } from './components/faq/BarbershopFAQ'
import { TattooFAQ } from './components/faq/TattooFAQ'
import { ContractorFAQ } from './components/faq/ContractorFAQ'
import { RealEstateFAQ } from './components/faq/RealEstateFAQ'
import { EcommerceContact } from './components/contact/EcommerceContact'
import { RestaurantContact } from './components/contact/RestaurantContact'
import { DispensaryContact } from './components/contact/DispensaryContact'
import { BarbershopContact } from './components/contact/BarbershopContact'
import { TattooContact } from './components/contact/TattooContact'
import { ContractorContact } from './components/contact/ContractorContact'
import { RealEstateContact } from './components/contact/RealEstateContact'
import { EcommerceFooter } from './components/footers/EcommerceFooter'
import { RestaurantFooter } from './components/footers/RestaurantFooter'
import { DispensaryFooter } from './components/footers/DispensaryFooter'
import { BarbershopFooter } from './components/footers/BarbershopFooter'
import { TattooFooter } from './components/footers/TattooFooter'
import { ContractorFooter } from './components/footers/ContractorFooter'
import { RealEstateFooter } from './components/footers/RealEstateFooter'
import { type Industry } from './types/industry'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}

function App() {
  const [industry, setIndustry] = useState<Industry>('ecommerce')
  const [showNav, setShowNav] = useState(false)

  const BannerComponent = {
    ecommerce: EcommerceBanner,
    restaurant: RestaurantBanner,
    dispensary: DispensaryBanner,
    barbershop: BarbershopBanner,
    tattoo: TattooBanner,
    contractor: ContractorBanner,
    realestate: RealEstateBanner
  }[industry]

  const ValuePropComponent = {
    ecommerce: EcommerceValueProp,
    restaurant: RestaurantValueProp,
    dispensary: DispensaryValueProp,
    barbershop: BarbershopValueProp,
    tattoo: TattooValueProp,
    contractor: ContractorValueProp,
    realestate: RealEstateValueProp
  }[industry]

  const CTAComponent = {
    ecommerce: EcommerceCTA,
    restaurant: RestaurantCTA,
    dispensary: DispensaryCTA,
    barbershop: BarbershopCTA,
    tattoo: TattooCTA,
    contractor: ContractorCTA,
    realestate: RealEstateCTA
  }[industry]

  const GalleryComponent = {
    ecommerce: EcommerceGallery,
    restaurant: RestaurantGallery,
    dispensary: DispensaryGallery,
    barbershop: BarbershopGallery,
    tattoo: TattooGallery,
    contractor: ContractorGallery,
    realestate: RealEstateGallery
  }[industry]

  const TestimonialsComponent = {
    ecommerce: EcommerceTestimonials,
    restaurant: RestaurantTestimonials,
    dispensary: DispensaryTestimonials,
    barbershop: BarbershopTestimonials,
    tattoo: TattooTestimonials,
    contractor: ContractorTestimonials,
    realestate: RealEstateTestimonials
  }[industry]

  const FAQComponent = {
    ecommerce: EcommerceFAQ,
    restaurant: RestaurantFAQ,
    dispensary: DispensaryFAQ,
    barbershop: BarbershopFAQ,
    tattoo: TattooFAQ,
    contractor: ContractorFAQ,
    realestate: RealEstateFAQ
  }[industry]

  const ContactComponent = {
    ecommerce: EcommerceContact,
    restaurant: RestaurantContact,
    dispensary: DispensaryContact,
    barbershop: BarbershopContact,
    tattoo: TattooContact,
    contractor: ContractorContact,
    realestate: RealEstateContact
  }[industry]

  const FooterComponent = {
    ecommerce: EcommerceFooter,
    restaurant: RestaurantFooter,
    dispensary: DispensaryFooter,
    barbershop: BarbershopFooter,
    tattoo: TattooFooter,
    contractor: ContractorFooter,
    realestate: RealEstateFooter
  }[industry]

  return (
    <div className="min-h-screen bg-background">
      <Navigation industry={industry} visible={showNav} />
      
      <IndustrySelector
        selectedIndustry={industry}
        onIndustryChange={setIndustry}
        showNav={showNav}
        onToggleNav={() => setShowNav(!showNav)}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={industry}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          <BannerComponent />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ValuePropComponent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CTAComponent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <GalleryComponent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <TestimonialsComponent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FAQComponent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <ContactComponent />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <FooterComponent />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App