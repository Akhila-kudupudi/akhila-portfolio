import React from 'react';

const Resume = () => (
  <section id="resume" className="min-h-screen px-8 py-20">
    <div className="max-w-5xl w-full mx-auto bg-white bg-opacity-90 shadow-xl rounded-2xl p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">My Resume</h2>

      {/* Scrollable iframe container */}
      <div
        className="w-full h-[800px] overflow-y-scroll overflow-x-hidden border border-gray-300 rounded-lg shadow-lg"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <iframe
          src="/Resume_AkhilaKudupudi_Portfolio.pdf"
          title="Resume PDF"
          width="100%"
          height="1700px"  // Ensure it's tall enough to scroll
          className="w-full"
          style={{ border: 'none' }}
        />
      </div>

      {/* Download button */}
      <div className="flex justify-center mt-6">
        <a
          href="/Resume_AkhilaKudupudi.pdf"
          download="Resume_AkhilaKudupudi.pdf"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
