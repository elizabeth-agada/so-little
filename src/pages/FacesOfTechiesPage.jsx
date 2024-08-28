import React from 'react';
import TopTechiesPage from './TopTechiesPage';

function FacesOfTechiesPage() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Faces of Techies</h1>
        <p className="text-base md:text-lg mb-6">
          The tech industry is diverse and ever-evolving, with a variety of roles and expertise that contribute to building innovative solutions. Whether you're a developer, designer, data scientist, or product manager, each role plays a crucial part in shaping the future of technology.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Developers</h2>
        <p className="text-base md:text-lg mb-6">
          Developers are the backbone of the tech industry. They write the code that powers websites, mobile apps, and software. Developers can specialize in different areas, such as front-end development, back-end development, or full-stack development.
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li><strong>Front-End Developers:</strong> Focus on the user interface and experience, working with technologies like HTML, CSS, and JavaScript.</li>
          <li><strong>Back-End Developers:</strong> Handle the server-side logic, databases, and integration of various services. They work with languages like Python, Java, and Node.js.</li>
          <li><strong>Full-Stack Developers:</strong> Combine the skills of both front-end and back-end developers, working on all aspects of a web application.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Designers</h2>
        <p className="text-base md:text-lg mb-6">
          Designers bring creativity and user-focused solutions to the tech industry. They work on crafting visually appealing and functional interfaces that users interact with. Designers can specialize in UI (User Interface) or UX (User Experience) design.
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li><strong>UI Designers:</strong> Focus on the visual aspects of an application, including colors, typography, and layout.</li>
          <li><strong>UX Designers:</strong> Ensure that the application is user-friendly and provides a seamless experience for the user.</li>
          <li><strong>Product Designers:</strong> Oversee the entire design process, from concept to final product, ensuring that the design aligns with business goals and user needs.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Product Managers</h2>
        <p className="text-base md:text-lg mb-6">
          Product Managers are the strategists behind a tech product. They define the product's vision, align teams, and ensure that the product meets user needs and business objectives. They work closely with developers, designers, and stakeholders to bring products to life.
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li><strong>Product Vision:</strong> Product Managers create and communicate the vision for the product, guiding the development team towards a common goal.</li>
          <li><strong>Roadmap Planning:</strong> They develop a roadmap to outline the product’s development timeline, including milestones and deliverables.</li>
          <li><strong>Cross-Functional Collaboration:</strong> Product Managers work across different teams to ensure the product is built efficiently and effectively.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Data Scientists</h2>
        <p className="text-base md:text-lg mb-6">
          Data Scientists analyze and interpret complex data to help organizations make informed decisions. They work with large datasets, applying statistical methods and machine learning algorithms to uncover insights and drive innovation.
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li><strong>Data Analysis:</strong> Data Scientists use tools like Python, R, and SQL to analyze data and extract meaningful patterns.</li>
          <li><strong>Machine Learning:</strong> They build predictive models using machine learning algorithms to solve complex business problems.</li>
          <li><strong>Data Visualization:</strong> Data Scientists create visual representations of data to communicate findings to stakeholders effectively.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Other Roles in Tech</h2>
        <p className="text-base md:text-lg mb-6">
          The tech industry is vast, with many other roles contributing to its growth and success. These include roles like DevOps Engineers, System Administrators, Technical Writers, Cybersecurity Experts, and many more. Each role plays a unique part in building and maintaining the technology we use every day.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Diverse Backgrounds</h2>
        <p className="text-base md:text-lg mb-6">
          Techies come from all walks of life. Some have formal education in computer science, while others are self-taught. The industry values skills, creativity, and problem-solving abilities over traditional qualifications, making it accessible to people from diverse backgrounds.
        </p>
        <p className="text-base md:text-lg mb-6">
          Whether you're just starting out or are a seasoned professional, there's a place for you in the tech world. The faces of techies are diverse, dynamic, and constantly evolving.
        </p>
      </section>
      <TopTechiesPage />
    </main>
  );
}

export default FacesOfTechiesPage;
