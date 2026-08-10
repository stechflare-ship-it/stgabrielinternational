import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { NewsCard } from '../components/NewsCard';
import { NEWS_ITEMS } from '../data/schoolData';
import { Newspaper } from 'lucide-react';
import newsHeroImg from '../assets/images/gallery/graduation.webp';

export const NewsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="School News & Announcements | St. Gabriel Nakuru"
        description="Latest news, Cambridge examination distinctions, co-curricular galas, and announcements from St. Gabriel International School in Lanet, Nakuru."
        canonicalPath="/news"
        breadcrumbs={[{ name: 'News & Events', path: '/news' }]}
      />

      <Breadcrumbs items={[{ label: 'News & Announcements', path: '/news' }]} />

      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={newsHeroImg}
            alt="St. Gabriel School News and Graduation Celebrations"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-flex items-center gap-1.5">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Latest News & Events</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            News & Announcements
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Stay informed with academic achievements, Cambridge IGCSE exam results, co-curricular galas, and school updates.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>
    </div>
  );
};
