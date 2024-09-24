import React, { useState } from 'react';
import BlogPostCard from '../components/BlogPostCard';

function Homepage() {
  // Real content data
  const blogPosts = [
    {
      title: 'Getting Started in Tech',
      excerpt: 'A comprehensive guide for beginners looking to dive into the tech industry...',
      image: './img/technology.jpg',
      link: '/post/1',
    },
    {
      title: 'Beginner Website Development',
      excerpt: 'Learn the basics of building your first website from scratch...',
      image: './img/web-dev.jpg',
      link: '/post/2',
    },
    {
      title: 'Responsive Designs',
      excerpt: 'Master the art of creating responsive designs that work on all devices...',
      image: './img/responsive.jpg',
      link: '/post/3',
    },
    {
      title: 'Understanding CSS Flexbox',
      excerpt: 'An in-depth guide to CSS Flexbox and how it can improve your layouts...',
      image: './img/flexbox.jpg',
      link: '/post/4',
    },
    {
      title: 'Mastering JavaScript Promises',
      excerpt: 'Deep dive into JavaScript promises and how to use them effectively...',
      image: './img/javascript.jpg',
      link: '/post/5',
    },
    {
      title: 'Learning React Basics',
      excerpt: 'Everything you need to know to start building React applications...',
      image: './img/reactjs.jpg',
      link: '/post/6',
    },
    {
      title: 'How to Design Beautiful Interfaces',
      excerpt: 'Everything you need to know to start building beautiful interfaces...',
      image: './img/ui.jpg',
      link: '/post/7',
    },

  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Logic for displaying featured posts (first 3 posts)
  const featuredPosts = blogPosts.slice(0, 3);

  // Logic for displaying current posts (paginated)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 sans">
      <section className="border-b pb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Featured Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">All Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
      </section>

      {/* Pagination controls */}
      <section className="flex justify-center mt-8">
        <nav>
          <ul className="flex list-none">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className="mx-1">
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-gray-200'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default Homepage;
