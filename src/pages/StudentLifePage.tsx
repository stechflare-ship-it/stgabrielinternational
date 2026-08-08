import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Gallery } from '../components/Gallery';
import { Trophy, Music, Cpu, Heart, Users, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

export const StudentLifePage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Student Life & Co-Curricular Excellence | St. Gabriel Nakuru"
        description="Discover student life at St. Gabriel International School: sports leagues, brass band orchestra, drama, robotics coding labs, and Christian fellowship."
        canonicalPath="/student-life"
        breadcrumbs={[{ name: 'Student Life', path: '/student-life' }]}
      />

      <Breadcrumbs items={[{ label: 'Student Life', path: '/student-life' }]} />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Holistic Student Experience</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Student Life at St. Gabriel
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            Nurturing well-rounded leaders through athletic competition, orchestral music, theatrical drama, computing innovation, and Christian character.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0B1D33] text-[#C59B27] flex items-center justify-center font-bold">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0B1D33]">Sports & Athletics</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Competitive leagues in soccer, basketball, track & field athletics, and swimming with modern grounds at our Lanet campus.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0B1D33] text-[#C59B27] flex items-center justify-center font-bold">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0B1D33]">Music & Brass Band</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Vocal choir and orchestral brass band instruction (trombone, euphonium, tuba) performing at national galas and school ceremonies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#0B1D33] text-[#C59B27] flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0B1D33]">STEM & Robotics</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Digital literacy in computer laboratories, software programming, 3D modelling, and environmental robotics projects.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <SectionHeading
            badge="Campus Gallery"
            title="Moments of Excellence & Fellowship"
            subtitle="Browse authentic photos of classroom writing, music brass band, computer lab, and graduation distinctions."
          />
          <Gallery />
        </div>

      </section>
    </div>
  );
};
