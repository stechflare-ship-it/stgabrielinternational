import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Gallery } from '../components/Gallery';
import { Camera } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Photo Gallery & Campus Life | St. Gabriel International School Nakuru"
        description="Browse photo gallery of St. Gabriel International School in Lanet, Nakuru. Official uniforms, classroom study, brass band orchestra, computer lab, and graduation ceremonies."
        canonicalPath="/gallery"
        breadcrumbs={[{ name: 'Gallery', path: '/gallery' }]}
      />

      <Breadcrumbs items={[{ label: 'Photo Gallery', path: '/gallery' }]} />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5" />
            <span>Campus Moments & Student Life</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            School Photo Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            Capturing academic focus, music and drama performances, digital literacy in computing labs, and graduation distinctions at Lanet, Nakuru.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Image Library"
          title="St. Gabriel Campus Showcase"
          subtitle="Filter by category to explore campus facilities, classroom writing, co-curricular arts, sports, and graduation highlights."
        />
        <Gallery />
      </section>
    </div>
  );
};
