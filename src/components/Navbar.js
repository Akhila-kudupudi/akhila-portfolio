import React from "react";

const Navbar = () => (
  <nav className="bg-gray-900 text-white w-64 fixed top-0 left-0 h-screen z-50 flex flex-col py-8 px-6">
    <h1 className="text-2xl font-bold mb-8">Akhila's Portfolio</h1>
    <ul className="space-y-4 text-sm font-medium">
      <li><a href="#home" className="block hover:text-blue-400">Home</a></li>
      <li><a href="#about" className="block hover:text-blue-400">About</a></li>
      <li><a href="#experience" className="block hover:text-blue-400">Work Experience</a></li>
      <li><a href="#skills" className="block hover:text-blue-400">Skills</a></li>
      <li><a href="#projects" className="block hover:text-blue-400">Projects</a></li>
      <li><a href="#publications" className="block hover:text-blue-400">Publications</a></li>
      <li><a href="#resume" className="block hover:text-blue-400">Resume</a></li>
      <li><a href="#contact" className="block hover:text-blue-400">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
