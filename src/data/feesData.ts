import { BoardingFee, AdditionalCharge } from '../types';

export const BOARDING_FEES: BoardingFee[] = [
  {
    gradeGroup: 'Playgroup & Reception (Day Only)',
    term1: 45000,
    term2: 42000,
    term3: 42000,
    totalAnnual: 129000
  },
  {
    gradeGroup: 'Pre-Primary (PP1 & PP2 - Day Scholars)',
    term1: 52000,
    term2: 48000,
    term3: 48000,
    totalAnnual: 148000
  },
  {
    gradeGroup: 'CBC Lower Primary (Grades 1 – 3 - Day Scholars)',
    term1: 65000,
    term2: 60000,
    term3: 60000,
    totalAnnual: 185000
  },
  {
    gradeGroup: 'CBC Upper Primary (Grades 4 – 6 - Day Scholars)',
    term1: 75000,
    term2: 70000,
    term3: 70000,
    totalAnnual: 215000
  },
  {
    gradeGroup: 'CBC Upper Primary Boarding (Grades 4 – 6)',
    term1: 125000,
    term2: 115000,
    term3: 115000,
    totalAnnual: 355000
  },
  {
    gradeGroup: 'CBC Junior Secondary (Grades 7 – 9 - Day)',
    term1: 92000,
    term2: 85000,
    term3: 85000,
    totalAnnual: 262000
  },
  {
    gradeGroup: 'CBC Junior Secondary Boarding (Grades 7 – 9)',
    term1: 145000,
    term2: 135000,
    term3: 135000,
    totalAnnual: 415000
  },
  {
    gradeGroup: 'Cambridge Primary (Years 1 – 6 - Day)',
    term1: 95000,
    term2: 90000,
    term3: 90000,
    totalAnnual: 275000
  },
  {
    gradeGroup: 'Cambridge Primary Boarding (Years 4 – 6)',
    term1: 155000,
    term2: 145000,
    term3: 145000,
    totalAnnual: 445000
  },
  {
    gradeGroup: 'Cambridge Lower Secondary (Years 7 – 9 Boarding)',
    term1: 175000,
    term2: 165000,
    term3: 165000,
    totalAnnual: 505000
  },
  {
    gradeGroup: 'Cambridge IGCSE (Years 10 – 11 Boarding)',
    term1: 210000,
    term2: 195000,
    term3: 195000,
    totalAnnual: 600000
  },
  {
    gradeGroup: 'Cambridge A-Level / Sixth Form (Years 12 – 13 Boarding)',
    term1: 245000,
    term2: 230000,
    term3: 230000,
    totalAnnual: 705000
  }
];

export const OTHER_CHARGES: AdditionalCharge[] = [
  {
    item: 'Admission & Registration Fee',
    amount: 5000,
    frequency: 'One-off upon enrollment',
    notes: 'Non-refundable administrative fee covers student file and badge setup.'
  },
  {
    item: 'Caution Money (Refundable)',
    amount: 10000,
    frequency: 'One-off upon admission',
    notes: 'Fully refundable upon graduation or clearance from the school.'
  },
  {
    item: 'Comprehensive School Uniform Package',
    amount: 22500,
    frequency: 'One-off upon admission',
    notes: 'Includes blazer, sweaters, 3 shirts/blouses, skirts/trousers, PE kit, track suit, and socks.'
  },
  {
    item: 'Medical & Accident Insurance Cover',
    amount: 4500,
    frequency: 'Annual (Term 1)',
    notes: '24/7 comprehensive emergency medical care on campus and during trips.'
  },
  {
    item: 'ICT & Digital Learning Resource Fee',
    amount: 6000,
    frequency: 'Per Term',
    notes: 'Covers high-speed optical fiber connectivity, online learning platforms, and computing lab software.'
  },
  {
    item: 'Activity & Co-Curricular Fee',
    amount: 5000,
    frequency: 'Per Term',
    notes: 'Covers sports leagues, swimming pool access, music band instruments, and club supplies.'
  }
];

export const PAYMENT_METHODS = {
  mpesaPaybill: {
    businessNumber: '247247',
    accountFormat: '780824#STUDENT_NAME_CLASS',
    accountExample: '780824#KIPRUTO_GRADE8',
    description: 'Instant M-Pesa mobile banking through Equity Bank Gateway.'
  },
  paybillDetails: {
    paybillNumber: '247247',
    accountFormat: '780824#STUDENT_NAME_CLASS',
    accountExample: '780824#KIPRUTO_GRADE8',
    importantNote: 'Always include the pupil\'s admission number or name in the account field.'
  },
  equityBank: {
    bankName: 'Equity Bank Kenya',
    accountName: 'St. Gabriel International School Ltd',
    accountNumber: '0310284759201',
    branch: 'Nakuru Gate House Branch',
    branchCode: '031',
    swiftCode: 'EQBLKENA',
    description: 'Direct cash deposit at any Equity Bank branch or RTGS/EFT transfer.'
  },
  bankDetails: {
    bankName: 'Equity Bank Kenya',
    accountName: 'St. Gabriel International School Ltd',
    accountNumber: '0310284759201',
    branch: 'Nakuru Gate House Branch'
  },
  bankersCheque: {
    payableTo: 'St. Gabriel International School Ltd',
    description: 'Bankers cheques drawn from recognized commercial banks in Kenya.'
  }
};
