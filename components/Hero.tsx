
import React from 'react';
import { Lightbulb, Flame, Handshake } from 'lucide-react';
import Button from './ui/Button';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative w-full pt-28 md:pt-32 pb-16 md:pb-24 min-h-[85vh] flex flex-col justify-center bg-cream overflow-hidden scroll-mt-28">
      
      {/* Decorative Background Elements (Right Side) - Full width positioning */}
      <div className="absolute top-0 right-0 w-[50vw] h-full hidden lg:block pointer-events-none select-none z-0">
        
        {/* Soft Gradient Blob - Animated */}
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-orange-100/40 to-white/0 rounded-full blur-3xl mix-blend-multiply animate-blob opacity-60"></div>
        
        {/* Stylized Feather Pattern */}
        <div className="absolute inset-0 opacity-100">
           <svg className="w-full h-full text-accentWarm" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="featherGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e89047" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#e89047" stopOpacity="0.02"/>
                </linearGradient>
                <linearGradient id="featherGrad2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e89047" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#e89047" stopOpacity="0.01"/>
                </linearGradient>
              </defs>

              {/* Feather 1: Large, Elegant, Flowing Upwards */}
              <g transform="translate(420, 100) rotate(15) scale(1.4)">
                 {/* Shaft (Rachis) */}
                 <path d="M100 20 Q 110 150, 90 400" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" fill="none" />
                 
                 {/* Right Vane */}
                 <path d="M100 20 Q 160 80, 180 200 C 190 280, 150 350, 90 400" fill="url(#featherGrad1)" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                 
                 {/* Left Vane (with stylized notches) */}
                 <path d="M100 20 Q 40 80, 30 180 C 25 220, 40 260, 60 280 C 50 300, 60 320, 70 340 L 90 400" fill="url(#featherGrad1)" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                 
                 {/* Decorative details (Tech/Abstract lines) */}
                 <path d="M100 80 L 130 100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                 <path d="M100 140 L 150 170" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                 <path d="M98 200 L 50 230" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
              </g>

              {/* Feather 2: Smaller, Floating Below */}
              <g transform="translate(150, 450) rotate(-25) scale(0.9)">
                 {/* Shaft */}
                 <path d="M80 0 Q 80 80, 70 200" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3" fill="none"/>
                 
                 {/* Simple Vane Shape */}
                 <path d="M80 0 C 130 30, 130 150, 70 200 C 10 150, 30 30, 80 0 Z" fill="url(#featherGrad2)" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
                 
                 {/* Accents */}
                 <circle cx="80" cy="50" r="2" fill="currentColor" fillOpacity="0.2" />
                 <circle cx="80" cy="120" r="1.5" fill="currentColor" fillOpacity="0.2" />
              </g>

              {/* Subtle Particles/Dust */}
              <circle cx="600" cy="200" r="2" fill="currentColor" fillOpacity="0.2" />
              <circle cx="650" cy="150" r="3" fill="currentColor" fillOpacity="0.1" />
              <circle cx="300" cy="600" r="4" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
           </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-tight">
            <span className="block text-gray-800 mb-2">以AI为介</span>
            <span className="text-accentWarm block">创造真正有价值的应用</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
             <span className="font-bold text-accentWarm">Winglet AI</span>，致力于解决实际问题，创造惊喜体验，传递情感温度的AI应用开发团队。
          </p>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            {[
              { 
                icon: <Lightbulb className="text-accentWarm" size={32} />, 
                title: "听懂需求", 
                desc: "不用模板，不走过场。真正理解你的业务痛点，找出最精准的AI解决方案。" 
              },
              { 
                icon: <Flame className="text-accentWarm" size={32} />, 
                title: "靠谱落地", 
                desc: "专注前沿技术，把大模型能力转化为你能用、能赚钱、高效率的实用工具。" 
              },
              { 
                icon: <Handshake className="text-accentWarm" size={32} />, 
                title: "长期伙伴", 
                desc: "合作不止于交付。应用上线后，我们依然是你的技术后盾，确保应用持续可用。" 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 md:mb-4 bg-orange-50 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 items-start">
            <Button onClick={onOpenContact} className="text-lg px-8 w-full md:w-auto">
              和我们聊聊你的想法
            </Button>
            <p className="text-gray-500 text-sm">
              你的下一个惊喜，我们来一起实现。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
