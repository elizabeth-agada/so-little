import React from 'react';

const CascadePage = () => {
  return (
    <div className="p-6 bg-white text-black font-sans">
      <h1 className="text-3xl font-bold mb-4 px-4 md:px-32">CSS (Cascading Style Sheets)</h1>
      <p className="mb-4 px-4 md:px-32">
        CSS stands for Cascading Style Sheets. It is a stylesheet language used for describing the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, on paper, in speech, or on other media.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3 px-4 md:px-32">Key Features of CSS</h2>
      <ul className="list-disc ml-6 mb-4 px-4 md:px-32">
        <li className="mb-2">Separation of Content and Style: CSS allows you to separate the presentation of a webpage from its content, making maintenance easier and more efficient.</li>
        <li className="mb-2">Multiple Style Definitions: CSS provides flexibility to define multiple styles for a single element and apply them selectively based on various criteria like screen size or media type.</li>
        <li className="mb-2">Reusability: CSS styles can be reused across multiple pages, ensuring consistency and saving time.</li>
        <li className="mb-2">Responsive Design: CSS enables the creation of responsive designs that adapt to different screen sizes and devices using media queries.</li>
        <li className="mb-2">Animations and Transitions: CSS includes powerful features for creating animations and transitions, allowing for dynamic visual effects.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-3 px-4 md:px-32">CSS Tutorials</h2>
      <ul className="list-disc ml-6 px-4 md:px-32">
        <li className="mb-2">
          <a href="https://www.w3schools.com/css/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            W3Schools CSS Tutorial
          </a>
        </li>
        <li className="mb-2">
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            MDN Web Docs
          </a>
        </li>
        <li className="mb-2">
          <a href="https://css-tricks.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            CSS-Tricks
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-css" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            freeCodeCamp
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CascadePage;
