import React from 'react';
import SEO from '../../components/SEO/SEO';

export default function Primary(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <SEO title="International Primary School in Nakuru | St. Gabriel" description="Primary education at St. Gabriel emphasises English, Mathematics, Science, Computing, Art, Music and Physical Education." />

      <h1 className="text-2xl font-bold">Primary (Years 1–6)</h1>
      <p className="mt-2 text-gray-600">A balanced curriculum focused on literacy, numeracy and a wide range of subjects to build strong foundational skills.</p>

      <section className="mt-6">
        <h3 className="font-semibold">Our Subjects</h3>
        <p className="mt-2 text-gray-600">English, Mathematics, Science, Computing, Art, Music, PE and more, supported by active learning and assessment for progress.</p>
      </section>
    </div>
  );
}
