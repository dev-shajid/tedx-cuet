
import Image from 'next/image';
import React from 'react';

const AboutEvent = () => {
  const features = [
    {
      id: 1,
      title: "Innovative Ideas",
      description: "Discover groundbreaking concepts and perspectives that challenge conventional thinking.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-tedred"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Inspiring Speakers",
      description: "Engage with exceptional thinkers and doers from diverse fields and backgrounds.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-tedred"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals and forge valuable professional relationships.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-tedred"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Interactive Experience",
      description: "Engage in discussions, Q&A sessions, and experiential learning activities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-tedred"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="title">
            About TEDxCUET
          </h2>
          <p className="subtitle">
            A day of engaging talks, innovative ideas, and meaningful connections at Chittagong University of Engineering & Technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="w-full md:w-1/2 reveal-animation">
            <div className="glass-card rounded-xl overflow-hidden">
              <Image
                src="/about.avif"
                alt="TEDx Event"
                width={500}
                height={300}
                className="object-cover w-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 reveal-animation" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">What is TEDx?</h3>
            <p className="text-white/70 mb-4">
              TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection.
            </p>
            <p className="text-white/70 mb-4">
              TEDxCUET is independently organized under a license from TED, bringing the spirit of TED&apos;s mission of &ldquo;ideas worth spreading&rdquo; to Chittagong University of Engineering &amp; Technology.
            </p>
            <p className="text-white/70">
              Our event features a combination of live speakers and TED Talk videos to spark deep conversation and connections. The TED Conference provides general guidance, but TEDxCUET is self-organized.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="glass-card p-6 rounded-xl hover:transform hover:translateY(-5px) transition-all duration-300 reveal-animation"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
