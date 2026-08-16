import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import realLogoImg from '../assets/images/logo.webp';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  className?: string;
  showTagline?: boolean;
}

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
      className={`group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm p-1 transition-transform ${className}`}
      aria-label="St. Gabriel International School Home"
    >
      <div className="relative flex-shrink-0 min-h-8 flex items-center justify-center rounded-full">
        {!imgError ? (
          <img
            src={realLogoImg}
            alt="St. Gabriel International School Crest"
            className="w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] object-contain shrink-0"
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
              ? 'text-[#0A192F] group-hover:text-red-700'
              : 'text-[#0A192F] group-hover:text-red-700'
          }`}
        >
          ST. GABRIEL
        </span>
        <span
          className={`text-[12px] tracking-[0.2em] font-bold uppercase ${
            isLightText ? 'text-red-700' : 'text-red-600'
          }`}
        >
          International School
        </span>
        {showTagline && (
          <span className="text-[10px] text-red-600 uppercase tracking-[0.2em] font-medium italic sm:inline-block">
            &quot;Hope to the World&quot;
          </span>
        )}
      </div>
    </Link>
  );
};
