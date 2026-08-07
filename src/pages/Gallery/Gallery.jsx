import React, { memo, lazy, Suspense, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GalleryHero from './GalleryHero';
import { SITE_CONFIG } from '../../data/navigationData';
import { GALLERY_DATA } from './galleryData';

// Lazy load heavy sections for performance
const GalleryFilter = lazy(() => import('./GalleryFilter'));
const GalleryGrid = lazy(() => import('./GalleryGrid'));
const GalleryLightbox = lazy(() => import('./GalleryLightbox'));
const GalleryGroupView = lazy(() => import('./GalleryGroupView'));


function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Which group's images the lightbox should page through, when viewing a
  // group detail page (/gallery/:groupId). null while on the main grid.
  const [activeGroupId, setActiveGroupId] = useState(null);
  const navigate = useNavigate();

  // Get all images for lightbox navigation - memoized for stable navigation state.
  // While a group detail page is open, scope this to that group; otherwise use
  // whichever category filter is selected on the main grid.
  const allImages = React.useMemo(() => {
    if (!GALLERY_DATA || !GALLERY_DATA.getImagesByCategory) return [];
    return GALLERY_DATA.getImagesByCategory(activeGroupId || selectedCategory);
  }, [selectedCategory, activeGroupId]);

  // Handle image click for lightbox
  
  // `allImages`. Look the image up by id so Next/Prev always land on the
  // right photo instead of jumping into an unrelated group.
  const handleImageClick = useCallback((image, index) => {
    const globalIndex = allImages.findIndex((img) => img.id === image.id);
    setLightboxImage(image);
    setCurrentIndex(globalIndex >= 0 ? globalIndex : index);
    setIsLightboxOpen(true);
  }, [allImages]);

  // Handle lightbox close
  const handleLightboxClose = useCallback(() => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
  }, []);

  // Handle View More
  const handleViewMore = useCallback((groupId) => {
    navigate(`/gallery/${groupId}`);
  }, [navigate]);

  // Back from group view: also clear which group the lightbox is scoped to
  const handleBackFromGroup = useCallback(() => {
    setActiveGroupId(null);
    navigate('/gallery');
  }, [navigate]);

  // Navigation in lightbox
  const handleNext = useCallback(() => {
    if (allImages.length === 0) return;
    const newIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(newIndex);
    setLightboxImage(allImages[newIndex]);
  }, [currentIndex, allImages]);

  const handlePrev = useCallback(() => {
    if (allImages.length === 0) return;
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(newIndex);
    setLightboxImage(allImages[newIndex]);
  }, [currentIndex, allImages]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') handleLightboxClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handleLightboxClose, handleNext, handlePrev]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Gallery - {SITE_CONFIG?.name || "St. Gabriel's International"}</title>
        <meta
          name="description"
          content={`Explore the visual campus tour of ${SITE_CONFIG?.name || "St. Gabriel's International"}.`}
        />
        <meta
          name="keywords"
          content="gallery, campus photos, school life, STEM, sports, arts, events, Nairobi, Kenya"
        />
        <meta property="og:title" content={`Gallery - ${SITE_CONFIG?.name || "St. Gabriel's International"}`} />
        <meta property="og:description" content={`Discover photos from campus life, events, sports, arts, and STEM at ${SITE_CONFIG?.name || "St. Gabriel's International"}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={GALLERY_DATA.hero.backgroundImage} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>

      <main className="min-h-screen bg-gray-50" role="main">
        {/* Hero Section - Critical (loaded immediately) */}
        <GalleryHero />

        {/* Route handling - lazy loaded (performance) */}
        <Suspense fallback={<SectionLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <GalleryFilter
                    categories={GALLERY_DATA?.categories || []}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    totalImages={allImages.length}
                  />
                  <GalleryGrid
                    category={selectedCategory}
                    onImageClick={handleImageClick}
                    onViewMore={handleViewMore}
                  />
                </>
              }
            />
            <Route
              path=":groupId"
              element={
                <GalleryGroupView
                  onImageClick={handleImageClick}
                  onBack={handleBackFromGroup}
                  onGroupChange={setActiveGroupId}
                />
              }
            />
          </Routes>
        </Suspense>

        {/* Lightbox */}
        {isLightboxOpen && lightboxImage && (
          <Suspense fallback={null}>
            <GalleryLightbox
              image={lightboxImage}
              onClose={handleLightboxClose}
              onNext={handleNext}
              onPrev={handlePrev}
              totalImages={allImages.length}
              currentIndex={currentIndex}
            />
          </Suspense>
        )}
      </main>
    </>
  );
}

// Loading fallback for lazy sections
function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-900/20 border-t-blue-900 rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-500 text-sm">Loading gallery...</p>
      </div>
    </div>
  );
}

export default memo(Gallery);