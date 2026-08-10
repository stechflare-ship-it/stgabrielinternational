import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Gallery } from '../components/Gallery';
import {
  Sparkles,
  Clock,
  Download,
  CheckCircle2,
  Trophy,
  BookOpen,
  Calendar,
  Sun,
  ShieldCheck,
  Shirt,
  Users,
  Compass,
  FileText
} from 'lucide-react';
import athletic from '../assets/images/gallery/athletics.webp';
import artsClub from '../assets/images/gallery/artsClub.webp';

const HERO_PLACEHOLDER = 'https://placehold.co/1200x600/0b1d33/e0ba43?text=St.+Gabriel+Student+Life+%26+Campus';
const CO_CURRICULAR_PLACEHOLDER_1 = 'https://placehold.co/800x600/0b1d33/ffffff?text=Co-Curricular+Sports+%26+Athletics';
const CO_CURRICULAR_PLACEHOLDER_2 = 'https://placehold.co/800x600/0b1d33/ffffff?text=Performing+Arts+%26+Clubs';

export const StudentLifePage: React.FC = () => {
  return (
    <div className="w-full bg-[#071321] text-white min-h-screen">
      <SEOMetadata
        title="Student Life, Balanced Life & Real-Life Experience | St. Gabriel Nakuru Kenya"
        description="Discover a balanced life and real-life learning experiences at St. Gabriel International School in Nakuru, Kenya. British curriculum, sports, arts, leadership and character development."
        keywords="international, nakuru, kenya, british curriculum, best education, balanced life, real life experience, student life, co-curricular, St. Gabriel International School"
        canonicalPath="/student-life"
        breadcrumbs={[{ name: 'Student Life', path: '/student-life' }]}
      />

      <Breadcrumbs items={[{ label: 'Student Life', path: '/student-life' }]} />

      {/* Hero Section with Placeholder Background */}
      <section className="relative bg-[#0A192F] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#C59B27]/30 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={HERO_PLACEHOLDER}
            alt="St. Gabriel Student Life"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#071321]/90 via-[#0A192F]/95 to-[#071321]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
              LIFE AT ST. GABRIEL'S MISSION (SGIS)
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Vibrant Student Life & Handbook
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed">
            Daily routines, uniform guidelines, co-curricular sports, health welfare, and character development in Lanet, Nakuru.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/downloads"
              className="px-6 py-3 rounded-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD LIFE AT SGIS (PDF)</span>
            </a>

            <a
              href="/downloads"
              className="px-6 py-3 rounded-full bg-[#1976D2] hover:bg-[#1565c0] text-white text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD LIFE AT SGIS (DOC)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Daily Routines Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D32F2F] block mb-1">
              DAILY ROUTINES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
              Daily Schedule at St. Gabriel's
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold border border-[#C59B27]/40">
            Lanet Nakuru Campus Timetable
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Monday to Friday */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#E0BA43] flex items-center gap-2 pb-2 border-b border-white/10">
              <Clock className="w-5 h-5 text-[#C59B27]" />
              <span>Monday to Friday</span>
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Breakfast</span>
                <span className="font-mono text-[#E0BA43] font-bold">06:45 AM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Morning Assembly (2x week)</span>
                <span className="font-mono text-[#E0BA43] font-bold">07:30 AM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Classes Begin (40-min periods)</span>
                <span className="font-mono text-[#E0BA43] font-bold">07:50 AM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Academic Day Ends</span>
                <span className="font-mono text-[#E0BA43] font-bold">02:30 PM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Clubs, Sports & Tutorials</span>
                <span className="font-mono text-[#E0BA43] font-bold">02:30 – 05:00 PM</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Dinner</span>
                <span className="font-mono text-[#E0BA43] font-bold">05:45 PM</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Saturday Routine */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#E0BA43] flex items-center gap-2 pb-2 border-b border-white/10">
              <Sun className="w-5 h-5 text-[#C59B27]" />
              <span>Saturday Routine</span>
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Breakfast & Dorm/Class Cleaning</span>
                <span className="font-mono text-[#E0BA43] font-bold">08:00 AM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Quiet Classroom Study</span>
                <span className="font-mono text-[#E0BA43] font-bold">10:00 – 11:30 AM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Afternoon Recreation, Laundry & Games</span>
                <span className="font-mono text-[#E0BA43] font-bold">12:30 – 05:00 PM</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Evening Coffee House & Talent Shows</span>
                <span className="font-mono text-[#E0BA43] font-bold">07:00 – 09:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Sunday Program */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#E0BA43] flex items-center gap-2 pb-2 border-b border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
              <span>Sunday Program</span>
            </h3>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Interfaith Devotional Program</span>
                <span className="font-mono text-[#E0BA43] font-bold">09:00 AM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Community Big Brunch</span>
                <span className="font-mono text-[#E0BA43] font-bold">10:30 AM</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Personal Recreation & Study</span>
                <span className="font-mono text-[#E0BA43] font-bold">02:00 – 05:00 PM</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Regular Evening Study Prep</span>
                <span className="font-mono text-[#E0BA43] font-bold">06:30 – 08:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Uniform & Grooming Policy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 border-t border-white/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D32F2F] block mb-1">
            OFFICIAL ATTIRE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
            Uniform & Grooming Policy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#E0BA43] flex items-center gap-2">
              <Shirt className="w-5 h-5 text-[#C59B27]" />
              <span>Primary (Year 1 – Year 6)</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-disc list-inside">
              <li><strong className="text-white">Shirts:</strong> Yellow Polo Shirts or long sleeve sweatshirts.</li>
              <li><strong className="text-white">Trousers/Skirts:</strong> Grey trousers or pleated skirts.</li>
              <li><strong className="text-white">Jacket:</strong> Navy blue fleece jacket with school logo.</li>
              <li><strong className="text-white">Shoes:</strong> Black or dark brown low-heeled closed leather shoes.</li>
            </ul>
          </div>

          {/* Secondary */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#D32F2F] flex items-center gap-2">
              <Shirt className="w-5 h-5 text-[#D32F2F]" />
              <span>Secondary (Year 7 – Year 11)</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-disc list-inside">
              <li><strong className="text-white">Shirts:</strong> Red Polo Shirts or long sleeve sweatshirts.</li>
              <li><strong className="text-white">Trousers/Skirts:</strong> Grey trousers or tailored skirts.</li>
              <li><strong className="text-white">Jacket:</strong> Navy blue fleece jacket with school emblem.</li>
              <li><strong className="text-white">Shoes:</strong> Subdued plain socks and dark leather shoes.</li>
            </ul>
          </div>

          {/* A-Levels */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#1976D2] flex items-center gap-2">
              <Shirt className="w-5 h-5 text-[#1976D2]" />
              <span>A-Levels (Year 12 – Year 13)</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-disc list-inside">
              <li><strong className="text-white">Shirt & Tie:</strong> White formal shirt with school tie.</li>
              <li><strong className="text-white">Blazer:</strong> Navy blue tailored blazer with crest.</li>
              <li><strong className="text-white">Trousers:</strong> Grey tailored trousers or formal pencil skirt.</li>
              <li><strong className="text-white">Exams:</strong> Strict candidate dress code during Cambridge examinations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Co-Curricular Clubs & Sports */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 border-t border-white/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D32F2F] block mb-1">
            30+ ACTIVITIES OFFERED
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
            Co-Curricular Clubs & Sports
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Non-Sporting Societies */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#E0BA43] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#C59B27]" />
              <span>Non-Sporting Societies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-200">
              {[
                'Arts and Craft',
                'ICT & Coding',
                'Brownies/Scouts/Guides',
                'Board Games & Chess',
                'First Aid Club',
                'Choir / Orchestra Band',
                'Cookery & Nutrition',
                'Drama & Dance',
                'Environmental Club',
                'Journalism & Media'
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sporting & Athletics Academies */}
          <div className="bg-[#0F223A] p-6 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <h3 className="font-serif font-bold text-xl text-[#D32F2F] flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#D32F2F]" />
              <span>Sporting & Athletics Academies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-200">
              {[
                'Athletics (Track & Field)',
                'Soccer',
                'Hockey',
                'Netball',
                'Rounders',
                'Tag Rugby',
                'Swimming (Heated Pool)',
                'Volleyball',
                'Table Tennis',
                'Lawn Tennis'
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Co-Curricular Placeholder Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={athletic}
              alt="Co-Curricular Sports"
              className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-xs font-bold text-[#E0BA43]">
              Track & Field Athletics & Soccer Academies
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={artsClub}
              alt="Performing Arts"
              className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-xs font-bold text-[#E0BA43]">
              Brass Band, Drama, & ICT Coding Clubs
            </p>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 border-t border-white/10">
        <SectionHeading
          badge="Campus Gallery"
          title="Moments of Excellence & Fellowship"
          subtitle="Explore academic, athletic, and co-curricular highlights at St. Gabriel International School."
          theme="dark"
        />
        <Gallery />
      </section>
    </div>
  );
};
