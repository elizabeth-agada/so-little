// src/pages/ResponsiveDesignsPage.js
import React from 'react';

function ResponsiveDesignsPage() {
  return (
    <main className="container mx-auto my-20 px-32 font-sans">
      <h1 className="text-4xl font-bold mb-8">Responsive Designs</h1>
      <img src="/img/responsive.jpg" alt="Responsive Designs" className="w-full mb-8" />
      <p className="text-lg mb-4">
        Master the art of creating responsive designs that work on all devices. Responsive web design ensures that web pages look good and function properly on all devices, including desktops, tablets, and smartphones.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Why Responsive Design Matters</h2>
      <p className="mb-4">
        With the increasing variety of devices and screen sizes, it's essential to create websites that adapt to different screens. Responsive design improves user experience, SEO, and overall accessibility. 
      </p>
      <h2 className="text-2xl font-semibold mb-4">Key Techniques for Responsive Design</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">Fluid Grid Layouts: Use percentage-based widths instead of fixed pixel widths to create flexible layouts.</li>
        <li className="mb-2">Flexible Images: Ensure images scale properly by using CSS properties like max-width: 100%.</li>
        <li className="mb-2">Media Queries: Use CSS media queries to apply different styles based on the device's characteristics.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
      <p className="mb-4">
        Follow best practices such as testing your design on multiple devices, prioritizing content, and optimizing performance. Responsive design should enhance the user experience rather than detract from it.
      </p>
      <p className="mb-4">
        For more detailed information and tutorials on responsive design, consider exploring resources like the Mozilla Developer Network (MDN) and CSS-Tricks.
      </p>
    </main>
  );
}

export default ResponsiveDesignsPage;
