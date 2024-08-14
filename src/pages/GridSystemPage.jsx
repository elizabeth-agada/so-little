import React from 'react';

function GridSystemPage() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Understanding the Grid System</h1>
        <p className="text-base md:text-lg mb-6">
          The grid system is a powerful layout tool used in web design to create responsive and organized layouts.
          It divides the page into rows and columns, allowing for flexible and consistent placement of content.
        </p>
        <p className="text-base md:text-lg mb-6">
          In modern web development, grid systems help ensure that content is presented in a structured manner and
          adapts to different screen sizes. Here's a breakdown of how grid systems work:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg">
          <li><strong>Containers:</strong> The outer wrapper that holds the grid system, providing padding and alignment.</li>
          <li><strong>Rows:</strong> Horizontal containers that hold columns and ensure proper alignment of content.</li>
          <li><strong>Columns:</strong> Vertical divisions within rows that define the layout and structure of the content.</li>
          <li><strong>Gutters:</strong> The space between columns that helps separate content and improve readability.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Example Grid Layouts</h2>

        {/* Basic Grid Example */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-200 p-4 text-center">Column 1</div>
          <div className="bg-blue-300 p-4 text-center">Column 2</div>
          <div className="bg-blue-400 p-4 text-center">Column 3</div>
          <div className="bg-blue-500 p-4 text-center">Column 4</div>
        </div>

        {/* Responsive Grid Example */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-green-200 p-4 text-center">Col 1 (2 on mobile)</div>
          <div className="bg-green-300 p-4 text-center">Col 2 (2 on mobile)</div>
          <div className="bg-green-400 p-4 text-center">Col 3 (3 on tablet)</div>
          <div className="bg-green-500 p-4 text-center">Col 4 (4 on desktop)</div>
          <div className="bg-green-600 p-4 text-center">Col 5 (4 on desktop)</div>
          <div className="bg-green-700 p-4 text-center">Col 6 (4 on desktop)</div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Recommended Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example resource cards */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">CSS Grid Layout</h3>
            <p className="text-base mb-4">A comprehensive guide to CSS Grid Layout with examples and use cases.</p>
            <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Bootstrap Grid System</h3>
            <p className="text-base mb-4">An introduction to Bootstrap's grid system, including how to use and customize it.</p>
            <a href="https://getbootstrap.com/docs/5.0/layout/grid/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Flexbox vs. Grid</h3>
            <p className="text-base mb-4">A comparison of Flexbox and Grid systems to help you decide which is best for your project.</p>
            <a href="https://www.smashingmagazine.com/2017/02/intro-flexbox-grid/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Responsive Web Design</h3>
            <p className="text-base mb-4">Learn how to create responsive layouts using grid systems and media queries.</p>
            <a href="https://www.w3schools.com/css/css_rwd_grid.asp" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GridSystemPage;
