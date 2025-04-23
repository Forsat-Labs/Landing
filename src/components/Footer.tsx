
import React from 'react';
import { Github, Twitter, Globe, ArrowUpRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQTFBMUEiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 reveal-left">
              <span className="text-3xl font-bold">
                <span className="text-bitcoin">F</span>
                <span className="text-glow">orsat</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md reveal-left" style={{ transitionDelay: '100ms' }}>
              The first Bitcoin-native prediction market platform. Stake your belief on Bitcoin mainnet with unparalleled security and transparency.
            </p>
            <div className="flex space-x-4 mt-6 reveal-left" style={{ transitionDelay: '200ms' }}>
              <a href="#" className="text-gray-400 hover:text-bitcoin transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bitcoin transition-colors duration-300 hover:scale-110 transform">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bitcoin transition-colors duration-300 hover:scale-110 transform">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div className="reveal-up" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-bitcoin mr-2"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                      <span className="relative transition-all duration-300 group-hover:pl-2">Documentation</span>
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="glass-morphism border-white/10 text-white w-72">
                    <div className="space-y-2">
                      <h4 className="font-medium">Documentation</h4>
                      <p className="text-sm text-gray-400">
                        Comprehensive guides for users and developers to understand the Forsat protocol
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </li>
              <li>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                      <span className="relative transition-all duration-300 group-hover:pl-2">Whitepaper</span>
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="glass-morphism border-white/10 text-white w-72">
                    <div className="space-y-2">
                      <h4 className="font-medium">Whitepaper</h4>
                      <p className="text-sm text-gray-400">
                        Technical details and roadmap of the Forsat platform and protocol
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Blog</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  <span className="relative transition-all duration-300 group-hover:pl-2">FAQ</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="reveal-up" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-bitcoin mr-2"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  <span className="relative transition-all duration-300 group-hover:pl-2">About</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Careers</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Contact</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm reveal-up">
          <p>© {new Date().getFullYear()} Forsat. All rights reserved.</p>
          <p className="mt-2">
            <span className="font-mono">Built on Bitcoin.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
