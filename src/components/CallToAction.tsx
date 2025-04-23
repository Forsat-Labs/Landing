
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would typically connect to a newsletter service
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="relative overflow-hidden py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-forsat-dark to-black z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.random() * 4 + 2;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          
          return (
            <div 
              key={i}
              className="absolute bg-forsat-orange/30 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animation: `pulse-glow 4s ease-in-out infinite ${delay}s`
              }}
            ></div>
          );
        })}
      </div>
      
      {/* Bitcoin Symbol Watermark */}
      <div className="absolute opacity-5 text-white text-[400px] font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none z-0">
        ₿
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="reveal-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Stake Your <span className="text-bitcoin text-glow">Belief</span> on Bitcoin?
          </h2>
          
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-forsat-pink to-forsat-orange rounded-full mb-6"></div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the waitlist for early access to Forsat and be among the first to create and trade on the first Bitcoin-native prediction market.
          </p>
        </div>
        
        <div className="max-w-md mx-auto reveal-up" style={{ transitionDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input 
              placeholder="Enter your email" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-morphism border-white/20 text-white placeholder:text-gray-400 focus:border-forsat-orange focus:ring-forsat-orange"
              required
            />
            <Button 
              type="submit"
              className={`bg-bitcoin hover:bg-bitcoin-dark text-white font-semibold btn-hover-slide ${submitted ? 'bg-green-500 hover:bg-green-600' : ''}`}
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <Check size={18} />
                  <span>Joined!</span>
                </>
              ) : (
                'Join Waitlist'
              )}
            </Button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center glass-card p-4 hover-lift reveal-up" style={{ transitionDelay: '300ms' }}>
            <div className="text-3xl font-bold text-bitcoin">100%</div>
            <div className="text-sm text-gray-400">Bitcoin Native</div>
          </div>
          <div className="text-center glass-card p-4 hover-lift reveal-up" style={{ transitionDelay: '400ms' }}>
            <div className="text-3xl font-bold text-bitcoin">50%</div>
            <div className="text-sm text-gray-400">Fees to $FOR Holders</div>
          </div>
          <div className="text-center glass-card p-4 hover-lift reveal-up" style={{ transitionDelay: '500ms' }}>
            <div className="text-3xl font-bold text-bitcoin">0%</div>
            <div className="text-sm text-gray-400">Centralization</div>
          </div>
          <div className="text-center glass-card p-4 hover-lift reveal-up" style={{ transitionDelay: '600ms' }}>
            <div className="text-3xl font-bold text-bitcoin">∞</div>
            <div className="text-sm text-gray-400">Possible Markets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
