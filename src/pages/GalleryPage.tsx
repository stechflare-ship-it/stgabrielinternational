import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Gallery } from '../components/Gallery';
import { Camera } from 'lucide-react';
import galleryBg from '../../src/assets/images/studentlife/studentlifebackground.webp';

export const GalleryPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Photo Gallery & Campus Life | St. Gabriel's Mission International School Nakuru"
        description="Browse photo gallery of St. Gabriel's Mission International School in Lanet, Nakuru. Official uniforms, classroom study, brass band orchestra, computer lab, and graduation ceremonies."
        keywords="school photo gallery nakuru, st gabriel photos, campus tour nakuru, brass band pictures, school facilities photos, boarding dormitory photos"
        canonicalPath="/gallery"
        ogType="website"
        ogTitle="Campus Photo Gallery · St. Gabriel's Mission International School"
        ogDescription="Explore state-of-the-art classrooms, STEM computing labs, residential dormitories, and championship co-curricular moments in Lanet, Nakuru."
        breadcrumbs={[{ name: 'Gallery', path: '/gallery' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: "St. Gabriel's Mission International School Campus & Student Life Gallery",
          description: 'Photographic portfolio capturing academic life, laboratory experiments, brass band recitals, athletics, and pastoral boarding spaces in Lanet, Nakuru.'
        }}
      />

      <Breadcrumbs items={[{ label: 'Photo Gallery', path: '/gallery' }]} />

      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={galleryBg}
            alt="St. Gabriel Campus Gallery Showcase"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5" />
            <span>Campus Moments & Student Life</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            School Photo Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Capturing academic focus, music and drama performances, digital literacy in computing labs, and graduation distinctions at Lanet, Nakuru.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Image Library"
          title="St. Gabriel's Mission Campus Showcase"
          subtitle="Filter by category to explore campus facilities, classroom writing, co-curricular arts, sports, and graduation highlights."
        />
        <Gallery />
      </section>
    </div>
  );
};
