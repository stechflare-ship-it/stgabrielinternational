import React from 'react';
import SEO from '../components/SEO/SEO';

export default function Staff(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO title="Our Staff | St. Gabriel International School" description="Meet the professional teaching and support staff at St. Gabriel International School. Accurate staff listings are maintained by the school." />

      <h1 className="text-2xl font-bold">Our Staff</h1>
      <p className="mt-2 text-gray-600">St. Gabriel is served by a dedicated team of teachers and support staff. For privacy and accuracy we do not publish personal staff details here. Please contact the school for enquiries.</p>

      <section className="mt-6">
        <h3 className="font-semibold">Professional Team</h3>
        <p className="mt-2 text-gray-600">Our staff includes qualified educators, pastoral leads and support personnel committed to student development.</p>
      </section>
    </div>
  );
}
