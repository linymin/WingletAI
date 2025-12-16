
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Search, Zap, Maximize2, ZoomIn } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
  item: PortfolioItem | null;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenContact,
  item 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false); // State for full-screen zoom

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsZoomed(false);
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = 'unset'; // Unlock scroll
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const images = item.images || [];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Toggle Full Screen Zoom
  const toggleZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  // Render the Full Screen Zoom Overlay
  if (isZoomed) {
    return (
      <div className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-center animate-in fade-in duration-200">
        <button 
          onClick={toggleZoom}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors z-50"
        >
          <X size={32} />
        </button>

        <div className="w-full h-full p-4 flex items-center justify-center relative">
           <img 
              src={images[currentImageIndex]} 
              alt="Full Screen" 
              className="max-w-full max-h-full object-contain cursor-zoom-out"
              onClick={toggleZoom}
           />
           
           {/* Navigation in Full Screen */}
           {images.length > 1 && (
             <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <ChevronLeft size={48} />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
                  <ChevronRight size={48} />
                </button>
             </>
           )}
           
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md">
             {currentImageIndex + 1} / {images.length}
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-500 ease-smooth" 
        onClick={onClose}
      />
      
      {/* Modal Card - Full screen on mobile, 90vh on desktop */}
      <div className="relative w-full max-w-7xl h-full md:h-[90vh] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-up">
        
        {/* Mobile Close Button - Enhanced visibility */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all md:hidden"
        >
          <X size={20} />
        </button>

        {/* Left Side: Image Gallery */}
        {/* Mobile: 40% height, Desktop: auto height (fills flex) */}
        <div className="w-full md:w-[62%] bg-gray-100 relative flex flex-col h-[40vh] md:h-auto shrink-0 border-r border-gray-100">
            {/* Main Image Area */}
            <div 
              className="flex-1 relative overflow-hidden group flex items-center justify-center"
              onClick={toggleZoom} // Clicking image opens zoom
            >
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 opacity-[0.05]" 
                     style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />

                {/* Main Image - Removed padding on mobile for maximum size */}
                <img 
                    src={images[currentImageIndex]} 
                    alt={item.title} 
                    className="relative z-10 w-full h-full object-contain transition-transform duration-300 cursor-zoom-in p-1 md:p-8"
                />

                {/* Mobile Zoom Hint - Always visible but subtle */}
                <div className="absolute bottom-3 right-3 md:hidden z-20">
                     <div className="bg-black/40 text-white p-1.5 rounded-lg backdrop-blur-sm">
                        <Maximize2 size={16} />
                     </div>
                </div>

                {/* Desktop Zoom Hint Overlay */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none items-center gap-2">
                   <ZoomIn size={16} /> 点击查看大图
                </div>

                {/* Desktop Zoom Button (Corner) */}
                <button 
                  onClick={toggleZoom}
                  className="absolute bottom-4 right-4 p-2 bg-white/90 text-gray-700 rounded-lg shadow-sm hover:text-accentWarm hover:shadow-md transition-all z-30 hidden md:block"
                  title="全屏查看"
                >
                  <Maximize2 size={20} />
                </button>
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        {/* Mobile Arrows: Always visible, smaller */}
                        <button 
                            onClick={prevImage}
                            className="absolute z-20 left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 text-gray-800 rounded-full shadow-md md:hidden"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute z-20 right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 text-gray-800 rounded-full shadow-md md:hidden"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Desktop Arrows: Hover effect */}
                        <button 
                            onClick={prevImage}
                            className="hidden md:block absolute z-20 left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="hidden md:block absolute z-20 right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails - Hidden on very small screens if needed, or kept compact */}
            {images.length > 1 && (
                <div className="p-2 md:p-3 flex gap-2 overflow-x-auto bg-white border-t border-gray-200 no-scrollbar z-20 relative justify-center shrink-0">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                            className={`relative w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                                idx === currentImageIndex 
                                ? 'border-accentWarm ring-2 ring-accentWarm/20' 
                                : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
                            }`}
                        >
                            <img src={img} className="w-full h-full object-cover" alt="" />
                        </button>
                    ))}
                </div>
            )}
        </div>

        {/* Right Side: Content Details */}
        {/* FIX: Use flex-1 instead of h-full to prevent overflow on mobile. flex-col ensures sticky footer. */}
        <div className="w-full md:w-[38%] flex flex-col flex-1 min-h-0 bg-white relative">
            
            {/* Desktop Close Button */}
            <div className="hidden md:flex justify-end p-5 absolute top-0 right-0 z-20 bg-gradient-to-b from-white via-white to-transparent w-full pointer-events-none">
                <button 
                    onClick={onClose}
                    className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-full transition-colors pointer-events-auto"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-5 md:p-8 pt-5 md:pt-16 overflow-y-auto custom-scrollbar flex-1">
                <div className="flex items-start gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="p-2 md:p-3 bg-orange-50 text-accentWarm rounded-2xl shrink-0 mt-1">
                        {item.icon}
                    </div>
                    <div>
                         <span className="text-[10px] md:text-xs font-bold text-accentWarm uppercase tracking-wider bg-orange-50/50 px-2 py-1 rounded mb-1 md:mb-2 inline-block">
                            Project Details
                         </span>
                         <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                            {item.title}
                        </h2>
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8 pb-4">
                    {/* Problem */}
                    <div className="group">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 md:mb-3">
                            <Search size={18} className="text-gray-400" /> 
                            核心痛点
                        </h4>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-100">
                            {item.problem}
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="group">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 md:mb-3">
                            <Zap size={18} className="text-accentWarm" /> 
                            解决方案
                        </h4>
                        <div className="text-gray-800 text-sm md:text-base leading-relaxed p-3 md:p-4 rounded-xl border-l-4 border-accentWarm bg-white shadow-sm">
                            {item.solution}
                        </div>
                    </div>

                    {/* Result */}
                    <div className="group">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 md:mb-3">
                            <CheckCircle2 size={18} className="text-green-600" /> 
                            价值交付
                        </h4>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {item.result}
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer CTA - Sticky at bottom */}
            <div className="p-4 md:p-5 border-t border-gray-100 bg-gray-50/90 backdrop-blur-sm shrink-0">
                <div className="flex items-center justify-between gap-4">
                    <div className="text-xs md:text-sm text-gray-500">
                        对这类应用感兴趣？
                    </div>
                    <button 
                        onClick={() => {
                            onClose();
                            if (onOpenContact) onOpenContact();
                        }}
                        className="bg-gray-900 hover:bg-black text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-gray-200 whitespace-nowrap"
                    >
                        联系定制 →
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ImagePreviewModal;
