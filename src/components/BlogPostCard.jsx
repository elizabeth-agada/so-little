import React from 'react';

function BlogPostCard({ title, excerpt, image, link }) {
  return (
    <article className="bg-light-gray rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <a href={link} className="text-teal-600 hover:underline">Read More</a>
      </div>
    </article>
  );
}

export default BlogPostCard;
