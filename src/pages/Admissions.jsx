import React from 'react';
import campusHeroImg from '../assets/images/about/campus.webp';

export default function Admissions(){
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-400 overflow-hidden bg-[#0B1D33]">
        <div className="absolute inset-0 z-0">
          <img
            src={campusHeroImg}
            alt="St. Gabriel Campus Admissions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-400/40">
            Enrolling Now 2026/2027
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            Admissions at St. Gabriel International
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Explore admissions at St. Gabriel International School in Lanet, Nakuru. Discover our academic programmes, day and boarding options, fees and how to enquire.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">

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
  </div>
);
}
