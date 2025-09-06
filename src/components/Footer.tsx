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
            <a href="https://forsat.gitbook.io/forsat-docs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bitcoin transition-colors duration-300 hover:scale-110 transform">
              <svg width="20" height="20" viewBox="0 0 65 65" className="fill-current">
                <path d="M27.3964 34.2196C30.5255 36.0256 32.09 36.9286 33.8083 36.9301C35.5265 36.9316 37.0926 36.0313 40.2249 34.2308L60.1914 22.7535C61.0927 22.2354 61.6484 21.275 61.6484 20.2353C61.6484 19.1956 61.0927 18.2352 60.1914 17.7171L40.2177 6.2356C37.0888 4.43701 35.5243 3.53772 33.8078 3.53839C32.0912 3.53906 30.5275 4.43957 27.4 6.24059L10.2293 16.1286C10.102 16.2019 10.0384 16.2386 9.97908 16.2733C4.11371 19.7069 0.489892 25.9755 0.441438 32.7718C0.440948 32.8405 0.440948 32.9139 0.440948 33.0608C0.440948 33.2074 0.440948 33.2808 0.441437 33.3494C0.489785 40.1381 4.10552 46.4008 9.96044 49.8371C10.0196 49.8718 10.0832 49.9085 10.2102 49.9819L20.9659 56.1919C27.2332 59.8104 30.3668 61.6197 33.8081 61.6209C37.2493 61.622 40.3842 59.8149 46.6539 56.2005L58.008 49.6552C61.1474 47.8454 62.7171 46.9406 63.579 45.4488C64.4409 43.957 64.4409 42.1452 64.4409 38.5215V31.5212C64.4409 30.516 63.8965 29.5896 63.0182 29.1004C62.1684 28.6271 61.1325 28.6341 60.2891 29.1189L37.0074 42.5019C35.4454 43.3998 34.6643 43.8488 33.8073 43.8491C32.9502 43.8493 32.1689 43.4008 30.6063 42.5039L14.8487 33.4587C14.0594 33.0056 13.6647 32.779 13.3477 32.7381C12.625 32.6448 11.9301 33.0497 11.6548 33.7244C11.5341 34.0203 11.5365 34.4754 11.5414 35.3855C11.545 36.0555 11.5468 36.3905 11.6094 36.6987C11.7497 37.3888 12.1127 38.0136 12.6428 38.4772C12.8795 38.6842 13.1696 38.8517 13.75 39.1866L30.5974 48.9103C32.1641 49.8145 32.9474 50.2666 33.8075 50.2669C34.6677 50.2671 35.4513 49.8154 37.0184 48.9121L57.6684 37.0086C58.2037 36.7 58.4714 36.5457 58.6721 36.6617C58.8727 36.7777 58.8727 37.0866 58.8727 37.7045V40.8796C58.8727 41.7856 58.8727 42.2385 58.6572 42.6115C58.4418 42.9844 58.0493 43.2106 57.2644 43.6631L40.2322 53.4811C37.0966 55.2886 35.5288 56.1923 33.8079 56.1915C32.0869 56.1907 30.5199 55.2856 27.386 53.4752L11.4509 44.2702C11.4003 44.2409 11.375 44.2263 11.3514 44.2125C8.01023 42.2601 5.94859 38.6883 5.92925 34.8185C5.92912 34.7912 5.92912 34.762 5.92912 34.7035V31.7889C5.92912 29.6526 7.06689 27.678 8.91513 26.6067C10.5483 25.6601 12.5628 25.6582 14.1977 26.6018L27.3964 34.2196Z"/>
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
