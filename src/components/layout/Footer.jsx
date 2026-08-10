import React from 'react';
import { SITE_CONFIG, SOCIAL_MEDIA } from '../../data/navigationData';
import logo from '../../assets/images/gabriellogo.jpeg';

export default function Footer(){
  return (
    <footer className="bg-blue-950 text-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <img src={logo} alt="St. Gabriel International School logo" className="w-36 mb-4" />
          <p className="text-sm text-gray-300">"Hope to The World"</p>
          <p className="text-sm text-gray-300 mt-4">Lanet, Nakuru County, Kenya</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/academics" className="hover:underline">Academics</a></li>
            <li><a href="/admissions" className="hover:underline">Admissions</a></li>
            <li><a href="/boarding" className="hover:underline">Boarding</a></li>
            <li><a href="/fees-and-requirements" className="hover:underline">Fees & Requirements</a></li>
            <li><a href="/student-life" className="hover:underline">Student Life</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/news" className="hover:underline">News & Events</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">Phone: <a className="hover:underline" href={SITE_CONFIG.primaryPhoneTel}>{SITE_CONFIG.primaryPhoneDisplay}</a></p>
          <p className="text-sm">Enquiries: <a className="hover:underline" href={SITE_CONFIG.enquiryPhoneTel}>{SITE_CONFIG.enquiryPhoneDisplay}</a></p>
          <p className="text-sm mt-2">Email: <a className="hover:underline" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
          <p className="text-sm mt-2">WhatsApp: <a className="hover:underline" href={SITE_CONFIG.whatsapp} target="_blank" rel="noreferrer noopener">{SITE_CONFIG.primaryPhoneDisplay}</a></p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <ul className="flex gap-3">
            <li><a href={SOCIAL_MEDIA.facebook} className="text-gray-300 hover:text-white">Facebook</a></li>
            <li><a href={SOCIAL_MEDIA.instagram} className="text-gray-300 hover:text-white">Instagram</a></li>
            <li><a href={SOCIAL_MEDIA.youtube} className="text-gray-300 hover:text-white">YouTube</a></li>
          </ul>

          <p className="text-xs text-gray-400 mt-6">Website by <a href="https://techflare-solutions.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-amber-400">TechFlare Solutions</a> — "Igniting Innovations · Delivering Solutions"</p>
        </div>
      </div>

      <div className="bg-blue-900 text-gray-300 text-xs py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>© {new Date().getFullYear()} St. Gabriel International School. All rights reserved.</div>
          <div>Designed & Built by <a href="https://techflare-solutions.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-amber-400">TechFlare Solutions</a></div>
        </div>
      </div>
    </footer>
  );
}
