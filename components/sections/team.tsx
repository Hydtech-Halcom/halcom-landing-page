'use client';

import { Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function Team() {
  const teamMembers = [
    {
      name: 'Ahmad Wijaya',
      role: 'Chief Executive Officer',
      bio: 'IT visionary with 25+ years in infrastructure and enterprise solutions.',
      email: 'ahmad@pt-halcom.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Budi Santoso',
      role: 'Technical Director',
      bio: 'Expert in cloud architecture and infrastructure design with 20+ years experience.',
      email: 'budi@pt-halcom.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Operations Manager',
      bio: 'Ensures seamless project execution and client satisfaction with proven methodologies.',
      email: 'siti@pt-halcom.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'Rudi Hermawan',
      role: 'Senior Solutions Architect',
      bio: 'Designs innovative IT solutions tailored to enterprise requirements and scaling needs.',
      email: 'rudi@pt-halcom.com',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop'
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
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Meet Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Expert Professionals
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Experienced consultants dedicated to your business success
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-lg overflow-hidden border border-border"
            >
              {/* Image Section */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <motion.h3 
                  className="text-lg font-semibold text-foreground mb-1"
                  whileHover={{ x: 5 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-foreground-secondary text-sm leading-relaxed mb-4 flex-grow">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <motion.a
                    href={`mailto:${member.email}`}
                    className="flex-1 py-2 px-3 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={16} />
                    <span className="hidden sm:inline">Email</span>
                  </motion.a>
                  <motion.button 
                    className="flex-1 py-2 px-3 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={16} />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
