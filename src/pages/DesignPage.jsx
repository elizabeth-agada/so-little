import React from 'react';

function DesignPage() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Design Principles</h1>
        <p className="text-base md:text-lg mb-6">
          Good design is essential for creating visually appealing and user-friendly products. Understanding key design 
          principles can help you create effective and engaging designs. Here are some fundamental principles to keep in mind:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li><strong>Balance:</strong> Ensure visual balance by distributing elements evenly in your design.</li>
          <li><strong>Contrast:</strong> Use contrast to make important elements stand out and improve readability.</li>
          <li><strong>Alignment:</strong> Align elements to create a sense of order and organization.</li>
          <li><strong>Repetition:</strong> Use repetition to create consistency and reinforce visual identity.</li>
          <li><strong>Proximity:</strong> Group related items together to improve visual coherence.</li>
          <li><strong>White Space:</strong> Utilize white space to reduce clutter and give elements room to breathe.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Recommended Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example resource cards */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Design Basics</h3>
            <p className="text-base mb-4">A beginner's guide to design principles and best practices for creating visually appealing designs.</p>
            <a href="https://www.smashingmagazine.com/2010/05/the-art-of-designing-with-the-right-tools/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Canva Design School</h3>
            <p className="text-base mb-4">Learn design fundamentals and techniques with free courses from Canva Design School.</p>
            <a href="https://www.canva.com/learn/design/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Explore Courses</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Adobe Creative Cloud Tutorials</h3>
            <p className="text-base mb-4">Access tutorials for Adobe Creative Cloud tools to enhance your design skills.</p>
            <a href="https://helpx.adobe.com/creative-cloud/tutorials-explore.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Tutorials</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Design Thinking by IDEO</h3>
            <p className="text-base mb-4">Learn about the Design Thinking process and how to apply it to solve complex design problems.</p>
            <a href="https://www.ideou.com/pages/design-thinking" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          {/* Add more resources here */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Design Tools</h2>
        <p className="text-base md:text-lg mb-6">
          Here are some popular tools that can help you with design tasks, whether you're creating graphics, web layouts, 
          or user interfaces:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg">
          <li><strong>Adobe Photoshop:</strong> Industry-standard tool for image editing and graphic design.</li>
          <li><strong>Adobe Illustrator:</strong> Vector graphics editor used for creating illustrations and logos.</li>
          <li><strong>Sketch:</strong> Design tool for creating user interfaces and web designs.</li>
          <li><strong>Figma:</strong> Collaborative design tool for interface design and prototyping.</li>
          <li><strong>Canva:</strong> Easy-to-use design tool for creating graphics, presentations, and more.</li>
        </ul>
      </section>
    </main>
  );
}

export default DesignPage;
