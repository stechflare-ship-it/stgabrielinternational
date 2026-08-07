import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO/SEO';

const GALLERY = [
  { src: 'https://source.unsplash.com/1200x800/?students,school', alt: 'Students on campus' },
  { src: 'https://source.unsplash.com/1200x800/?sports,students', alt: 'Students playing sports' },
  { src: 'https://source.unsplash.com/1200x800/?music,students', alt: 'Music and performance' },
  { src: 'https://source.unsplash.com/1200x800/?drama,stage', alt: 'Drama performance' },
  { src: 'https://source.unsplash.com/1200x800/?library,study', alt: 'Students studying in the library' },
  { src: 'https://source.unsplash.com/1200x800/?fieldtrip,students', alt: 'Educational trip' },
];

export default function StudentLife() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function onKey(e) {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % GALLERY.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO
        title="Student Life & Co-Curricular Activities | St. Gabriel Nakuru"
        description="Student life at St. Gabriel balances academic rigour with sports, music, drama, leadership, community service and international opportunities — nurturing well-rounded learners in Lanet, Nakuru."
      />

      <header className="mb-8">
        <h1 className="text-3xl font-bold">Student Life</h1>
        <p className="mt-3 text-gray-600">
          Life at St. Gabriel goes beyond the classroom. Our vibrant student life programme combines clubs, sports, arts, leadership and community engagement to develop confident, creative and compassionate young people ready for global opportunities.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="/admissions" className="inline-block bg-blue-900 text-white px-4 py-2 rounded text-sm">Admissions</a>
          <a href="/contact" className="inline-block border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm">Contact</a>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Clubs & Societies</h3>
          <p className="mt-2 text-sm text-gray-600">A wide range of clubs — academic, creative and service — give students a chance to explore interests and build leadership skills.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Sports & Wellbeing</h3>
          <p className="mt-2 text-sm text-gray-600">Regular physical education, competitive teams and wellbeing programmes promote fitness, resilience and teamwork.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Arts & Performance</h3>
          <p className="mt-2 text-sm text-gray-600">Music, drama and visual arts are central to our school culture — students perform and exhibit regularly.</p>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Leadership & Service</h3>
          <p className="mt-2 text-sm text-gray-600">Student councils, prefects and community projects help pupils develop responsibility, empathy and practical leadership experience.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Trips & Exchanges</h3>
          <p className="mt-2 text-sm text-gray-600">Educational outings, cultural exchanges and field trips extend learning beyond the classroom and broaden horizons.</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-3">A Day in the Life</h2>
        <p className="text-gray-700">A typical day balances structured lessons with co-curricular activities: morning assemblies, timetable lessons, clubs and afternoon sports, followed by supervised study sessions for older students. Boarding students also have tailored pastoral care and weekend enrichment.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-3">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {GALLERY.map((img, i) => (
            <button key={img.src} onClick={() => { setIndex(i); setLightboxOpen(true); }} className="block overflow-hidden rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label={`Open image ${i + 1}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-44 object-cover hover:scale-105 transition" />
            </button>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4" role="dialog" aria-modal="true" onClick={() => setLightboxOpen(false)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightboxOpen(false)} className="absolute right-2 top-2 text-white bg-black bg-opacity-30 rounded-full p-2 focus:outline-none" aria-label="Close">
              ✕
            </button>
            <img src={GALLERY[index].src} alt={GALLERY[index].alt} className="w-full h-[60vh] object-contain bg-white p-4 rounded" />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <button onClick={() => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length)} className="text-white bg-black bg-opacity-30 rounded-full p-3 focus:outline-none" aria-label="Previous image">‹</button>
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button onClick={() => setIndex((i) => (i + 1) % GALLERY.length)} className="text-white bg-black bg-opacity-30 rounded-full p-3 focus:outline-none" aria-label="Next image">›</button>
            </div>
            <p className="mt-2 text-center text-sm text-white">{GALLERY[index].alt}</p>
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-3">
        <a href="/admissions" className="inline-block bg-blue-900 text-white px-4 py-2 rounded">Enquire about Admissions</a>
        <a href="/contact" className="inline-block border border-gray-300 px-4 py-2 rounded">Contact Admissions</a>
      </div>
    </div>
  );
}
