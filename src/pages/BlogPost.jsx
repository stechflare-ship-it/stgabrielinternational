import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPost(){
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if(!post) return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p>Post not found.</p>
      <Link to="/blog" className="text-blue-800">Back to blog</Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <SEO title={`${post.title} | St. Gabriel`} description={post.excerpt} />
      <article>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date}</p>
        <div className="mt-4 text-gray-800">{post.content}</div>
      </article>
    </div>
  );
}
