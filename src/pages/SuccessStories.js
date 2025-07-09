// src/pages/SuccessStories.js
import React from "react";

function SuccessStories() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14 text-gray-800">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">🌟 Success Stories: Rwandan Youth Thriving Beyond Degrees</h1>
        <p className="text-lg text-gray-700">
          These are the stories of young Rwandans who defied unemployment odds, breaking barriers with innovation, skill, and determination. Their journeys show that with the right support and mindset, success is within reach — no matter your background.
        </p>
      </section>

      {/* Story 1 */}
      <article className="bg-indigo-50 p-8 rounded-lg shadow-md border-l-8 border-indigo-600 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">🎤 Aline’s Journey: From Degree to Digital Entrepreneur</h2>
        <p className="mb-4 text-gray-700">
          After graduating with a degree in Economics, Aline struggled to find a formal job for over a year. Instead of giving up, she enrolled in an online coding bootcamp sponsored by a local NGO and started freelancing as a web developer. Today, she runs a successful digital agency that employs five other young women.
        </p>
        <p className="text-gray-700">
          “I realized that I didn’t have to wait for a job to come to me. I could create one by learning skills that the market actually needed,” says Aline.
        </p>
      </article>

      {/* Story 2 */}
      <article className="bg-green-50 p-8 rounded-lg shadow-md border-l-8 border-green-600 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">🌱 Jean’s Agribusiness Cooperative</h2>
        <p className="mb-4 text-gray-700">
          Jean, from a rural district, started a cooperative of young farmers to grow and sell organic vegetables. With small loans and training, the cooperative now supplies local markets and hotels, creating jobs for 15 youth in his community.
        </p>
        <p className="text-gray-700">
          “Unemployment pushed us to think differently — we saw opportunity in our land and skills. We just needed guidance and access to markets,” Jean explains.
        </p>
      </article>

      {/* Story 3 */}
      <article className="bg-yellow-50 p-8 rounded-lg shadow-md border-l-8 border-yellow-600 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">📱 Diane’s Mobile App for Job Seekers</h2>
        <p className="mb-4 text-gray-700">
          Diane combined her passion for software engineering and social impact to build a mobile app that connects youth to job opportunities and mentorship programs across Rwanda. The app has over 10,000 active users and growing.
        </p>
        <p className="text-gray-700">
          “Technology can democratize access — my dream is to make job search easier for every young person, no matter where they live,” Diane shares.
        </p>
      </article>

      {/* Story 4 */}
      <article className="bg-pink-50 p-8 rounded-lg shadow-md border-l-8 border-pink-600 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-700 mb-3">👩🏽‍🎨 Natasha’s Creative Design Studio</h2>
        <p className="mb-4 text-gray-700">
          Natasha’s passion for graphic design turned into a thriving freelance studio offering branding services to startups and NGOs. She started with no formal training but grew through online courses and mentorship.
        </p>
        <p className="text-gray-700">
          “The creative industry has huge potential for youth. With the internet, the world is your marketplace,” Natasha encourages.
        </p>
      </article>

      {/* Call to action */}
      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">✨ Ready to Write Your Own Story?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          Success is not just for the lucky few. With determination, skills, and support, every young Rwandan can build a career that matters. Let’s build a future beyond degrees, together.
        </p>
        <a
          href="/#/get-involved"
          className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded shadow"
        >
          Join the Movement
        </a>
      </section>
    </div>
  );
}

export default SuccessStories;

