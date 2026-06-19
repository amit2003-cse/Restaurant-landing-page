'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChoose from '@/components/WhyChoose';
import PopularDishes from '@/components/PopularDishes';
import Reviews from '@/components/Reviews';
import DiscountCTA from '@/components/DiscountCTA';
import OpeningHours from '@/components/OpeningHours';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <PopularDishes />
        <Reviews />
        <DiscountCTA />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
