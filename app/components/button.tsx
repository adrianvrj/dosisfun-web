'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  href?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  href,
  external = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-body font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl",
    secondary: "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background"
  };

  const sizeClasses = {
    small: "px-4 py-2 text-sm min-h-[36px]",
    medium: "px-6 py-3 text-base min-h-[44px]",
    large: "px-8 py-4 text-lg min-h-[52px]"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} cursor-pointer`;

  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}