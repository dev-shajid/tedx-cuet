
import React from 'react';

const VenueSection = () => {
  return (
    <section id="venue" className="section-padding bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-animation">
          <h1 className="title">
            Event Venue
          </h1>
          <h2 className="subtitle">
            Join us at our carefully selected venue for an immersive TEDx experience.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 reveal-animation">
            <div className="h-72 md:h-96 rounded-xl overflow-hidden glass-card">
              {/* Replace with actual Google Maps iframe or static map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.2354868091874!2d91.96004281241425!3d22.459678241233563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd6fe9a0f0b99%3A0xf99f7f3f6d899fa9!2sChittagong%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1691400722881!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CUET Map"
              ></iframe>
            </div>
          </div>

          <div className="lg:w-1/2 reveal-animation" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                CUET Main Auditorium
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-tedred flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p className="text-white/70">
                      Chittagong University of Engineering & Technology,<br />
                      Chittagong-4349, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-tedred flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Date & Time</h4>
                    <p className="text-white/70">
                      September 15, 2025<br />
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-tedred flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Contact</h4>
                    <p className="text-white/70">
                      +880 1XXXXXXXXX<br />
                      info@tedxcuet.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-white mb-2">Transportation</h4>
                <ul className="text-white/70 space-y-2 list-disc pl-5">
                  <li>20 minutes from Shah Amanat International Airport</li>
                  <li>Campus shuttle service available from major city locations</li>
                  <li>Ample parking available on-site</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
