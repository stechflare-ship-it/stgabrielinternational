import React, { memo } from 'react';

const StaffFilterTabs = memo(function StaffFilterTabs({ categories, activeCategory, onSelect }) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 mb-12"
      role="tablist"
      aria-label="Filter staff by department"
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategory;
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(category.id)}
            className={`
              px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2
              ${isActive
                ? 'bg-blue-950 text-white'
                : 'bg-gray-100 text-red-700 hover:text-white hover:bg-blue-600'}
            `}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
});

StaffFilterTabs.displayName = 'StaffFilterTabs';

export default StaffFilterTabs;
