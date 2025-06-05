import React, { useEffect } from "react";
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center px-6"
  >
    <div className="bg-gray-100 text-gray-900 rounded-xl shadow-lg p-10 max-w-3xl w-full text-center">
      <img
        src={`${process.env.PUBLIC_URL}/your-photo1.jpg`}
        alt="Akhila Kudupudi"
        className="w-24 h-24 mx-auto rounded-full shadow-md mb-4 object-cover"
      />
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">Akhila Kudupudi</h1>
      <h2 className="text-md sm:text-lg text-purple-700 font-semibold mb-6">
        M.S. in Data Analytics Engineering, George Mason University
      </h2>
      <p className="text-gray-700 mb-6">
        I'm a data-driven software professional passionate about building scalable systems and intelligent solutions. With hands-on experience in DevOps automation, graph databases, machine learning, and dashboarding, I’m actively seeking full-time opportunities as a <strong>Data Analyst</strong>, <strong>Data Engineer</strong>, <strong>DevOps Engineer</strong>, <strong>Business Intelligence Analyst</strong>, <strong>ML Engineer</strong>, or <strong>NLP Engineer</strong>.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">Python</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">SQL</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">R</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">Tableau</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">Power BI</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">Neo4j</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">AWS Neptune</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">MongoDB</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">Azure DevOps</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">NLP</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">Flask</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">PySpark</span>
      </div>
      <div className="space-x-4">
        <a href="#projects" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          View My Projects
        </a>
        <a href="#contact" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default function App() {
  useEffect(() => {
    if (window.location.hash === '') {
      window.location.hash = '#home';
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex">
      {/* Fixed Sidebar */}
      <Navbar />

      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          src={`${process.env.PUBLIC_URL}/real-dust-particles-black-background.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Main Content with left margin for sidebar */}
      <main className="ml-64 w-[calc(100%-16rem)] px-8 py-10 z-10 relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
