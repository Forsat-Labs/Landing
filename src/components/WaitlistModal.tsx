import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitcoin, Check, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  bitcoinAddress?: string;
}

// Rate limiting constants
const RATE_LIMIT = {
  MAX_ATTEMPTS: 10, // Increased from 5 to 10 attempts per window
  WINDOW_HOURS: 24, // Time window in hours
  COOLDOWN_MINUTES: 2, // Reduced from 5 to 2 minutes
};

interface RateLimitData {
  attempts: number;
  lastAttempt: number;
  windowStart: number;
}

const BitcoinParticle = ({ x, y, delay, opacity, floatY }: { x: number; y: number; delay: number; opacity: number; floatY: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 0, scale: 0 }}
    animate={{ opacity, y: floatY, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ delay, duration: 0.7, y: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } }}
    className="absolute pointer-events-none select-none"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <Bitcoin className="w-5 h-5 text-bitcoin" style={{ opacity }} />
  </motion.div>
);

const PerkCard = ({ title, description, icon: Icon, delay }: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-bitcoin/50 transition-all duration-300 group"
  >
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-bitcoin/10 text-bitcoin group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  </motion.div>
);

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [showBitcoinField, setShowBitcoinField] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number; opacity: number; floatY: number }>>([]);

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>();
  const email = watch('email');

  useEffect(() => {
    if (isOpen) {
      const newParticles = Array.from({ length: 24 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5,
        opacity: 0.2 + Math.random() * 0.5,
        floatY: (Math.random() - 0.5) * 30
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (email && !errors.email) {
      setShowBitcoinField(true);
    }
  }, [email, errors.email]);

  const checkRateLimit = (): { allowed: boolean; timeLeft?: string } => {
    try {
      const now = Date.now();
      const storedData = localStorage.getItem('waitlistRateLimit');
      let rateData: RateLimitData;

      if (storedData) {
        rateData = JSON.parse(storedData);
        
        // Check if we need to reset the window
        if (now - rateData.windowStart > RATE_LIMIT.WINDOW_HOURS * 60 * 60 * 1000) {
          rateData = {
            attempts: 0,
            lastAttempt: 0,
            windowStart: now,
          };
        }
        
        // Check cooldown period
        const timeSinceLastAttempt = now - rateData.lastAttempt;
        const cooldownPeriod = RATE_LIMIT.COOLDOWN_MINUTES * 60 * 1000;
        
        if (timeSinceLastAttempt < cooldownPeriod) {
          const timeLeft = Math.ceil((cooldownPeriod - timeSinceLastAttempt) / 1000 / 60);
          return { 
            allowed: false, 
            timeLeft: `Please wait ${timeLeft} minute${timeLeft > 1 ? 's' : ''} before trying again` 
          };
        }

        // Check maximum attempts
        if (rateData.attempts >= RATE_LIMIT.MAX_ATTEMPTS) {
          const hoursLeft = Math.ceil(
            (RATE_LIMIT.WINDOW_HOURS * 60 * 60 * 1000 - (now - rateData.windowStart)) / 1000 / 60 / 60
          );
          return { 
            allowed: false, 
            timeLeft: `Maximum attempts reached. Please try again in ${hoursLeft} hour${hoursLeft > 1 ? 's' : ''}` 
          };
        }
      } else {
        rateData = {
          attempts: 0,
          lastAttempt: 0,
          windowStart: now,
        };
      }

      return { allowed: true };
    } catch (error) {
      console.error('Error checking rate limit:', error);
      return { allowed: true }; // Fail open if localStorage is not available
    }
  };

  const updateRateLimit = () => {
    try {
      const now = Date.now();
      const storedData = localStorage.getItem('waitlistRateLimit');
      let rateData: RateLimitData = storedData ? JSON.parse(storedData) : {
        attempts: 0,
        lastAttempt: 0,
        windowStart: now,
      };

      // Reset window if needed
      if (now - rateData.windowStart > RATE_LIMIT.WINDOW_HOURS * 60 * 60 * 1000) {
        rateData = {
          attempts: 1,
          lastAttempt: now,
          windowStart: now,
        };
      } else {
        rateData.attempts += 1;
        rateData.lastAttempt = now;
      }

      localStorage.setItem('waitlistRateLimit', JSON.stringify(rateData));
    } catch (error) {
      console.error('Error updating rate limit:', error);
    }
  };

  const onSubmit = async (data: FormData) => {
    // Check rate limit before proceeding
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      setError(rateLimitCheck.timeLeft);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjTCKUDVa9xvI-xIk9nvHVMYRrGbB01aR7f2VsubdSG27DDfcZ2ikXnxCOUGQopDw8/exec';
      
      // Prepare the query parameters
      const params = new URLSearchParams({
        email: data.email,
        bitcoinAddress: data.bitcoinAddress || '',
        timestamp: new Date().toISOString() // Add timestamp to help with debugging
      });

      console.log('Submitting to URL:', `${GOOGLE_SCRIPT_URL}?${params.toString()}`);

      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      console.log('Form submitted, response status:', response.status);
      
      // Since we're using no-cors, we can't read the response
      // We'll assume success if the request doesn't throw
      setIsSuccess(true);
      reset();
      
      // Update rate limit only on successful submission
      updateRateLimit();
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F7931A', '#FFFFFF', '#FFD700']
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const perks = [
    {
      title: 'Early-access to the Beta',
      description: 'Be among the first to experience Forsat',
      icon: Sparkles,
      delay: 0.2
    },
    {
      title: 'Exclusive airdrop raffle',
      description: 'Chance to win FOR tokens',
      icon: Bitcoin,
      delay: 0.4
    },
    {
      title: 'OG badge + Discord role',
      description: 'Special recognition in our community',
      icon: Check,
      delay: 0.6
    }
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[49] pointer-events-none select-none">
          <AnimatePresence>
            {particles.map((particle, index) => (
              <BitcoinParticle key={index} {...particle} />
            ))}
          </AnimatePresence>
        </div>
      )}
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="bg-forsat-black border border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-white">
              Join the Waitlist
            </DialogTitle>
            <DialogDescription className="text-center text-gray-400">
              Enter your email to join the waitlist and get early access perks.
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative">
            {!isSuccess ? (
              <>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="mt-1 bg-white/5 border-white/20 text-white"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <AnimatePresence>
                      {showBitcoinField && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Label htmlFor="bitcoinAddress" className="text-white">Bitcoin Address (Optional)</Label>
                          <Input
                            id="bitcoinAddress"
                            placeholder="bc1..."
                            className="mt-1 bg-white/5 border-white/20 text-white"
                            {...register('bitcoinAddress')}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-forsat-orange hover:bg-forsat-orange/90 text-white border-2 border-forsat-orange"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </div>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </form>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-white">Perks of Joining Early</h3>
                  <div className="space-y-3">
                    {perks.map((perk, index) => (
                      <PerkCard key={index} {...perk} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-16 h-16 bg-bitcoin/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-bitcoin" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Waitlist!</h3>
                <p className="text-gray-400">
                  We'll keep you updated on our launch progress and exclusive opportunities.
                </p>
              </motion.div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WaitlistModal; 