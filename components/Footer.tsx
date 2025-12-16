
import React from 'react';

interface FooterProps {
  onOpenContact?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <button 
          onClick={onOpenContact}
          className="text-xl font-bold text-gray-800 mb-4 tracking-wider hover:text-accentWarm transition-colors focus:outline-none"
        >
          Winglet AI
        </button>
        
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          专注于定制化AI应用开发，将实际需求转化为实用工具。<br/>
          让技术更有温度，让效率触手可及。
        </p>

        {/* Explicit Contact Link */}
        <button 
          onClick={onOpenContact}
          className="text-accentWarm font-semibold hover:text-accentHover underline decoration-2 underline-offset-4 mb-8"
        >
          联系我们
        </button>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Winglet AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
