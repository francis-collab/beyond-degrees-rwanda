// src/pages/About.js
import React from "react";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 text-gray-800">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Who We Are</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          <strong>Beyond Degrees</strong> is a purpose-driven initiative based in Rwanda that exists to bridge the ever-widening gap between youth education and employment. We believe in unlocking the full potential of young people — not just by celebrating academic achievement, but by helping them transition into meaningful, productive work.
        </p>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-semibold text-blue-800">📘 Our Story</h2>
        <p>
          Rwanda's universities graduate thousands of students annually — yet unemployment continues to rise. We noticed a disconnect: talented, educated youth with passion and dreams, but no pathway to employment. Beyond Degrees was born to change that.
        </p>
        <p>
          We are still in a phase of being a research project in local communities but we plan to become a full-fledged platform and movement. Through partnerships with schools, businesses, government agencies, and youth themselves, we'll build a network for opportunity and transformation.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">🎯 Our Mission</h3>
          <p className="mt-2 text-gray-700">
            To equip Rwandan youth with the mindset, skills, and access they need to secure sustainable employment or launch entrepreneurial ventures.
          </p>
        </div>
        <div className="bg-white shadow rounded p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">🌍 Our Vision</h3>
          <p className="mt-2 text-gray-700">
            A nation where every young person — regardless of background or academic path — has a fair shot at building a dignified and fulfilling life through work.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold text-yellow-800">🚀 Core Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Equity:</strong> We believe in fair access to opportunity for all young people.</li>
          <li><strong>Practicality:</strong> We promote skills and solutions that work in the real world.</li>
          <li><strong>Innovation:</strong> We embrace digital tools and new models of employment.</li>
          <li><strong>Empowerment:</strong> We don't just teach — we help youth lead and build.</li>
          <li><strong>Collaboration:</strong> We partner across sectors to scale impact.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">🙌 Join the Movement</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Whether you're a student, graduate, educator, employer, donor, or policymaker — there's a role for you in changing the story of youth employment in Rwanda. Together, we can go <strong>beyond degrees</strong> and build futures that matter.
        </p>
      </section>
    </div>
  );
}

export default About;

