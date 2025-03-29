
import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  const googleFormUrl = "https://forms.gle/yourGoogleFormLink"; // Replace with your actual Google Form URL
  
  return (
    <section id="register" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-tedred/10 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="title">
            Secure Your Spot Today
          </h2>
          <p className="subtitle">
            Join us for an inspiring day of ideas worth spreading at TEDxCUET. Limited seats available!
          </p>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ted-button inline-flex items-center text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Register Now
          </a>
        </motion.div>
        
        <div className="mt-12 max-w-2xl mx-auto glass-card p-6 rounded-xl text-center text-white/80 reveal-animation">
          <p className="mb-4 text-lg">
            <span className="text-tedred font-bold">Limited seats available!</span> Registration includes:
          </p>
          <ul className="space-y-2 text-left mx-auto max-w-md">
            <li className="flex items-center">
              <span className="bg-tedred rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Full day access to all TEDxCUET talks
            </li>
            <li className="flex items-center">
              <span className="bg-tedred rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Networking opportunities with speakers
            </li>
            <li className="flex items-center">
              <span className="bg-tedred rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Lunch and refreshments
            </li>
            <li className="flex items-center">
              <span className="bg-tedred rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              TEDxCUET merchandise
            </li>
          </ul>
        </div>
        
        <div className="mt-8 text-center text-white/60 text-sm reveal-animation">
          <p>For group registrations or any queries, please contact us at <a href="mailto:info@tedxcuet.com" className="text-tedred hover:underline">info@tedxcuet.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
