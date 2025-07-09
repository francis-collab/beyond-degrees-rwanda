// src/pages/Contact.js
import React from "react";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-gray-800">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">📞 Contact Us</h1>
        <p className="text-lg text-gray-700">
          Have questions, partnership ideas, or want to learn more? Reach out to the Beyond Degrees team. We’re eager to connect with youth, partners, and supporters.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-blue-50 p-8 rounded-lg shadow max-w-xl mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for reaching out! We will respond shortly.");
            e.target.reset();
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full border border-blue-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-blue-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              placeholder="Write your message here"
              className="w-full border border-blue-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Office & Social Info */}
      <section className="max-w-xl mx-auto space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-900">🏢 Our Office</h2>
        <address className="not-italic text-gray-700">
          Beyond Degrees HQ<br />
          Kigali, Rwanda<br />
          Phone: +250 78789315<br />
          Email: <a href="mailto:francismutabazi96@gmail.com" className="text-blue-600 underline">francismutabazi96@gmail.com</a>
        </address>

        <h2 className="text-2xl font-semibold text-blue-900">🌐 Follow Us</h2>
<div className="flex justify-center space-x-8 text-blue-600 mt-4">
  {/* GitHub */}
  <a
    href="https://github.com/francis-collab"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="hover:text-blue-800"
  >
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.6-.6 2-1 .1-.7.4-1.2.8-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 0z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@FrancisMutabazi"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
    className="hover:text-blue-800"
  >
    <svg className="w-6 h-6 fill-current" viewBox="0 0 576 512">
      <path d="M549.7 124.1c-6.3-24-24.9-42.7-48.8-48.8C456.6 64 288 64 288 64s-168.6 0-212.9 11.3c-24 6.3-42.7 24.9-48.8 48.8C16 168.4 16 256 16 256s0 87.6 10.3 131.9c6.3 24 24.9 42.7 48.8 48.8C119.4 448 288 448 288 448s168.6 0 212.9-11.3c24-6.3 42.7-24.9 48.8-48.8C560 343.6 560 256 560 256s0-87.6-10.3-131.9zM232 334V178l142 78-142 78z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/francis-mutabazi-4a212130b"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="hover:text-blue-800"
  >
    <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512">
      <path d="M100.3 448H7V149.6h93.3V448zm-46.6-340c-29.8 0-53.7-24.2-53.7-53.7S24 0 53.7 0 107.4 24.2 107.4 53.7 83.5 108 53.7 108zM447.9 448h-93.3V302.4c0-34.7-12.4-58.4-43.5-58.4-23.7 0-37.8 16-44 31.5-2.3 5.6-2.9 13.5-2.9 21.4V448h-93.3s1.2-267.2 0-295H265v41.8c12.4-19.1 34.5-46.4 84-46.4 61.3 0 107.3 40 107.3 125.7V448z" />
    </svg>
  </a>
</div>

      </section>
    </div>
  );
}

export default Contact;

