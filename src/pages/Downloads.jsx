import React from 'react';
import SEO from '../components/SEO/SEO';

export default function Downloads(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO title="Downloads | St. Gabriel International School" description="Download forms, handbooks and school documents. Fee PDF available when uploaded." />

      <h1 className="text-2xl font-bold">Downloads</h1>
      <p className="mt-2 text-gray-600">Official documents and forms will appear here. If you have a requested document, please contact the school.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Fee Structure (PDF)</h4>
          <p className="text-sm text-gray-600 mt-2">Fee structure PDF coming soon. Please check back or contact admissions.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Admissions Form</h4>
          <p className="text-sm text-gray-600 mt-2">Download the admissions form when available.</p>
        </div>
      </div>
    </div>
  );
}
