import React, { useEffect, useState } from 'react';
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
  },
  {
    id: 3,
    name: "Xverse",
    logo: "/partners/xverse_logo_whitecolor.svg", 
    description: "Bitcoin wallet"
  }
];

const Partners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">Trusted Partners</h3>
        <p className="text-sm text-gray-400">Building the future of Bitcoin-native prediction markets together</p>
      </div>

      {/* Desktop and Tablet Layout */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {partnerData.map((partner, index) => (
          <div
            key={partner.id}
            className={cn(
              "group relative transition-all duration-700 ease-out",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            )}
            style={{ 
              transitionDelay: `${index * 150}ms` 
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
              className={cn(
                "transition-all duration-500 ease-out",
                isVisible 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95"
              )}
              style={{ 
                transitionDelay: `${index * 100}ms` 
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