import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Sparkles, CheckCircle2, BookOpen, Compass, Award, GraduationCap, ChevronRight, Flag, Globe, HelpCircle } from 'lucide-react';
import { CURRICULUM_STAGES } from '../data/schoolData';
import earlyYearWebp from '../assets/images/academics/earlyYear.webp';
const academicExplore = earlyYearWebp;

export const EYFSPage: React.FC = () => {
  const { stageId } = useParams<{ stageId?: string }>();
  const location = useLocation();

  // Determine current stage key based on param or path
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');
  const urlParam = stageId?.toLowerCase();

  // 1. Direct match with CURRICULUM_STAGES keys
  let stageData = CURRICULUM_STAGES.find(
    (s) => s.key === urlParam || currentPath === s.path.toLowerCase() || currentPath.endsWith(`/${s.key}`)
  );

  // 2. Specific matching fallbacks
  if (!stageData) {
    if (currentPath.includes('cbc-pre') || currentPath.includes('pre-primary') || currentPath.includes('pp1') || currentPath.includes('pp2')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'cbc-pre-primary');
    } else if (currentPath.includes('cbc-lower') || currentPath.includes('lower-primary')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'cbc-lower-primary');
    } else if (currentPath.includes('cbc-upper') || currentPath.includes('upper-primary') || currentPath.includes('kpsea')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'cbc-upper-primary');
    } else if (currentPath.includes('cbc-senior') || currentPath.includes('senior-school') || currentPath.includes('sss') || currentPath.includes('grade-10')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'cbc-senior-school');
    } else if (currentPath.includes('cbc-junior') || currentPath.includes('jss') || currentPath.includes('junior-secondary')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'cbc-junior-secondary');
    } else if (currentPath.includes('lower-secondary')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'lower-secondary');
    } else if (currentPath.includes('igcse') || currentPath.includes('British')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'igcse');
    } else if (currentPath.includes('a-level') || currentPath.includes('alevel')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'a-level');
    } else if (currentPath.includes('primary')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'primary');
    } else if (currentPath.includes('eyfs') || currentPath.includes('early')) {
      stageData = CURRICULUM_STAGES.find((s) => s.key === 'eyfs');
    }
  }

  if (!stageData) {
    stageData = CURRICULUM_STAGES[0];
  }

  const isCbc = stageData.curriculumSystem === 'cbc';

  const getStageIcon = (key: string) => {
    switch (key) {
      case 'eyfs':
      case 'cbc-pre-primary':
        return <Sparkles className="w-4 h-4 text-[#E0BA43]" />;
      case 'primary':
      case 'cbc-lower-primary':
        return <BookOpen className="w-4 h-4 text-[#E0BA43]" />;
      case 'cbc-upper-primary':
        return <Award className="w-4 h-4 text-[#E0BA43]" />;
      case 'lower-secondary':
      case 'cbc-junior-secondary':
        return <Compass className="w-4 h-4 text-[#E0BA43]" />;
      case 'igcse':
        return <Award className="w-4 h-4 text-[#E0BA43]" />;
      case 'a-level':
      case 'cbc-senior-school':
        return <GraduationCap className="w-4 h-4 text-[#E0BA43]" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#E0BA43]" />;
    }
  };

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title={`${stageData.title} | ${isCbc ? 'Kenya CBC' : 'British'} | St Gabriel\'s Nakuru`}
        description={`${stageData.title} (${stageData.years}, ${stageData.ageRange}) at St Gabriel\'s International School, Lanet, Nakuru. ${stageData.subtitle}`}
        keywords={`${stageData.title}, ${isCbc ? 'kenya cbc' : 'British'}, nakuru international school, ${stageData.subjects?.slice(0, 5).join(', ')}, lanet education`}
        canonicalPath={stageData.path}
        ogType="website"
        ogTitle={`${stageData.title} · ${isCbc ? 'Kenya CBC' : 'British International'}`}
        ogDescription={`${stageData.subtitle} Ages: ${stageData.ageRange}, Duration: ${stageData.years}.`}
        breadcrumbs={[
          { name: 'Academics', path: '/academics' },
          { name: stageData.title, path: stageData.path }
        ]}
        course={{
          name: stageData.title,
          description: stageData.subtitle,
          educationalLevel: `${stageData.years} (${stageData.ageRange})`,
          teaches: stageData.subjects
        }}
      />

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics' },
          { label: stageData.title, path: stageData.path }
        ]}
      />

      {/* Top Academic Stage Switcher Tabs */}
      <div className="bg-[#0B1D33] border-b border-[#C59B27]/30 py-3 px-4 overflow-x-auto shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-start lg:justify-center gap-2 min-w-max">
          {CURRICULUM_STAGES.map((s) => {
            const isActive = s.key === stageData.key;
            return (
              <Link
                key={s.key}
                to={s.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#C59B27] text-[#0B1D33] shadow-lg scale-105'
                    : 'bg-[#162E4D] text-gray-300 hover:text-white hover:bg-[#1f3f68]'
                }`}
              >
                {getStageIcon(s.key)}
                <span>{s.title.replace('CBC ', '').split(' ')[0]}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={stageData.image || academicExplore}
            alt={stageData.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {isCbc ? (
              <span className="px-3.5 py-1 rounded-full bg-emerald-600/30 backdrop-blur-sm text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/40 flex items-center gap-1.5">
                <Flag className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kenya Competency-Based Curriculum (CBC)</span>
              </span>
            ) : (
              <span className="px-3.5 py-1 rounded-full bg-sky-600/30 backdrop-blur-sm text-sky-300 text-xs font-bold uppercase tracking-widest border border-sky-500/40 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>British International Pathway</span>
              </span>
            )}
            <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
              {stageData.ageRange} • {stageData.years}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            {stageData.title}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            {stageData.subtitle}
          </p>
        </div>
      </section>

      {/* Stage Content Body */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              badge={`${stageData.title} Overview`}
              title={stageData.years}
              subtitle={stageData.overview}
              align="left"
            />

            {/* EYFS Specific Sub-stages or General Key Highlights */}
            {stageData.key === 'eyfs' ? (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    2-3
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1D33]">Playgroup (Ages 2–3 Years)</h4>
                    <p className="text-xs text-gray-600">Focus on speech, sensory play, motor development, and social interaction.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    3-4
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1D33]">Nursery (Ages 3–4 Years)</h4>
                    <p className="text-xs text-gray-600">Introducing Jolly Phonics, early counting, expressive arts, and storytelling.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    4-5
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1D33]">Reception (Ages 4–5 Years)</h4>
                    <p className="text-xs text-gray-600">Preparing children for Primary entry with reading fluency, math, and independent problem-solving.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#0B1D33] uppercase tracking-wider">Programme Highlights:</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {stageData.highlights.map((highlight, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-800 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Assessment and Core Competencies for CBC if available */}
            {stageData.coreCompetencies && stageData.coreCompetencies.length > 0 && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Targeted CBC Core Competencies:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stageData.coreCompetencies.map((comp, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-xs font-semibold text-emerald-800 shadow-xs">
                      ✓ {comp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {stageData.assessmentMode && (
              <div className="p-4 rounded-2xl bg-[#0B1D33]/5 border border-[#C59B27]/30 space-y-1">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B1D33] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#C59B27]" />
                  <span>Assessment & Evaluation Mode:</span>
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {stageData.assessmentMode}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#0B1D33] aspect-[4/3]">
              <img
                src={stageData.image || academicExplore}
                alt={stageData.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#C59B27] text-[#0B1D33] p-4 rounded-2xl font-serif font-bold text-xs sm:text-sm shadow-xl max-w-xs border border-white">
              {isCbc
                ? '🇰🇪 Ministry of Education & KICD Accredited CBC in Lanet, Nakuru'
                : '🎓 Certified British International Delivery in Lanet, Nakuru'}
            </div>
          </div>
        </div>

        {/* Specialized Career Pathways (For Senior School / Advanced Stages) */}
        {stageData.pathways && stageData.pathways.length > 0 && (
          <div className="bg-[#0B1D33] text-white p-6 sm:p-10 rounded-3xl border-2 border-[#C59B27]/40 shadow-2xl space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#E0BA43] text-xs font-bold uppercase tracking-widest">
                Career Specialization
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                Three Distinct CBC Career Pathways
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Scholars select specialized tracks supported by state-of-the-art STEM laboratories, fine arts studios, and business incubators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {stageData.pathways.map((pathway, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-[#C59B27] rounded-2xl p-5 space-y-4 transition-all hover:bg-white/10 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#C59B27] text-[#0B1D33] font-bold text-sm flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">
                      {pathway.name}
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-[#E0BA43] font-bold block">
                      Sub-Tracks & Electives:
                    </span>
                    {pathway.tracks.map((track, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-gray-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                        <span>{track}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Subjects & Learning Areas */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">Curriculum Breakdown</span>
              <h3 className="font-serif text-2xl font-bold text-[#0B1D33]">
                Subjects & Academic Learning Areas
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0B1D33] text-[#E0BA43] text-xs font-bold w-fit">
              {stageData.subjects.length} Learning Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stageData.subjects.map((subject) => (
              <div key={subject} className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-xs sm:text-sm font-bold text-[#0B1D33] hover:border-[#C59B27] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                <span>{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Stages Quick Navigation Grid */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#C59B27] uppercase tracking-wider">
              Comprehensive Academic Journey
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1D33]">
              Explore Other Stages in Kenya CBC & British Pathways
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CURRICULUM_STAGES.filter((s) => s.key !== stageData.key).map((otherStage) => (
              <Link
                key={otherStage.key}
                to={otherStage.path}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#C59B27] shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] uppercase font-bold text-[#C59B27]">{otherStage.ageRange}</span>
                    <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      otherStage.curriculumSystem === 'cbc' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'
                    }`}>
                      {otherStage.curriculumSystem === 'cbc' ? 'CBC' : 'British'}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#0B1D33] group-hover:text-[#C59B27] transition-colors">
                    {otherStage.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                    {otherStage.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1D33] group-hover:translate-x-1 transition-transform">
                  <span>View Stage</span>
                  <ChevronRight className="w-4 h-4 text-[#C59B27]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Enrollment CTA Banner */}
        <div className="bg-[#0B1D33] text-white p-8 rounded-3xl border border-[#C59B27]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-2xl font-bold text-white">
              Ready to Enroll Your Child in {stageData.title}?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Our academic advisors in Lanet, Nakuru are available to assist with assessment, grade placement, and campus visits.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/admissions" variant="primary" size="md">
              Apply for Admission
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              Contact Academics
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};


