import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { CurriculumTimeline } from '../components/CurriculumTimeline';
import { Button } from '../components/Button';
import { BookOpen, Sparkles, Award, GraduationCap } from 'lucide-react';
import academicExplore from '../assets/images/academics/academicexplore.webp';

export const AcademicsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="British Curriculum & International Education | Best Education in Nakuru, Kenya"
        description="Explore the best British Curriculum education at St. Gabriel International School in Lanet, Nakuru, Kenya. EYFS, Cambridge IGCSE & A-Level offering real-life experiences and a balanced life."
        keywords="international, nakuru, kenya, british curriculum, best education, balanced life, real life experience, Cambridge IGCSE, A-Level, EYFS, St. Gabriel International School"
        canonicalPath="/academics"
        breadcrumbs={[{ name: 'Academics', path: '/academics' }]}
      />

      <Breadcrumbs items={[{ label: 'Academics & Curriculum', path: '/academics' }]} />

      <section className="relative text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={academicExplore}
            alt="St. Gabriel Academic Pathways & Classroom"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Cambridge & British Curriculum Standards
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            Academic Pathways & Curriculum
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Delivering an inspiring, world-recognized education from Early Years through Advanced Level university entry qualifications.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Overview"
          title="Progressive Learning Stages"
          subtitle="Click on any stage below to explore specific subjects, entry ages, and academic outcomes."
        />
        <CurriculumTimeline />
      </section>

      <section className="bg-[#071321] text-white py-16 border-t border-[#C59B27]/30">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Ready to Enroll Your Child in Our British Curriculum Program?
          </h2>
          <p className="text-gray-300 text-sm">
            Our academic advisors in Lanet, Nakuru are ready to assist with grade placement and subject choices.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/admissions" variant="primary" size="md">
              Apply for Admission
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              Speak to Academics Office
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
