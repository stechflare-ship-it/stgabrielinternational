import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import { BLOG_POSTS } from '../data/blogPosts';
import { SITE_CONFIG } from '../data/navigationData';

export default function Home(){
  return (
    <div className="bg-gray-50">
      <SEO
        title="St. Gabriel International School | International & British Curriculum School in Nakuru"
        description="Discover St. Gabriel International School in Lanet, Nakuru — an international school offering British Curriculum education, academic excellence, holistic development, co-curricular opportunities and day and boarding education for boys and girls."
      />

      {/* Cinematic hero - uses placeholders if no real files provided */}
      <Hero videoSrc="/hero.mp4" posterSrc="/hero-poster.jpg" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome */}
        <section className="mt-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900">St. Gabriel International School</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">An inspiring international education in Lanet, Nakuru, nurturing academic excellence, character, creativity, leadership and global opportunities.</p>

          <div className="mt-6 flex justify-center gap-3">
            <Link to="/admissions" className="inline-block bg-amber-400 text-blue-900 px-5 py-3 rounded-md font-semibold shadow-md hover:bg-amber-300">ENROLL NOW</Link>
            <Link to="/academics" className="inline-block border border-blue-900 text-blue-900 px-5 py-3 rounded-md font-medium hover:bg-blue-50">EXPLORE OUR CURRICULUM</Link>
            <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-md border border-transparent text-white bg-emerald-600 hover:bg-emerald-700">Contact Admissions</a>
          </div>
        </section>

        {/* Why Choose - 4 pillars */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-blue-900">Why Choose St. Gabriel</h2>
          <p className="mt-2 text-gray-600">A modern international school offering a balanced British curriculum, strong pastoral care and an emphasis on character and leadership.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-blue-900">British Curriculum</h3>
              <p className="mt-2 text-sm text-gray-600">Structured progression from EYFS to A-Level with IGCSE and international standards.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-blue-900">Academic Excellence</h3>
              <p className="mt-2 text-sm text-gray-600">High expectations, dedicated teachers and an environment that fosters inquiry and critical thinking.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-blue-900">Holistic Development</h3>
              <p className="mt-2 text-sm text-gray-600">Balanced focus on sports, music, drama, leadership and character development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-blue-900">Day & Boarding</h3>
              <p className="mt-2 text-sm text-gray-600">Flexible arrangements for families — day places and separate boys’ & girls’ boarding (locations approx. 4 km apart).</p>
            </div>
          </div>
        </section>

        {/* Curriculum Journey */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-blue-900">Our Curriculum Journey</h2>
          <p className="mt-2 text-gray-600">A clear progression that supports each stage of learning and prepares students for international pathways.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
            {/* Stages */}
            <div className="md:col-span-5">
              <ol className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">EYFS</div>
                  <div>
                    <h4 className="font-semibold">EYFS (Playgroup → Reception)</h4>
                    <p className="text-sm text-gray-600">Play, exploration and early literacy and numeracy; focus on discovery and independent learning.</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">Primary</div>
                  <div>
                    <h4 className="font-semibold">Primary (Years 1–6)</h4>
                    <p className="text-sm text-gray-600">Strong foundation in English, Maths, Science, Computing, Art, Music and PE.</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">Lower Secondary</div>
                  <div>
                    <h4 className="font-semibold">Lower Secondary (Years 7–9)</h4>
                    <p className="text-sm text-gray-600">Develop independence, research skills, critical thinking and practical learning.</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">IGCSE</div>
                  <div>
                    <h4 className="font-semibold">IGCSE (Years 10–11)</h4>
                    <p className="text-sm text-gray-600">Academic rigour, independent research and international examination preparation.</p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">A-Level</div>
                  <div>
                    <h4 className="font-semibold">A-Level (Years 12–13)</h4>
                    <p className="text-sm text-gray-600">Subject specialisation and university preparation for international progression.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Academic + Co-Curricular signature */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Where Academic Excellence Meets Holistic Development</h2>
              <p className="mt-2 text-gray-600 max-w-2xl">At St. Gabriel we balance strong academic programmes with Sports, Music, Drama, Leadership and Technology so learners develop intellectually, socially and creatively.</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 border rounded">
                  <h4 className="font-semibold">Academics</h4>
                  <p className="text-sm text-gray-600">Rigorous curriculum, dedicated staff and assessment for learning.</p>
                </div>
                <div className="p-3 border rounded">
                  <h4 className="font-semibold">Co-Curricular</h4>
                  <p className="text-sm text-gray-600">Sports, Music, Drama, Clubs and Leadership opportunities for every child.</p>
                </div>
                <div className="p-3 border rounded">
                  <h4 className="font-semibold">Technology & Innovation</h4>
                  <p className="text-sm text-gray-600">Computing and practical STEM activities integrated across the curriculum.</p>
                </div>
                <div className="p-3 border rounded">
                  <h4 className="font-semibold">Pastoral Care</h4>
                  <p className="text-sm text-gray-600">Strong support systems to nurture character and wellbeing.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:ml-10">
              {/* visual stats or image placeholder */}
              <div className="w-64 h-40 bg-blue-100 rounded-md flex items-center justify-center text-blue-900 font-semibold">Excellence Beyond The Classroom</div>
            </div>
          </div>
        </section>

        {/* Boarding & Day */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-900">Day School</h3>
            <p className="mt-2 text-gray-600">A strong day school option for local families with a broad curriculum and clubs that run before and after school.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-900">Boarding</h3>
            <p className="mt-2 text-gray-600">Separate boarding arrangements are available for boys and girls. The boarding locations are approximately 4 km apart and provide safe residential learning environments.</p>
          </div>
        </section>

        {/* Admissions & Fees preview */}
        <section className="mt-16 md:flex md:gap-6">
          <div className="md:flex-1 bg-amber-50 p-6 rounded">
            <h3 className="text-xl font-semibold">Admissions</h3>
            <p className="mt-2 text-gray-700">Ready to enquire? Contact our admissions team to arrange a visit and learn about entry requirements.</p>
            <div className="mt-4">
              <Link to="/admissions" className="inline-block bg-blue-900 text-white px-4 py-2 rounded">Contact Admissions</Link>
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:w-1/3 bg-white p-6 rounded shadow">
            <h4 className="font-semibold">Fees Preview</h4>
            <p className="mt-2 text-gray-600">Get an overview of our boarding and other charges. Full breakdown available on the Fees & Requirements page.</p>
            <div className="mt-3">
              <Link to="/fees-and-requirements" className="text-blue-800 underline">View fees & requirements</Link>
            </div>
          </div>
        </section>

        {/* Gallery teaser */}
        <section className="mt-16">
          <h3 className="text-xl font-semibold">Gallery</h3>
          <p className="mt-2 text-gray-600">A glimpse of campus life, teaching and co-curricular activities.</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* placeholders - replace with real images */}
            {Array.from({length:4}).map((_,i)=> (
              <div key={i} className="h-40 bg-gray-100 rounded-lg overflow-hidden"></div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/gallery" className="text-blue-800">View full gallery</Link>
          </div>
        </section>

        {/* News & Blog teaser */}
        <section className="mt-16">
          <h3 className="text-xl font-semibold">News & Events</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {BLOG_POSTS.slice(0,3).map(post => (
              <article key={post.slug} className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold"><Link to={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link></h4>
                <p className="text-xs text-gray-500">{post.date}</p>
                <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-3 inline-block text-blue-800">Read more</Link>
              </article>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/blog" className="text-blue-800">View all news</Link>
          </div>
        </section>

        {/* Contact preview */}
        <section className="mt-16 bg-white p-6 rounded shadow mb-12">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Contact & Visit</h3>
              <p className="mt-2 text-gray-600">St. Gabriel International School, Lanet, Nakuru County. For enquiries call <a href={SITE_CONFIG.primaryPhoneTel} className="text-blue-800">{SITE_CONFIG.primaryPhoneDisplay}</a> or <a href={SITE_CONFIG.enquiryPhoneTel} className="text-blue-800">{SITE_CONFIG.enquiryPhoneDisplay}</a>.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href={SITE_CONFIG.whatsapp} target="_blank" rel="noreferrer" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded">Chat on WhatsApp</a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
