// src/pages/Media.js
import React from "react";

function Media() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 text-gray-800">
      {/* Intro Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">🎥 Media Highlights: Stories in Motion</h1>
        <p className="text-lg text-gray-700">
          See inspiring visuals of youth empowerment programs, workshops, success stories, and community impact across Rwanda.
          Visual storytelling brings energy and connection to our mission.
        </p>
      </section>

      {/* Video Section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">🎬 Featured Videos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Video */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JpEUfSx2VZ4?si=Uwn58pGfZ0S2yNSE"
                title="Youth exhibiting their projects"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-purple-50">
              <h3 className="font-semibold text-purple-700">Youth exhibiting their projects</h3>
              <p className="text-sm text-gray-600 mt-1">
                A glimpse into tech exhibition sessions empowering youth.
              </p>
            </div>
          </div>

          {/* Second Video */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://youtube.com/embed/XkSxT26foqQ?si=huWOUL3YiYSOH4Ra"
                title="Inspire me (Tackling youth unemployment)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-purple-50">
              <h3 className="font-semibold text-purple-700">Tackling youth unemployment</h3>
              <p className="text-sm text-gray-600 mt-1">
                Inspire me (Tackling youth unemployment).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">📸 Photo Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
              alt: "Young developer coding",
              caption: "Youth coding at a community workshop",
            },
            {
              src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
              alt: "Farmers harvesting",
              caption: "Youth-led cooperative harvesting crops",
            },
            {
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
              alt: "Entrepreneur pitching",
              caption: "Young entrepreneur pitching her startup idea",
            },
            {
              src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
              alt: "Students in classroom",
              caption: "Students learning digital skills",
            },
            {
              src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
              alt: "Workshop collaboration",
              caption: "Collaborative workshop session",
            },
            {
              src: "https://images.unsplash.com/photo-1531497865143-7761170d8280?auto=format&fit=crop&w=600&q=80",
              alt: "Presentation",
              caption: "Youth presenting business ideas",
            },
          ].map(({ src, alt, caption }, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300"
              title={caption}
            >
              <img src={src} alt={alt} className="w-full h-48 object-cover" />
              <div className="p-2 bg-purple-50 text-sm text-purple-700 font-medium">{caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Subtle Animation Section */}
      <section className="bg-purple-100 p-8 rounded-lg shadow text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-purple-900 mb-4">✨ Animation Spotlight</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Our animated infographic below explains the youth unemployment cycle and how breaking barriers leads to opportunity.
        </p>
        <div
          className="mx-auto w-48 h-48 bg-purple-300 rounded-full animate-pulse"
          aria-label="Animated infographic placeholder"
          title="Animated infographic placeholder"
        ></div>
      </section>
    </div>
  );
}

export default Media;

