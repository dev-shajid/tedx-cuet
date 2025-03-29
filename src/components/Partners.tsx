
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Partner {
  id: number;
  name: string;
  logo: string;
  type: 'platinum' | 'gold' | 'silver' | 'media';
}

const Partners = () => {
  const partners: Partner[] = [
    {
      id: 1,
      name: "Tech Innovations",
      logo: "https://placehold.co/200x100/333/FFF?text=Tech+Innovations",
      type: "platinum"
    },
    {
      id: 2,
      name: "Global Solutions",
      logo: "https://placehold.co/200x100/333/FFF?text=Global+Solutions",
      type: "platinum"
    },
    {
      id: 3,
      name: "Future Labs",
      logo: "https://placehold.co/200x100/333/FFF?text=Future+Labs",
      type: "gold"
    },
    {
      id: 4,
      name: "Connect Media",
      logo: "https://placehold.co/200x100/333/FFF?text=Connect+Media",
      type: "gold"
    },
    {
      id: 5,
      name: "Green Energy Co.",
      logo: "https://placehold.co/200x100/333/FFF?text=Green+Energy",
      type: "silver"
    },
    {
      id: 6,
      name: "Startup Hub",
      logo: "https://placehold.co/200x100/333/FFF?text=Startup+Hub",
      type: "silver"
    },
    {
      id: 7,
      name: "Daily Chronicle",
      logo: "https://placehold.co/200x100/333/FFF?text=Daily+Chronicle",
      type: "media"
    },
    {
      id: 8,
      name: "Tech Today",
      logo: "https://placehold.co/200x100/333/FFF?text=Tech+Today",
      type: "media"
    },
    {
      id: 9,
      name: "Digital Solutions",
      logo: "https://placehold.co/200x100/333/FFF?text=Digital+Solutions",
      type: "gold"
    },
    {
      id: 10,
      name: "AI Research",
      logo: "https://placehold.co/200x100/333/FFF?text=AI+Research",
      type: "silver"
    }
  ];
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  
  // Group all partners together for the grid display
  const allPartners = [...partners];
  
  return (
    <section id="partners" className="section-padding bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Trusted Partners
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're grateful to these amazing organizations for making TEDxCUET possible and helping us spread ideas worth sharing.
          </p>
        </motion.div>
        
        {/* Partners Grid - Dark mode compatible styling */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-gray-700 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.1
              }
            }
          }}
        >
          {allPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-gray-800/90 flex items-center justify-center p-8 aspect-square hover:bg-gray-900 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.4 }
                }
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-16 object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="mailto:partnerships@tedxcuet.com" 
            className="bg-tedred text-white py-3 px-6 rounded-lg inline-flex items-center hover:bg-tedred/90 transition-all duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
