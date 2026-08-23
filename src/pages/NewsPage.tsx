import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NewsCard } from '../components/NewsCard';
import { NEWS_ITEMS, SCHOOL_INFO } from '../data/schoolData';
import { NewsItem } from '../types';
import { Newspaper, Calendar, Tag, Share2, X, CheckCircle2, ArrowRight } from 'lucide-react';

import { Button } from '../components/Button';
import { NewsModal } from '../components/NewsModal';

import newsBgImg from '../../src/assets/images/newsAndEvent/newsBackground.webp';

export const NewsPage: React.FC = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<NewsItem | null>(null);

  const categories = ['All', 'Academic', 'Arts', 'Sports', 'Community', 'Event'];

  // Check URL hash or query param on mount or hash change (e.g. #outstanding-British-exam-results)
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      const found = NEWS_ITEMS.find((n) => n.slug === slug || n.id === slug);
      if (found) {
        setActiveStory(found);
      }
    }
  }, [location.hash]);

  const filteredNews = NEWS_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="School News, Events & Press Releases | St Gabriel\'s Nakuru"
        description="Latest news, British examination distinctions, co-curricular galas, and announcements from St Gabriel\'s International School in Lanet, Nakuru."
        keywords="school news nakuru, st gabriel events, British exam results nakuru, music festivals nakuru, school announcements lanet"
        canonicalPath="/news"
        ogType="website"
        ogTitle="School News & Official Announcements · St Gabriel\'s Nakuru"
        ogDescription="Read our latest campus updates, national music gala triumphs, British exam distinctions, and upcoming school calendar events."
        breadcrumbs={[{ name: 'News & Events', path: '/news' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'St Gabriel\'s International School News & Events',
          description: 'Official press releases, academic achievement highlights, and community updates.',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: NEWS_ITEMS.map((item, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'NewsArticle',
                headline: item.title,
                datePublished: item.date,
                description: item.summary
              }
            }))
          }
        }}
      />

      <Breadcrumbs items={[{ label: 'News & Announcements', path: '/news' }]} />

      {/* Hero Banner */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        <div className="absolute inset-0 z-0">
          <img
            src={newsBgImg}
            alt="St Gabriel\'s School News and Graduation Celebrations"
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
            Stay informed with academic achievements, British IGCSE and Kenya CBC exam distinctions, co-curricular galas, and official school updates.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#C59B27]" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Filter by Category:
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0B1D33] text-[#E0BA43] shadow-md border border-[#C59B27]/50'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              onReadMore={(item) => setActiveStory(item)}
            />
          ))}
        </div>
      </section>

      {/* Interactive Full Story Modal */}
      <NewsModal
        news={activeStory}
        onClose={() => setActiveStory(null)}
        onSelectNews={(story) => setActiveStory(story)}
        allNews={NEWS_ITEMS}
      />
    </div>
  );
};
