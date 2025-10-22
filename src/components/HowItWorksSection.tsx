import React, { useEffect, useState } from 'react';
import { BarChart3, Database, LineChart, ListOrdered } from 'lucide-react';

const steps = [
  {
    title: "Market Creation",
    description: "Users create markets by paying a small $BTC fee via a Bitcoin transaction. Markets open for off-chain trading immediately.",
    icon: ListOrdered,
    color: "bg-blue-500 text-white"
  },
  {
    title: "Bootstrap Phase",
    description: "A two-phase process using PSBTs for secure off-chain transaction management to provide a comfortable trading experience.",
    icon: BarChart3,
    color: "bg-purple-500 text-white"
  },
  {
    title: "LMSR Phase",
    description: "After etching, LMSR activates to provide liquidity, adjusting YES/NO prices dynamically based on trading volume.",
    icon: LineChart,
    color: "bg-green-500 text-white"
  },
  {
    title: "CLOB Phase",
    description: "Users trade YES/NO shares via limit orders on an on-chain CLOB, driven by peer orders for a pure, decentralized market.",
    icon: Database,
    color: "bg-forsat-orange text-white"
  }
];

const HowItWorksSection: React.FC = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el));

    // Scroll-based line drawing animation
    const handleScroll = () => {
      const section = document.getElementById('how-it-works');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      // Start drawing when section enters viewport, finish when it leaves
      const startOffset = windowHeight * 0.8; // Start when section is 80% visible
      const scrollProgress = Math.max(0, Math.min(1, 
        (startOffset - sectionTop) / (sectionHeight + startOffset)
      ));

      // Set line height as percentage (0% to 100%)
      setLineHeight(scrollProgress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
      
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 w-full h-full opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat"
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            How <span className="text-bitcoin">Forsat</span> Works
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-forsat-pink to-forsat-orange rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our unique market mechanism ensures liquidity and fairness at every stage
          </p>
        </div>
        
        <div className="relative">
          {/* Connector Line - Scroll-based drawing animation */}
          <div className="absolute left-1/2 top-0 w-1 transform -translate-x-1/2 hidden md:block z-1" style={{ height: 'calc(100% - 5rem)' }}>
            <div 
              className="w-full bg-gray-200"
              style={{ 
                height: `${lineHeight}%`,
                transformOrigin: 'top',
                marginTop: '5rem'
              }}
            ></div>
          </div>
          
          <div className="space-y-20 relative">
            {steps.map((step, index) => (
              <div key={index} className={`relative reveal-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Icon - Desktop only */}
                  <div className="hidden md:block md:static z-10 mb-4 md:mb-0">
                    <div className={`${step.color} rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-lg md:mx-8 hover:scale-110 transition-transform duration-300`}>
                      <step.icon size={24} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 md:w-5/12 ml-auto relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} glass-card hover-lift`}>
                    {/* Icon - Mobile only, inside content box */}
                    <div className="block md:hidden mb-4">
                      <div className={`${step.color} rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                        <step.icon size={18} />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                    <div className={`mt-4 w-12 h-1 bg-gradient-to-r from-forsat-pink to-forsat-orange rounded-full ${index % 2 === 0 ? 'md:ml-auto' : ''}`}></div>
                  </div>
                  
                  {/* Spacer for every other step */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
