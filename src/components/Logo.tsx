import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ size = 'md', variant = 'light', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const primaryColor = variant === 'light' ? '#9FB3DF' : '#9FB3DF';
  const secondaryColor = variant === 'light' ? '#FFFFFF' : '#000000';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer hexagon */}
        <path
          d="M24 4L37.86 12V28L24 36L10.14 28V12L24 4Z"
          stroke={primaryColor}
          strokeWidth="2"
          fill="none"
        />
        
        {/* Inner geometric pattern */}
        <path
          d="M24 4V36M10.14 12L37.86 28M37.86 12L10.14 28"
          stroke={primaryColor}
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Center dot */}
        <circle
          cx="24"
          cy="20"
          r="2"
          fill={primaryColor}
        />
        
        {/* 79 integrated into design */}
        <text
          x="19"
          y="34"
          fontSize="6"
          fontWeight="bold"
          fill={primaryColor}
          fontFamily="system-ui, sans-serif"
        >
          79
        </text>
      </svg>
      
      <div className="flex flex-col">
        <span 
          className={`font-bold tracking-tight font-sans ${
            size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
          }`}
          style={{ color: variant === 'light' ? '#FFFFFF' : '#000000' }}
        >
          79Ratio
        </span>
        <span 
          className={`text-xs tracking-wide uppercase ${
            variant === 'light' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Technology Solutions
        </span>
      </div>
    </div>
  );
}