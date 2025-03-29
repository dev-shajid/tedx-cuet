
import React from 'react';

interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  topic?: string;
}

const SpeakersSection = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "AI Ethics Researcher",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      bio: "Leading researcher in ethical AI development focusing on responsible innovation.",
      topic: "The Future of Ethical AI"
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Climate Scientist",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      bio: "Pioneering researcher dedicated to addressing climate challenges in South Asia.",
      topic: "Climate Resilience in Bangladesh"
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Social Entrepreneur",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      bio: "Founder of multiple social enterprises empowering rural communities.",
      topic: "Sustainable Development through Social Business"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Quantum Computing Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      bio: "Leading the quantum revolution with groundbreaking research in quantum algorithms.",
      topic: "Quantum Computing: The Next Frontier"
    },
  ];
  
  return (
    <section id="speakers" className="section-padding bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Featured Speakers
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Meet our distinguished speakers who will share their groundbreaking ideas and inspiring stories at TEDxCUET.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id} 
              className="glass-card rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 reveal-animation"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-white font-bold text-lg">{speaker.name}</h3>
                  <p className="text-tedred font-medium">{speaker.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white/70 text-sm mb-2">{speaker.bio}</p>
                {speaker.topic && (
                  <div className="mt-3 flex items-center">
                    <span className="text-xs text-tedred mr-2">TOPIC:</span>
                    <span className="text-white font-medium text-sm">{speaker.topic}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal-animation">
          <p className="text-white/70 italic mb-4">More speakers to be announced soon...</p>
          <a href="#register" className="ted-button">
            Register to Meet Our Speakers
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
