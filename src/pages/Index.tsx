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
import WaitlistModal from '@/components/WaitlistModal';
import ComingSoonModal from '@/components/ComingSoonModal';

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const handleWaitlistClick = () => {
    console.log('Opening waitlist modal');
    setIsWaitlistOpen(true);
  };

  const handleWaitlistClose = () => {
    console.log('Closing waitlist modal');
    setIsWaitlistOpen(false);
  };

  const handleComingSoonClick = () => {
    console.log('Opening coming soon modal');
    setIsComingSoonOpen(true);
  };

  const handleComingSoonClose = () => {
    console.log('Closing coming soon modal');
    setIsComingSoonOpen(false);
  };

  useEffect(() => {
    console.log('Waitlist modal state:', isWaitlistOpen);
  }, [isWaitlistOpen]);

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
      <Navbar onWaitlistClick={handleComingSoonClick} />
      
      <main className="flex-grow">
        <HeroSection onWaitlistClick={handleWaitlistClick} />
        
        <ScrollFade direction="up" delay={200}>
          <section id="features">
            <FeaturesSection />
          </section>
        </ScrollFade>
        
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        <ScrollFade direction="up" delay={400}>
          <section id="technical">
            <TechnicalSection />
          </section>
        </ScrollFade>
        
        <ScrollFade direction="up" delay={500}>
          <CallToAction onWaitlistClick={handleWaitlistClick} />
        </ScrollFade>
      </main>
      
      <Footer />
      
      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={handleWaitlistClose}
      />

      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={handleComingSoonClose}
      />
    </div>
  );
};

export default Index;
