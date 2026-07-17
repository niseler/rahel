import React from 'react';
import { ImageProps } from '../types';

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
}; 