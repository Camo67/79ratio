import React from 'react';

type ImageContainerProps = {
  src?: string;
  mobileSrc?: string;
  desktopSrc?: string;
  alt?: string;
  overlayClassName?: string;
  className?: string;
  contentClassName?: string;
  objectPositionClassName?: string;
  rounded?: boolean;
  children?: React.ReactNode;
};

/**
 * ImageContainer: Reusable background-image section with text overlay.
 * - Supports responsive sources (mobile/desktop)
 * - Adds optional dark overlay for readability
 */
const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  mobileSrc,
  desktopSrc,
  alt = '',
  overlayClassName = 'bg-black/40',
  className = '',
  contentClassName = '',
  objectPositionClassName = 'object-center',
  rounded = true,
  children,
}) => {
  // Determine fallback order
  const base = import.meta.env.BASE_URL || '/';
  const normalize = (p?: string) => {
    if (!p) return undefined;
    if (/^https?:\/\//i.test(p)) return p;
    const joined = p.startsWith('/') ? `${base}${p.slice(1)}` : `${base}${p}`;
    return encodeURI(joined);
  };

  const resolvedMobile = normalize(mobileSrc);
  const resolvedDesktop = normalize(desktopSrc);
  const resolvedSrc = normalize(src);
  const fallbackSrc = resolvedMobile || resolvedSrc || resolvedDesktop || '';

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-xl' : ''} ${className}`}>
      <picture>
        {resolvedDesktop ? (
          <source media="(min-width: 1024px)" srcSet={resolvedDesktop} />
        ) : null}
        <img
          src={fallbackSrc}
          alt={alt}
          aria-hidden={alt === ''}
          className={`absolute inset-0 w-full h-full object-cover ${objectPositionClassName}`}
        />
      </picture>

      {/* Overlay for contrast */}
      {overlayClassName ? (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      ) : null}

      <div className={`relative z-10 p-6 sm:p-10 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default ImageContainer;
