import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { SITE_CONFIG } from '../data/navigationData';
import campusHeroImg from '../assets/images/about/campus.webp';

export default function Contact(){
  return (
    <div className="w-full">
      <SEO title="Contact St. Gabriel International School | Lanet, Nakuru" description="Contact St. Gabriel International School in Lanet, Nakuru County. Call, WhatsApp or use the enquiry form to contact Admissions." />

      {/* Hero Header */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-400 overflow-hidden bg-[#0B1D33]">
        <div className="absolute inset-0 z-0">
          <img
            src={campusHeroImg}
            alt="St. Gabriel Campus Contact in Lanet Nakuru"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-400/40">
            Lanet, Nakuru County, Kenya
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            Contact St. Gabriel International School
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            We welcome parents, guardians, and visitors. Get in touch with our administration or schedule a personal campus tour in Lanet.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">

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
  </div>
);
}
