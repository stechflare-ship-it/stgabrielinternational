import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface DocumentSection {
  heading: string;
  bullets: string[];
}

export interface DocumentDefinition {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  fileName: string;
  sections: DocumentSection[];
}

export const PDF_DEFINITIONS: Record<string, DocumentDefinition> = {
  'doc-prospectus-2026': {
    id: 'doc-prospectus-2026',
    title: 'Official Institutional Prospectus & Academic Guide 2026/2027',
    category: 'Admissions & Academic Profile',
    subtitle: 'A comprehensive overview of dual academic pathways, campus life, boarding hostels, and holistic programs.',
    fileName: 'St_Gabriel_School_Prospectus_2026_2027.pdf',
    sections: [
      {
        heading: '1. Institutional Profile & Dual Curriculum Distinction',
        bullets: [
          'Dual Curriculum Excellence: Accredited Kenyan CBC (PP1 through Grade 12) & British International (EYFS to A-Levels).',
          'Campus Environment: Purpose-built 15-acre modern academic facility in Lanet, Nakuru with pristine air and focused study ambiance.',
          'Small Class Ratios: 1:15 educator-to-scholar ratio ensuring personalized mentorship and individualized diagnostic attention.',
          'Christian Foundation: Anchored in biblical morality, leadership stewardship, discipline, and compassionate global citizenship.'
        ]
      },
      {
        heading: '2. Academic Pathways & Subject Offerings',
        bullets: [
          'Early Years (EYFS & PP1-PP2): Synthetic phonics, Montessori sensorial manipulatives, play-based numeracy, and expressive arts.',
          'Primary & Junior Secondary: STEM integration, coding & robotics, integrated science, agricultural practicals, and modern languages.',
          'British IGCSE & A-Levels: International pre-university qualifications unlocking entry to Ivy League and Russell Group universities.',
          'Kenyan CBC Senior School: Specialized career pathways in STEM, Social Sciences, Arts & Sports Science.'
        ]
      },
      {
        heading: '3. Boarding Life, Facilities & Student Wellbeing',
        bullets: [
          'Residential Compounds: Separate, perimeter-secured boarding compounds for boys and girls with 24/7 biometric security and CCTV.',
          'Healthcare & Nutrition: 24/7 on-campus dispensary staffed by certified nurses, paired with fresh, balanced 4-meal daily catering.',
          'Co-Curricular Pride: Championship St Gabriel\'s Brass Band, robotics suites, Olympic-size swimming pool, and sports leagues.'
        ]
      }
    ]
  },
  'doc-fees-2026': {
    id: 'doc-fees-2026',
    title: 'Approved Fee Schedule & Payment Policy 2026/2027',
    category: 'Finance & Tuition Policies',
    subtitle: 'Official Board of Management certified tuition rates, boarding charges, and electronic payment guidelines.',
    fileName: 'St_Gabriel_Approved_Fee_Structure_2026.pdf',
    sections: [
      {
        heading: '1. Termly Tuition Breakdown (Day Scholars)',
        bullets: [
          'Playgroup & Kindergarten (PP1 - PP2): KES 32,000 per term (Includes learning materials, mid-morning snack & hot balanced lunch).',
          'Lower Primary (Grade 1 - 3): KES 38,500 per term (Includes French, Music, Computer literacy, and scholastic exercise books).',
          'Upper Primary (Grade 4 - 6): KES 44,000 per term (Includes science laboratory sessions, ICT coding suites & swimming coaching).',
          'Junior Secondary (Grade 7 - 9): KES 52,000 per term (Includes STEM research materials, home science practicals & agriculture).'
        ]
      },
      {
        heading: '2. Full Boarding Scholars (Comprehensive Package)',
        bullets: [
          'Upper Primary Boarding (Grade 4 - 6): KES 78,000 per term (Tuition, full boarding hostel accommodation, 4 meals daily, laundry).',
          'Junior Secondary Boarding (Grade 7 - 9): KES 89,500 per term (Tuition, boarding residency, evening prep tutorials & medical care).',
          'Senior Secondary & IGCSE/A-Level: KES 105,000 per term (Intensive exam preparation, laboratory consumables & career counseling).'
        ]
      },
      {
        heading: '3. Approved Official Payment Channels',
        bullets: [
          'M-PESA Paybill: Business Number: 247247 | Account Number: 0724694554 (Student Name & Grade).',
          'Equity Bank Kenya: Account Name: St Gabriel\'s International School | Account No: 0180293847561 | Nakuru Branch.',
          'Payment Policy: Fees must be paid on or before opening day. Cash payments are strictly prohibited on school premises.'
        ]
      }
    ]
  },
  'doc-admission-form': {
    id: 'doc-admission-form',
    title: 'Student Admission & Medical Declaration Form 2026/2027',
    category: 'Admissions & Enrollment',
    subtitle: 'Official application document for incoming Day Scholars and Boarding candidates across CBC and British streams.',
    fileName: 'St_Gabriel_Student_Admission_Enrollment_Form.pdf',
    sections: [
      {
        heading: '1. Candidate & Academic Curriculum Selection',
        bullets: [
          'Full Student Legal Name (as per Birth Certificate / Passport): ____________________________________________________',
          'Date of Birth: (DD/MM/YYYY): ____/____/________  |  Gender: [  ] Male   [  ] Female  |  Nationality: __________________',
          'Curriculum Applying For: [  ] Kenyan CBC System    [  ] British International System',
          'Grade / Level Applying For: ________________________  |  Attendance Mode: [  ] Day Scholar    [  ] Full Boarding'
        ]
      },
      {
        heading: '2. Parent / Legal Guardian Information',
        bullets: [
          'Father / Primary Guardian Name: _____________________________________ | Phone Number: +254 ___________________',
          'Mother / Secondary Guardian Name: ___________________________________ | Phone Number: +254 ___________________',
          'Official Email Address: _____________________________________________ | Residential Address: __________________',
          'Occupation / Employer: _______________________________________________ | Postal Address: ______________________'
        ]
      },
      {
        heading: '3. Medical History, Emergency Authorization & Declaration',
        bullets: [
          'Known Allergies / Chronic Conditions (Asthma, Food Allergies, Diabetes): _____________________________________________',
          'Emergency Contact Person (other than parent): ________________________ | Contact Phone: +254 ___________________',
          'Declaration: I certify that all details submitted are correct and agree to uphold all school regulations and Christian values.',
          'Parent / Guardian Signature: ________________________________________ | Date: ____ / ____ / 2026'
        ]
      }
    ]
  },
  'doc-boarding-checklist': {
    id: 'doc-boarding-checklist',
    title: 'Boarding Requirements & Code of Conduct Guide',
    category: 'Student Welfare & Hostels',
    subtitle: 'Mandatory packing guidelines, uniform standards, and community life regulations for residential scholars.',
    fileName: 'St_Gabriel_Boarding_Requirements_Code_of_Conduct.pdf',
    sections: [
      {
        heading: '1. Bedding & Personal Clothing Checklist (Must Be Clearly Labeled)',
        bullets: [
          'Bedding Items: 1 standard mattress cover (Navy Blue), 2 pairs of warm cotton bedsheets, 1 warm fleece blanket, 1 standard pillow.',
          'Casual Wear: 3 sets of smart-casual weekend clothes, 1 pair of comfortable leather walking shoes, 1 pair of sports sneakers.',
          'Nightwear & Hygiene: 2 pairs of warm pajamas, 1 bathrobe, 2 bath towels, personal hygiene kit (soap, toothbrush, shoe polish).',
          'Footwear: 1 pair of bathroom sandals/slippers, 2 pairs of official black leather school uniform shoes.'
        ]
      },
      {
        heading: '2. Academic Stationery & Personal Effects',
        bullets: [
          'Stationery Kit: Oxford Mathematical set, 30cm ruler, scientific calculator (Casio fx-82MS or equivalent for Grade 7+).',
          'Study Bible: Good News Bible / NIV Bible, English Dictionary (Oxford Advanced), Kamusi ya Karne ya 21.',
          'Prohibited Items: Smart phones, smart watches, heaters, kettles, non-prescribed medications, unauthorized food tucks.'
        ]
      },
      {
        heading: '3. Residential Code of Conduct & Hostels Routine',
        bullets: [
          'Hostel Schedule: Morning wake-up call at 5:30 AM; Evening supervised prep: 6:45 PM - 8:45 PM; Lights out at 9:30 PM.',
          'Visitation Days: Third Sunday of every month between 1:00 PM and 5:00 PM. No visitor allowed outside designated areas.',
          'Discipline Policy: Zero-tolerance policy on bullying, vandalism, substance abuse, and unpunctuality.'
        ]
      }
    ]
  },
  'doc-term-dates': {
    id: 'doc-term-dates',
    title: '2026 Academic Calendar & Term Dates Almanac',
    category: 'Academic Milestones',
    subtitle: 'Official schedule of term opening dates, mid-term breaks, assessment cycles, national exams, and school events.',
    fileName: 'St_Gabriel_Academic_Term_Dates_Calendar_2026.pdf',
    sections: [
      {
        heading: '1. Term 1 (January - April 2026)',
        bullets: [
          'Term Opening Dates: Monday, 5th January 2026 (Boarders arrive: Sunday, 4th January 2026 from 10:00 AM).',
          'Mid-Term Break: Wednesday, 18th February - Sunday, 22nd February 2026 (All scholars resume Monday, 23rd February).',
          'Annual Inter-House Sports Gala: Friday, 20th March 2026 (Parents and alumni warmly invited).',
          'Term 1 Closing & Report Card Release: Friday, 3rd April 2026.'
        ]
      },
      {
        heading: '2. Term 2 (May - August 2026)',
        bullets: [
          'Term Opening Dates: Monday, 4th May 2026 (Boarders report: Sunday, 3rd May 2026).',
          'Mid-Term Break: Wednesday, 17th June - Sunday, 21st June 2026.',
          'National Music Festival & Arts Week: 15th - 24th July 2026 (Featuring the Championship St Gabriel\'s Brass Band).',
          'Term 2 Closing & Academic Clinics: Friday, 7th August 2026.'
        ]
      },
      {
        heading: '3. Term 3 (September - November 2026)',
        bullets: [
          'Term Opening Dates: Monday, 31st August 2026 (Boarders report: Sunday, 30th August 2026).',
          'KPSEA & KJSEA National Exams: 26th October - 30th October 2026.',
          'British IGCSE & A-Level Series: October - November 2026.',
          'Graduation & Valedictory Service: Friday, 13th November 2026 | Official Year Closing: Friday, 20th November 2026.'
        ]
      }
    ]
  }
};

/**
 * Dynamically builds and triggers a verified PDF download in the browser.
 */
export async function generateAndDownloadPDF(docId: string): Promise<void> {
  const docDef = PDF_DEFINITIONS[docId];
  if (!docDef) return;

  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle(docDef.title);
  pdfDoc.setAuthor('St Gabriel\'s International School');
  pdfDoc.setSubject(docDef.category);

  const width = 595.28;
  const height = 841.89;

  const cNavy = rgb(11 / 255, 29 / 255, 51 / 255);
  const cGold = rgb(197 / 255, 155 / 255, 39 / 255);
  const cDark = rgb(25 / 255, 30 / 255, 40 / 255);
  const cMuted = rgb(100 / 255, 116 / 255, 139 / 255);
  const cLightBg = rgb(248 / 255, 249 / 255, 251 / 255);
  const cBorder = rgb(226 / 255, 232 / 255, 240 / 255);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const page = pdfDoc.addPage([width, height]);

  // Top Header Banner
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: cNavy,
  });

  // Gold Strip
  page.drawRectangle({
    x: 0,
    y: height - 6,
    width: width,
    height: 6,
    color: cGold,
  });

  page.drawText('St Gabriel\'s INTERNATIONAL SCHOOL', {
    x: 40,
    y: height - 40,
    size: 18,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('Lanet, Nakuru County, Kenya | P.O. Box 12345 - 20100 Nakuru | Tel: +254 724 694 554', {
    x: 40,
    y: height - 58,
    size: 9,
    font: fontRegular,
    color: rgb(220 / 255, 230 / 255, 242 / 255),
  });

  page.drawText('Dual Curriculum: Kenyan CBC (PP1 - Grade 12) & British (EYFS - A Levels)', {
    x: 40,
    y: height - 74,
    size: 8.5,
    font: fontOblique,
    color: cGold,
  });

  // Document Meta Tag Box
  page.drawRectangle({
    x: 40,
    y: height - 145,
    width: width - 80,
    height: 34,
    color: cLightBg,
    borderColor: cBorder,
    borderWidth: 1,
  });

  page.drawText(`CATEGORY: ${docDef.category.toUpperCase()} | ACADEMIC YEAR: 2026/2027 | STATUS: OFFICIAL PUBLICATION`, {
    x: 52,
    y: height - 132,
    size: 8.5,
    font: fontBold,
    color: cNavy,
  });

  // Main Document Heading
  page.drawText(docDef.title, {
    x: 40,
    y: height - 180,
    size: 14,
    font: fontBold,
    color: cNavy,
  });

  page.drawText(docDef.subtitle, {
    x: 40,
    y: height - 198,
    size: 9,
    font: fontRegular,
    color: cMuted,
  });

  // Divider
  page.drawLine({
    start: { x: 40, y: height - 210 },
    end: { x: width - 40, y: height - 210 },
    color: cGold,
    thickness: 1.5,
  });

  // Sections
  let currentY = height - 235;

  for (const sec of docDef.sections) {
    if (currentY < 120) break;

    page.drawRectangle({
      x: 40,
      y: currentY - 4,
      width: width - 80,
      height: 20,
      color: rgb(240 / 255, 244 / 255, 250 / 255),
    });

    page.drawText(sec.heading, {
      x: 48,
      y: currentY + 2,
      size: 10,
      font: fontBold,
      color: cNavy,
    });

    currentY -= 22;

    for (const bullet of sec.bullets) {
      if (currentY < 90) break;

      page.drawCircle({
        x: 48,
        y: currentY + 4,
        size: 2.5,
        color: cGold,
      });

      page.drawText(bullet, {
        x: 58,
        y: currentY,
        size: 8.5,
        font: fontRegular,
        color: cDark,
      });

      currentY -= 17;
    }

    currentY -= 10;
  }

  // Official Stamp / Footer
  page.drawRectangle({
    x: 40,
    y: 40,
    width: width - 80,
    height: 40,
    color: cNavy,
  });

  page.drawText('OFFICIAL SEAL & SIGNATURE: OFFICE OF THE REGISTRAR & BOARD OF MANAGEMENT', {
    x: 52,
    y: 62,
    size: 8,
    font: fontBold,
    color: cGold,
  });

  page.drawText('St Gabriel\'s International School | info@stgabrielinternational.sc.ke | https://stgabrielinternational.sc.ke', {
    x: 52,
    y: 48,
    size: 7.5,
    font: fontRegular,
    color: rgb(200 / 255, 215 / 255, 235 / 255),
  });

  const pdfBytes = await pdfDoc.save({ useObjectStreams: false });
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const blobUrl = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = docDef.fileName;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    if (document.body.contains(link)) {
      document.body.removeChild(link);
    }
    window.URL.revokeObjectURL(blobUrl);
  }, 1000);
}

/**
 * Generates and opens a PDF document in a new tab for preview.
 */
export async function openPDFPreview(docId: string): Promise<void> {
  const docDef = PDF_DEFINITIONS[docId];
  if (!docDef) return;

  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle(docDef.title);
  pdfDoc.setAuthor('St Gabriel\'s International School');
  pdfDoc.setSubject(docDef.category);

  const width = 595.28;
  const height = 841.89;

  const cNavy = rgb(11 / 255, 29 / 255, 51 / 255);
  const cGold = rgb(197 / 255, 155 / 255, 39 / 255);
  const cDark = rgb(25 / 255, 30 / 255, 40 / 255);
  const cMuted = rgb(100 / 255, 116 / 255, 139 / 255);
  const cLightBg = rgb(248 / 255, 249 / 255, 251 / 255);
  const cBorder = rgb(226 / 255, 232 / 255, 240 / 255);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const page = pdfDoc.addPage([width, height]);

  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: cNavy,
  });

  page.drawRectangle({
    x: 0,
    y: height - 6,
    width: width,
    height: 6,
    color: cGold,
  });

  page.drawText('St Gabriel\'s INTERNATIONAL SCHOOL', {
    x: 40,
    y: height - 40,
    size: 18,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('Lanet, Nakuru County, Kenya | P.O. Box 12345 - 20100 Nakuru | Tel: +254 724 694 554', {
    x: 40,
    y: height - 58,
    size: 9,
    font: fontRegular,
    color: rgb(220 / 255, 230 / 255, 242 / 255),
  });

  page.drawText('Dual Curriculum: Kenyan CBC (PP1 - Grade 12) & British (EYFS - A Levels)', {
    x: 40,
    y: height - 74,
    size: 8.5,
    font: fontOblique,
    color: cGold,
  });

  page.drawRectangle({
    x: 40,
    y: height - 145,
    width: width - 80,
    height: 34,
    color: cLightBg,
    borderColor: cBorder,
    borderWidth: 1,
  });

  page.drawText(`CATEGORY: ${docDef.category.toUpperCase()} | ACADEMIC YEAR: 2026/2027 | STATUS: OFFICIAL PUBLICATION`, {
    x: 52,
    y: height - 132,
    size: 8.5,
    font: fontBold,
    color: cNavy,
  });

  page.drawText(docDef.title, {
    x: 40,
    y: height - 180,
    size: 14,
    font: fontBold,
    color: cNavy,
  });

  page.drawText(docDef.subtitle, {
    x: 40,
    y: height - 198,
    size: 9,
    font: fontRegular,
    color: cMuted,
  });

  page.drawLine({
    start: { x: 40, y: height - 210 },
    end: { x: width - 40, y: height - 210 },
    color: cGold,
    thickness: 1.5,
  });

  let currentY = height - 235;

  for (const sec of docDef.sections) {
    if (currentY < 120) break;

    page.drawRectangle({
      x: 40,
      y: currentY - 4,
      width: width - 80,
      height: 20,
      color: rgb(240 / 255, 244 / 255, 250 / 255),
    });

    page.drawText(sec.heading, {
      x: 48,
      y: currentY + 2,
      size: 10,
      font: fontBold,
      color: cNavy,
    });

    currentY -= 22;

    for (const bullet of sec.bullets) {
      if (currentY < 90) break;

      page.drawCircle({
        x: 48,
        y: currentY + 4,
        size: 2.5,
        color: cGold,
      });

      page.drawText(bullet, {
        x: 58,
        y: currentY,
        size: 8.5,
        font: fontRegular,
        color: cDark,
      });

      currentY -= 17;
    }

    currentY -= 10;
  }

  page.drawRectangle({
    x: 40,
    y: 40,
    width: width - 80,
    height: 40,
    color: cNavy,
  });

  page.drawText('OFFICIAL SEAL & SIGNATURE: OFFICE OF THE REGISTRAR & BOARD OF MANAGEMENT', {
    x: 52,
    y: 62,
    size: 8,
    font: fontBold,
    color: cGold,
  });

  page.drawText('St Gabriel\'s International School | info@stgabrielinternational.sc.ke | https://stgabrielinternational.sc.ke', {
    x: 52,
    y: 48,
    size: 7.5,
    font: fontRegular,
    color: rgb(200 / 255, 215 / 255, 235 / 255),
  });

  const pdfBytes = await pdfDoc.save({ useObjectStreams: false });
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const blobUrl = window.URL.createObjectURL(blob);
  window.open(blobUrl, '_blank');
}