import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative text-gray-300 hover:text-white transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-forsat-orange-light after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </a>
);

const NavDropdownItem = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href}
    className="block w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors"
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Add scroll event listener to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleResourcesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <nav className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-forsat-black/95 backdrop-blur-md shadow-md border-b border-white/10' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src="/forsat-logo.svg" 
              alt="Forsat - Bitcoin Prediction Markets" 
              className="h-6 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="#features">Features</NavItem>
            <NavItem href="#how-it-works">How It Works</NavItem>
            <NavItem href="#technical">Technical</NavItem>
            
            {/* Resources dropdown */}
            <div className="relative">
              <a 
                href="#" 
                className="flex items-center text-gray-300 hover:text-white transition-colors gap-1"
                onClick={toggleResourcesDropdown}
              >
                Resources
                <ChevronDown size={16} className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
              </a>
              
              {resourcesOpen && (
                <div className="absolute mt-2 right-0 w-48 bg-forsat-dark-gray/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg py-2 z-10">
                  <NavDropdownItem href="#">Documentation</NavDropdownItem>
                  <NavDropdownItem href="#">Whitepaper</NavDropdownItem>
                  <NavDropdownItem href="#">Community</NavDropdownItem>
                  <NavDropdownItem href="#">Blog</NavDropdownItem>
                </div>
              )}
            </div>
            
            <Button asChild className="bg-bitcoin hover:bg-forsat-orange text-white btn-glow btn-hover-slide">
              <a href="https://forsat.xyz/" target="_blank" rel="noopener noreferrer">
                Launch App
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass-morphism rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#technical" 
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Technical
              </a>
              
              {/* Mobile Resources Dropdown */}
              <div>
                <button 
                  onClick={toggleResourcesDropdown}
                  className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2 border-b border-white/10"
                >
                  Resources
                  <ChevronDown size={16} className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {resourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                    <NavDropdownItem href="#">Documentation</NavDropdownItem>
                    <NavDropdownItem href="#">Whitepaper</NavDropdownItem>
                    <NavDropdownItem href="#">Community</NavDropdownItem>
                    <NavDropdownItem href="#">Blog</NavDropdownItem>
                  </div>
                )}
              </div>
              
              <Button 
                asChild
                className="bg-bitcoin hover:bg-forsat-orange text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="https://forsat.xyz/" target="_blank" rel="noopener noreferrer">
                  Launch App
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
