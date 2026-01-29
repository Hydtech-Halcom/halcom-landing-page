'use client';

import { motion } from 'framer-motion'
import { IconBriefcase, IconTrendingUp, IconStar, IconCheck } from '@/components/ui/aceternity-icons'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function WhyChoose() {
  const reasons = [
    {
      icon: IconBriefcase,
      title: 'Expert Teams',
      description: 'Management with 20+ years IT and M&E experience with certified professional experts.'
    },
    {
      icon: IconTrendingUp,
      title: 'Bank-Backed',
      description: 'Fund supported by international bank HSBC and national bank Mandiri for financial stability.'
    },
    {
      icon: IconStar,
      title: 'Strategic Partnerships',
      description: 'Strategic partnership with global players in IT industry for cutting-edge solutions.'
    },
    {
      icon: IconCheck,
      title: 'Total Solutions',
      description: 'Comprehensive IT solutions including convenience in implementing the solutions we provide.'
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Discover what makes Halcom the trusted partner for IT Infrastructure solutions
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                className="bg-white p-6 rounded-lg border border-border overflow-hidden"
              >
                <motion.div 
                  className="mb-4 flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-primary" />
                </motion.div>
                <motion.h3 
                  className="font-semibold text-lg text-foreground mb-2"
                  whileHover={{ x: 5 }}
                >
                  {reason.title}
                </motion.h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
