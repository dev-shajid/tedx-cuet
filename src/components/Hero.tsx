
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      spotlight.style.setProperty('--x', `${clientX}px`);
      spotlight.style.setProperty('--y', `${clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Add intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.reveal-animation');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #000000, #0E0E0E, #111111)',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Interactive Spotlight */}
      <div ref={spotlightRef} className="spotlight"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-tedred text-2xl md:text-3xl font-bold mb-2 reveal-animation">
          COMING SOON
        </h2>

        <h1 className="heading-gradient text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 reveal-animation" style={{ animationDelay: '0.2s' }}>
          TEDx<span className="text-white">CUET</span> 2025
        </h1>

        <p className="text-white/80 text-xl md:text-2xl mb-8 max-w-3xl mx-auto reveal-animation" style={{ animationDelay: '0.4s' }}>
          Ideas worth spreading at Chittagong University of Engineering & Technology
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation" style={{ animationDelay: '0.6s' }}>
          <a
            href="#register"
            className="ted-button"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 border border-white/30 rounded-lg transition-all duration-300 hover:border-white"
          >
            Learn More
          </a>
        </div>

        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
