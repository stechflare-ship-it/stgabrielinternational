import React, { memo, useState } from 'react';

const GalleryCard = memo(function GalleryCard({ 
  image, 
  index, 
  onImageClick,
  isVisible,
  isGroupView = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        group relative w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl
        transition-all duration-500 cursor-pointer bg-slate-900
        border border-white/10 hover:border-amber-400/50 isolate
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ 
        transitionDelay: `${(index % 6) * 50}ms`,
        aspectRatio: '4/3',
      }}
      onClick={onImageClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onImageClick();
        }
      }}
    >
      {/* Image Container */}
      <div className="w-full h-full bg-slate-800">
        <picture>
          {image.avifSrcSet && (
            <source
              type="image/avif"
              srcSet={image.avifSrcSet}
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
            />
          )}
          {image.webpSrcSet && (
            <source
              type="image/webp"
              srcSet={image.webpSrcSet}
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
            />
          )}
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            loading={index < 4 ? 'eager' : 'lazy'}
            decoding="async"
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
            srcSet={image.srcSet}
          />
        </picture>
      </div>

      {/* Gradient Overlay */}
      <div 
        className={`
          absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-auto">
          <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-white text-lg font-bold mb-2 line-clamp-2">
              {image.title}
            </h3>
            
            {image.description && (
              <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                {image.description}
              </p>
            )}

            <button
              className="
                inline-flex items-center gap-2 px-6 py-2 
                bg-amber-500 text-black font-semibold rounded-full
                hover:bg-amber-400 transition-colors shadow-lg
                group/btn
              "
              onClick={(e) => {
                e.stopPropagation();
                onImageClick();
              }}
            >
              <span>VIEW FULLSCREEN</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover/btn:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-300">
              {image.location && <span>📍 {image.location}</span>}
              {image.date && <span>📅 {image.date}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Badges - Set z-index to stay cleanly on top */}
      {image.groupId && (
        <div className="absolute top-3 left-3 z-20 bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">
          {image.groupTitle}
        </div>
      )}

      {image.featured && (
        <div className="absolute top-3 right-3 z-20 bg-amber-500 text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md">
          ⭐ FEATURED
        </div>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
          Click to view
        </div>
      </div>
    </div>
  );
});

GalleryCard.displayName = 'GalleryCard';

export default GalleryCard;