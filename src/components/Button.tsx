import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded transition-colors ${className}`}
    >
      {children}
    </button>
  );
}; 