import React, { memo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const GalleryGroup = memo(function GalleryGroup({ 
  group, 
  onImageClick,
  onViewMore 
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [loadedIds, setLoadedIds] = useState(() => new Set());
  const navigate = useNavigate();

  const handleImgLoad = useCallback((id) => {
    setLoadedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  // Safety check
  if (!group || !group.images || !Array.isArray(group.images) || group.images.length === 0) {
    return null;
  }

  // Show only 4 images initially, or all if expanded
  const displayedImages = isExpanded 
    ? group.images 
    : group.images.slice(0, 4);
  
  const hasMoreImages = group.images.length > 4;

  const handleViewMore = () => {
    if (onViewMore) {
      onViewMore(group.id);
    } else {
      navigate(`/gallery/${group.id}`);
    }
  };

  return (
    <section 
      ref={ref}
      className="py-4  md:py-4 border-b border-gray-100 last:border-0"
      aria-label={`${group.title} Gallery`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Group Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {group.title || 'Gallery'}
              </h2>
              <span className="text-sm text-blue-800 font-bold bg-gray-100 px-3 py-1 rounded-full">
                {group.images.length} photos
              </span>
            </div>
            {group.description && (
              <p className="text-amber-400 font-bold text-sm md:text-base">{group.description}</p>
            )}
          </div>
          
          {hasMoreImages && (
            <button
              onClick={handleViewMore}
              className="
                flex items-center gap-2 px-4 py-2 
                bg-blue-950 text-white font-medium rounded-lg
                hover:bg-blue-800 transition-colors
                focus:outline-none focus:ring-2 focus:ring-amber-500
                text-sm md:text-base
              "
              aria-label={`View all ${group.images.length} images in ${group.title}`}
            >
              <span>View All</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {displayedImages.map((image, index) => (
            <div
                key={image.id}
                className={`
                    group/card relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl
                    transition-all duration-500 cursor-pointer bg-slate-900
                    border border-white/10 hover:border-amber-400/50
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ 
                    transitionDelay: `${(index % 4) * 100}ms`
                }}
              onClick={() => onImageClick({
                ...image,
                groupId: group.id,
                groupTitle: group.title,
              }, index)}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.overlay-content');
                if (overlay) {
                  overlay.classList.remove('opacity-0', 'translate-y-4');
                  overlay.classList.add('opacity-100', 'translate-y-0');
                }
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.overlay-content');
                if (overlay) {
                  overlay.classList.add('opacity-0', 'translate-y-4');
                  overlay.classList.remove('opacity-100', 'translate-y-0');
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={image.title}
              onKeyDown={(e) => (e.key === 'Enter') && onImageClick({
                ...image,
                groupId: group.id,
                groupTitle: group.title,
              }, index)}
            >
              {/* Image - skeleton shows until the image actually finishes loading,
                  and it fades in instead of popping in abruptly */}
              <div className={`w-full h-full ${loadedIds.has(image.id) ? '' : 'bg-gray-200 animate-pulse'}`}>
                <picture>
                  {image.avifSrcSet && (
                    <source
                      type="image/avif"
                      srcSet={image.avifSrcSet}
                      sizes="(min-width: 1280px) 280px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                  {image.webpSrcSet && (
                    <source
                      type="image/webp"
                      srcSet={image.webpSrcSet}
                      sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 45vw"
                    />
                  )}
                  <img
                    src={image.image}
                    alt={image.title}
                    className={`
                        w-full h-full object-cover object-center 
                        transition-all duration-500 group-hover/card:scale-105
                        ${loadedIds.has(image.id) ? 'opacity-100' : 'opacity-0'}
                    `}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    sizes="(min-width: 1280px) 280px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    srcSet={image.srcSet}
                    onLoad={() => handleImgLoad(image.id)}
                  />
                </picture>
              </div>

              {/* Hover Overlay */}
              <div className="
                absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent
                opacity-0 group-hover/card:opacity-100 transition-all duration-300
                flex items-end justify-start p-4
                ">
                <div>
                  <h3 className="text-white text-sm font-bold line-clamp-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-300">
                    {image.location && <span>📍 {image.location}</span>}
                    <span className="text-amber-400 text-[10px] font-bold">
                      VIEW
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured badge */}
              {image.featured && (
                <div className="absolute top-2 right-2 bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                  FEATURED
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Inline "View More" button for expansion */}
        {hasMoreImages && !onViewMore && (
          <div className="text-center mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="
                inline-flex items-center gap-2 px-6 py-3 
                bg-gray-100 hover:bg-gray-200 
                text-gray-700 font-medium rounded-lg
                transition-colors
              "
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>View {group.images.length - 4} More Photos</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

GalleryGroup.displayName = 'GalleryGroup';

export default GalleryGroup;