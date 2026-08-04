import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary',
    gold: 'bg-[#D4AF37] text-[#0F2D52] hover:bg-[#C4A030] focus:ring-[#D4AF37]',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2 h-9',
    md: 'text-base px-6 py-3 h-12',
    lg: 'text-lg px-8 py-4 h-14',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        (disabled || isLoading) && 'opacity-70 cursor-not-allowed active:scale-100',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
