import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TechnicalSection from '@/components/TechnicalSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import { ScrollFade } from '@/components/ScrollAnimations';

const Index = () => {
  useEffect(() => {
    // Setup scroll-triggered animations
    const setupScrollAnimations = () => {
      const fadeElements = document.querySelectorAll('.fade-in-scroll');
      
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      fadeElements.forEach(element => {
        observer.observe(element);
      });
    };
    
    setupScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <BackgroundCanvas />
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <ScrollFade direction="up" delay={200}>
          <section id="features">
            <FeaturesSection />
          </section>
        </ScrollFade>
        
        <ScrollFade direction="up" delay={300}>
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
        </ScrollFade>
        
        <ScrollFade direction="up" delay={400}>
          <section id="technical">
            <TechnicalSection />
          </section>
        </ScrollFade>
        
        <ScrollFade direction="up" delay={500}>
          <CallToAction />
        </ScrollFade>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
