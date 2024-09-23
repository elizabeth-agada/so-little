import React from 'react';

function TopTechiesPage() {
  const techies = [
    {
      name: 'Elon Musk',
      profile: 'CEO of SpaceX and Tesla, Elon Musk is a visionary entrepreneur known for his work in advancing space exploration, electric vehicles, and sustainable energy.',
      image: '.img/elon.jpg',
    },
    {
      name: 'Sundar Pichai',
      profile: 'CEO of Alphabet Inc. and Google, Sundar Pichai has played a key role in shaping the future of technology through Google’s innovative products and services.',
      image: 'sundar_pichai.jpg',
    },
    {
      name: 'Satya Nadella',
      profile: 'CEO of Microsoft, Satya Nadella has been instrumental in transforming Microsoft into a leader in cloud computing, AI, and enterprise solutions.',
      image: 'satya_nadella.jpg',
    },
    {
      name: 'Sheryl Sandberg',
      profile: 'Former COO of Facebook, Sheryl Sandberg is known for her work in building one of the world’s most influential social media platforms and advocating for women in tech.',
      image: 'sheryl_sandberg.jpg',
    },
    {
      name: 'Jack Dorsey',
      profile: 'Co-founder and former CEO of Twitter, Jack Dorsey has been a key figure in the evolution of social media and digital payments through Square.',
      image: 'jack_dorsey.jpg', 
    },
    {
      name: 'Sim Shagaya',
      profile: 'Founder of Konga and uLesson, Sim Shagaya is a Nigerian entrepreneur focused on revolutionizing e-commerce and education in Africa. His work in building Konga helped redefine the online shopping experience, while uLesson aims to make quality education accessible through technology.',
      image: 'sim_shagaya.jpg',
    },
  ];

  return (
    <section className="container mx-auto my-10 px-4 md:px-8 lg:px-28 font-sans">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Top Techies Across the Globe</h2>
      <p className="text-base md:text-lg mb-8">
        Meet some of the most influential tech leaders who are shaping the future of the industry. These individuals have made significant contributions to technology and continue to inspire innovation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {techies.map((techie, index) => (
          <div key={index} className="text-center">
            <img
              src={techie.image}
              alt={techie.name}
              className="w-40 h-40 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{techie.name}</h3>
            <p className="text-base md:text-lg">{techie.profile}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopTechiesPage;
