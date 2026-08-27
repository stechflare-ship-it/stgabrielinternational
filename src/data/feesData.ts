import { BoardingFee, AdditionalCharge } from '../types';

export const BOARDING_FEES: BoardingFee[] = [
  {
    gradeGroup: 'Pre-Unit DAY SCHOLAR',
    term1: 8500,
    term2: 90000,
    term3: 8500,
    totalAnnual: 26000
  },
  {
    gradeGroup: 'Grade 1 (Day Schoolars)',
    term1: 11000,
    term2: 11200,
    term3: 11000,
    totalAnnual: 33200
  },
  {
    gradeGroup: 'Grade 2 and 3 (Day Scholars)',
    term1: 12000,
    term2: 12200,
    term3: 12000,
    totalAnnual: 36200
  },
  {
    gradeGroup: 'Grade 4 (Day Scholars)',
    term1: 13000,
    term2: 13200,
    term3: 13000,
    totalAnnual: 39200
  },
  {
    gradeGroup: 'Grade 5 (Day Scholars)',
    term1: 14000,
    term2: 14200,
    term3: 14000,
    totalAnnual: 42200
  },
  {
    gradeGroup: 'Grade 6 (Day Scholars)',
    term1: 15000,
    term2: 15200,
    term3: 15000,
    totalAnnual: 45200
  },
  {
    gradeGroup: 'Grade 1,2 and 3 (Boarding Scholars)',
    term1: 20100,
    term2: 20500,
    term3: 20100,
    totalAnnual: 60700
  },
  {
    gradeGroup: 'Grade 4 and 5 (Boarding Scholars)',
    term1: 21400,
    term2: 21700,
    term3: 21400,
    totalAnnual: 64500
  },
  {
    gradeGroup: 'Grade 6 (Boarding Scholars',
    term1: 23500,
    term2: 23800,
    term3: 23500,
    totalAnnual: 70800
  },
  {
    gradeGroup: 'Junior school (Day Scholars)',
    term1: 17000,
    term2: 17200,
    term3: 17000,
    totalAnnual: 51200
  },
  {
    gradeGroup: 'Junior school (Boarders)',
    term1: 25100,
    term2: 25500,
    term3: 25100,
    totalAnnual: 75600
  },
  {
    gradeGroup: 'British IGSE Year 9 and 10',
    term1: 85000,
    term2: 85000,
    term3: 85000,
    totalAnnual: 255000
  }
];

export const OTHER_CHARGES: AdditionalCharge[] = [
  {
    item: 'Admission & Registration Fee',
    amount: 2000,
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
    amount: 17500,
    frequency: 'One-off upon admission',
    notes: 'Includes blazer, sweaters, 3 shirts/blouses, skirts/trousers, PE kit, track suit, and socks.'
  },
  {
    item: 'Transort',
    amount: 7500,
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
    accountName: 'St Gabriel\'s International School Ltd',
    accountNumber: '0310284759201',
    branch: 'Nakuru Gate House Branch',
    branchCode: '031',
    swiftCode: 'EQBLKENA',
    description: 'Direct cash deposit at any Equity Bank branch or RTGS/EFT transfer.'
  },
  bankDetails: {
    bankName: 'Equity Bank Kenya',
    accountName: 'St Gabriel\'s International School Ltd',
    accountNumber: '0310284759201',
    branch: 'Nakuru Gate House Branch'
  },
  bankersCheque: {
    payableTo: 'St Gabriel\'s International School Ltd',
    description: 'Bankers cheques drawn from recognized commercial banks in Kenya.'
  }
};
