// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Beyond Degrees Rwanda. All rights reserved. Developed and founded by Francis Mutabazi
      </p>
      <div className="mt-2 text-xs space-x-3">
        <a href="mailto:francismutabazi96@gmail.com" className="underline">Email Us</a>
        <a href="https://github.com/francis-collab" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
        <a href="https://www.youtube.com/@FrancisMutabazi" target="_blank" rel="noreferrer" className="hover:text-blue-500">YouTube</a>
      </div>
    </footer>
  );
}

export default Footer;

