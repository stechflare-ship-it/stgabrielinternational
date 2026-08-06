import React, { memo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GALLERY_DATA } from './galleryData';

const GalleryGroupView = memo(function GalleryGroupView({ onImageClick, onBack, onGroupChange }) {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const foundGroup = GALLERY_DATA.getGroupById(groupId);
    if (foundGroup && foundGroup.images.length > 0) {
      setGroup(foundGroup);
      setIsVisible(true);
      if (onGroupChange) onGroupChange(groupId);
    } else {
      navigate('/gallery');
    }
    // Clear the active group when this view goes away (route change/unmount)
    // so the lightbox on the main grid isn't accidentally scoped to it.
    return () => {
      if (onGroupChange) onGroupChange(null);
    };
  }, [groupId, navigate, onGroupChange]);

  if (!group) {
    return (
      <div className="py-20 text-center">
        <div className="w-12 h-12 border-4 border-blue-900/20 border-t-blue-900 rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{group.title} - Gallery - St. Gabriel's International</title>
        <meta name="description" content={group.description} />
      </Helmet>

      <section className="py-8 md:py-12 bg-blue-800 min-h-screen">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Header with Back Button */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={onBack || (() => navigate('/gallery'))}
              className="
                flex items-center gap-2 px-4 py-2.5 
                bg-blue-950 text-white rounded-lg
                hover:bg-white hover:text-blue-800 hover:font-bold transition-colors
                focus:outline-none focus:ring-2 focus:ring-amber-500
              "
              aria-label="Back to gallery"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Gallery
            </button>
            
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                
                {group.title}
              </h1>
              <p className="text-amber-500 font-bold text-2sm mt-1">{group.description}</p>
            </div>
            
            <span className="text-sm text-blue-800 font-bold bg-white px-4 py-2 rounded-full shadow-sm">
               {group.images.length} photos
            </span>
          </div>

          {/* Image Grid - Masonry Style */}
          <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {group.images.map((image, index) => {
              // Varied aspect ratios for visual interest
              const aspectRatios = [
                'aspect-square',
                'aspect-square',
                'aspect-square',
                'aspect-square',
                'aspect-square',
                'aspect-square',
              ];
              const aspectClass = aspectRatios[index % aspectRatios.length];

              return (
                <div
                  key={image.id}
                  className={`
                    relative overflow-hidden bg-blue-950 rounded-xl shadow-md hover:shadow-2xl
                    transition-all duration-500 cursor-pointer
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                  style={{ 
                    transitionDelay: `${(index % 6) * 80}ms`,
                  }}
                  onClick={() => onImageClick({
                    ...image,
                    groupId: group.id,
                    groupTitle: group.title,
                  }, index)}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    if (overlay) {
                      overlay.classList.remove('opacity-0');
                      overlay.classList.add('opacity-100');
                    }
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    if (overlay) {
                      overlay.classList.add('opacity-0');
                      overlay.classList.remove('opacity-100');
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
                  {/* Image Container */}
                  <div className={`w-full ${aspectClass} bg-gray-200`}>
                    <picture>
                      {image.avifSrcSet && (
                        <source
                          type="image/avif"
                          srcSet={image.avifSrcSet}
                          sizes="(min-width: 1280px) 23vw, (min-width: 768px) 40vw, 90vw"
                        />
                      )}
                      {image.webpSrcSet && (
                        <source
                          type="image/webp"
                          srcSet={image.webpSrcSet}
                          sizes="(min-width: 1280px) 23vw, (min-width: 768px) 40vw, 90vw"
                        />
                      )}
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading={index < 4 ? 'eager' : 'lazy'}
                        decoding="async"
                        width="400"
                        height="300"
                        sizes="(min-width: 1280px) 23vw, (min-width: 768px) 40vw, 90vw"
                        srcSet={image.srcSet}
                      />
                    </picture>
                  </div>

                  {/* Hover Overlay */}
                  <div className="
                    hover-overlay
                    absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                    opacity-0 transition-opacity duration-300
                    flex flex-col items-center justify-center p-6 text-center
                  ">
                    <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-white text-base font-bold mb-1 line-clamp-2">
                        {image.title}
                      </h3>
                      {image.location && (
                        <p className="text-gray-300 text-xs flex items-center justify-center gap-1">
                          📍 {image.location}
                        </p>
                      )}
                      <button
                        className="mt-3 px-4 py-1.5 bg-amber-500 text-black text-xs font-bold rounded-full hover:bg-amber-400 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          onImageClick({
                            ...image,
                            groupId: group.id,
                            groupTitle: group.title,
                          }, index);
                        }}
                      >
                        VIEW FULLSCREEN
                      </button>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-2 right-2 bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                      ⭐ FEATURED
                    </div>
                  )}

                  {/* Location Badge - Bottom Left */}
                  {image.location && (
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full">
                      📍 {image.location}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

GalleryGroupView.displayName = 'GalleryGroupView';

export default GalleryGroupView;