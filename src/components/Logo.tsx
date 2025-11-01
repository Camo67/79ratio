import React from 'react';
import logoImage from '@/assets/79ratio-logo-new.webp';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = 'md', variant = 'light', className = '', showText = false }: LogoProps) {
  const sizeHeights: Record<NonNullable<LogoProps['size']>, string> = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoImage}
        alt="79Ratio Logo"
        className={`${sizeHeights[size]} w-auto object-contain`}
      />

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold tracking-tight font-sans ${
              size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
            } ${variant === 'light' ? 'text-white' : 'text-black'}`}
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
      )}

      {/* Accessible branding text for screen readers when text hidden visually */}
      {!showText && (
        <span className="sr-only">79Ratio Technology Solutions</span>
      )}
    </div>
  );
}
