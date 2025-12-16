
import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';
import ImagePreviewModal from './ImagePreviewModal';

interface PortfolioProps {
  onOpenContact?: () => void;
}

// 类别映射字典
const CATEGORIES: { [key: string]: string } = {
  all: '全部案例',
  personal: '个人成长与陪伴',
  business: '商业效率与决策',
  humanity: '人文关怀与连接',
};

interface PortfolioCardProps {
  item: PortfolioItem;
  isVisible: boolean;
  animationDelay: string;
  onClick: () => void;
}

// 提取 Card 组件以独立管理图片加载状态，防止闪烁
const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  item, 
  isVisible, 
  animationDelay, 
  onClick 
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const hasMultipleImages = item.images && item.images.length >= 2;

  useEffect(() => {
    // Check if image is already cached/loaded to prevent placeholder flash
    if (imgRef.current && imgRef.current.complete) {
      setIsImageLoaded(true);
    }
  }, []);

  // 类别标签映射
  const categoryLabel = CATEGORIES[item.category];

  return (
    <div 
      onClick={onClick}
      className={`group relative cursor-pointer block h-full ${isVisible ? 'animate-fade-up' : 'hidden'}`}
      style={{ animationDelay }}
    >
       {/* 
          Fix for flickering:
          1. Outer div is 'group' and hit target.
          2. Inner div handles motion.
          3. transform-gpu forces layer promotion.
       */}
       <div className="h-full rounded-2xl bg-white shadow-sm transition-all duration-500 ease-smooth overflow-hidden border border-gray-100 md:group-hover:shadow-xl md:group-hover:-translate-y-2 transform-gpu flex flex-col">
          {/* Image Container - Unified Visual Tone */}
          <div className="relative h-56 md:h-64 overflow-hidden bg-gray-50/80 group-hover:bg-white transition-colors duration-500">
            
            {/* Unified Decorative Background Elements (Soft Warm Glows) - Tuned down for cleanliness */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity"></div>
            
            {/* Main Image Area */}
            <div className="absolute inset-0 p-6 flex items-center justify-center">
                {hasMultipleImages ? (
                  <div className="relative w-full h-full">
                    {/* First Image (Left/Back) */}
                    <img 
                      src={item.images[0]} 
                      alt=""
                      className="absolute top-1/2 left-1/2 h-[85%] w-auto object-contain transform -translate-y-1/2 -translate-x-[65%] -rotate-3 z-10 rounded-sm shadow-sm transition-all duration-500 ease-smooth grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-x-[75%] group-hover:-rotate-6 group-hover:scale-105 group-hover:z-30"
                    />
                    
                    {/* Second Image (Right/Front) */}
                    <img 
                      src={item.images[1]} 
                      alt={item.title}
                      className="absolute top-1/2 left-1/2 h-[85%] w-auto object-contain transform -translate-y-1/2 -translate-x-[35%] rotate-3 z-20 rounded-sm shadow-md transition-all duration-500 ease-smooth grayscale-[40%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-x-[25%] group-hover:rotate-6 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <img 
                    ref={imgRef}
                    src={item.images[0]} 
                    alt={item.title} 
                    onLoad={() => setIsImageLoaded(true)}
                    className={`
                      max-w-full max-h-full object-contain 
                      transition-all duration-700 ease-smooth transform-gpu
                      
                      /* Default: Desaturated for uniformity */
                      grayscale-[40%] contrast-[0.95]
                      
                      /* Hover: Full color, pop effect */
                      md:group-hover:scale-110 md:group-hover:-rotate-1 
                      md:group-hover:grayscale-0 md:group-hover:contrast-100 md:group-hover:opacity-100
                      md:group-hover:drop-shadow-lg
                      
                      ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
                    `}
                  />
                )}
            </div>
            
            {/* Icon Badge */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-accentWarm shadow-lg transform md:translate-y-[-10px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-smooth delay-75 z-30">
              {item.icon}
            </div>
          </div>

          {/* Card Footer Info */}
          <div className="p-5 md:p-6 relative bg-white flex-1 flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accentWarm bg-orange-50 px-2 py-1 rounded-md">
                {categoryLabel}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 md:group-hover:text-accentWarm transition-colors duration-300">
              {item.title}
            </h3>
            <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-gray-400 md:group-hover:text-gray-600 transition-colors">
              <span>查看详情</span>
              <span className="transform translate-x-0 md:group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
            
            {/* Decorative Line (Desktop only) */}
            <div className="hidden md:block absolute bottom-0 left-0 w-0 h-1 bg-accentWarm group-hover:w-full transition-all duration-700 ease-smooth" />
          </div>
       </div>
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // 计算每个类别的数量（用于上标显示）
  const getCount = (cat: string) => {
    if (cat === 'all') return PORTFOLIO_ITEMS.length;
    return PORTFOLIO_ITEMS.filter(item => item.category === cat).length;
  };

  const categories = ['all', 'personal', 'business', 'humanity'];

  // Filter items to ensure animation delays are correct for the visible set
  const filteredItems = activeCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-cream border-t border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Section */}
        <div className="mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 md:mb-8 tracking-tight">
            真实案例 <span className="text-accentWarm">Case Studies</span>
          </h2>
          
          {/* Filter Bar - Reference Image Style */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-base sm:text-lg md:text-xl font-mono">
            {categories.map((cat, index) => (
              <div key={cat} className="flex items-center group">
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-1 transition-all duration-500 ease-smooth hover:text-accentWarm ${
                    activeCategory === cat 
                      ? 'text-accentWarm font-bold' 
                      : 'text-gray-400 font-normal'
                  }`}
                >
                  <span className="relative z-10">{CATEGORIES[cat]}</span>
                  {/* Superscript Count */}
                  <span className={`absolute -top-1 -right-2 text-[10px] font-sans font-bold transition-opacity duration-300 ${
                     activeCategory === cat ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                  }`}>
                    {getCount(cat).toString().padStart(2, '0')}
                  </span>
                </button>
                {index < categories.length - 1 && (
                  <span className="text-gray-300 select-none ml-2">/</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, idx) => (
            <PortfolioCard 
               key={`${item.id}-${activeCategory}`} // Force remount on category change to restart animation
               item={item}
               isVisible={true}
               animationDelay={`${idx * 0.1}s`} // Delay based on filtered index
               onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

      </div>

      {/* Enhanced Detail Modal */}
      <ImagePreviewModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        onOpenContact={onOpenContact}
        item={selectedItem}
      />
    </section>
  );
};

export default Portfolio;
