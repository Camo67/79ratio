import React from 'react';
import logoImage from 'figma:asset/349f9df2ad456d12eda6c6daef43893bff1b1253.png';

interface LogoSimpleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

const LogoSimple: React.FC<LogoSimpleProps> = ({ 
  size = 'md', 
  variant = 'light', 
  className = '',
  showText = false
}) => {
  const sizeConfig = {
    sm: {
      height: 'h-8',
      textSize: 'text-lg',
      spacing: 'space-x-2'
    },
    md: {
      height: 'h-12',
      textSize: 'text-xl',
      spacing: 'space-x-3'
    },
    lg: {
      height: 'h-16',
      textSize: 'text-2xl',
      spacing: 'space-x-3'
    },
    xl: {
      height: 'h-24',
      textSize: 'text-4xl',
      spacing: 'space-x-4'
    },
    xxl: {
      height: 'h-32',
      textSize: 'text-5xl',
      spacing: 'space-x-6'
    }
  };

  const config = sizeConfig[size];
  const textColor = variant === 'light' ? 'text-white' : 'text-black';

  return (
    <div className={`flex items-center justify-center ${config.spacing} ${className}`}>
      <div className={`${config.height} w-auto`}>
        <img
          src={logoImage}
          alt="79Ratio Logo"
          className="h-full w-auto object-contain transition-all duration-300"
          style={{
            filter: variant === 'dark' ? 'none' : 'brightness(1.1) saturate(1.1)',
          }}
        />
      </div>
      
      {showText && (
        <span className={`font-bold font-sans ${config.textSize} ${textColor} leading-none`}>
          Technology
        </span>
      )}
    </div>
  );
};

export default LogoSimple;