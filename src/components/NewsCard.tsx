import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#C59B27] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* Image Banner */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={news.image}
          alt={news.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B1D33] text-[#E0BA43] text-[10px] font-extrabold uppercase border border-[#C59B27]/40">
          {news.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{news.date}</span>
          </div>

          <h3 className="font-serif font-bold text-lg text-[#0B1D33] leading-snug group-hover:text-[#C59B27] transition-colors">
            {news.title}
          </h3>

          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
            {news.summary}
          </p>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <Link
            to={`/news#${news.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1D33] group-hover:text-[#C59B27] transition-colors"
          >
            <span>Read Full Story</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
};
