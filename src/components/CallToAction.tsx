
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CallToAction: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-forsat-dark to-black z-0"></div>
      
      {/* Bitcoin Symbol Watermark */}
      <div className="absolute opacity-5 text-white text-[400px] font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none z-0">
        ₿
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Ready to Stake Your <span className="text-bitcoin">Belief</span> on Bitcoin?
        </h2>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the waitlist for early access to Forsat and be among the first to create and trade on the first Bitcoin-native prediction market.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold">
              Join Waitlist
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-bitcoin">100%</div>
            <div className="text-sm text-gray-400">Bitcoin Native</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bitcoin">50%</div>
            <div className="text-sm text-gray-400">Fees to $FOR Holders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bitcoin">0%</div>
            <div className="text-sm text-gray-400">Centralization</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bitcoin">∞</div>
            <div className="text-sm text-gray-400">Possible Markets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
