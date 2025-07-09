// src/pages/GetInvolved.js
import React from "react";

function GetInvolved() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-14 text-gray-800">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-4">🤝 Get Involved: Be Part of the Solution</h1>
        <p className="text-lg text-gray-700">
          Together, we can transform youth unemployment in Rwanda. Whether through volunteering, partnerships, donations, or advocacy — your contribution matters.
        </p>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-green-50 p-8 rounded-lg shadow border-l-8 border-green-600 space-y-4">
        <h2 className="text-2xl font-semibold text-green-800">🙋‍♂️ Volunteer Your Time & Skills</h2>
        <p className="text-gray-700">
          Join workshops, mentor young job seekers, or assist in organizing events. Volunteers help build a stronger community and expand our reach.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Mentorship programs for youth entrepreneurship</li>
          <li>Technical training assistance in coding and digital skills</li>
          <li>Event coordination and outreach</li>
        </ul>
      </section>

      {/* Partnership Invitation */}
      <section className="bg-green-50 p-8 rounded-lg shadow border-l-8 border-green-500 space-y-4">
        <h2 className="text-2xl font-semibold text-green-700">🤝 Partner with Us</h2>
        <p className="text-gray-700">
          We collaborate with NGOs, government agencies, private companies, and educational institutions to create impactful youth employment programs.
        </p>
        <p className="text-gray-700">
          Interested in partnering? Help us scale proven solutions, co-create training programs, or sponsor innovation challenges.
        </p>
      </section>

      {/* Donation Call */}
      <section className="bg-green-50 p-8 rounded-lg shadow border-l-8 border-green-400 space-y-4">
        <h2 className="text-2xl font-semibold text-green-600">💸 Support Financially</h2>
        <p className="text-gray-700">
          Every contribution, big or small, fuels youth empowerment initiatives — from training materials to seed funding for startups.
        </p>
        <p className="text-gray-700">
          Donations can be made via mobile money, bank transfer, or crowdfunding campaigns. Transparency and accountability are our priorities.
        </p>
      </section>

      {/* Contact & Sign-up Form */}
      <section className="bg-green-50 p-8 rounded-lg shadow border-l-8 border-green-300 space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-green-700 text-center">📩 Join Us Today</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for your interest! We will get back to you soon.");
            e.target.reset();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block font-medium text-gray-700 mb-1">
              I'm interested in:
            </label>
            <select
              id="interest"
              required
              className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="volunteering">Volunteering</option>
              <option value="partnership">Partnership</option>
              <option value="donation">Donation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here"
              className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded shadow"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default GetInvolved;

