interface Partner {
  id: number;
  name: string;
  logo: string;
  type: 'platinum' | 'gold' | 'silver' | 'media';
}

const Partners = () => {

  const partners: Partner[] = [
    {
      id: 1,
      name: "Tech Innovations",
      logo: "https://placehold.co/200x100/333/FFF?text=Tech+Innovations",
      type: "platinum"
    },
    {
      id: 2,
      name: "Global Solutions",
      logo: "https://placehold.co/200x100/333/FFF?text=Global+Solutions",
      type: "platinum"
    },
    {
      id: 3,
      name: "Future Labs",
      logo: "https://placehold.co/200x100/333/FFF?text=Future+Labs",
      type: "gold"
    },
    {
      id: 4,
      name: "Connect Media",
      logo: "https://placehold.co/200x100/333/FFF?text=Connect+Media",
      type: "gold"
    },
    {
      id: 5,
      name: "Green Energy Co.",
      logo: "https://placehold.co/200x100/333/FFF?text=Green+Energy",
      type: "silver"
    },
    {
      id: 6,
      name: "Startup Hub",
      logo: "https://placehold.co/200x100/333/FFF?text=Startup+Hub",
      type: "silver"
    },
    {
      id: 7,
      name: "Daily Chronicle",
      logo: "https://placehold.co/200x100/333/FFF?text=Daily+Chronicle",
      type: "media"
    },
    {
      id: 8,
      name: "Tech Today",
      logo: "https://placehold.co/200x100/333/FFF?text=Tech+Today",
      type: "media"
    },
    {
      id: 9,
      name: "Digital Solutions",
      logo: "https://placehold.co/200x100/333/FFF?text=Digital+Solutions",
      type: "gold"
    },
    {
      id: 10,
      name: "AI Research",
      logo: "https://placehold.co/200x100/333/FFF?text=AI+Research",
      type: "silver"
    }
  ];

  return (
    <section id="partners" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-animation">
          <h1 className="title">
            Our Trusted Partners
          </h1>
          <h2 className="subtitle">
            We&apos;re grateful to these amazing organizations for making TEDxCUET possible and helping us spread ideas worth sharing.
          </h2>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16 reveal-animation">
          <h3 className="text-2xl font-medium mb-8 text-center">Platinum Partners</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="flex justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 hover:bg-white/10 rounded-lg p-6 w-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20 h-32">
                  <img
                    src={partner.logo}
                    alt={partner.name[0]}
                    className="max-w-full max-h-20 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal-animation" style={{ animationDelay: '0.5s' }}>
          <a
            href="mailto:partnerships@tedxcuet.com"
            className="bg-tedred text-white py-3 px-8 rounded-lg inline-flex items-center hover:bg-tedred/90 transition-all duration-300 shadow-lg hover:shadow-tedred/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;