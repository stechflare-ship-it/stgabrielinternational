import React from 'react';

export default function Admissions(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Admissions</h1>
      <p className="mt-2 text-gray-600">Explore admissions at St. Gabriel International School in Lanet, Nakuru. Discover our academic programmes, day and boarding options, fees and how to enquire.</p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">How to Enquire</h3>
          <p className="mt-2 text-sm">Call <a href="tel:+254720349748" className="text-blue-800 font-medium">+254 720 349 748</a> or WhatsApp <a href="https://wa.me/254724694554" target="_blank" rel="noreferrer noopener" className="text-green-600 font-medium">+254 724 694 554</a></p>

          <div className="mt-4">
            <a href="/contact" className="text-sm underline">Contact Admissions</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Admission Form</h3>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Form submitted (frontend demo).');}} className="mt-3 space-y-3">
            <div>
              <label className="block text-sm">Parent/Guardian Name</label>
              <input className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm">Phone</label>
              <input className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input type="email" className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm">Child Name</label>
              <input className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm">Grade/Year</label>
              <input className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm">Day / Boarding</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Day</option>
                <option>Boarding</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Message</label>
              <textarea className="w-full border px-3 py-2 rounded" rows={4}></textarea>
            </div>
            <div>
              <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Submit Enquiry</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
