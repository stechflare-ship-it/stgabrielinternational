import React, { memo, useEffect } from 'react';

const GalleryLightbox = memo(function GalleryLightbox({ 
  image, 
  onClose, 
  onNext, 
  onPrev,
  totalImages,
  currentIndex 
}) {
  // Prevent scroll on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Touch handling for mobile
  const [touchStartX, setTouchStartX] = React.useState(0);
  const [touchEndX, setTouchEndX] = React.useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      onNext();
    }
    if (touchStartX - touchEndX < -50) {
      onPrev();
    }
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(e) => {
        // Close if clicking background (not image)
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10 p-2"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Buttons - Desktop */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-amber-400 transition-colors z-10 hidden md:block p-2"
        aria-label="Previous image"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-amber-400 transition-colors z-10 hidden md:block p-2"
        aria-label="Next image"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image Container with Touch Support */}
      <div 
        className="relative max-w-7xl w-full max-h-[90vh] px-4 md:px-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative overflow-hidden rounded-xl bg-black/50">
          <picture>
            {image.avifSrcSet && (
              <source
                type="image/avif"
                srcSet={image.avifSrcSet}
                sizes="(max-width: 768px) 90vw, 70vw"
              />
            )}
            {image.webpSrcSet && (
              <source
                type="image/webp"
                srcSet={image.webpSrcSet}
                sizes="(max-width: 768px) 90vw, 70vw"
              />
            )}
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-auto max-h-[80vh] object-contain"
              style={{ maxHeight: 'calc(90vh - 120px)' }}
              loading="eager"
              decoding="async"
              width="1200"
              height="800"
              sizes="(max-width: 768px) 90vw, 70vw"
              srcSet={image.srcSet}
            />
          </picture>
        </div>

        {/* Image Info - Bottom */}
        <div className="absolute top-[-90px]  left-0 right-0 text-center text-white px-4">
          <h3 className="text-lg md:text-xl font-bold">{image.title}</h3>
          <p className="text-sm text-gray-300 mt-1 hidden md:block">{image.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 text-3xs text-white">
            {image.location && <span>📍 {image.location}</span>}
            {image.date && <span>📅 {image.date}</span>}
            {image.groupTitle && (
              <span className="bg-blue-950 text-white px-2 py-0.5 rounded-full">
                {image.groupTitle}
              </span>
            )}
            <span> {currentIndex + 1} of {totalImages}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-amber-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / totalImages) * 100}%` }}
        />
      </div>

      {/* Counter indicator dots - Mobile */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:hidden bg-black/50 rounded-full px-3 py-1">
        {Array.from({ length: Math.min(totalImages, 5) }).map((_, i) => (
          <div
            key={i}
            className={`
              w-1.5 h-1.5 rounded-full transition-all duration-300
              ${i === currentIndex % 5 ? 'bg-amber-400 w-3' : 'bg-white/50'}
            `}
            aria-hidden="true"
          />
        ))}
        <span className="text-white text-[10px] ml-1">
          {currentIndex + 1}/{totalImages}
        </span>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-4 text-gray-500 text-xs">
        <span className="flex items-center gap-1">
          <kbd className="bg-white/10 px-2 py-0.5 rounded">←</kbd>
          <kbd className="bg-white/10 px-2 py-0.5 rounded">→</kbd>
          <span>Navigate</span>
        </span>
        <span className="flex items-center gap-1">
          <kbd className="bg-white/10 px-2 py-0.5 rounded">ESC</kbd>
          <span>Close</span>
        </span>
      </div>
    </div>
  );
});

GalleryLightbox.displayName = 'GalleryLightbox';

export default GalleryLightbox;