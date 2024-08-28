import React from 'react';

function BootstrapPage() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Understanding Bootstrap</h1>
        <p className="text-base md:text-lg mb-6">
          Bootstrap is a popular front-end framework that helps developers create responsive, mobile-first websites quickly and efficiently. It provides a collection of reusable components, utilities, and layout tools that follow modern web design principles.
        </p>
        <p className="text-base md:text-lg mb-6">
          Developed by Twitter, Bootstrap has become the de facto standard for front-end development. It allows developers to create clean, responsive designs without writing extensive custom CSS. Here’s an in-depth look at some of its core features:
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Features of Bootstrap</h2>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg">
          <li><strong>Grid System:</strong> Bootstrap’s grid system allows for the creation of flexible layouts that adapt to different screen sizes. It’s based on a 12-column layout and includes pre-defined classes for easy alignment and positioning.</li>
          <li><strong>Components:</strong> Bootstrap offers a wide range of components, such as navigation bars, modals, buttons, forms, and cards, that can be easily customized and integrated into any project.</li>
          <li><strong>Utilities:</strong> Bootstrap provides a set of utility classes for common CSS properties like margins, padding, colors, and typography, allowing for quick and consistent styling.</li>
          <li><strong>JavaScript Plugins:</strong> Bootstrap includes a collection of JavaScript plugins for adding interactive features like carousels, tooltips, and modals.</li>
          <li><strong>Customization:</strong> Bootstrap can be customized to fit the specific needs of a project. Developers can modify variables, remove unused components, and extend the framework with custom styles.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Getting Started with Bootstrap</h2>
        <p className="text-base md:text-lg mb-6">
          To get started with Bootstrap, you can either use the CDN (Content Delivery Network) version or download the framework and include it in your project. Here's an example of how to include Bootstrap via CDN:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mb-6">
          <code>
            {`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`}
          </code>
        </pre>
        <p className="text-base md:text-lg mb-6">
          Once included, you can start using Bootstrap classes in your HTML elements to style them. For example:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            {`<div className="container">`}
            <br />
            {`  <div className="row">`}
            <br />
            {`    <div className="col-md-6">Column 1</div>`}
            <br />
            {`    <div className="col-md-6">Column 2</div>`}
            <br />
            {`  </div>`}
            <br />
            {`</div>`}
          </code>
        </pre>
      </section>
    </main>
  );
}

export default BootstrapPage;
