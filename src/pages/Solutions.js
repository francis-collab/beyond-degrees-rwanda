// src/pages/Solutions.js
import React from "react";

function Solutions() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 text-gray-800">
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">🚀 Practical Solutions to Youth Unemployment</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Solving youth unemployment requires more than job listings — it demands systemic change. At Beyond Degrees, we champion approaches that empower young Rwandans with relevant skills, entrepreneurial drive, and real opportunities. Below are 8 key pillars of transformation.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">🎓 Expand TVET Access</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Technical and Vocational Education and Training (TVET) prepares youth for immediate work. Scaling TVET centers and promoting them as equal to universities is key to increasing job readiness.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">💼 Promote Apprenticeships</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Structured apprenticeships bridge classroom learning with real-world practice. Government–industry partnerships should incentivize companies to onboard young interns.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg shadow border-l-4 border-yellow-500">
          <h3 className="text-xl font-semibold text-yellow-800">🖥️ Digital Upskilling</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Coding, design, data analytics, and remote work tools empower youth to access global online jobs. Youth must be trained in tech and freelancing platforms like Upwork and Fiverr.
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg shadow border-l-4 border-red-500">
          <h3 className="text-xl font-semibold text-red-700">🏭 Rural Industrialization</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Decentralizing jobs through rural manufacturing, agribusiness hubs, and cooperatives provides local employment and reduces youth migration to urban areas.
          </p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg shadow border-l-4 border-indigo-500">
          <h3 className="text-xl font-semibold text-indigo-700">📚 Entrepreneurship Support</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Young innovators need seed funding, business training, and incubation centers. Youth-led enterprises are critical engines of job creation.
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg shadow border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-700">🌐 Digital Platforms</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Building youth-friendly job portals and SMS-based job boards makes employment opportunities more accessible, even in rural areas.
          </p>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg shadow border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-700">🧑‍🏫 Life Skills & Mentorship</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Critical thinking, teamwork, leadership, and communication — these are often overlooked. Mentorship programs can bridge this gap and boost employability.
          </p>
        </div>

        <div className="bg-pink-50 p-6 rounded-lg shadow border-l-4 border-pink-500">
          <h3 className="text-xl font-semibold text-pink-700">👩🏾‍🤝‍👨🏽 Gender-Inclusive Policies</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Targeted support for female entrepreneurs and job seekers can close the gender employment gap, especially in tech and trades.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">📈 Scaling What Works</h2>
        <p className="text-gray-700">
          Rwanda already has many programs that work. But impact is limited when initiatives operate in silos. Our goal is to scale proven models through multi-stakeholder collaboration, government policy support, and community ownership.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Example:</strong> Rwanda Coding Academy has trained hundreds — expanding it to other provinces could create thousands of digital jobs.</li>
          <li><strong>Example:</strong> Cooperatives like youth-led carpentry groups thrive with small grants and mentorship — replicating these models would empower more youth.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">🌟 Real Change Is Possible</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          With bold ideas, investment, and collaboration, Rwanda can become a global leader in youth-centered job creation. Let’s move from talk to action.
        </p>
        <a href="/#/get-involved" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          Get Involved
        </a>
      </section>
    </div>
  );
}

export default Solutions;

