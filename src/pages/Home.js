// src/pages/Home.js
import React from "react";

function Home() {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Beyond Degrees: Youth Employment Matters</h1>
        <p className="text-lg text-gray-700">
          Empowering Rwanda’s youth with skills, support, and solutions beyond academic qualifications.
        </p>
        <a href="#solutions" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          Explore Solutions
        </a>
      </section>

      {/* Video */}
      <section className="px-4 py-8">
  <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
    🎥 Voices of Rwandan Youth
  </h2>
  <div className="w-full max-w-3xl mx-auto h-[300px] relative overflow-hidden rounded-lg shadow-lg">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://youtube.com/embed/Epohv0oeIxI?si=4xDQp_CJBG_pR9Zv"
      title="Voices of Rwandan Youth"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


      {/* Why It Matters */}
      <section className="bg-gray-50 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Why Youth Employment Matters</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-blue-700">1. Economic Growth</h3>
            <p className="text-gray-600 mt-2">Youth employment drives innovation, entrepreneurship, and GDP growth in developing economies.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-blue-700">2. Reducing Poverty</h3>
            <p className="text-gray-600 mt-2">Employed youth uplift households and reduce dependency, improving standards of living across communities.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-blue-700">3. Stability & Peace</h3>
            <p className="text-gray-600 mt-2">Idle youth are more vulnerable to crime and unrest. Employment builds dignity and inclusion.</p>
          </div>
        </div>
        <p className="mt-6 text-gray-700">
          In Rwanda, 70% of the population is under the age of 30. Investing in youth employment is investing in the nation’s future.
        </p>
      </section>

      {/* Table */}
      <section id="data">
        <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-3 border">Metric</th>
                <th className="p-3 border">Value</th>
                <th className="p-3 border">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Youth Unemployment (2023)</td>
                <td className="p-3 border">21.2%</td>
                <td className="p-3 border">NISR</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border">University Graduates Without Jobs</td>
                <td className="p-3 border">65,000+</td>
                <td className="p-3 border">MINEDUC</td>
              </tr>
              <tr>
                <td className="p-3 border">TVET Job Placement Rate</td>
                <td className="p-3 border">73%</td>
                <td className="p-3 border">WDA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sidebar Note */}
      <aside className="bg-yellow-100 p-4 rounded shadow border-l-4 border-yellow-500">
        <h4 className="font-bold text-yellow-800 mb-2">💡 Did you know?</h4>
        <p className="text-sm text-gray-800">
          While degrees open doors, it’s the right combination of technical know-how, soft skills, and access to mentorship that unlocks long-term career success. Our initiative goes beyond education to employment.
        </p>
      </aside>
    </div>
  );
}

export default Home;

