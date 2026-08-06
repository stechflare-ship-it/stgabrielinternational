import React, { memo } from 'react';
import { GALLERY_DATA } from './galleryData';

const GalleryFilter = memo(function GalleryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  totalImages 
}) {
  // Safety check
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return null;
  }

  // Get count for each category
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return totalImages || 0;
    const group = GALLERY_DATA?.groups?.[categoryId];
    return group && Array.isArray(group.images) ? group.images.length : 0;
  };

  return (
    <section className=" top-0 z-20 bg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5 md:gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => {
              const count = getCategoryCount(category.id);
              const isSelected = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 
                    rounded-full text-xs md:text-sm font-medium
                    transition-all duration-200 whitespace-nowrap
                    ${isSelected 
                      ? 'bg-blue-950 text-amber-400 shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    }
                  `}
                  aria-pressed={isSelected}
                  aria-label={`Filter by ${category.label}`}
                >
                  <span className="text-base md:text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                  <span className={`
                    text-[10px] font-bold px-1.5 py-0.5 rounded-full
                    ${isSelected 
                      ? 'bg-amber-500/20 text-amber-400' 
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          
          <div className="text-xs md:text-sm text-gray-500 flex items-center gap-2">
            <span className="hidden sm:inline">Showing</span>
            <span className="font-bold text-blue-950">{totalImages || 0}</span>
            <span className="hidden sm:inline">{totalImages === 1 ? 'image' : 'images'}</span>
          </div>
        </div>
      </div>
    </section>
  );
});

GalleryFilter.displayName = 'GalleryFilter';

export default GalleryFilter;