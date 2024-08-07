import React from 'react';
import BlogPostCard from '../components/BlogPostCard';

function Homepage() {
  // Sample data, replace with real data or fetch from an API
  const blogPosts = [
    {
      title: 'How to Design Beautiful Interfaces',
      excerpt: 'Learn the principles of designing beautiful and user-friendly interfaces...',
      image: 'path/to/image.jpg',
      link: '/post/1',
    },
    {
      title: 'Understanding CSS Flexbox',
      excerpt: 'An in-depth guide to CSS Flexbox and how it can improve your layouts...',
      image: 'path/to/image.jpg',
      link: '/post/2',
    },
    {
      title: 'Understanding CSS Flexbox',
      excerpt: 'An in-depth guide to CSS Flexbox and how it can improve your layouts...',
      image: 'path/to/image.jpg',
      link: '/post/2',
    },
    // Add more blog posts here
  ];

  return (
    <main className="container mx-auto my-20 border-t">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            link={post.link}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            link={post.link}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            link={post.link}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            link={post.link}
          />
        ))}
      </section>
    </main>
  );
}

export default Homepage;
