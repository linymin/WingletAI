import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Search, Zap, CheckCircle2, Rocket, GraduationCap, Building2, Heart } from 'lucide-react';

interface PortfolioProps {
  onOpenContact?: () => void;
}

const CategoryHeader: React.FC<{ title: string; icon: React.ReactNode; desc: string }> = ({ title, icon, desc }) => (
  <div className="mb-8 mt-16 first:mt-0">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-orange-100 rounded-lg text-accentWarm">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-500 italic border-l-4 border-accentWarm pl-4">{desc}</p>
  </div>
);

const PortfolioCard: React.FC<{ item: typeof PORTFOLIO_ITEMS[0] }> = ({ item }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
    {/* Header */}
    <div className="p-6 pb-4 border-b border-gray-50 bg-gradient-to-r from-orange-50/50 to-transparent flex items-center gap-4">
      <div className="bg-white p-2 rounded-lg shadow-sm text-accentWarm shrink-0 group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>
      <h4 className="text-xl font-bold text-gray-800 group-hover:text-accentWarm transition-colors">
        {item.title}
      </h4>
    </div>
    
    {/* Content */}
    <div className="p-6 flex-1 flex flex-col gap-4">
      
      {/* Problem */}
      <div className="flex gap-3 items-start">
        <Search className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">需求</span>
          <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg">
            {item.problem}
          </p>
        </div>
      </div>

      {/* Solution */}
      <div className="flex gap-3 items-start">
        <Zap className="w-5 h-5 text-accentWarm mt-1 shrink-0" />
        <div>
          <span className="text-xs font-bold text-accentWarm uppercase tracking-wider block mb-1">方案</span>
          <p className="text-sm text-gray-700 font-medium leading-relaxed bg-orange-50/30 border border-orange-100 p-3 rounded-lg">
            {item.solution}
          </p>
        </div>
      </div>

      {/* Result */}
      <div className="mt-auto pt-4 flex gap-3 items-start border-t border-gray-50">
        <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
        <div>
          <p className="text-sm text-green-700 font-medium leading-relaxed">
            {item.result}
          </p>
        </div>
      </div>

    </div>
  </div>
);

const Portfolio: React.FC<PortfolioProps> = ({ onOpenContact }) => {
  const creationItems = PORTFOLIO_ITEMS.filter(i => i.category === 'creation');
  const professionalItems = PORTFOLIO_ITEMS.filter(i => i.category === 'professional');
  const enterpriseItems = PORTFOLIO_ITEMS.filter(i => i.category === 'enterprise');
  const charityItems = PORTFOLIO_ITEMS.filter(i => i.category === 'charity');

  return (
    <section id="portfolio" className="py-20 bg-cream border-t border-gray-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            真实案例：我们如何用 <span className="text-accentWarm">AI解决实际问题</span>
          </h2>
          
        </div>

        {/* Creation Section */}
        <CategoryHeader 
          title="创作与个人效率加速" 
          icon={<Rocket size={24} />}
          desc="好工具能让生活更轻松，让创作更有趣。我们帮你把那些重复的、费脑力的工作交给AI。"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {creationItems.map(item => <PortfolioCard key={item.id} item={item} />)}
        </div>

        {/* Professional Section */}
        <CategoryHeader 
          title="打破壁垒的专业训练与交流" 
          icon={<GraduationCap size={24} />}
          desc="在高要求的专业领域，AI可以提供更及时、更细致、更人性化的指导。"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {professionalItems.map(item => <PortfolioCard key={item.id} item={item} />)}
        </div>

        {/* Enterprise Section */}
        <CategoryHeader 
          title="为企业流程注入智能动力" 
          icon={<Building2 size={24} />}
          desc="企业的效率提升，往往藏在那些日常琐碎、重复的流程里。"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {enterpriseItems.map(item => <PortfolioCard key={item.id} item={item} />)}
        </div>

        {/* Charity Section */}
        <CategoryHeader 
          title="社会应用：用AI传递关怀" 
          icon={<Heart size={24} />}
          desc="技术不止服务商业，更应该用于弥合隔阂、传递温暖。"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {charityItems.map(item => <PortfolioCard key={item.id} item={item} />)}
          <div 
            onClick={onOpenContact}
            className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex items-center justify-center text-center bg-gray-50/50 hover:bg-orange-50 hover:border-accentWarm/50 hover:text-accentWarm transition-all cursor-pointer group"
          >
            <div className="group-hover:scale-105 transition-transform">
              <Heart className="w-10 h-10 text-gray-300 group-hover:text-accentWarm mx-auto mb-3 transition-colors" />
              <p className="text-gray-500 group-hover:text-accentWarm font-medium transition-colors">期待你的新想法<br/>下一个暖心应用等你来定义！</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;