'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    alert('Thank you for your message! We will contact you soon.')
  }

  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Connect
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Contact us today to discuss your IT infrastructure needs and how we can help transform your business
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Phone */}
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-foreground-secondary">+62 778-461503</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-foreground-secondary">sales@pt-halcom.com</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-foreground-secondary">
                  The Central Business<br />
                  Sukajadi Blok B2 No 3A<br />
                  Batam, Kepulauan Riau<br />
                  29444, Indonesia
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="lg:col-span-2 space-y-4"
            variants={itemVariants}
          >
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={containerVariants}>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={containerVariants}>
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
              <ArrowRight size={20} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
