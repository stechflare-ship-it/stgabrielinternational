import React from 'react';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';

export default function StudentLife(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO title="Student Life & Co-Curricular Activities | St. Gabriel Nakuru" description="Student life at St. Gabriel — sports, music, drama, leadership and clubs that develop character and creativity." />

      <header className="mb-6">
        <h1 className="text-3xl font-bold">Student Life at St. Gabriel</h1>
        <p className="mt-2 text-gray-600">At St. Gabriel we believe education extends beyond the classroom. Our co-curricular programme builds resilience, teamwork, creativity and leadership alongside strong academics.</p>
      </header>

      <section aria-labelledby="programs-heading" className="mt-6">
        <h2 id="programs-heading" className="text-2xl font-semibold">Programmes & Activities</h2>
        <p className="mt-2 text-gray-600">We offer a balanced programme designed to give every child opportunities to explore interests and develop new skills.</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg">Sports</h3>
            <p className="mt-2 text-gray-600">Team and individual sports promote fitness, fair play and leadership. Regular inter-school fixtures and in-house competitions give students a chance to excel.</p>
            <ul className="mt-3 list-disc ml-5 text-sm text-gray-700">
              <li>Inter-house competitions</li>
              <li>Coaching and regular fixtures</li>
              <li>Focus on teamwork and sportsmanship</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg">Music & Drama</h3>
            <p className="mt-2 text-gray-600">Creative arts provide a platform for expression and performance. Choirs, ensembles, and drama productions are regular features of school life.</p>
            <ul className="mt-3 list-disc ml-5 text-sm text-gray-700">
              <li>Choir and ensemble opportunities</li>
              <li>Annual drama and music showcases</li>
              <li>Instrumental tuition (where available)</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg">Clubs & Leadership</h3>
            <p className="mt-2 text-gray-600">A broad selection of clubs encourages curiosity and leadership. Student Council and leadership roles help pupils gain responsibility and voice.</p>
            <ul className="mt-3 list-disc ml-5 text-sm text-gray-700">
              <li>Academic clubs (STEM, Debating, Reading)</li>
              <li>Service and community initiatives</li>
              <li>Student leadership and peer mentoring</li>
            </ul>
          </article>
        </div>
      </section>

      <section aria-labelledby="pastoral-heading" className="mt-10">
        <h2 id="pastoral-heading" className="text-2xl font-semibold">Pastoral Care & Wellbeing</h2>
        <p className="mt-2 text-gray-600">Student wellbeing is central to our approach. Our pastoral system ensures every child is known, supported and guided through their learning journey.</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Support Systems</h3>
            <p className="mt-2 text-gray-600">Teachers, house staff and pastoral leads work together to support learning, behaviour and emotional wellbeing. Regular check-ins and counselling support are available when needed.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">Safeguarding</h3>
            <p className="mt-2 text-gray-600">Safeguarding and student protection are fundamental. We maintain clear policies and trained staff to ensure a safe environment for all pupils.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="weekly-heading" className="mt-10">
        <h2 id="weekly-heading" className="text-2xl font-semibold">A Typical Week</h2>
        <p className="mt-2 text-gray-600">Our timetable balances curriculum lessons with enrichment activities and supervised study time.</p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left bg-white rounded shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-sm">Time</th>
                <th className="px-4 py-2 text-sm">Activity</th>
                <th className="px-4 py-2 text-sm">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-sm">08:00 – 10:00</td>
                <td className="px-4 py-2 text-sm">Morning lessons</td>
                <td className="px-4 py-2 text-sm">Core curriculum</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 text-sm">10:30 – 12:30</td>
                <td className="px-4 py-2 text-sm">Practical sessions / Labs</td>
                <td className="px-4 py-2 text-sm">Science, ICT, Art</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-sm">14:00 – 16:00</td>
                <td className="px-4 py-2 text-sm">Clubs and sports</td>
                <td className="px-4 py-2 text-sm">Enrichment activities</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="howto-heading" className="mt-10">
        <h2 id="howto-heading" className="text-2xl font-semibold">How to Get Involved</h2>
        <p className="mt-2 text-gray-600">Parents are encouraged to talk with their child and the school to identify suitable activities. Many clubs run termly and some require sign-up at the start of term.</p>

        <div className="mt-4 flex gap-3">
          <Link to="/admissions" className="inline-block bg-blue-900 text-white px-4 py-2 rounded">Contact Admissions</Link>
          <Link to="/student-life" className="inline-block border border-blue-900 text-blue-900 px-4 py-2 rounded">View Clubs & Timetable</Link>
        </div>
      </section>

      <section aria-labelledby="gallery-heading" className="mt-12">
        <h2 id="gallery-heading" className="text-2xl font-semibold">Student Life Gallery</h2>
        <p className="mt-2 text-gray-600">Browse photos from sports days, performances and clubs. Replace placeholders with official photos when available.</p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({length:8}).map((_,i)=> (
            <div key={i} className="h-32 bg-gray-100 rounded-lg overflow-hidden" role="img" aria-label={`Student life image ${i+1}`}></div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Contact & Next Steps</h2>
        <p className="mt-2 text-gray-600">To enquire about clubs, sports or boarding activities, please contact Admissions or use the contact form on the <Link to="/contact" className="text-blue-800">Contact</Link> page.</p>
      </section>

    </div>
  );
}
