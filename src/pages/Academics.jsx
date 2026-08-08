import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO/SEO';

const CATEGORIES = [
  {
    id: 'eyfs',
    title: 'Early Years (EYFS)',
    short: 'Play-based, nurturing beginnings',
    images: [
      { src: 'https://source.unsplash.com/800x600/?children,play', alt: 'Children playing in Early Years' },
      { src: 'https://source.unsplash.com/800x600/?nursery,learning', alt: 'Early years classroom activities' },
      { src: 'https://source.unsplash.com/800x600/?toddler,art', alt: 'Creative play and art' },
    ],
    details: (
      <>
        <p className="mb-2">
          Our Early Years Foundation Stage provides a safe, stimulating and caring environment where children learn through play, exploration and guided activities.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Individualised learning, strong pastoral support and family partnership.</li>
          <li>Early literacy and numeracy through play, stories, and sensory activities.</li>
          <li>Focus on communication, physical development and personal, social &amp; emotional skills.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'primary',
    title: 'Primary',
    short: 'Solid foundations in core subjects',
    images: [
      { src: 'https://source.unsplash.com/800x600/?primary,school', alt: 'Primary school classroom' },
      { src: 'https://source.unsplash.com/800x600/?children,reading', alt: 'Children reading together' },
      { src: 'https://source.unsplash.com/800x600/?school,science', alt: 'Primary science activity' },
    ],
    details: (
      <>
        <p className="mb-2">
          Years 1–6 concentrate on building strong foundations in English, Mathematics, Science and the Humanities while encouraging creativity and character development.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Balanced curriculum, specialist teachers for music, PE and languages.</li>
          <li>Skills-based learning: collaboration, problem solving and digital literacy.</li>
          <li>Regular assessment and pastoral tracking to support each child’s progress.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'lower-secondary',
    title: 'Lower Secondary',
    short: 'Independence, research & critical thinking',
    images: [
      { src: 'https://source.unsplash.com/800x600/?secondary,students', alt: 'Lower secondary students' },
      { src: 'https://source.unsplash.com/800x600/?students,project', alt: 'Project-based learning' },
      { src: 'https://source.unsplash.com/800x600/?research,school', alt: 'Research and critical thinking' },
    ],
    details: (
      <>
        <p className="mb-2">
          Years 7–9 build academic independence with increased subject breadth and project-based work that fosters critical thinking and research skills.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Interdisciplinary projects, digital research skills and collaborative learning.</li>
          <li>Personal development programmes and subject guidance to prepare for examination choices.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'igcse',
    title: 'IGCSE',
    short: 'Academic rigour and international exams',
    images: [
      { src: 'https://source.unsplash.com/800x600/?exam,students', alt: 'IGCSE students preparing' },
      { src: 'https://source.unsplash.com/800x600/?study,library', alt: 'Study and revision' },
      { src: 'https://source.unsplash.com/800x600/?classroom,exam', alt: 'Exam preparation' },
    ],
    details: (
      <>
        <p className="mb-2">
          Years 10–11 focus on depth of knowledge and examination technique for IGCSE qualifications, with tailored revision and subject support.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Broad subject choices including sciences, languages, humanities and creative subjects.</li>
          <li>Exam preparation, past-paper practice and study skills for success at international standard.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'a-level',
    title: 'A-Level / Sixth Form',
    short: 'Subject specialisation & university preparation',
    images: [
      { src: 'https://source.unsplash.com/800x600/?college,students', alt: 'Sixth form students' },
      { src: 'https://source.unsplash.com/800x600/?university,preparation', alt: 'University preparation' },
      { src: 'https://source.unsplash.com/800x600/?study,group', alt: 'Small group teaching' },
    ],
    details: (
      <>
        <p className="mb-2">
          Years 12–13 offer specialist tuition in chosen A-Level subjects, university guidance and enrichment to prepare students for competitive progression.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Small-group teaching, extended project opportunities and personal mentoring.</li>
          <li>University entrance support, personal statement coaching and careers guidance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'international',
    title: 'International Programmes',
    short: 'Global pathways and partnerships',
    images: [
      { src: 'https://source.unsplash.com/800x600/?international,students', alt: 'International students and exchange' },
      { src: 'https://source.unsplash.com/800x600/?exchange,programme', alt: 'Exchange programmes' },
      { src: 'https://source.unsplash.com/800x600/?global,education', alt: 'Global education and partnerships' },
    ],
    details: (
      <>
        <p className="mb-2">
          We provide international progression routes, exchange opportunities and partnerships to prepare students for study or careers abroad.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Guidance for applications to universities worldwide and internationally recognised qualifications.</li>
          <li>Language support, cultural exchanges and preparatory workshops for global citizenship.</li>
        </ul>
      </>
    ),
  },
];

export default function Academics() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const activeCategory = CATEGORIES.find((c) => c.id === active);

  useEffect(() => {
    function onKey(e) {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % activeCategory.images.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + activeCategory.images.length) % activeCategory.images.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, activeCategory]);

  function openLightbox(idx) {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO
        title="Premium Academics — St. Gabriel International School"
        description="Explore our premium academic pathways at St. Gabriel International — from Early Years to A-Level and international progression, with specialist support and enrichment."
      />

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Premium Academics</h1>
        <p className="mt-3 text-gray-600">
          As a group of schools, St. Gabriel International offers a premium, fully scaffolded curriculum across all stages. We combine academic rigour with pastoral care, enrichment and international pathways so every student can thrive.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a
            href="/admissions"
            className="inline-block bg-blue-900 text-white px-4 py-2 rounded shadow-sm text-sm"
            aria-label="Admissions and Entry"
          >
            Admissions & Entry
          </a>
          <a
            href="/contact"
            className="inline-block border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm"
            aria-label="Contact us"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Category bar */}
      <nav className="mb-6" aria-label="Academic stages">
        <div role="tablist" aria-orientation="horizontal" className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  isActive ? 'bg-blue-900 text-white' : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <div className="font-semibold">{cat.title}</div>
                <div className="text-xs text-gray-500">{cat.short}</div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Detail panel */}
      <section>
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === active;
          return (
            <article
              key={cat.id}
              id={`panel-${cat.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${cat.id}`}
              hidden={!isActive}
              className={`${isActive ? 'block' : 'hidden'} bg-white p-6 rounded shadow`}
            >
              <h2 className="text-xl font-bold mb-2">{cat.title}</h2>
              <div className="text-gray-700">{cat.details}</div>

              <div className="mt-4 flex gap-3">
                <a href="/curriculum" className="text-sm inline-block bg-blue-900 text-white px-4 py-2 rounded">
                  View full curriculum
                </a>
                <a href="/admissions#visit" className="text-sm inline-block border border-gray-300 px-4 py-2 rounded">
                  Arrange a visit
                </a>
              </div>

              {/* Gallery for this category */}
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cat.images.map((img, idx) => (
                    <button
                      key={img.src}
                      onClick={() => openLightbox(idx)}
                      className="block overflow-hidden rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label={`Open image ${idx + 1} for ${cat.title}`}
                    >
                      <img
                        src={`${img.src}`}
                        alt={img.alt}
                        className="w-full h-40 object-cover transform hover:scale-105 transition"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-2 top-2 text-white bg-black bg-opacity-30 rounded-full p-2 focus:outline-none"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <img
              src={activeCategory.images[lightboxIndex].src}
              alt={activeCategory.images[lightboxIndex].alt}
              className="w-full h-[60vh] object-contain bg-white p-4 rounded"
            />

            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <button
                onClick={() => setLightboxIndex((i) => (i - 1 + activeCategory.images.length) % activeCategory.images.length)}
                className="text-white bg-black bg-opacity-30 rounded-full p-3 focus:outline-none"
                aria-label="Previous image"
              >
                ‹
              </button>
            </div>

            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button
                onClick={() => setLightboxIndex((i) => (i + 1) % activeCategory.images.length)}
                className="text-white bg-black bg-opacity-30 rounded-full p-3 focus:outline-none"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <p className="mt-2 text-center text-sm text-white">{activeCategory.images[lightboxIndex].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
