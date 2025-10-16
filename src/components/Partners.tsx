import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";

// Partner data with logo information
const partnerData = [
  {
    id: 1,
    name: "Pyth Network",
    logo: "/partners/Pyth Logotype_Light.svg",
    description: "Real-time market data"
  },
  {
    id: 2,
    name: "DotSwap", 
    logo: "/partners/dotswap_logo_text_168_34.svg",
    description: "Decentralized exchange"
  }
];

const Partners: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Only observe elements within the partners section
    document.querySelectorAll('.partners-section .reveal-up')
      .forEach(el => observer.observe(el));
      
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative z-10 partners-section">
      <div className="text-center mb-8 reveal-up" style={{ transitionDelay: '1200ms' }}>
        <h3 className="text-xl font-semibold text-white mb-2">Trusted Partners</h3>
      </div>

      {/* Desktop and Tablet Layout */}
      <div className="hidden sm:flex justify-center gap-6 md:gap-8">
        {partnerData.map((partner, index) => (
          <div
            key={partner.id}
            className="group relative reveal-up"
            style={{ 
              transitionDelay: `${1400 + (index * 150)}ms` 
            }}
          >
            <div className="relative p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-forsat-orange/5">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-forsat-orange/0 via-forsat-orange/[0.02] to-forsat-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-12 w-auto mb-3 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="h-full w-auto max-w-[120px] object-contain transition-all duration-300 group-hover:brightness-110"
                    style={{ filter: 'contrast(0.9) brightness(0.95)' }}
                  />
                </div>
                <span className="text-xs text-gray-400 transition-opacity duration-300">
                  {partner.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden">
        <div className="flex flex-wrap justify-center gap-4">
          {partnerData.map((partner, index) => (
            <div
              key={`mobile-${partner.id}`}
              className="reveal-up"
              style={{ 
                transitionDelay: `${1400 + (index * 100)}ms` 
              }}
            >
              <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-8 w-auto max-w-[100px] object-contain"
                  style={{ filter: 'contrast(0.9) brightness(0.95)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners; 