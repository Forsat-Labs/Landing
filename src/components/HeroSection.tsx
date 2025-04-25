import React, { useEffect, useState } from 'react';
import { Bitcoin, LineChart, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingMarkets from '@/components/FloatingMarkets';

// Create animated background particle grid component
const ParticleGrid = () => {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {particles.map((_, index) => {
        const size = Math.random() * 6 + 2; // 2-8px
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        
        return (
          <div 
            key={index}
            className="absolute rounded-full bg-forsat-orange/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animation: `grid-float 3s ease-in-out infinite ${delay}s`
            }}
          />
        );
      })}
    </div>
  );
};

// Custom cursor component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    
    const handleLinkHover = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || 
          e.target.closest('button') || e.target.closest('a')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleLinkHover);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        className={`custom-cursor ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'cursor-clicked' : ''} ${hovering ? 'cursor-hovering' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${clicked ? 0.8 : hovering ? 1.5 : 1})`,
        }}
      />
      <div
        className={`custom-cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'cursor-dot-clicked' : ''} ${hovering ? 'cursor-dot-hovering' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Set up intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-right, .reveal-left, .reveal-up')
      .forEach(el => observer.observe(el));
      
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-forsat-black text-white">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Background Elements */}
      <ParticleGrid />
      
      {/* 3D Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forsat-black/90 to-forsat-black z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover opacity-10"
        >
          <source src="/videos/crypto-bg.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-bitcoin/20 rounded-full filter blur-3xl"
             style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-forsat-blue/20 rounded-full filter blur-3xl"
             style={{ transform: `translateY(${scrollY * -0.05}px)` }}></div>
        <div className="absolute top-60 right-40 w-40 h-40 bg-forsat-pink/20 rounded-full filter blur-3xl"
             style={{ transform: `translateY(${scrollY * 0.08}px)` }}></div>
      </div>
      
      <div className="container relative z-10 px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div 
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-8 premium-text">
              <span className="block text-glow">Stake Your</span>
              <span className="gradient-text">Belief on Bitcoin</span>
            </h1>
            <p className="max-w-3xl mt-6 text-xl leading-relaxed text-gray-300">
              Forsat is the first fully decentralized prediction market built natively on Bitcoin. Create markets, trade outcomes, and earn rewards — all secured by Bitcoin mainnet.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold px-8 py-6 text-lg btn-glow btn-hover-slide shimmering-border micro-interaction">
                Launch App
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 bg-white/5 hover:bg-forsat-orange text-white font-semibold px-8 py-6 text-lg hover:border-forsat-orange btn-hover-slide micro-interaction"
              >
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center space-x-2 group hover-lift premium-shadow micro-interaction grain-overlay">
                <Bitcoin className="w-6 h-6 text-bitcoin group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Bitcoin Native</span>
              </div>
              <div className="flex items-center space-x-2 group hover-lift premium-shadow micro-interaction grain-overlay">
                <Lock className="w-6 h-6 text-bitcoin group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Non-Custodial</span>
              </div>
              <div className="flex items-center space-x-2 group hover-lift premium-shadow micro-interaction grain-overlay">
                <LineChart className="w-6 h-6 text-bitcoin group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Market Creation</span>
              </div>
              <div className="flex items-center space-x-2 group hover-lift premium-shadow micro-interaction grain-overlay">
                <Zap className="w-6 h-6 text-bitcoin group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">$FOR Rewards</span>
              </div>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:-translate-y-2 market-card-float card-3d premium-shadow">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Trading Platform" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
              />
              <div className="glass-card p-6 border-forsat-orange/20 relative z-10">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-forsat-orange/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-forsat-pink/10 rounded-full blur-2xl"></div>
                
                <div className="flex items-center justify-between mb-4 relative">
                  <div className="px-3 py-1 text-xs font-semibold bg-bitcoin/10 text-bitcoin rounded-full">
                    ACTIVE MARKET
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    <span className="text-bitcoin">11 BTC</span> Total Volume
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-6">Will BTC reach $150K by Q3 2025?</h3>
                
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">YES Price</span>
                    <span className="text-2xl font-bold text-green-500 font-mono">$0.64</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">NO Price</span>
                    <span className="text-2xl font-bold text-red-500 font-mono">$0.36</span>
                  </div>
                </div>
                
                <div className="w-full h-3 bg-gray-800 rounded-full mb-8 overflow-hidden">
                  <div className="h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '64%' }}></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white btn-hover-slide micro-interaction">
                    Buy YES
                  </Button>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white btn-hover-slide micro-interaction">
                    Buy NO
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Small decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg bg-bitcoin rotate-12 opacity-80 animate-pulse-slow"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-lg bg-forsat-pink -rotate-12 opacity-80 animate-pulse-slow delay-1000"></div>
          </div>
        </div>

        {/* Floating Markets Section - Now positioned below the hero content */}
        <div className="mt-16">
          <FloatingMarkets />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
