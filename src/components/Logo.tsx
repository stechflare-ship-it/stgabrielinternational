import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  showTagline?: boolean;
}
import logo from '../assets/images/logo.webp'
export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showTagline = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const isLightText = variant === 'light' || variant === 'footer';

  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm p-1 transition-transform ${className}`}
      aria-label="St. Gabriel International School Home"
    >
      <div className="relative flex-shrink-0  h-14  flex items-center justify-center rounded-sm shadow-md">
        {!imgError ? (
          <img
            src={logo}
            alt="St. Gabriel International School Badge"
            className='w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[8rem] object-contain shrink-0 '
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="text-[#0A192F] font-serif font-bold text-xl">SG</span>
        )}
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif font-bold text-base sm:text-lg md:text-xl tracking-tight uppercase transition-colors ${
            isLightText
              ? 'text-white group-hover:text-[#D4AF37]'
              : 'text-[#0A192F] group-hover:text-[#D4AF37]'
          }`}
        >
          ST. GABRIEL
        </span>
        <span
          className={`text-[10px] tracking-[0.2em] font-medium uppercase ${
            isLightText ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
          }`}
        >
          International School
        </span>
        {showTagline && (
          <span className="text-[9px] text-[#D4AF37]/80 tracking-[0.2em] uppercase font-light hidden sm:inline-block">
            &quot;Hope to the World&quot;
          </span>
        )}
      </div>
    </Link>
  );
};
