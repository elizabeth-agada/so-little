import React from 'react';

function DesignPage() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans bg-gray-50 text-black">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Design Principles</h1>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Good design is essential for creating visually appealing and user-friendly products. Understanding key design 
          principles can help you create effective and engaging designs. Here are some fundamental principles to keep in mind:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6 space-y-4">
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
            <span><strong>Balance:</strong> Ensure visual balance by distributing elements evenly in your design.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mr-3"></div>
            <span><strong>Contrast:</strong> Use contrast to make important elements stand out and improve readability.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-3"></div>
            <span><strong>Alignment:</strong> Align elements to create a sense of order and organization.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mr-3"></div>
            <span><strong>Repetition:</strong> Use repetition to create consistency and reinforce visual identity.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3"></div>
            <span><strong>Proximity:</strong> Group related items together to improve visual coherence.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mr-3"></div>
            <span><strong>White Space:</strong> Utilize white space to reduce clutter and give elements room to breathe.</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Recommended Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example resource cards */}
          <div className="bg-gradient-to-r from-yellow-300 to-orange-400 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Design Basics</h3>
            <p className="text-base mb-4 text-white">A beginner's guide to design principles and best practices for creating visually appealing designs.</p>
            <a href="https://www.smashingmagazine.com/2010/05/the-art-of-designing-with-the-right-tools/" target="_blank" rel="noopener noreferrer" className="text-yellow-200 hover:underline">Read More</a>
          </div>
          <div className="bg-gradient-to-r from-purple-300 to-pink-400 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Canva Design School</h3>
            <p className="text-base mb-4 text-white">Learn design fundamentals and techniques with free courses from Canva Design School.</p>
            <a href="https://www.canva.com/learn/design/" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:underline">Explore Courses</a>
          </div>
          <div className="bg-gradient-to-r from-blue-300 to-teal-400 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Adobe Creative Cloud Tutorials</h3>
            <p className="text-base mb-4 text-white">Access tutorials for Adobe Creative Cloud tools to enhance your design skills.</p>
            <a href="https://helpx.adobe.com/creative-cloud/tutorials-explore.html" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:underline">View Tutorials</a>
          </div>
          <div className="bg-gradient-to-r from-green-300 to-blue-400 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Design Thinking by IDEO</h3>
            <p className="text-base mb-4 text-white">Learn about the Design Thinking process and how to apply it to solve complex design problems.</p>
            <a href="https://www.ideou.com/pages/design-thinking" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:underline">Learn More</a>
          </div>
          {/* Add more resources here */}
        </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Design Tools</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Here are some popular tools that can help you with design tasks, whether you're creating graphics, web layouts, 
          or user interfaces:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg space-y-4">
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-red-300 to-pink-400 rounded-full mr-3"></div>
            <span><strong>Adobe Photoshop:</strong> Industry-standard tool for image editing and graphic design.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-300 to-teal-400 rounded-full mr-3"></div>
            <span><strong>Adobe Illustrator:</strong> Vector graphics editor used for creating illustrations and logos.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full mr-3"></div>
            <span><strong>Sketch:</strong> Design tool for creating user interfaces and web designs.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full mr-3"></div>
            <span><strong>Figma:</strong> Collaborative design tool for interface design and prototyping.</span>
          </li>
          <li className="flex items-start">
            <div className="w-4 h-4 bg-gradient-to-r from-green-300 to-blue-400 rounded-full mr-3"></div>
            <span><strong>Canva:</strong> Easy-to-use design tool for creating graphics, presentations, and more.</span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default DesignPage;
