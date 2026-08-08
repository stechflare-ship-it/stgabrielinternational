import { SITE_CONFIG } from '../../data/navigationData';
import backgroundleadership from '../../assets/images/leadership/backgroundleadership.webp';
// Staff photos — swap these paths for your optimized /assets/images/optimized/* files
import arthurImg from '../../assets/images/leadership/peter.webp';
import sarahImg from '../../assets/images/leadership/sarah.webp';
import maryClaireImg from '../../assets/images/leadership/grace.webp';
// -------------------------------------------------------------------------
// CATEGORIES
// Order here drives tab order. `id: 'all'` is always injected first by the
// component, so it does not need to be listed here.
// -------------------------------------------------------------------------
export const STAFF_CATEGORIES = Object.freeze([
  { id: 'leadership', label: 'Leadership' },
  { id: 'early-years', label: 'Early Years' },
  { id: 'primary', label: 'Primary' },
  { id: 'secondary', label: 'Secondary' },
  { id: 'stem-ict', label: 'STEM & ICT' },
  { id: 'sports-arts', label: 'Sports & Arts' },
]);

// -------------------------------------------------------------------------
// HERO
// -------------------------------------------------------------------------
export const STAFF_HERO = Object.freeze({
  eyebrow: 'EXPERT FACULTY & LEADERSHIP',
  title: 'Staff Directory',
  subtitle:
    `Meet the experienced, dedicated educators and administrators inspiring excellence at ${SITE_CONFIG.name}.`,
  backgroundImage: backgroundleadership,
});

// -------------------------------------------------------------------------
// STAFF MEMBERS
// Each entry only needs an `image` if a real photo exists — the card
// gracefully falls back to initials, so this scales cleanly to hundreds
// of staff without breaking the layout or hurting performance.
// -------------------------------------------------------------------------
export const STAFF_MEMBERS = Object.freeze([
  {
    id: 'arth-vance',
    name: 'Dr. Arthur M. Vance',
    role: 'Headteacher / Executive Principal',
    category: 'leadership',
    image: arthurImg,
    bio: 'Over 22 years of educational leadership experience in international schools across Europe, East Africa, and North America. Dedicated to holistic discipline, moral integrity, and academic rigor.',
    credentials: 'Ph.D. in Educational Leadership (Oxford), M.Ed. (Harvard)',
    experience: '22+ years in international education leadership, Ph.D. Educational Leadership (Oxford), M.Ed. (Harvard)',
    phone: '0724694554',
    email: 'stgabrielmissionsecsch@gmail.com',
  },
  {
    id: 'sarah-jenkins',
    name: 'Mrs. Sarah Jenkins',
    role: 'Vice Principal (Academic Standards)',
    category: 'leadership',
    image: sarahImg,
    bio: 'Passionate curriculum developer ensuring seamless alignment with international standards, critical inquiry, and learner-centered pedagogy.',
    credentials: 'M.A. in International Education, B.Sc. Mathematics',
    experience: 'M.A. in International Education, B.Sc. Mathematics, Curriculum alignment specialist',
    phone: '0724694554',
    email: 'stgabrielmissionsecsch@gmail.com',
  },
  {
    id: 'mary-claire',
    name: 'Mrs Mary Claire',
    role: 'Head of Student Welfare & Pastoral Care',
    category: 'primary',
    image: maryClaireImg,
    bio: "Guiding the moral development, spiritual wellbeing, counseling, and community outreach programs at St. Gabriel's Mission.",
    credentials: 'M.A. Counseling Psychology, B.A. Philosophy',
    experience: 'M.A. Counseling Psychology, B.A. Philosophy, 15+ years in pastoral care',
    phone: '0724694554',
    email: 'stgabrielmissionsecsch@gmail.com',
  },

  // Add Early Years / Primary / Secondary / STEM & ICT / Sports & Arts
  
]);
