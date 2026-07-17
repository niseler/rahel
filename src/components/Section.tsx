import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`py-16 ${className}`}
    >
      <div className="max-w-screen-md mx-auto px-4">
        {children}
      </div>
    </section>
  );
}; 