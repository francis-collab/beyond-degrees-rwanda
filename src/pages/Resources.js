// src/pages/Resources.js
import React from "react";

function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 text-gray-800">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-900 mb-4">🧰 Resources for Youth Employment</h1>
        <p className="text-lg text-gray-700">
          Access to the right resources can empower young Rwandans to overcome barriers and thrive professionally. Below are curated tools, websites, and organizations offering training, funding, mentorship, and job listings.
        </p>
      </section>

      {/* Learning Platforms */}
      <section className="bg-teal-50 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800">📚 Online Learning Platforms</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a href="https://www.coursera.org" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Coursera
            </a> — Offers a variety of courses including digital skills, business, and entrepreneurship.
          </li>
          <li>
            <a href="https://www.udemy.com" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Udemy
            </a> — Affordable courses on technology, soft skills, and personal development.
          </li>
          <li>
            <a href="https://andela.com/learning/" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Andela Learning Community
            </a> — African-focused software engineering mentorship and training.
          </li>
        </ul>
      </section>

      {/* Job Portals */}
      <section className="bg-teal-50 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800">🔍 Job Portals & Marketplaces</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a href="https://jobinrwanda.com" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Job In Rwanda
            </a> — Rwanda’s leading job portal with listings across sectors.
          </li>
          <li>
            <a href="https://www.upwork.com" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Upwork
            </a> — Global freelancing platform offering remote work opportunities.
          </li>
          <li>
            <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Fiverr
            </a> — Gig marketplace for creatives and digital professionals.
          </li>
        </ul>
      </section>

      {/* Funding & Grants */}
      <section className="bg-teal-50 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800">💰 Funding & Grants</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a href="https://wdb.rw" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Women’s Development Bank (WDB)
            </a> — Micro-loans and support for women entrepreneurs.
          </li>
          <li>
            <a href="https://rdb.rw" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Rwanda Development Board (RDB)
            </a> — Startup incubation, funding, and business support services.
          </li>
          <li>
            <a href="https://kigalicatalyst.org" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Kigali Catalyst Fund
            </a> — Seed funding for innovative youth-led startups.
          </li>
        </ul>
      </section>

      {/* Mentorship & Networking */}
      <section className="bg-teal-50 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-teal-800">🤝 Mentorship & Networking</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a href="https://mentorship.rw" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              Mentorship Rwanda
            </a> — Connects youth with professional mentors.
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              LinkedIn
            </a> — Professional networking platform.
          </li>
          <li>
            <a href="https://www.youthlead.org" target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800">
              YouthLead
            </a> — Leadership and networking for young changemakers.
          </li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">💡 Tip</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Don’t just rely on one resource! Combine learning, networking, and real-world practice for the best results. Stay curious, keep building, and leverage every opportunity.
        </p>
      </section>
    </div>
  );
}

export default Resources;

