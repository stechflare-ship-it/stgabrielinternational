import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, CheckCircle2, BookOpen, GraduationCap, Award, Compass, Layers, Globe, Flag } from 'lucide-react';
import { CURRICULUM_STAGES, BRITISH_CURRICULUM_STAGES, CBC_CURRICULUM_STAGES, CBC_CORE_COMPETENCIES } from '../data/schoolData';

export const CurriculumTimeline: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<'all' | 'cbc' | 'british'>('all');

  const filteredStages = 
    selectedSystem === 'cbc' 
      ? CBC_CURRICULUM_STAGES 
      : selectedSystem === 'british' 
      ? BRITISH_CURRICULUM_STAGES 
      : CURRICULUM_STAGES;

  const getStageIcon = (key: string) => {
    switch (key) {
      case 'eyfs':
      case 'cbc-pre-primary':
        return <Sparkles className="w-5 h-5 text-[#E0BA43]" />;
      case 'primary':
      case 'cbc-lower-primary':
        return <BookOpen className="w-5 h-5 text-[#E0BA43]" />;
      case 'cbc-upper-primary':
        return <Award className="w-5 h-5 text-[#E0BA43]" />;
      case 'lower-secondary':
      case 'cbc-junior-secondary':
        return <Compass className="w-5 h-5 text-[#E0BA43]" />;
      case 'igcse':
        return <Award className="w-5 h-5 text-[#E0BA43]" />;
      case 'a-level':
      case 'cbc-senior-school':
        return <GraduationCap className="w-5 h-5 text-[#E0BA43]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#E0BA43]" />;
    }
  };

  return (
    <div className="w-full space-y-10 my-8">
      
      {/* Curriculum System Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto p-1.5 bg-[#0A192F] rounded-2xl border border-[#C59B27]/40 shadow-lg">
        <button
          onClick={() => setSelectedSystem('all')}
          className={`flex-1 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            selectedSystem === 'all'
              ? 'bg-[#C59B27] text-[#0B1D33] shadow-md scale-100'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>All Academic Pathways ({CURRICULUM_STAGES.length})</span>
        </button>

        <button
          onClick={() => setSelectedSystem('cbc')}
          className={`flex-1 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            selectedSystem === 'cbc'
              ? 'bg-[#C59B27] text-[#0B1D33] shadow-md scale-100'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Flag className="w-4 h-4 text-emerald-400" />
          <span>Kenya CBC (PP1 – Senior School Gr. 12)</span>
        </button>

        <button
          onClick={() => setSelectedSystem('british')}
          className={`flex-1 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            selectedSystem === 'british'
              ? 'bg-[#C59B27] text-[#0B1D33] shadow-md scale-100'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Globe className="w-4 h-4 text-sky-400" />
          <span>British Cambridge (EYFS – A-Level)</span>
        </button>
      </div>

      {/* Top Interactive Journey Indicator Bar */}
      <div className="hidden lg:flex items-center justify-between bg-[#0B1D33] p-4 rounded-2xl border border-[#C59B27]/40 shadow-xl overflow-x-auto gap-2">
        {filteredStages.map((stage, idx) => (
          <React.Fragment key={stage.key}>
            <Link
              to={stage.path}
              className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-[#162E4D] border border-[#C59B27] flex items-center justify-center font-bold text-xs text-[#E0BA43]">
                {idx + 1}
              </div>
              <div>
                <span className="block text-xs font-bold text-white group-hover:text-[#E0BA43] transition-colors truncate max-w-[140px]">
                  {stage.title}
                </span>
                <span className="block text-[10px] text-gray-400">
                  {stage.ageRange}
                </span>
              </div>
            </Link>

            {idx < filteredStages.length - 1 && (
              <ChevronRight className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStages.map((stage, idx) => (
          <div
            key={stage.key}
            className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#C59B27] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Header Banner */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-[#0B1D33]">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-[#0B1D33]/50 to-transparent"></div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="bg-[#0B1D33]/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#E0BA43] border border-[#C59B27]/40 flex items-center gap-1.5 shadow">
                  {getStageIcon(stage.key)}
                  <span>Stage 0{idx + 1}</span>
                </div>
                {stage.curriculumSystem === 'cbc' ? (
                  <span className="bg-emerald-800/90 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-emerald-400/40 shadow">
                    Kenya CBC
                  </span>
                ) : (
                  <span className="bg-sky-900/90 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-sky-400/40 shadow">
                    British Cambridge
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#E0BA43] block">
                  {stage.ageRange} • {stage.years}
                </span>
                <h3 className="font-serif font-bold text-lg leading-tight mt-0.5 drop-shadow-sm">
                  {stage.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {stage.subtitle}
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-100">
                <p className="text-xs font-bold text-[#0B1D33] uppercase tracking-wider">
                  Key Highlights:
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {stage.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <Link
                  to={stage.path}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1D33] hover:text-[#C59B27] group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Stage Details</span>
                  <ChevronRight className="w-4 h-4 text-[#C59B27]" />
                </Link>
                <span className="text-[11px] font-semibold text-gray-400">
                  {stage.subjects.length} Subjects
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CBC Core Competencies Panel */}
      {(selectedSystem === 'all' || selectedSystem === 'cbc') && (
        <div className="bg-gradient-to-br from-[#0B1D33] to-[#162E4D] text-white p-6 sm:p-8 rounded-3xl border border-[#C59B27]/40 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="text-xs font-bold text-[#E0BA43] uppercase tracking-widest block mb-1">
                Kenya Institute of Curriculum Development (KICD) Standards
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                The 7 Core Competencies of Kenya CBC at St. Gabriel
              </h3>
            </div>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold border border-[#C59B27]/40 w-fit">
              Holistic Learner Development
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CBC_CORE_COMPETENCIES.map((comp, idx) => (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-colors space-y-1.5"
              >
                <div className="flex items-center gap-2 text-[#E0BA43] font-bold text-xs">
                  <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-extrabold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span>{comp.name}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dual Pathway Alignment Matrix Table */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-lg space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#C59B27] uppercase tracking-wider">
            Curriculum Alignment Matrix
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1D33]">
            Comparing Kenya CBC and British Cambridge Pathways
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            St. Gabriel provides clear transitions and academic parity, enabling parents to choose the ideal syllabus for their children.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0B1D33] text-white">
                <th className="p-3.5 rounded-tl-xl font-bold">Age Bracket</th>
                <th className="p-3.5 font-bold">Kenya CBC Syllabus</th>
                <th className="p-3.5 font-bold">British Cambridge Pathway</th>
                <th className="p-3.5 rounded-tr-xl font-bold">Key Assessment & Milestone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/80">
                <td className="p-3.5 font-bold text-[#0B1D33]">Ages 2 – 5</td>
                <td className="p-3.5">Pre-Primary (PP1 & PP2)</td>
                <td className="p-3.5">EYFS (Playgroup, Nursery, Reception)</td>
                <td className="p-3.5 text-gray-600">Foundational Phonics & Psychomotor Portfolios</td>
              </tr>
              <tr className="hover:bg-gray-50/80 bg-gray-50/40">
                <td className="p-3.5 font-bold text-[#0B1D33]">Ages 6 – 8</td>
                <td className="p-3.5">Lower Primary (Grades 1, 2 & 3)</td>
                <td className="p-3.5">Cambridge Primary (Years 1 – 3)</td>
                <td className="p-3.5 text-gray-600">Classroom-Based Assessment (CBA)</td>
              </tr>
              <tr className="hover:bg-gray-50/80">
                <td className="p-3.5 font-bold text-[#0B1D33]">Ages 9 – 11</td>
                <td className="p-3.5">Upper Primary (Grades 4, 5 & 6)</td>
                <td className="p-3.5">Cambridge Primary (Years 4 – 6)</td>
                <td className="p-3.5 font-bold text-[#0B1D33]">KPSEA (Grade 6) / Cambridge Primary Checkpoint</td>
              </tr>
              <tr className="hover:bg-gray-50/80 bg-gray-50/40">
                <td className="p-3.5 font-bold text-[#0B1D33]">Ages 12 – 14</td>
                <td className="p-3.5">Junior Secondary School (JSS Grades 7, 8 & 9)</td>
                <td className="p-3.5">Lower Secondary (Years 7, 8 & 9)</td>
                <td className="p-3.5 text-gray-600">KNEC Junior School Assessment / Checkpoint</td>
              </tr>
              <tr className="hover:bg-gray-50/80">
                <td className="p-3.5 font-bold text-[#0B1D33]">Ages 14 – 16</td>
                <td className="p-3.5">Senior School (Grades 10 & 11)</td>
                <td className="p-3.5">Cambridge IGCSE (Years 10 & 11)</td>
                <td className="p-3.5 font-bold text-[#0B1D33]">Cambridge IGCSE Board Examinations</td>
              </tr>
              <tr className="hover:bg-gray-50/80 bg-gray-50/40">
                <td className="p-3.5 font-bold text-[#0B1D33]">Ages 16 – 18</td>
                <td className="p-3.5">Senior School (Grade 12) / Pre-University</td>
                <td className="p-3.5">Advanced Level (A-Level / AS & A2)</td>
                <td className="p-3.5 text-gray-600">Cambridge International A-Level Examinations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

