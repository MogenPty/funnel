
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  themeColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  themeColor = 'indigo', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  
  const variants = {
    primary: `bg-${themeColor}-600 text-white hover:bg-${themeColor}-700 focus:ring-${themeColor}-500 shadow-md`,
    secondary: `bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-300`,
    outline: `border-2 border-${themeColor}-600 text-${themeColor}-600 hover:bg-${themeColor}-50 focus:ring-${themeColor}-500`,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
