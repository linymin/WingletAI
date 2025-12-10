import React from 'react';
import { PROCESS_STEPS } from '../constants';
import Button from './ui/Button';

interface ProcessProps {
  onOpenContact: () => void;
}

const Process: React.FC<ProcessProps> = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28">
      <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-orange-900/5 border border-orange-100/50">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            📞 合作流程：从想法到落地
          </h2>
          <p className="text-xl text-gray-500">
            <span className="text-accentWarm font-semibold">五步走</span>，透明、高效、定制化。
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-0"></div>

          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-cream border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 <span className="text-3xl font-extrabold text-accentWarm">{step.step}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[160px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button onClick={onOpenContact} className="text-lg px-10 py-4 shadow-orange-200 shadow-xl">
            立即开启定制咨询
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;