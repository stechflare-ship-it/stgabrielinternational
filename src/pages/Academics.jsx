import React from 'react';
import SEO from '../components/SEO/SEO';

export default function Academics(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO title="British Curriculum & International Education | St. Gabriel Nakuru" description="Learn about the British curriculum pathways at St. Gabriel International School including EYFS, Primary, Lower Secondary, IGCSE and A-Level." />

      <h1 className="text-2xl font-bold">Academics</h1>
      <p className="mt-2 text-gray-600">Our academic programme follows a clear progression from early years through to A-Level, preparing students for international progression.</p>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">EYFS</h3>
          <p className="mt-2 text-sm text-gray-600">Play-based exploration and early literacy in a nurturing environment.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Primary</h3>
          <p className="mt-2 text-sm text-gray-600">Years 1–6 with strong foundations in core subjects and skills.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Lower Secondary</h3>
          <p className="mt-2 text-sm text-gray-600">Years 7–9 emphasising independence, research and critical thinking.</p>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">IGCSE</h3>
          <p className="mt-2 text-sm text-gray-600">Years 10–11 focused on academic rigour and international examination preparation.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">A-Level</h3>
          <p className="mt-2 text-sm text-gray-600">Years 12–13 offering subject specialisation and university preparation.</p>
        </div>
      </section>

      <div className="mt-6">
        <a href="/admissions" className="inline-block bg-blue-900 text-white px-4 py-2 rounded">Admissions & Entry</a>
      </div>
    </div>
  );
}
