import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  external = false,
  icon,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold uppercase tracking-widest rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'text-[10px] px-4 py-2 gap-1.5',
    md: 'text-[11px] px-6 py-2.5 gap-2',
    lg: 'text-xs px-8 py-4 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#D4AF37] hover:bg-white text-[#0A192F] focus:ring-[#D4AF37] font-bold shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-[#0A192F] hover:bg-[#D4AF37] hover:text-[#0A192F] border border-white/20 focus:ring-[#D4AF37]',
    outline:
      'bg-transparent hover:bg-white/10 text-white border border-white/30 focus:ring-white',
    whatsapp:
      'bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold focus:ring-[#25D366]',
    phone:
      'bg-[#0A192F] hover:bg-[#162E4D] text-[#D4AF37] border border-[#D4AF37]/30 font-bold focus:ring-[#0A192F]',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
