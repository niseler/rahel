// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// Section Types
export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location?: string;
}

// Science Types
export interface ScienceFact {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

// Valentine Types
export interface ValentineMessage {
  id: string;
  content: string;
  author?: string;
  date?: string;
}

// Common Types
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} 