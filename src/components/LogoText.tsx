import React from 'react';
import logoImage from 'figma:asset/349f9df2ad456d12eda6c6daef43893bff1b1253.png';

interface LogoTextProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'light' | 'dark';
  className?: string;
  withText?: boolean;
}

const LogoText: React.FC<LogoTextProps> = ({ 
  size = 'md', 
  variant = 'light', 
  className = '',
  withText = true
}) => {
  const sizeClasses = {
    sm: 'h-8 w-auto', 
    md: 'h-12 w-auto', 
    lg: 'h-16 w-auto', 
    xl: 'h-24 w-auto',
    xxl: 'h-32 w-auto'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl', 
    lg: 'text-2xl',
    xl: 'text-4xl',
    xxl: 'text-5xl'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-black';

  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className={sizeClasses[size]}>
        <img
          src={logoImage}
          alt="79Ratio Logo"
          className="h-full w-auto object-contain transition-all duration-300"
          style={{
            filter: variant === 'dark' ? 'none' : 'brightness(1.1) saturate(1.1)',
          }}
        />
      </div>
      
      {withText && (
        <div className="flex flex-col">
          <span className={`font-bold font-sans ${textSizeClasses[size]} ${textColor} leading-none`}>
            Technology Solutions
          </span>
          <span className={`font-medium font-sans text-sm ${textColor} opacity-75 leading-tight mt-1`}>
            IPR Tech Group Company
          </span>
        </div>
      )}
    </div>
  );
};

export default LogoText;