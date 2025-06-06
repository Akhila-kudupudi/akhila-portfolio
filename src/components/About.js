import React from 'react';

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center px-8 py-20"
  >
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-2xl p-10">
      
      {/* Text Section */}
      <div className="md:w-2/3 text-justify">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-800">
          I’m Akhila Kudupudi, a recent graduate with a Master’s degree in Data Analytics Engineering from George Mason University. My academic foundation is rooted in strong analytical, programming, and system design skills, preparing me to take on full-time roles in software development, data engineering, and automation. With a passion for building scalable solutions, I’m excited to contribute to innovative software teams driving impact through technology.
          <br /><br />
          I began my professional career at Tata Consultancy Services (TCS), where I led critical DevOps initiatives. My work involved streamlining CI/CD pipelines, implementing JDA WMS and TMS platforms for logistics, automating freight scheduling, and generating governance reports — all within Agile environments.
          <br /><br />
          Passionate about solving real-world problems with data, I’ve developed intelligent systems like the InfoTech Assistant, a multimodal AI chatbot using NLP and Meta’s LLaMA model, and built machine learning pipelines to analyze 172K+ driver crash records using MongoDB, Databricks, and Tableau. I've also contributed to graph-based investigations using Neo4j and AWS Neptune to uncover complex organizational linkages.
          <br /><br />
          With skills in Python, SQL, R, Tableau, Neo4j, and cloud platforms like AWS and Azure, I’m eager to contribute to teams focused on impactful analytics, intelligent automation, and scalable infrastructure. I'm currently seeking full-time roles in Data Engineering, DevOps, or AI-driven product development.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/my-photo.jpeg`}
          alt="Akhila Kudupudi"
          className="w-80 h-100 object-cover shadow-lg rounded-xl"
        />
      </div>
    </div>
  </section>
);

export default About;
