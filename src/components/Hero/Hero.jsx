import React from 'react';

export default function Hero({videoSrc, posterSrc}){
  // Placeholder hero that accepts video/poster props
  return (
    <section aria-label="Hero" className="relative h-[60vh] md:h-[72vh] bg-gray-800 text-white flex items-center">
      <video
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" aria-hidden></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold">ST. GABRIEL INTERNATIONAL SCHOOL</h1>
        <p className="mt-3 text-lg md:text-2xl">"Hope to The World"</p>
        <p className="mt-4 max-w-2xl">An inspiring international education in Lanet, Nakuru, nurturing academic excellence, character, creativity, leadership and global opportunities.</p>

        <div className="mt-6 flex gap-3">
          <a href="/admissions" className="bg-amber-400 text-blue-900 px-4 py-2 rounded font-semibold">ENROLL NOW</a>
          <a href="/academics" className="border border-white/30 px-4 py-2 rounded">EXPLORE OUR CURRICULUM</a>
          <a href="/contact" className="border border-white/30 px-4 py-2 rounded">CONTACT ADMISSIONS</a>
        </div>
      </div>
    </section>
  );
}
