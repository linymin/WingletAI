import React from 'react';
import { X } from 'lucide-react';
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 flex flex-col items-center animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">欢迎联系</h3>
        <p className="text-gray-500 text-center mb-6">
          扫描下方二维码，添加我的微信<br/>
          聊聊你的想法
        </p>

        <div className="p-2 border-2 border-dashed border-gray-200 rounded-xl mb-4 bg-gray-50">
           {/* 
              QR Code Source
              Defined in constants.tsx as CONTACT_QR_CODE
           */}
           <img 
            src={CONTACT_QR_CODE} 
            alt="Contact QR Code" 
            className="w-48 h-48 object-contain rounded-lg"
           />
        </div>

        <p className="text-sm text-gray-400 font-medium tracking-wide">
          WINGLET AI
        </p>
      </div>
    </div>
  );
};

export default ContactModal;