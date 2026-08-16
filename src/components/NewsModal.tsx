import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Share2, Tag, ArrowRight, Check } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsModalProps {
  news: NewsItem | null;
  onClose: () => void;
  onSelectNews?: (news: NewsItem) => void;
  allNews?: NewsItem[];
}

export const NewsModal: React.FC<NewsModalProps> = ({ news, onClose, onSelectNews, allNews = [] }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (news) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [news, onClose]);

  if (!news) return null;

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/news?story=${news.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.summary,
          url: shareUrl,
        });
      } catch (err) {
        // User dismissed share dialog
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (e) {
        // clipboard write error fallback
      }
    }
  };

  const relatedNews = allNews.filter((n) => n.id !== news.id).slice(0, 2);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-200 text-gray-900 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-[#0B1D33]/90 text-white hover:bg-[#C59B27] hover:text-[#0B1D33] transition-all shadow-lg z-20 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
          aria-label="Close full news story"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-[#0B1D33]/50 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2.5">
            <span className="px-3 py-1 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-extrabold uppercase tracking-wider inline-block">
              {news.category}
            </span>
            <h2 className="font-serif font-extrabold text-xl sm:text-2xl md:text-3xl text-white leading-tight drop-shadow-md">
              {news.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E0BA43]" />
                <span>{news.date}</span>
              </span>
              {news.author && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#E0BA43]" />
                    <span>{news.author}</span>
                  </span>
                </>
              )}
              {news.readTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#E0BA43]" />
                    <span>{news.readTime}</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Full Story Content */}
        <div className="p-6 sm:p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Summary Lead */}
          <div className="bg-[#F8F9FB] border-l-4 border-[#C59B27] p-4 rounded-r-2xl">
            <p className="text-sm sm:text-base font-semibold text-[#0B1D33] italic leading-relaxed">
              {news.summary}
            </p>
          </div>

          {/* Detailed Paragraphs */}
          <div className="space-y-4 text-gray-800 leading-relaxed text-sm sm:text-base">
            {news.content && news.content.length > 0 ? (
              news.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{news.summary}</p>
            )}
          </div>

          {/* Tags & Share Section */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-gray-400 mr-1" />
              {news.tags && news.tags.length > 0 ? (
                news.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))
              ) : (
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold">
                  #{news.category}
                </span>
              )}
            </div>

            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-[#C59B27] hover:text-[#0B1D33] text-xs font-bold text-[#0B1D33] flex items-center gap-2 transition-all shadow-sm"
              title="Share this news story"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share Story</span>
                </>
              )}
            </button>
          </div>

          {/* Related Stories */}
          {relatedNews.length > 0 && onSelectNews && (
            <div className="pt-6 border-t border-gray-100 space-y-3">
              <h4 className="font-serif font-bold text-sm text-[#0B1D33] uppercase tracking-wider">
                More School News
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedNews.map((rn) => (
                  <button
                    key={rn.id}
                    onClick={() => {
                      onSelectNews(rn);
                    }}
                    className="p-3 rounded-xl border border-gray-200 hover:border-[#C59B27] bg-[#F8F9FB] hover:bg-white text-left transition-all group flex items-start gap-3"
                  >
                    <img
                      src={rn.image}
                      alt={rn.title}
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#C59B27] font-bold uppercase block">
                        {rn.category}
                      </span>
                      <p className="text-xs font-bold text-[#0B1D33] line-clamp-2 group-hover:text-[#C59B27] transition-colors">
                        {rn.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer Back Button */}
          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#0B1D33] text-white hover:bg-[#C59B27] hover:text-[#0B1D33] text-xs font-bold transition-all shadow-md"
            >
              Back to All News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
