// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold">Beyond Degrees</div>
        <nav className="flex gap-4 text-sm flex-wrap">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/statistics" className="hover:text-yellow-400">Statistics</Link>
          <Link to="/solutions" className="hover:text-yellow-400">Solutions</Link>
          <Link to="/stories" className="hover:text-yellow-400">Stories</Link>
          <Link to="/resources" className="hover:text-yellow-400">Resources</Link>
          <Link to="/media" className="hover:text-yellow-400">Media</Link>
          <Link to="/get-involved" className="hover:text-yellow-400">Get Involved</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

