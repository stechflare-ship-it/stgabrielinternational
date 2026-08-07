import React from 'react';
import SEO from '../../components/SEO/SEO';

export default function EYFS(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <SEO title="EYFS & Early Years Education | St. Gabriel Nakuru" description="EYFS at St. Gabriel focuses on play, exploration, early literacy, numeracy and creativity for ages 2–5." />

      <h1 className="text-2xl font-bold">EYFS & Early Years</h1>
      <p className="mt-2 text-gray-600">Playgroup (2–3), Nursery (3–4) and Reception (4–5). Our EYFS programme promotes exploration, communication and early learning through play.</p>

      <section className="mt-6">
        <h3 className="font-semibold">Focus Areas</h3>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          <li>Play and exploration</li>
          <li>Early literacy and numeracy</li>
          <li>Creativity and communication</li>
          <li>Independent learning foundations</li>
        </ul>
      </section>
    </div>
  );
}
