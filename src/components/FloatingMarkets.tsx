
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Bitcoin } from 'lucide-react';

// Define market data types
interface FloatingMarket {
  id: number;
  question: string;
  yesPercentage: number;
  volume: string;
  category: string;
  position: {
    left: string;
    top: string;
    delay: number;
    duration: number;
    scale: number;
    rotation: number;
  };
}

// Sample market data with improved positioning to avoid text overlap
const marketData: FloatingMarket[] = [
  {
    id: 1,
    question: "Will ETH surpass $6K in 2025?",
    yesPercentage: 72,
    volume: "0.35",
    category: "Crypto",
    position: { 
      left: '8%', 
      top: '25%', 
      delay: 0, 
      duration: 45, // Increased duration for slower animation
      scale: 0.5, 
      rotation: -5 
    }
  },
  {
    id: 2,
    question: "Will Trump win the 2024 election?",
    yesPercentage: 49,
    volume: "1.2",
    category: "Politics",
    position: { 
      left: '75%', 
      top: '10%', 
      delay: 2, 
      duration: 50, // Increased duration for slower animation
      scale: 0.45, 
      rotation: 8 
    }
  },
  {
    id: 3,
    question: "Will Bitcoin dominance exceed 60% in 2025?",
    yesPercentage: 64,
    volume: "0.8",
    category: "Crypto",
    position: { 
      left: '5%', 
      top: '70%', 
      delay: 3.5, 
      duration: 48, // Increased duration for slower animation
      scale: 0.4, 
      rotation: -10 
    }
  },
  {
    id: 4,
    question: "Will Apple stock hit $250 by end of 2025?",
    yesPercentage: 58,
    volume: "0.45",
    category: "Stocks",
    position: { 
      left: '80%', 
      top: '65%', 
      delay: 1.5, 
      duration: 52, // Increased duration for slower animation
      scale: 0.5, 
      rotation: 6 
    }
  },
  {
    id: 5,
    question: "Will OPEC+ cut oil production in Q2 2025?",
    yesPercentage: 38,
    volume: "0.65",
    category: "Commodities",
    position: { 
      left: '60%', 
      top: '85%', 
      delay: 4, 
      duration: 55, // Increased duration for slower animation
      scale: 0.4, 
      rotation: -4 
    }
  }
];

const FloatingMarkets: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add animation after component mounts
  useEffect(() => {
    // Small delay to ensure smooth animation entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {marketData.map((market) => (
        <div
          key={market.id}
          className={`absolute glass-morphism rounded-xl shadow-xl transform transition-opacity duration-1000 ${
            isVisible ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            left: market.position.left,
            top: market.position.top,
            transform: `scale(${market.position.scale}) rotate(${market.position.rotation}deg)`,
            animation: `gentle-float ${market.position.duration}s ease-in-out infinite ${market.position.delay}s`,
            width: '280px',
          }}
        >
          <Card className="border border-white/10 bg-forsat-black/30 backdrop-blur-md p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="px-2 py-0.5 text-xs font-semibold bg-forsat-orange/20 text-forsat-orange-light rounded-full">
                {market.category}
              </div>
              <div className="flex items-center text-xs text-gray-400">
                <Bitcoin className="h-3 w-3 text-bitcoin mr-1" />
                <span>{market.volume} BTC</span>
              </div>
            </div>
            
            <p className="text-sm font-medium text-white mb-2 line-clamp-2">{market.question}</p>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/70">YES</span>
              <span className={market.yesPercentage > 50 ? 'text-green-500' : 'text-red-500'}>
                {market.yesPercentage}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full mt-1">
              <div 
                className="h-1.5 rounded-full bg-gradient-to-r from-forsat-pink to-forsat-orange" 
                style={{ width: `${market.yesPercentage}%` }}
              ></div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FloatingMarkets;
