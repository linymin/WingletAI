import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accentWarm text-white shadow-md hover:bg-accentHover hover:shadow-lg transform hover:-translate-y-0.5 px-6 py-3",
    outline: "border-2 border-accentWarm text-accentWarm hover:bg-orange-50 px-6 py-3",
    link: "text-accentWarm hover:text-accentHover underline decoration-2 underline-offset-4 p-0 bg-transparent shadow-none"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;