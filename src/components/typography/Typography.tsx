import React from 'react';
import { cn } from '../../utils/cn';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  children: React.ReactNode;
  font?: 'default' | 'indie';
  color?: 'default' | 'primary' | 'secondary' | 'muted';
  align?: 'left' | 'center' | 'right';
}

const variantClasses = {
  h1: 'text-5xl font-bold',
  h2: 'text-4xl font-semibold',
  h3: 'text-3xl font-semibold',
  h4: 'text-2xl font-medium',
  h5: 'text-xl font-medium',
  h6: 'text-lg font-medium',
  p: 'text-base',
  span: 'text-base',
};

const fontClasses = {
  default: 'font-sans',
  indie: 'font-indie',
};

const colorClasses = {
  default: 'text-gray-900',
  primary: 'text-pink-600',
  secondary: 'text-gray-600',
  muted: 'text-gray-500',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  className = '',
  children,
  font = 'default',
  color = 'default',
  align = 'left',
}) => {
  const Component = variant;
  
  return (
    <Component
      className={cn(
        variantClasses[variant],
        fontClasses[font],
        colorClasses[color],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
}; 