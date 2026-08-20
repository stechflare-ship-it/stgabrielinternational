import React, { useState } from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { BookOpen, Calendar, User, ArrowRight, Search, Tag, Clock, Share2, Sparkles, X } from 'lucide-react';
import { Button } from '../components/Button';


import cambridgeIgce from '../assets/images/blogs/cambridgeIgce.webp';
import boardingLife from '../assets/images/blogs/boardingLife.webp';
import efsplayground from '../assets/images/blogs/efsplayground.webp';
import coding from '../assets/images/blogs/coding.webp';
import bassBrand from '../assets/images/blogs/bassBand.webp';

const cambridge = cambridgeImg;
const boardingLife = boardingLifeImg;
const playgroup = playgroupImg;
const robotics = roboticsImg;
const musicBand = musicBandImg;

interface BlogPost {
  id: string;
  title: string;
  category: 'Academic Excellence' | 'Boarding Life' | 'STEM & Innovation' | 'Co-Curricular' | 'Parent Guide';
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  image: string;
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Navigating the Cambridge IGCSE & A-Level Curriculum: A Parent Guide',
    category: 'Academic Excellence',
    date: 'August 4, 2026',
    readTime: '5 min read',
    author: 'Academic Directorate',
    summary: 'Discover how the British International curriculum equips scholars with global analytical skills, Cambridge examination mastery, and pathways to elite global universities.',
    content: [
      'The Cambridge Assessment International Education (CAIE) curriculum is recognized worldwide for its rigor, conceptual depth, and focus on practical problem-solving. At St. Gabriel International School in Lanet, Nakuru, we offer a seamless educational pathway from EYFS through A-Level.',
      'Key advantages of the Cambridge curriculum include:',
      '1. Global Recognition: Cambridge IGCSE and A-Level qualifications are accepted by top universities across the UK, USA, Canada, Australia, and Africa.',
      '2. Critical Thinking & Application: Students are evaluated not merely on memory recall, but on their capacity to synthesize complex information, construct argument structures, and solve real-world problems.',
      '3. Subject Specialization: At A-Level, learners tailor their academic trajectory toward their career aspirations in Medicine, Engineering, Computer Science, Law, and International Business.',
      'Our dedicated faculty provides continuous pastoral support and examination preparation, ensuring every candidate enters test series with confidence and intellectual discipline.'
    ],
    image: cambridgeIgce,
    tags: ['Cambridge', 'IGCSE', 'A-Level', 'Academic Excellence']
  },
  {
    id: 'blog-2',
    title: 'How Boarding Life Fosters Independence and Resilience in Young Scholars',
    category: 'Boarding Life',
    date: 'July 28, 2026',
    readTime: '4 min read',
    author: 'Pastoral Care Team',
    summary: 'Our structured separate boys and girls boarding facilities in Lanet provide a safe, home-away-from-home environment that nurtures self-reliance and lifelong friendships.',
    content: [
      'Transitioning to boarding school is a monumental milestone in a young scholar’s journey. At St. Gabriel International School, our separate 4km boys and girls compounds ensure privacy, safety, and focused personal growth.',
      'Structured routines—from morning devotionals and nutritious balanced meals to supervised evening prep and weekend recreation—instill time management skills that serve scholars for a lifetime.',
      'House parents and residential matrons maintain a warm, family-like atmosphere where emotional welfare and peer mentorship go hand-in-hand.',
      'Through shared responsibilities, dorm cleanup challenges, and weekend coffee house talent evenings, boarders develop emotional resilience, empathetic leadership, and enduring brotherhood and sisterhood.'
    ],
    image: boardingLife,
    tags: ['Boarding', 'Pastoral Care', 'Student Welfare', 'Character']
  },
  {
    id: 'blog-3',
    title: 'Integrating Robotics, Coding, and Environmental Science in Primary Education',
    category: 'STEM & Innovation',
    date: 'July 15, 2026',
    readTime: '6 min read',
    author: 'STEM & Computing Faculty',
    summary: 'In an increasingly digital world, early exposure to computer programming, 3D logic, and eco-robotics prepares learners for the technological careers of tomorrow.',
    content: [
      'Technology literacy is no longer an optional co-curricular activity—it is a fundamental building block of modern education.',
      'In St. Gabriel’s ICT laboratories, primary and lower secondary learners engage with block-based coding, Python basics, and environmental robotics kits.',
      'By linking STEM projects to ecological challenges in Nakuru County, students learn how software engineering and clean technology can address real community issues.',
      'Hands-on computational thinking builds confidence, spatial awareness, and creative problem-solving skills across all academic subjects.'
    ],
    image: coding,
    tags: ['STEM', 'Robotics', 'ICT', 'Future Skills']
  },
  {
    id: 'blog-4',
    title: 'The Power of Co-Curricular Excellence: From Brass Bands to Athletics Academies',
    category: 'Co-Curricular',
    date: 'June 30, 2026',
    readTime: '5 min read',
    author: 'Co-Curricular Coordinator',
    summary: 'Explore how music, sports, journalism, and drama societies complement classroom academics to build confident, articulate leaders.',
    content: [
      'Education reaches far beyond textbooks and examinations. Our 30+ co-curricular societies provide a platform for every scholar to discover and refine their talents.',
      'Our brass band orchestra teaches rhythmic discipline and ensemble harmony, while competitive athletic leagues in soccer, basketball, swimming, and track foster sportsmanship and perseverance.',
      'Participation in journalism, drama, and debating clubs enhances verbal clarity and public speaking skills, empowering students to articulate their thoughts eloquently on international stages.'
    ],
    image: bassBand,
    tags: ['Co-Curricular', 'Music', 'Sports', 'Leadership']
  },
  {
    id: 'blog-5',
    title: 'Preparing Your Child for EYFS Playgroup and Reception: Practical Tips',
    category: 'Parent Guide',
    date: 'June 12, 2026',
    readTime: '4 min read',
    author: 'EYFS Early Years Lead',
    summary: 'A warm, practical guide for parents preparing their young ones for play-based learning and early literacy at St. Gabriel International School.',
    content: [
      'The Early Years Foundation Stage (EYFS) sets the foundation for a child’s lifelong love for discovery. Transitioning into playgroup or reception is an exciting adventure.',
      'To ensure a seamless transition:',
      '1. Establish predictable morning and sleep routines at home.',
      '2. Encourage independence in self-dressing and hand hygiene.',
      '3. Read together daily to build vocabulary and imaginative curiosity.',
      'Our EYFS classrooms are designed as vibrant learning sanctuaries where trained early childhood educators nurture emotional security, communication skills, and sensory exploration.'
    ],
    image: efsplayground,
    tags: ['EYFS', 'Early Years', 'Parenting', 'Primary']
  }
];

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Academic Excellence', 'Boarding Life', 'STEM & Innovation', 'Co-Curricular', 'Parent Guide'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="School Blog, Educational Insights & Parent Guides | St. Gabriel Nakuru"
        description="Read articles, parent guides, Cambridge curriculum advice, boarding insights, and STEM updates from St. Gabriel International School in Lanet, Nakuru."
        keywords="school blog nakuru, cambridge parenting guide, cbc education articles, boarding preparation tips, stem learning nakuru, st gabriel articles"
        canonicalPath="/blog"
        ogType="website"
        ogTitle="Educational Insights & Campus Stories · St. Gabriel Nakuru"
        ogDescription="Thought leadership on dual-curriculum excellence, holistic parenting, early childhood development, and modern STEM education."
        breadcrumbs={[{ name: 'Blog & Articles', path: '/blog' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'St. Gabriel International School Educational Blog',
          description: 'Parent guides, academic advice, and insights from faculty and educators.',
          blogPost: BLOG_POSTS.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.summary,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author
            },
            keywords: post.tags.join(', ')
          }))
        }}
      />

      <Breadcrumbs items={[{ label: 'Blog & Educational Insights', path: '/blog' }]} />

      {/* Header Banner */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={cambridgeIgce}
            alt="St. Gabriel Educational Insights & Articles"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Educational Insights & Campus Stories</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            St. Gabriel Blog & Parent Resources
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Expert articles on British curriculum pathways, boarding welfare, STEM innovation, and holistic child development in Lanet, Nakuru.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Category Controls */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, keywords, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-[#F8F9FB]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#0B1D33] text-[#E0BA43] shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Thumbnail */}
                  <div >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0B1D33]/90 text-[#E0BA43] text-[10px] font-extrabold uppercase border border-[#C59B27]/40 shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="font-serif font-bold text-lg text-[#0B1D33] leading-snug group-hover:text-[#C59B27] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-[10px] font-semibold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium">By {post.author}</span>
                  <button
                    onClick={() => setActivePost(post)}
                    className="px-4 py-2 rounded-xl bg-[#0B1D33] hover:bg-[#C59B27] hover:text-[#0B1D33] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-[#0B1D33]">No Articles Found</h3>
            <p className="text-xs text-gray-500">
              Try adjusting your search query or selecting a different category filter above.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#0B1D33] text-[#E0BA43] text-xs font-bold hover:bg-[#C59B27] hover:text-[#0B1D33] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Article Detail Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 text-gray-900 relative">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0B1D33] text-white hover:bg-[#C59B27] hover:text-[#0B1D33] transition-all shadow-md z-10"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-[#0B1D33]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-extrabold uppercase">
                  {activePost.category}
                </span>
                <h2 className="font-serif font-extrabold text-xl sm:text-3xl text-white">
                  {activePost.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-300">
                  <span>By {activePost.author}</span>
                  <span>•</span>
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.readTime}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-sm text-gray-700 leading-relaxed">
              <p className="text-base font-semibold text-[#0B1D33] border-l-4 border-[#C59B27] pl-4 italic bg-[#F8F9FB] py-3 rounded-r-xl">
                {activePost.summary}
              </p>

              <div className="space-y-4">
                {activePost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {activePost.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: activePost.title,
                        text: activePost.summary,
                        url: window.location.href,
                      });
                    } else {
                      alert('Article link copied to clipboard!');
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-[#0B1D33] flex items-center gap-1.5 transition-all"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
