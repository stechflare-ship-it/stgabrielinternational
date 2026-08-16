export interface HistoryMilestone {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
}

export const SCHOOL_HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    year: '1998',
    title: 'Foundation of St. Gabriel School',
    subtitle: 'Humble Beginnings',
    description: 'Established in Lanet, Nakuru with an initial cohort of 35 scholars and a clear vision to provide values-centered Christian education.'
  },
  {
    year: '2005',
    title: 'Establishment of Residential Boarding Campus',
    subtitle: 'Expanding Horizons',
    description: 'Commissioned the primary boarding wings to meet high demand from families across the Rift Valley and Nairobi regions.'
  },
  {
    year: '2012',
    title: 'Expansion to Dual Boarding Compounds',
    subtitle: 'Dedicated Campuses',
    description: "Acquired and built the dedicated 8-acre Girls' residential campus in Lanet South, establishing separate boys and girls compounds 4 km apart."
  },
  {
    year: '2018',
    title: 'Cambridge International Accreditation',
    subtitle: 'Global Standards',
    description: 'Formally accredited by Cambridge Assessment International Education (CAIE) as a global examination center for EYFS, Primary, Checkpoint, and IGCSE.'
  },
  {
    year: '2023',
    title: 'Pioneering CBC Junior Secondary Transition',
    subtitle: 'CBC Leadership',
    description: 'Constructed the state-of-the-art Junior Secondary Science & Pre-Technical complex, leading Nakuru County in KJSEA assessments.'
  },
  {
    year: '2026',
    title: '28 Years of Distinction & STEM Innovation Hub',
    subtitle: '28th Anniversary',
    description: 'Celebrating 28 years of academic leadership with over 1,250 scholars, modern AI/STEM innovation laboratories, and university placements globally.'
  }
];
