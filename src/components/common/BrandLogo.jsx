import React from 'react';
import { SITE_CONFIG, logo } from '../../data/navigationData';
import { Link as RouterLink } from 'react-router-dom';

export function BrandLogo({
  variant = 'navbar',
  className = '',
  textClassName = '',
  subtitleClassName = '',
  showHope = false,
}) {
  const isFooter = variant === 'footer';

  return (
    <RouterLink
      to="/"
      className={`inline-flex items-center gap-2 sm:gap-4 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1 ${className}`}
      aria-label={`${SITE_CONFIG.name} - Homepage`}
    >
      <img
        src={logo}
        alt={`${SITE_CONFIG.name} logo`}
        className={isFooter
          ? 'w-[3.5rem] h-[3.5rem] sm:w-[4.75rem] sm:h-[4.75rem] md:w-[5.5rem] md:h-[5.5rem] object-contain shrink-0'
          : 'w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] object-contain shrink-0'}
      />

      <div className="flex flex-col min-w-0 leading-none">
        <span
          className={`font-bold tracking-tight text-[12px] sm:text-[14px] md:text-[16px] ${isFooter ? 'text-white group-hover:text-amber-400 transition-colors' : 'text-blue-950'} break-words ${textClassName}`}
        >
          {SITE_CONFIG.name}
        </span>

        <div className={`mt-1 flex flex-wrap items-center gap-2 text-[8px] sm:text-[10px] md:text-[11px] ${isFooter ? '' : ''}`}>
          <span
            className={`font-bold tracking-widest uppercase break-words ${isFooter ? 'text-amber-500' : 'text-amber-600'} ${subtitleClassName}`}
          >
            {SITE_CONFIG.subName}
          </span>

          {showHope && (
            <span className="text-[11px] italic text-red-500">
              {SITE_CONFIG.subNameHope}
            </span>
          )}
        </div>
      </div>
    </RouterLink>
  );
}

export default BrandLogo;
