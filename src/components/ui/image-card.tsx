import React from 'react'
import { Card } from './card'
import { cn } from './utils'

export type ImageFit = 'cover' | 'contain'

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt?: string
  fit?: ImageFit
  overlay?: boolean | string
  imageClassName?: string
  contentClassName?: string
  minHeightClass?: string
}

// Helper to resolve paths under Vite base (for public/ files)
export function withBase(path: string) {
  const base = (import.meta as any).env?.BASE_URL || '/'
  return `${base}${path.replace(/^\//, '')}`
}

export function ImageCard({
  src,
  alt = '',
  fit = 'cover',
  overlay = true,
  imageClassName,
  contentClassName,
  minHeightClass = 'min-h-48',
  className,
  children,
  ...props
}: ImageCardProps) {
  return (
    <Card className={cn('relative overflow-hidden', className)} {...props}>
      <img
        src={src}
        alt={alt}
        className={cn(
          'absolute inset-0 w-full h-full',
          fit === 'cover' ? 'object-cover' : 'object-contain',
          imageClassName,
        )}
      />
      {overlay && (
        <div
          className={
            typeof overlay === 'string'
              ? overlay
              : 'absolute inset-0 bg-black/40'
          }
        />
      )}
      <div className={cn('relative p-6', minHeightClass, contentClassName)}>
        {children}
      </div>
    </Card>
  )
}

export default ImageCard

