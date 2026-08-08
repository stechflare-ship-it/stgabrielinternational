import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`bg-[#0B1D33]/90 backdrop-blur-md border-b border-[#C59B27]/20 py-3 px-4 sm:px-6 text-xs sm:text-sm text-gray-300 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
        <Link
          to="/"
          className="flex items-center gap-1.5 hover:text-[#E0BA43] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C59B27] rounded"
        >
          <Home className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.path}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-[#E0BA43] truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-[#E0BA43] transition-colors truncate max-w-[150px] sm:max-w-xs focus:outline-none focus:ring-1 focus:ring-[#C59B27] rounded"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
