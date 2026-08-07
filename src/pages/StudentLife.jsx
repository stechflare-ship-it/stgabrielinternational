import React from 'react';
import SEO from '../components/SEO/SEO';

export default function StudentLife(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO title="Student Life & Co-Curricular Activities | St. Gabriel Nakuru" description="Student life at St. Gabriel — sports, music, drama, leadership and clubs that develop character and creativity." />

      <h1 className="text-2xl font-bold">Student Life</h1>
      <p className="mt-2 text-gray-600">Our students enjoy a wide range of co-curricular activities alongside a strong academic programme.</p>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Sports</h3>
          <p className="mt-2 text-sm text-gray-600">Competitive and recreational sports that promote fitness, teamwork and leadership.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Music & Drama</h3>
          <p className="mt-2 text-sm text-gray-600">Opportunities in choir, instrumental music, and drama productions to build confidence and creativity.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Clubs & Leadership</h3>
          <p className="mt-2 text-sm text-gray-600">A variety of clubs and student leadership programmes offer practical experience and service learning.</p>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="font-semibold">Pastoral Care & Wellbeing</h3>
        <p className="mt-2 text-gray-600">We prioritise wellbeing through counselling, student support and positive behaviour systems.</p>
      </section>

    </div>
  );
}
