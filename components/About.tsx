
import React from 'react';
import { Layers, Terminal, User } from 'lucide-react';
import Button from './ui/Button';

interface AboutProps {
  onOpenContact: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-gray-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:gap-16 items-start">
          
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800">
              🙋‍♂️ 关于我们：一个追求温度的<br /><span className="text-accentWarm">独立开发团队</span>
            </h2>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="absolute top-0 left-0 text-6xl text-orange-100 font-serif -translate-x-2 -translate-y-4">“</span>
              <p className="text-lg text-gray-600 relative z-10 leading-relaxed">
                我们认为好的应用，首先得是<strong className="text-accentWarm font-semibold">人性化</strong>的。
                代码和技术只是工具，我的目标是用它们来解决你真正的烦恼。
                如果你厌倦了冰冷、通用的解决方案，希望找到一个能把你的业务当成自己作品来打磨的开发者，那我们很合适。
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              我们的工作方式
            </h3>
            <ul className="space-y-6">
              {[
                {
                  icon: <Layers className="text-green-600" size={24} />,
                  title: "透明定制",
                  desc: "我们只做定制方案，不做通用模版。所有流程和技术细节都会和你透明沟通。"
                },
                {
                  icon: <Terminal className="text-blue-600" size={24} />,
                  title: "技术全栈",
                  desc: "从项目规划、前端交互（UI/UX）、后端架构，到核心AI模型的搭建和部署，搞定整套流程。"
                },
                {
                  icon: <User className="text-accentWarm" size={24} />,
                  title: "用户优先",
                  desc: "应用的设计必须简洁、好用，让技术真正服务于人。"
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 shrink-0 p-2 bg-gray-50 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centered Call to Action moved out of the flex columns */}
        <div className="mt-12 md:mt-16 pt-10 border-t border-gray-100 text-center flex flex-col items-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">想进一步了解？</h4>
          <Button variant="link" onClick={onOpenContact} className="text-xl">
              链接：我们的名片 &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
