import logoImage from '../assets/79ratio-logo-new.webp';
import { cn } from './ui/utils';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
  imageClassName?: string;
}

export default function Logo({
  size = 'md',
  variant = 'light',
  className = '',
  imageClassName = '',
  showText = false,
}: LogoProps) {
  const sizeConfig: Record<
    NonNullable<LogoProps['size']>,
    {
      image: string;
      primaryText: string;
      secondaryText: string;
      gap: string;
    }
  > = {
    xs: {
      image: 'h-6',
      primaryText: 'text-base',
      secondaryText: 'text-[0.65rem]',
      gap: 'gap-2',
    },
    sm: {
      image: 'h-8',
      primaryText: 'text-lg',
      secondaryText: 'text-[0.7rem]',
      gap: 'gap-2',
    },
    md: {
      image: 'h-10',
      primaryText: 'text-xl',
      secondaryText: 'text-xs',
      gap: 'gap-3',
    },
    lg: {
      image: 'h-14',
      primaryText: 'text-2xl',
      secondaryText: 'text-sm',
      gap: 'gap-3',
    },
    xl: {
      image: 'h-16',
      primaryText: 'text-3xl',
      secondaryText: 'text-sm',
      gap: 'gap-4',
    },
    xxl: {
      image: 'h-20',
      primaryText: 'text-4xl',
      secondaryText: 'text-sm',
      gap: 'gap-5',
    },
  };

  const { image, primaryText, secondaryText, gap } =
    sizeConfig[size] ?? sizeConfig.md;

  return (
    <div className={cn('flex items-center', gap, className)}>
      <img
        src={logoImage}
        alt="79Ratio Logo"
        className={cn(
          `${image} w-auto max-w-full object-contain`,
          imageClassName,
        )}
      />

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-bold tracking-tight font-sans leading-none',
              primaryText,
              variant === 'light' ? 'text-white' : 'text-black',
            )}
          >
            79Ratio
          </span>
          <span
            className={cn(
              'tracking-wide uppercase',
              secondaryText,
              variant === 'light' ? 'text-gray-300' : 'text-gray-600',
            )}
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
