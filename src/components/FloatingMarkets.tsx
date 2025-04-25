
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Bitcoin, ArrowLeft, ArrowRight, TrendingUp, Flag, ChartBar } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Update market data types
interface FloatingMarket {
  id: number;
  question: string;
  yesPrice: number;
  noPrice: number;
  volume: string;
  category: string;
  icon: React.ReactNode;
}

// Enhanced market data with more details
const marketData: FloatingMarket[] = [
  {
    id: 1,
    question: "Will BTC reach $150K by Q3 2025?",
    yesPrice: 0.72,
    noPrice: 0.28,
    volume: "4.2",
    category: "Crypto",
    icon: <TrendingUp className="h-5 w-5 text-forsat-orange" />
  },
  {
    id: 2,
    question: "Liberals win majority in Canadian election?",
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: "3.5",
    category: "Politics",
    icon: <Flag className="h-5 w-5 text-forsat-orange" />
  },
  {
    id: 3,
    question: "Pete Hegseth out as Secretary of Defense before July?",
    yesPrice: 0.31,
    noPrice: 0.69,
    volume: "3.3",
    category: "Politics",
    icon: <ChartBar className="h-5 w-5 text-forsat-orange" />
  }
];

const FloatingMarkets: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 relative z-10">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Active Markets</h3>
        <div className="flex items-center gap-2">
          <Bitcoin className="h-4 w-4 text-bitcoin" />
          <span className="text-sm text-gray-400">11 BTC Total Volume</span>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {marketData.map((market) => (
            <CarouselItem key={market.id} className="pl-2 md:pl-4 md:basis-1/3">
              <div
                className={cn(
                  "relative animate-gentle-float",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
              >
                <Card className="border border-white/10 bg-forsat-black/30 backdrop-blur-md p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="px-2 py-0.5 text-xs font-semibold bg-forsat-orange/20 text-forsat-orange-light rounded-full flex items-center gap-2">
                      {market.icon}
                      {market.category}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Bitcoin className="h-3 w-3 text-bitcoin mr-1" />
                      <span>{market.volume} BTC</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium text-white mb-3 line-clamp-2">
                    {market.question}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-400">YES</span>
                      <span className="text-green-400">${market.yesPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-red-400">NO</span>
                      <span className="text-red-400">${market.noPrice.toFixed(2)}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full mt-1">
                      <div 
                        className="h-1.5 rounded-full bg-gradient-to-r from-forsat-pink to-forsat-orange" 
                        style={{ width: `${market.yesPrice * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default FloatingMarkets;
