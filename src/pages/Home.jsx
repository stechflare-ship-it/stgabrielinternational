import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import { BLOG_POSTS } from '../data/blogPosts';

export default function Home(){
  return (
    <div>
      <SEO title="St. Gabriel International School | International & British Curriculum School in Nakuru" description="Discover St. Gabriel International School in Lanet, Nakuru — an international school offering British Curriculum education, academic excellence, holistic development and day and boarding education for boys and girls." />

      <Hero videoSrc="/hero.mp4" posterSrc="/hero-poster.jpg" />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-semibold">Welcome to St. Gabriel</h2>
          <p className="mt-2 text-gray-600">An inspiring international education in Lanet, Nakuru, nurturing academic excellence, character, creativity, leadership and global opportunities.</p>
        </section>

        <section className="mt-10">
          <h3 className="text-xl font-semibold">Latest News & Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {BLOG_POSTS.slice(0,3).map(post => (
              <article key={post.slug} className="bg-white p-4 rounded shadow">
                <h4 className="font-semibold"><Link to={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link></h4>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-3 inline-block text-blue-800">Read more</Link>
              </article>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/blog" className="text-sm text-blue-800">View all blog posts</Link>
          </div>
        </section>

      </main>
    </div>
  );
}
