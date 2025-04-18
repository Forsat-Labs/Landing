
import React from 'react';
import { Bitcoin, LineChart, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-forsat-dark text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-bitcoin/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-forsat-blue/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="block">Stake Your</span>
              <span className="gradient-text">Belief on Bitcoin</span>
            </h1>
            <p className="max-w-3xl mt-6 text-xl text-gray-300">
              Forsat is the first fully decentralized prediction market built natively on Bitcoin. Create markets, trade outcomes, and earn rewards — all secured by Bitcoin mainnet.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold px-8 py-6 text-lg">
                Launch App
              </Button>
              <Button variant="outline" className="border-white/20 hover:border-white text-white font-semibold px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center space-x-2">
                <Bitcoin className="w-6 h-6 text-bitcoin" />
                <span className="text-sm font-medium">Bitcoin Native</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-bitcoin" />
                <span className="text-sm font-medium">Non-Custodial</span>
              </div>
              <div className="flex items-center space-x-2">
                <LineChart className="w-6 h-6 text-bitcoin" />
                <span className="text-sm font-medium">Market Creation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-bitcoin" />
                <span className="text-sm font-medium">$FOR Rewards</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl animate-float">
              <div className="bg-gradient-to-br from-black to-forsat-dark p-4 border border-white/10 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 text-xs font-semibold bg-bitcoin/10 text-bitcoin rounded-full">
                    ACTIVE MARKET
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    <span className="text-bitcoin">0.1 BTC</span> Total Volume
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-6">Will BTC reach $150K by Q3 2025?</h3>
                
                <div className="flex justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">YES Price</span>
                    <span className="text-2xl font-bold text-green-500 font-mono">64%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">NO Price</span>
                    <span className="text-2xl font-bold text-red-500 font-mono">36%</span>
                  </div>
                </div>
                
                <div className="w-full h-3 bg-gray-800 rounded-full mb-8">
                  <div className="h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '64%' }}></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Buy YES
                  </Button>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    Buy NO
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Small decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg bg-bitcoin rotate-12 opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-lg bg-forsat-blue -rotate-12 opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
