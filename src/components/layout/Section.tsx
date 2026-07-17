import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'none' | 'light' | 'dark';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

const paddingClasses = {
  none: 'py-0',
  sm: 'py-8',
  md: 'py-16',
  lg: 'py-24',
};

const backgroundClasses = {
  none: '',
  light: 'bg-gray-50',
  dark: 'bg-gray-900 text-white',
};

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  maxWidth = 'md',
  padding = 'md',
  background = 'none',
}) => {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn('mx-auto px-4', maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </section>
  );
}; 