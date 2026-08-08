import React, { useState } from 'react';
import { CheckSquare, Search, BookOpen, Utensils, Footprints, Sparkles, Filter, Printer } from 'lucide-react';
import { JUNIOR_REQUIREMENTS } from '../data/schoolData';

export const RequirementsChecklist: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...JUNIOR_REQUIREMENTS.map((c) => c.category)];

  const filteredRequirements = JUNIOR_REQUIREMENTS.map((cat) => {
    const matchingItems = cat.items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      items: matchingItems
    };
  }).filter((cat) => {
    const isCategoryMatch = activeCategory === 'All' || cat.category === activeCategory;
    return isCategoryMatch && cat.items.length > 0;
  });

  const getCategoryIcon = (category: string) => {
    if (category.includes('Spiritual')) return <BookOpen className="w-4 h-4 text-[#C59B27]" />;
    if (category.includes('Stationery')) return <Sparkles className="w-4 h-4 text-[#C59B27]" />;
    if (category.includes('Dining')) return <Utensils className="w-4 h-4 text-[#C59B27]" />;
    if (category.includes('Footwear')) return <Footprints className="w-4 h-4 text-[#C59B27]" />;
    return <CheckSquare className="w-4 h-4 text-[#C59B27]" />;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8 space-y-6 my-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#C59B27]">
            Junior Section Boarding Checklist
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D33] mt-1">
            Student Personal Requirements List
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            All items must be clearly labeled with student&apos;s full name before reporting.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1D33] hover:bg-[#162E4D] text-[#E0BA43] text-xs font-bold transition-all shadow focus:outline-none"
        >
          <Printer className="w-4 h-4" />
          <span>Print Checklist</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-200">
        
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items (e.g. Bible, Shoes)..."
            className="w-full bg-white text-xs pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C59B27]"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-[#C59B27] text-[#0B1D33] font-bold shadow'
                  : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Requirement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRequirements.map((catGroup) => (
          <div
            key={catGroup.category}
            className="p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#C59B27] transition-all space-y-3"
          >
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              {getCategoryIcon(catGroup.category)}
              <h4 className="font-serif font-bold text-sm text-[#0B1D33]">
                {catGroup.category}
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-gray-700">
              {catGroup.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded border-2 border-[#C59B27] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-xs bg-[#C59B27] opacity-0 hover:opacity-100"></span>
                  </span>
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};
