import React, { memo } from 'react';
import { GALLERY_DATA } from './galleryData';
import GalleryGroup from './GalleryGroup';
import GalleryCard from './GalleryCard';

const GalleryGrid = memo(function GalleryGrid({ 
  category, 
  onImageClick,
  onViewMore 
}) {
  if (!GALLERY_DATA || !GALLERY_DATA.groups) {
    return (
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400">Loading gallery data...</p>
        </div>
      </section>
    );
  }

  // If 'all' or no category, show all groups
  if (category === 'all' || !category) {
    const groups = Object.values(GALLERY_DATA.groups);
    const nonEmptyGroups = groups.filter(group => 
      group.images && Array.isArray(group.images) && group.images.length > 0
    );

    if (nonEmptyGroups.length === 0) {
      return (
        <section className="py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800 rounded-2xl shadow-sm p-12 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">No Images Found</h3>
              <p className="text-gray-400">No images available in the gallery yet.</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="py-8 bg-blue-950 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {nonEmptyGroups.map((group) => (
            <GalleryGroup
              key={group.id}
              group={group}
              onImageClick={onImageClick}
              onViewMore={onViewMore}
            />
          ))}
        </div>
      </section>
    );
  }

  // Show specific category
  const group = GALLERY_DATA.groups[category];
  
  if (!group || !group.images || group.images.length === 0) {
    return (
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl shadow-sm p-12 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">No Images Found</h3>
            <p className="text-gray-400">No images available in this category yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-blue-950 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{group.title}</h2>
          <span className="text-xs text-blue-900 font-bold bg-white/90 px-3 py-1 rounded-full">
            {group.images.length} photos
          </span>
        </div>

        {/*GaleryCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {group.images.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={{
                ...image,
                groupId: group.id,
                groupTitle: group.title,
              }}
              index={index}
              onImageClick={() => onImageClick(image, index)}
              isVisible={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

GalleryGrid.displayName = 'GalleryGrid';

export default GalleryGrid;