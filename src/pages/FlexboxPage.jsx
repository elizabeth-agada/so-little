import React from 'react';

function FlexboxPage() {
  return (
    <main className="container text-black mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Understanding Flexbox</h1>
        <p className="text-base md:text-lg mb-6">
          Flexbox (Flexible Box Layout) is a modern CSS layout module designed to arrange elements in a one-dimensional 
          space. It simplifies the process of creating flexible and responsive layouts by providing more control over 
          alignment and distribution of space.
        </p>
        <p className="text-base md:text-lg mb-6">
          Here’s a breakdown of key Flexbox concepts:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg">
          <li><strong>Flex Container:</strong> The parent element that defines the flex context for its children.</li>
          <li><strong>Flex Items:</strong> The children of the flex container, which are laid out according to flex properties.</li>
          <li><strong>Flex Direction:</strong> Specifies the direction of flex items (e.g., row, column).</li>
          <li><strong>Justify Content:</strong> Aligns flex items along the main axis (e.g., center, space-between).</li>
          <li><strong>Align Items:</strong> Aligns flex items along the cross axis (e.g., stretch, center).</li>
          <li><strong>Align Self:</strong> Allows individual flex items to override the container’s alignment.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Example Flexbox Layouts</h2>

        {/* Basic Flexbox Example */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 bg-blue-200 p-4 text-center">Flex Item 1</div>
          <div className="flex-1 bg-blue-300 p-4 text-center">Flex Item 2</div>
          <div className="flex-1 bg-blue-400 p-4 text-center">Flex Item 3</div>
          <div className="flex-1 bg-blue-500 p-4 text-center">Flex Item 4</div>
        </div>

        {/* Responsive Flexbox Example */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 sm:flex-none sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-200 p-4 text-center">Flex Item 1</div>
          <div className="flex-1 sm:flex-none sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-300 p-4 text-center">Flex Item 2</div>
          <div className="flex-1 sm:flex-none sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-400 p-4 text-center">Flex Item 3</div>
          <div className="flex-1 sm:flex-none sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-500 p-4 text-center">Flex Item 4</div>
          <div className="flex-1 sm:flex-none sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-600 p-4 text-center">Flex Item 5</div>
          <div className="flex-1 sm:flex-none sm:w-1/2 md:w-1/3 lg:w-1/4 bg-green-700 p-4 text-center">Flex Item 6</div>
        </div>
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
        </div>
      </section>
    </main>
  );
}

export default FlexboxPage;
