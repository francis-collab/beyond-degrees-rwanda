// src/pages/Statistics.js
import React from "react";

function Statistics() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 text-gray-800">
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">📊 Youth Employment Statistics</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Reliable data reveals the scope of youth unemployment in Rwanda — and the urgency to act. Below, we present statistics from national reports, labor surveys, and development agencies to help you understand the numbers behind the challenge.
        </p>
      </section>

      <section className="overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">📁 Key Data Table</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="p-3 border">Metric</th>
              <th className="p-3 border">Value</th>
              <th className="p-3 border">Year</th>
              <th className="p-3 border">Source</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="p-3 border">Youth unemployment rate (age 16–30)</td>
              <td className="p-3 border">21.2%</td>
              <td className="p-3 border">2023</td>
              <td className="p-3 border">NISR</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Unemployed degree holders</td>
              <td className="p-3 border">65,000+</td>
              <td className="p-3 border">2023</td>
              <td className="p-3 border">MINEDUC</td>
            </tr>
            <tr>
              <td className="p-3 border">Youth in informal employment</td>
              <td className="p-3 border">~75%</td>
              <td className="p-3 border">2022</td>
              <td className="p-3 border">ILO</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">TVET graduate job placement rate</td>
              <td className="p-3 border">73%</td>
              <td className="p-3 border">2022</td>
              <td className="p-3 border">WDA</td>
            </tr>
            <tr>
              <td className="p-3 border">Median time to first job (after degree)</td>
              <td className="p-3 border">14 months</td>
              <td className="p-3 border">2021</td>
              <td className="p-3 border">Youth Think Tank</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border">Digital job readiness among youth</td>
              <td className="p-3 border">22%</td>
              <td className="p-3 border">2021</td>
              <td className="p-3 border">UNDP</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">📉 Key Observations</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            While Rwanda has one of Africa's fastest-growing economies, youth unemployment remains disproportionately high — especially among degree holders.
          </li>
          <li>
            Informal employment is still the largest employer for youth, which often lacks stability, legal protections, and social security.
          </li>
          <li>
            TVET graduates fare better in job placement than university graduates, indicating a skill mismatch in formal education.
          </li>
          <li>
            Digital and remote work opportunities remain untapped, with low readiness across the youth population.
          </li>
        </ul>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border-l-4 border-blue-500 shadow">
          <h3 className="font-bold text-lg text-blue-800">🧠 Skills Gap</h3>
          <p className="text-gray-700 mt-2 text-sm">
            56% of employers report difficulty finding candidates with soft skills and real-world job experience.
          </p>
        </div>
        <div className="bg-white p-6 border-l-4 border-green-500 shadow">
          <h3 className="font-bold text-lg text-green-800">💼 Female Youth Unemployment</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Young women face higher unemployment (24%) than their male counterparts (18%), due to access barriers and gender roles.
          </p>
        </div>
        <div className="bg-white p-6 border-l-4 border-yellow-500 shadow">
          <h3 className="font-bold text-lg text-yellow-800">🖥️ Digital Inclusion</h3>
          <p className="text-gray-700 mt-2 text-sm">
            Less than 1 in 4 Rwandan youth are trained in digital skills, limiting access to online jobs and global freelance markets.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2">📣 What Can Be Done?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Addressing youth unemployment isn’t just about generating jobs — it's about building skills, mindsets, and ecosystems. Rwanda's future is bright if we invest in the right tools and policies today.
        </p>
      </section>
    </div>
  );
}

export default Statistics;

