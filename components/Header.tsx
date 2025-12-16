
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '真实案例', href: '#portfolio' },
    { name: '关于我们', href: '#about' },
    { name: '合作流程', href: '#process' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-5'
      }`}
    >
      {/* Navbar Content - Ensure z-50 to stay above the overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl md:text-2xl font-bold text-accentWarm tracking-wider flex items-center gap-2 cursor-pointer"
        >
           Winglet AI <span className="text-gray-500 text-xs md:text-sm font-normal">应用定制</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-600 hover:text-accentWarm font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={onOpenContact} className="px-5 py-2 text-sm">
            开始咨询
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cream flex flex-col justify-start items-center pt-28 pb-10 px-6 space-y-6 animate-fade-up md:hidden overflow-y-auto h-screen">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl text-gray-800 font-bold tracking-tight cursor-pointer hover:text-accentWarm transition-colors py-2"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 w-full max-w-sm">
            <Button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="w-full py-4 text-lg shadow-lg">
              开始咨询
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
