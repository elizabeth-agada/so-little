import React from 'react';

function CommunityPage() {
  return (
    <main className="container mx-auto my-10 px-4 md:px-8 lg:px-28 sans">

      {/* Introduction Section */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Tech Community and Its Impact</h1>
        <p className="text-base md:text-lg mb-6">
          Tech communities are pivotal in shaping the tech industry. They provide platforms for knowledge sharing, networking, and collaboration among tech enthusiasts, developers, and innovators.
        </p>
      </section>

      {/* Contributions to the Tech Industry Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Contributions to the Tech Industry</h2>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li><strong>Knowledge Sharing:</strong> Communities enable individuals to exchange experiences and insights, accelerating learning and keeping members updated on trends.</li>
          <li><strong>Networking Opportunities:</strong> They create connections among members, leading to collaborations and job opportunities.</li>
          <li><strong>Support and Mentorship:</strong> Many communities offer mentorship programs to guide newcomers through their tech journeys.</li>
          <li><strong>Open Source Contributions:</strong> Engaging in open-source projects fosters a culture of sharing and innovation.</li>
          <li><strong>Skill Development:</strong> Workshops and hackathons enhance technical skills through practical experiences.</li>
        </ul>
      </section>

      {/* Vibrant Tech Communities Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Vibrant Tech Communities</h2>
        <p className="text-base md:text-lg mb-6">
          Numerous vibrant tech communities are making a significant impact, including:
        </p>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li><strong>Google Developer Groups (GDGs):</strong> Local groups that promote Google technologies through events and workshops.</li>
          <li><strong>Women Who Code:</strong> A global nonprofit empowering women in tech through networking and professional development.</li>
          <li><strong>Hackathons:</strong> Events where tech enthusiasts collaborate to create innovative solutions within a short timeframe.</li>
          <li><strong>Meetup Groups:</strong> Local groups focused on various tech topics, fostering engagement and collaboration.</li>
        </ul>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>

        <h3 className="text-xl font-semibold mb-2">Global Events</h3>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li>
            <strong>TechCrunch Disrupt</strong><br />
            Date: September 18-20, 2024<br />
            Location: San Francisco, USA<br />
            Description: A leading technology conference where startups pitch ideas and industry leaders share insights.
          </li>
          <li>
            <strong>Web Summit</strong><br />
            Date: November 4-7, 2024<br />
            Location: Lisbon, Portugal<br />
            Description: One of the largest tech conferences in the world featuring talks from industry leaders and networking opportunities.
          </li>
          <li>
            <strong>International Developers Summit</strong><br />
            Date: September 30, 2024<br />
            Location: Virtual and In-Person<br />
            Description: A gathering discussing trends and innovations in software development.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Events in Nigeria</h3>
        <ul className="list-disc list-inside pl-4 text-base md:text-lg mb-6">
          <li>
            <strong>Nigeria Tech Week</strong><br />
            Date: November 10-16, 2024<br />
            Location: Various locations in Nigeria<br />
            Description: A week-long series of events showcasing Nigeria's tech innovations and startups.
          </li>
          <li>
            <strong>DevFest Nigeria</strong><br />
            Date: December 5-7, 2024<br />
            Location: Lagos, Nigeria<br />
            Description: A developer festival focusing on Google technologies and relevant topics.
          </li>
          <li>
            <strong>Hackathon for Social Good</strong><br />
            Date: October 15-16, 2024<br />
            Location: Abuja, Nigeria<br />
            Description: An event focused on using technology to solve social issues in just 48 hours.
          </li>
        </ul>
      </section>

    </main>
  );
}

export default CommunityPage;
