'use client';

import React, { useState, useEffect } from 'react';

const EventHighlights = () => {
  // Use null as initial state to indicate "not initialized yet"
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoId = "d0NHOpeczUU";

  // Set mounted state on client-side only
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  // Render the UI based on client-side state only
  return (
    <section id="highlights" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="title">
            Event Highlights
          </h2>
          <p className="subtitle">
            Watch highlights from our previous events and get a glimpse of what to expect at TEDxCUET 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal-animation">
          <div className="glass-card rounded-xl overflow-hidden aspect-video relative group">
            {isMounted && isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="TEDx Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                {isMounted && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="play-button group-hover:scale-110 transition-transform duration-300"
                      onClick={handlePlayClick}
                      aria-label="Play video"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-white group-hover:text-tedred transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-lg hover:transform hover:scale-105 transition-all duration-300 reveal-animation">
              <h3 className="text-lg font-semibold text-tedred mb-2">Inspiring Talks</h3>
              <p className="text-white/70 text-sm">Experience thought-provoking ideas delivered by exceptional speakers.</p>
            </div>

            <div className="glass-card p-4 rounded-lg hover:transform hover:scale-105 transition-all duration-300 reveal-animation" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-tedred mb-2">Networking</h3>
              <p className="text-white/70 text-sm">Connect with like-minded individuals and expand your professional network.</p>
            </div>

            <div className="glass-card p-4 rounded-lg hover:transform hover:scale-105 transition-all duration-300 reveal-animation" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-tedred mb-2">Innovation</h3>
              <p className="text-white/70 text-sm">Discover innovative ideas that have the potential to change the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;