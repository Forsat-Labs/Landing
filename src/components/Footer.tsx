import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQTFBMUEiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Centered layout with logo, description, and social icons */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4 reveal-left">
            <img 
              src="/forsat-logo.svg" 
              alt="Forsat - Bitcoin Prediction Markets" 
              className="h-6 w-auto"
            />
          </div>
          <p className="text-gray-400 max-w-md reveal-left mx-auto" style={{ transitionDelay: '100ms' }}>
            The first Bitcoin-native prediction market platform. Trade on Anything. Secured by Bitcoin
          </p>
          <div className="flex space-x-4 mt-6 reveal-left justify-center" style={{ transitionDelay: '200ms' }}>
            <a href="https://x.com/ForsatBid" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin transition-colors duration-300 hover:scale-110 transform">
              <svg width="20" height="20" viewBox="0 0 300 300.251" className="fill-current">
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
              </svg>
            </a>
            <a href="https://discord.gg/forsat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin transition-colors duration-300 hover:scale-110 transform">
              <svg width="24" height="18" viewBox="0 0 126.644 96" className="fill-current">
                <path d="M81.15,0c-1.2376,2.1973-2.3489,4.4704-3.3591,6.794-9.5975-1.4396-19.3718-1.4396-28.9945,0-.985-2.3236-2.1216-4.5967-3.3591-6.794-9.0166,1.5407-17.8059,4.2431-26.1405,8.0568C2.779,32.5304-1.6914,56.3725.5312,79.8863c9.6732,7.1476,20.5083,12.603,32.0505,16.0884,2.6014-3.4854,4.8998-7.1981,6.8698-11.0623-3.738-1.3891-7.3497-3.1318-10.8098-5.1523.9092-.6567,1.7932-1.3386,2.6519-1.9953,20.281,9.547,43.7696,9.547,64.0758,0,.8587.7072,1.7427,1.3891,2.6519,1.9953-3.4601,2.0457-7.0718,3.7632-10.835,5.1776,1.97,3.8642,4.2683,7.5769,6.8698,11.0623,11.5419-3.4854,22.3769-8.9156,32.0509-16.0631,2.626-27.2771-4.496-50.9172-18.817-71.8548C98.9811,4.2684,90.1918,1.5659,81.1752.0505l-.0252-.0505ZM42.2802,65.4144c-6.2383,0-11.4159-5.6575-11.4159-12.6535s4.9755-12.6788,11.3907-12.6788,11.5169,5.708,11.4159,12.6788c-.101,6.9708-5.026,12.6535-11.3907,12.6535ZM84.3576,65.4144c-6.2637,0-11.3907-5.6575-11.3907-12.6535s4.9755-12.6788,11.3907-12.6788,11.4917,5.708,11.3906,12.6788c-.101,6.9708-5.026,12.6535-11.3906,12.6535Z"/>
              </svg>
            </a>
          </div>
                  </div>
          
          {/* Resources section - Temporarily hidden */}
          {/* <div className="reveal-up text-center md:text-left" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-bitcoin mr-2"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
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
                    <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
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
                <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Blog</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
                  <span className="relative transition-all duration-300 group-hover:pl-2">FAQ</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div> */}
          
          {/* Company section - Temporarily hidden */}
          {/* <div className="reveal-up text-center md:text-left" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-bitcoin mr-2"></span>
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
                  <span className="relative transition-all duration-300 group-hover:pl-2">About</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Careers</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Contact</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center group pl-4 justify-center md:justify-start">
                  <span className="relative transition-all duration-300 group-hover:pl-2">Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div> */}
        
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
