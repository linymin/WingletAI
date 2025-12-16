
import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { CONTACT_QR_CODE } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col">
        
        {/* Header - Integrated Title */}
        <div className="relative bg-accentWarm p-6 pb-10 text-center shrink-0">
             <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mt-2">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Winglet AI</h3>
                <div className="inline-block bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    <p className="text-white text-xs font-bold tracking-wider">应用定制专家</p>
                </div>
            </div>
        </div>

        {/* Content Section - Rounded top to overlap header slightly */}
        <div className="relative flex flex-col items-center px-6 pb-8 bg-white rounded-t-3xl -mt-6 pt-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            
            <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
              扫描下方二维码，添加微信<br/>
              聊聊你的想法与需求
            </p>

            {/* QR Code Container */}
            <div className="p-3 rounded-xl border-2 border-dashed border-orange-200 bg-orange-50/30 mb-5 transition-transform hover:scale-105 duration-300">
              <img 
                src={CONTACT_QR_CODE} 
                alt="Contact QR Code" 
                className="w-48 h-48 object-contain rounded-lg"
              />
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-xs">
                <MessageCircle size={14} />
                <span>扫一扫 · 直接沟通</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
