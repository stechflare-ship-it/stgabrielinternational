import React from 'react';
import SEO from '../components/SEO/SEO';

export default function Gallery(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO title="Gallery | St. Gabriel International School" description="Gallery showcasing campus life, classrooms, sports and co-curricular activities." />

      <h1 className="text-2xl font-bold">Gallery</h1>
      <p className="mt-2 text-gray-600">Images of campus life. Replace placeholders with official photography when available.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({length:12}).map((_,i)=> (
          <div key={i} className="h-40 bg-gray-100 rounded-lg overflow-hidden"></div>
        ))}
      </div>
    </div>
  );
}
