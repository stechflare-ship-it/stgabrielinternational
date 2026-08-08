import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { SITE_CONFIG } from '../data/navigationData';

export default function Contact(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <SEO title="Contact St. Gabriel International School | Lanet, Nakuru" description="Contact St. Gabriel International School in Lanet, Nakuru County. Call, WhatsApp or use the enquiry form to contact Admissions." />

      <h1 className="text-2xl font-bold">Contact St. Gabriel International School</h1>
      <p className="mt-2 text-gray-600">Lanet, Nakuru County, Kenya</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Phone & WhatsApp</h3>
          <p className="mt-2">Primary: <a href={SITE_CONFIG.primaryPhoneTel} className="text-blue-800">{SITE_CONFIG.primaryPhoneDisplay}</a></p>
          <p>Enquiries: <a href={SITE_CONFIG.enquiryPhoneTel} className="text-blue-800">{SITE_CONFIG.enquiryPhoneDisplay}</a></p>
          <p className="mt-3">WhatsApp: <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noreferrer" className="text-emerald-600">Chat with us</a></p>

          <h4 className="mt-4 font-semibold">Visit Us</h4>
          <p className="text-sm text-gray-600">Please arrange visits with Admissions. Use the contact form to request a campus tour.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Enquiry Form</h3>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Enquiry recorded (demo). Admissions will contact you.');}} className="mt-3 space-y-3">
            <div>
              <label className="block text-sm">Your name</label>
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
              <label className="block text-sm">Message</label>
              <textarea className="w-full border px-3 py-2 rounded" rows={4} />
            </div>
            <div>
              <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Send Enquiry</button>
            </div>
          </form>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="font-semibold text-lg text-gray-900">Campus Location</h3>
        <p className="text-sm text-gray-600 mt-1">St. Gabriel's Mission School, Transformer Rd, Lanet, Nakuru, Kenya</p>
        <div className="mt-4 rounded-lg overflow-hidden border border-gray-300 shadow">
          <iframe
            title="St. Gabriel's Mission School Map"
            src="https://maps.google.com/maps?q=-0.2718165,36.1815519+(St.+Gabriel%27s+Mission+School)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80"
          ></iframe>
          <div className="p-3 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-700">
            <span>📍 Coordinates: -0.2718165, 36.1815519 (Transformer Rd, Nakuru)</span>
            <a
              href="https://www.google.com/maps/place/St.+gabriels+mission+school/@-0.2718165,36.1815519,17z/data=!3m1!4b1!4m6!3m5!1s0x18299487536a1161:0x8e6768382a603db5!8m2!3d-0.2718165!4d36.1815519"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-blue-900 text-white font-medium rounded hover:bg-blue-800 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="font-semibold">Admissions</h3>
        <p className="text-sm text-gray-600">For admissions queries, visit the <Link to="/admissions" className="text-blue-800">Admissions</Link> page or WhatsApp us directly.</p>
      </section>
    </div>
  );
}
