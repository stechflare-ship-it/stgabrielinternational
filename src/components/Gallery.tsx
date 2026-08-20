import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';
import { Maximize2, Camera } from 'lucide-react';

interface GalleryProps {
  limit?: number;
  showFilter?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ limit, showFilter = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Boarding', 'Arts & Drama'];

  let filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  if (limit && limit > 0) {
    filteredItems = filteredItems.slice(0, limit);
  }

  const activeItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="w-full space-y-8 my-8">
      
      {/* Category Tabs */}
      {showFilter && (
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#C59B27] ${
                activeCategory === cat
                  ? 'bg-[#C59B27] text-[#0B1D33] shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedItemIndex(idx)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-100 overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://placehold.co/800x600/0B1D33/E0BA43?text=${encodeURIComponent(item.title)}`;
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33]/90 via-[#0B1D33]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Category Tag */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B1D33]/80 backdrop-blur-md text-[#E0BA43] text-[10px] font-extrabold uppercase border border-[#C59B27]/40">
                {item.category}
              </span>

              {/* Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#C59B27] text-[#0B1D33] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="font-serif font-bold text-base leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 line-clamp-2 mt-0.5 font-normal">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeItem}
        onClose={() => setSelectedItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

    </div>
  );
};
