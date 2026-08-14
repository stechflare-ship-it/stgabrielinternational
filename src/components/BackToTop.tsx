import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button once user scrolls past 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress math
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-20 right-4 sm:right-6 z-40 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#0B1D33] hover:bg-[#162E4D] text-[#E0BA43] hover:text-white rounded-full shadow-2xl border-2 border-[#C59B27]/60 hover:border-[#E0BA43] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#C59B27]/40"
        aria-label="Scroll back to top"
        title="Go to top"
        id="floating-back-to-top-btn"
      >
        {/* SVG Progress Circle */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 48 48"
        >
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-white/10"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-[#E0BA43] transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Hover Tooltip for Desktop */}
        <span className="absolute right-14 sm:right-16 bg-[#0B1D33] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-[#C59B27]/60">
          Go to Top
        </span>
      </button>
    </div>
  );
};
