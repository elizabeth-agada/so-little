import React from 'react';

function SinglePostPage() {
  // Sample data, replace with real data or fetch from an API
  const post = {
    title: 'How to Design Beautiful Interfaces',
    content: 'Full content of the blog post goes here...',
    image: 'path/to/image.jpg',
  };

  return (
    <main className="container mx-auto my-8">
      <article className="bg-white p-4 rounded-lg shadow-lg">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-700">
          {post.content}
        </div>
      </article>
    </main>
  );
}

export default SinglePostPage;
