'use client';

import React, { useEffect, useState } from 'react';
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
import { Loader2 } from 'lucide-react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  // Handle initial mount state
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Skip if still loading or not mounted yet
    if (isLoading || !hasMounted) return;

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

    // Safely access DOM only after client-side hydration is complete
    const animatedElements = document.querySelectorAll('.reveal-animation');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      if (observer) {
        animatedElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, [isLoading, hasMounted]);

  // During server-side rendering or initial client render, show the loading state
  if (!hasMounted || isLoading) {
    return (
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <Loader2 className='size-8 animate-spin' />
      </div>
    );
  }

  // Only render the full content after mounting on client
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