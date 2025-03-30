
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/tedxcuet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com/tedxcuet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com/tedxcuet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/tedxcuet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com/tedxcuet",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    }
  ];
  
  const footerLinks = [
    {
      title: "Event Info",
      items: [
        { name: "About TEDx", href: "#about" },
        { name: "Speakers", href: "#speakers" },
        { name: "Schedule", href: "#schedule" },
        { name: "Venue", href: "#venue" },
        { name: "Register", href: "#register" }
      ]
    },
    {
      title: "Contact Us",
      items: [
        { name: "info@tedxcuet.com", href: "mailto:info@tedxcuet.com" },
        { name: "+880 1XXXXXXXXX", href: "tel:+8801XXXXXXXX" },
        { name: "CUET, Chittagong", href: "#venue" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "TED", href: "https://www.ted.com/", external: true },
        { name: "TEDx Program", href: "https://www.ted.com/tedx", external: true },
        { name: "CUET", href: "https://www.cuet.ac.bd/", external: true },
        { name: "Past Events", href: "#" },
      ]
    }
  ];
  
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="bg-tedred px-2 py-1 rounded">TEDx</span>
              <span>CUET</span>
            </a>
            
            <p className="text-white/70 mb-6 max-w-md">
              TEDxCUET brings together the brightest minds to share ideas worth spreading. Join us for a day of inspiration, innovation, and meaningful connections.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-tedred hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map(column => (
              <div key={column.title}>
                <h3 className="font-semibold text-white mb-4 text-lg">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map(link => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TEDxCUET. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-white/40">
          <p>This independent TEDx event is operated under license from TED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
