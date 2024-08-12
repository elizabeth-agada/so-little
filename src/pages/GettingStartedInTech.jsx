import React from 'react';

function GettingStartedInTech() {
  return (
    <main className="container mx-auto my-10 px-4 sm:px-6 lg:px-8 max-w-7xl font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Getting Started in Tech</h1>
      <img src="/img/technology.jpg" alt="Getting Started in Tech" className="w-full h-auto mb-6 sm:mb-8" />
      
      <section className="space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg">
          The tech industry is vast and offers countless opportunities for growth, learning, and career advancement.
          Whether you're a complete beginner or someone looking to switch careers, getting started in tech can seem
          daunting. This guide will walk you through the essential steps to embark on your tech journey.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold">Step 1: Identify Your Interests</h2>
        <p className="text-base sm:text-lg">
          The tech field encompasses various areas such as software development, data science, cybersecurity, UI/UX design,
          and more. It's important to explore these areas and find out which aligns with your interests and career goals.
          Here are some resources to help you explore:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li><a href="https://www.coursera.org/articles/tech-careers" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Tech Career Roadmap - Coursera</a></li>
          <li><a href="https://www.codecademy.com/learn/paths" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Codecademy Career Paths</a></li>
          <li><a href="https://www.freecodecamp.org/news/tech-careers-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FreeCodeCamp Career Guide</a></li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold">Step 2: Learn the Basics</h2>
        <p className="text-base sm:text-lg">
          Once you've identified your area of interest, start by learning the basics. There are plenty of free and paid resources 
          available online, including tutorials, courses, and books. For example, if you're interested in web development, 
          you might start with HTML, CSS, and JavaScript.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold">Step 3: Build Projects</h2>
        <p className="text-base sm:text-lg">
          The best way to learn tech skills is by building projects. Start with simple projects and gradually increase their 
          complexity. This will not only solidify your learning but also build your portfolio, which is crucial when applying 
          for jobs or internships.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold">Step 4: Network and Join Communities</h2>
        <p className="text-base sm:text-lg">
          Networking is vital in the tech industry. Join tech communities, attend meetups, and connect with others in the field. 
          Platforms like LinkedIn, GitHub, and Twitter are great places to start. Engaging with the community will help you 
          stay updated with industry trends and may open up job opportunities.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold">Step 5: Apply for Internships and Jobs</h2>
        <p className="text-base sm:text-lg">
          Once you have some projects and skills under your belt, start applying for internships or entry-level positions. 
          Tailor your resume and cover letter to highlight your skills, projects, and passion for tech. Don't be discouraged 
          by rejections; persistence is key.
        </p>

        <p className="text-base sm:text-lg">
          Remember, the tech journey is continuous, and there's always something new to learn. Stay curious, keep experimenting, 
          and enjoy the process!
        </p>
      </section>
    </main>
  );
}

export default GettingStartedInTech;
