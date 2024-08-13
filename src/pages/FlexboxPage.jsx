import React from 'react';

function FlexboxPage() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Understanding Flexbox</h1>
        <p className="text-base md:text-lg mb-6">
          Flexbox (Flexible Box Layout) is a powerful CSS layout module designed to lay out elements in a one-dimensional 
          space, either horizontally or vertically. It helps create responsive layouts with more control over alignment 
          and spacing than traditional methods.
        </p>
        <p className="text-base md:text-lg mb-6">
          Key concepts of Flexbox include:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg">
          <li><strong>Flex Container:</strong> The parent element that holds flex items and defines the flex context.</li>
          <li><strong>Flex Items:</strong> The children of the flex container that will be laid out according to flex properties.</li>
          <li><strong>Flex Direction:</strong> Defines the direction in which flex items are placed in the flex container (e.g., row, column).</li>
          <li><strong>Justify Content:</strong> Aligns flex items along the main axis (e.g., center, space-between).</li>
          <li><strong>Align Items:</strong> Aligns flex items along the cross axis (e.g., stretch, center).</li>
          <li><strong>Align Self:</strong> Allows the individual flex item to override the container’s alignment.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Recommended Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example resource cards */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">CSS Flexbox Guide</h3>
            <p className="text-base mb-4">An extensive guide to CSS Flexbox with practical examples and explanations.</p>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Flexbox Froggy</h3>
            <p className="text-base mb-4">A fun game to help you learn and practice Flexbox concepts interactively.</p>
            <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Play Now</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">MDN Web Docs - Flexbox</h3>
            <p className="text-base mb-4">Official documentation on Flexbox by Mozilla Developer Network, covering all properties and their use.</p>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">A Complete Guide to Flexbox</h3>
            <p className="text-base mb-4">A complete guide to Flexbox, including visual examples and code snippets.</p>
            <a href="https://www.smashingmagazine.com/2018/03/guide-flexbox-css/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read Article</a>
          </div>
          {/* Add more resources here */}
        </div>
      </section>
    </main>
  );
}

export default FlexboxPage;
