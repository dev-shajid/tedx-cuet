'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import AboutEvent from '@/components/AboutEvent';
import SpeakersSection from '@/components/SpeakersSection';
import EventSchedule from '@/components/EventSchedule';
import EventHighlights from '@/components/EventHighlights';
import Partners from '@/components/Partners';
import VenueSection from '@/components/VenueSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    // Implement intersection observer for revealing animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with reveal-animation class
    const animatedElements = document.querySelectorAll('.reveal-animation');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <AboutEvent />
      <SpeakersSection />
      <EventSchedule />
      <EventHighlights />
      <Partners />
      <VenueSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
