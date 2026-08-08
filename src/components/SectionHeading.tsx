import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#0A192F]';
  const subtitleColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-3 text-[#D4AF37] font-semibold tracking-[0.3em] text-xs uppercase mb-3">
          <div className="h-[1px] w-6 bg-[#D4AF37]"></div>
          <span>{badge}</span>
          <div className="h-[1px] w-6 bg-[#D4AF37]"></div>
        </div>
      )}

      <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight ${titleColor}`}>
        {title}
      </h2>

      <div className="w-16 h-[2px] bg-[#D4AF37] my-4"></div>

      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
