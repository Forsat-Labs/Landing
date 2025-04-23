
import React, { useEffect } from 'react';
import { Bitcoin, Coins, UserPlus, UsersRound } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Bitcoin Mainnet Exclusivity",
    description: "Built exclusively on Bitcoin mainnet using Runes for all assets, ensuring unparalleled security and verifiability without reliance on Layer 2 solutions or bridges.",
    icon: Bitcoin,
    color: "text-bitcoin",
    gradient: "from-bitcoin/20 to-bitcoin/5"
  },
  {
    title: "$FOR: The Utility Token",
    description: "Represents ownership in Forsat with 50% of all fees distributed to $FOR holders, rewarding users who stake their belief in the platform.",
    icon: Coins,
    color: "text-forsat-blue",
    gradient: "from-forsat-blue/20 to-forsat-blue/5"
  },
  {
    title: "Permissionless Market Creation",
    description: "Create prediction markets on any outcome by paying a small $FOR fee. Markets are reviewed by AI and become tradable immediately after creation.",
    icon: UserPlus,
    color: "text-green-500",
    gradient: "from-green-500/20 to-green-500/5"
  },
  {
    title: "Community-Driven Experience",
    description: "Built for and by the Bitcoin community with transparent fee distribution and community governance through $FOR holdings.",
    icon: UsersRound,
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-purple-500/5"
  }
];

const FeaturesSection: React.FC = () => {
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
      
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Core <span className="text-bitcoin">Features</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-forsat-pink to-forsat-orange rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Forsat brings prediction markets to Bitcoin with a suite of innovative features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden reveal-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-lg`}></div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-white shadow-md group-hover:scale-110 transition-transform ${feature.color}`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-mono bg-gray-100 text-gray-900 text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle className="text-2xl mt-4 text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-forsat-pink to-forsat-orange rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
