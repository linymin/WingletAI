import React from 'react';
import { Lightbulb, Flame, Handshake } from 'lucide-react';
import Button from './ui/Button';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="pt-32 pb-24 min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
      <div className="max-w-4xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          <span className="block text-gray-800 mb-2">以AI为介</span>
          <span className="text-accentWarm block">创造真正有价值的应用</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
           <span className="font-bold text-accentWarm">Winglet AI</span>，致力于解决实际，创造惊喜体验，传递情感温度的AI应用开发团队。
        </p>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-start">
          <Button onClick={onOpenContact} className="text-lg px-8">
            和我们聊聊你的想法
          </Button>
          <p className="text-gray-500 text-sm">
            你的下一个惊喜，我们来一起实现。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
