
import React from 'react';
import { ArrowRight, BarChart3, Database, LineChart, ListOrdered } from 'lucide-react';

const steps = [
  {
    title: "Market Creation",
    description: "Users create markets by paying a small $FOR fee via a Bitcoin transaction. Markets open for off-chain trading immediately.",
    icon: ListOrdered,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Bootstrap Phase",
    description: "A two-phase process using PSBTs for secure off-chain transaction management to provide a comfortable trading experience.",
    icon: BarChart3,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "LMSR Phase",
    description: "After etching, LMSR activates to provide liquidity, adjusting YES/NO prices dynamically based on trading volume.",
    icon: LineChart,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "CLOB Phase",
    description: "Users trade YES/NO shares via limit orders on an on-chain CLOB, driven by peer orders for a pure, decentralized market.",
    icon: Database,
    color: "bg-orange-100 text-orange-600"
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            How <span className="text-bitcoin">Forsat</span> Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our unique market mechanism ensures liquidity and fairness at every stage
          </p>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10 mb-4 md:mb-0">
                    <div className={`${step.color} rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-lg md:mx-8`}>
                      <step.icon size={24} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 md:w-5/12 ml-auto relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Spacer for every other step */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
                
                {/* Arrow for next step */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:my-0">
                    <ArrowRight className="text-bitcoin transform rotate-90 md:rotate-0" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
