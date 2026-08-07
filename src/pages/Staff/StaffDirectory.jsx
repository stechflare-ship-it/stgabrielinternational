import React, { memo, useState, useMemo, useCallback } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import StaffFilterTabs from './StaffFilterTabs';
import StaffCard from './StaffCard';
import { STAFF_CATEGORIES } from './staffData';

// Built once per module load, not per render.
const ALL_CATEGORIES = [{ id: 'all', label: 'All' }, ...STAFF_CATEGORIES];

const StaffDirectory = memo(function StaffDirectory({ members }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');

  // Label lookup avoids an .find() per card per render.
  const categoryLabelMap = useMemo(() => {
    const map = new Map();
    ALL_CATEGORIES.forEach((c) => map.set(c.id, c.label));
    return map;
  }, []);

  // Recomputed only when the active tab or source data changes.
  const filteredMembers = useMemo(() => {
    if (activeCategory === 'all') return members;
    return members.filter((member) => member.category === activeCategory);
  }, [members, activeCategory]);

  // Stable reference so StaffFilterTabs (memoized) doesn't re-render needlessly.
  const handleSelectCategory = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <section
      ref={ref}
      className=" py-8  md:py-12 bg-blue-900"
      aria-label="Staff Members"
    >
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <StaffFilterTabs
          categories={ALL_CATEGORIES}
          activeCategory={activeCategory}
          onSelect={handleSelectCategory}
        />

        {filteredMembers.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            No staff members found in this category yet.
          </p>
        ) : (
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredMembers.map((member, index) => {
              const delay = (index % 6) * 100; // cap stagger so late items don't lag
              return (
                <div
                  key={member.id}
                  className={` transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <StaffCard
                    member={member}
                    categoryLabel={categoryLabelMap.get(member.category) || member.category}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
});

StaffDirectory.displayName = 'StaffDirectory';

export default StaffDirectory;
