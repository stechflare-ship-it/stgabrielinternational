import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { BLOG_POSTS } from '../data/blogPosts';

export default function Blog(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SEO title="News & Blog | St. Gabriel International School" description="News and updates from St. Gabriel International School in Lanet, Nakuru." />

      <h1 className="text-2xl font-bold">News & Blog</h1>
      <p className="mt-2 text-gray-600">Latest updates and announcements.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {BLOG_POSTS.map(post => (
          <article key={post.slug} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold"><Link to={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link></h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="mt-3 inline-block text-blue-800">Read more</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
