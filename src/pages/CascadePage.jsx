import React from 'react';

const CascadePage = () => {
  return (
    <div className="p-6 bg-gray-50 text-black font-sans">
      <h1 className="text-3xl font-bold mb-4 px-4 md:px-32">CSS (Cascading Style Sheets)</h1>
      <p className="mb-4 px-4 md:px-32 text-lg leading-relaxed">
        CSS stands for Cascading Style Sheets. It is a stylesheet language used for describing the presentation of a document written in HTML or XML. CSS defines how elements should be rendered on screen, on paper, in speech, or on other media.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3 px-4 md:px-32 text-blue-600">Key Features of CSS</h2>
      <ul className="list-disc ml-10 mb-4 px-4 md:px-32 space-y-2">
        <li>Separation of Content and Style: CSS allows you to separate the presentation of a webpage from its content, making maintenance easier and more efficient.</li>
        <li>Multiple Style Definitions: CSS provides flexibility to define multiple styles for a single element and apply them selectively based on various criteria like screen size or media type.</li>
        <li>Reusability: CSS styles can be reused across multiple pages, ensuring consistency and saving time.</li>
        <li>Responsive Design: CSS enables the creation of responsive designs that adapt to different screen sizes and devices using media queries.</li>
        <li>Animations and Transitions: CSS includes powerful features for creating animations and transitions, allowing for dynamic visual effects.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-3 px-4 md:px-32 text-blue-600">Advanced CSS Concepts</h2>
      <p className="mb-4 px-4 md:px-32 text-lg leading-relaxed">
        CSS has evolved over the years, introducing several advanced concepts and features that enable developers to create more complex and visually appealing web pages. Some of these include:
      </p>
      <ul className="list-disc ml-10 mb-4 px-4 md:px-32 space-y-2">
        <li>Flexbox and Grid Layout: These powerful layout modules help in creating responsive and flexible layouts with ease.</li>
        <li>Custom Properties (CSS Variables): CSS variables allow you to store values that can be reused throughout a document, making it easier to maintain and update styles.</li>
        <li>Preprocessors: Tools like SASS and LESS extend CSS with features like variables, nesting, and mixins, enabling more efficient and organized code.</li>
        <li>Modern CSS Frameworks: Frameworks like Tailwind CSS and Bootstrap provide pre-designed components and utility classes, speeding up the development process.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-3 px-4 md:px-32 text-blue-600">CSS Code Example</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-auto px-4 md:px-32">
        <code className="text-sm">
          {`
          /* Example of CSS for a simple button */
          .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
          }

          .button:hover {
            background-color: white;
            color: black;
            border: 2px solid #4CAF50;
}
          `}
        </code>
      </pre>
      
      <h2 className="text-2xl font-semibold mb-3 px-4 md:px-32 text-blue-600">CSS Tutorials</h2>
      <ul className="list-disc ml-10 px-4 md:px-32 space-y-2">
        <li>
          <a href="https://www.w3schools.com/css/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            W3Schools CSS Tutorial
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            MDN Web Docs
          </a>
        </li>
        <li>
          <a href="https://css-tricks.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            CSS-Tricks
          </a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-css" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            freeCodeCamp
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CascadePage;
