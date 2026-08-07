import React from 'react';
import SEO from '../components/SEO/SEO';

export default function Boarding(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO title="Boarding & Day School in Nakuru | St. Gabriel International School" description="Learn about Boarding at St. Gabriel International School — separate boys' and girls' boarding arrangements, student support and admissions." />

      <h1 className="text-2xl font-bold">Boarding at St. Gabriel</h1>
      <p className="mt-2 text-gray-600">Boarding is available with separate arrangements for boys and girls. The boarding locations are approximately 4 km apart; they operate as secure residential learning environments.</p>

      <section className="mt-6">
        <h2 className="font-semibold">Boarding Experience</h2>
        <p className="mt-2 text-gray-600">Boarding is part of the wider educational experience, offering structured days, pastoral care and supervised study time. We focus on routine, academic support and character development.</p>
      </section>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Boys' Boarding</h3>
          <p className="mt-2 text-gray-600">Separate boys' boarding is provided at a dedicated location. Families should note boarding houses are separate from girls' boarding and approximately 4 km apart.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Girls' Boarding</h3>
          <p className="mt-2 text-gray-600">Girls' boarding is provided at a secure, separate site. We emphasise safety, wellbeing and pastoral care for all boarders.</p>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="font-semibold">Why Families Choose Boarding</h3>
        <ul className="list-disc ml-5 mt-2 text-gray-600">
          <li>Consistent academic routines and supervised study</li>
          <li>Holistic pastoral care and character development</li>
          <li>Access to co-curricular activities and enrichment</li>
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="font-semibold">Student Support</h3>
        <p className="mt-2 text-gray-600">Boarders receive academic support, wellbeing checks and a team of house staff who oversee pastoral needs.</p>
      </section>

      <div className="mt-6">
        <a href="/admissions" className="inline-block bg-blue-900 text-white px-4 py-2 rounded">Contact Admissions about Boarding</a>
      </div>
    </div>
  );
}
