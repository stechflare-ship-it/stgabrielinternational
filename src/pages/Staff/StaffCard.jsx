import React, { memo, useState } from 'react';

function getInitials(name) {
  return name
    .replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sister|Prof\.)\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

const StaffCard = memo(function StaffCard({ member, categoryLabel, style }) {
  const [imgError, setImgError] = useState(false);
  const showImage = member.image && !imgError;

  return (
    <article
      className="
        group bg-white rounded-3xl  overflow-hidden shadow-md hover:shadow-2xl
        border border-gray-100 hover:border-amber-200
        transition-all duration-500 p-6
      "
      style={style}
    >
      {/* Header: avatar + identity */}
      <div className="flex  items-start gap-4 mb-4">
        <div className="relative w-16 h-16 shrink-0 rounded-full ring-2 ring-amber-400 overflow-hidden bg-blue-950 flex items-center justify-center">
          {showImage ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={64}
              height={64}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-amber-400 font-bold text-lg" aria-hidden="true">
              {getInitials(member.name)}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-bold text-blue-950 leading-snug truncate">
            {member.name}
          </h3>
          <p className="text-sm font-semibold text-red-600 leading-snug">
            {member.role}
          </p>
          <span className="inline-block mt-1.5 bg-gray-100 text-gray-600 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Credentials */}
      {member.credentials && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-700">
            {member.credentials}
          </p>
        </div>
      )}

      {/* Bio */}
      <p className="text-sm  text-gray-600 leading-relaxed mb-4">
        {member.bio}
      </p>

      

      {/* Footer: contact */}
      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
        <a
          href={`mailto:${member.email}`}
          className="
            inline-flex items-center gap-1.5 text-x font-semibold text-blue-950
            bg-gray-50 hover:bg-amber-50 px-3 py-1.5 rounded-lg transition-colors
            focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500
          "
          aria-label={`Email ${member.name}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email
        </a>

        

        {member.phone && (
          <a
            href={`tel:${member.phone}`}
            className="text-x font-bold text-blue-950 hover:text-blue-950 transition-colors"
          >
          <span className='px-2 '>Contact: </span>{member.phone}
          </a>
        )}
      </div>
    </article>
  );
});

StaffCard.displayName = 'StaffCard';

export default StaffCard;
