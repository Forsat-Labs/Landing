
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TechnicalSection from '@/components/TechnicalSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import { ScrollFade } from '@/components/ScrollAnimations';

const LoadingScreen = () => {
  return (
    <div className="loading-layer">
      <div className="loading-logo">
        <img src="/logo.svg" alt="Forsat Logo" width={120} height={120} />
      </div>
    </div>
  );
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for high-end effect
    const timer = setTimeout(() => {
      const loader = document.querySelector('.loading-layer');
      if (loader) loader.classList.add('hidden');
      
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }, 800);

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
    
    if (!loading) {
      setupScrollAnimations();
    }
    
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="min-h-screen flex flex-col page-transition">
      {loading && <LoadingScreen />}
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
