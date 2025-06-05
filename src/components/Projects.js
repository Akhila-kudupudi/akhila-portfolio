import React from 'react';

const projects = [
  {
    title: "InfoTech Assistant: A Multimodal Conversational Agent",
    description:
      "AI-powered chatbot for IT web portal queries with NLP and multimodal interfaces.",
    technologies: ["NLP", "Multimodal Interfaces", "Conversation Handling"],
    image: "/Info_bridge.jpeg",
    repo: "https://github.com/Akhila-kudupudi/Infotech-Chatbot",
  },
  {
    title: "Augment Linkage: Evidence and Exploration",
    description:
      "Graph-based exploration of corporate linkages in fentanyl trafficking.",
    technologies: ["AWS Neptune", "Neo4j", "Tableau", "Gremlin", "Cypher"],
    image: "/Fentanyl.jpeg",
    repo: "https://github.com/Akhila-kudupudi/Akhila-kudupudi-Augment-Linkage-Fentanyl-Networks--Public",
  },
  {
    title: "Car Crash Analysis Pipeline",
    description:
      "Data cleaning, EDA, and ML on car crash data using PySpark and MongoDB.",
    technologies: ["PySpark", "MongoDB", "Tableau"],
    image: "/car-crash.avif",
    repo: "https://github.com/Akhila-kudupudi/Car-Crash-Analysis-pipeline",
  },
  {
    title: "Boston Housing Price Prediction",
    description:
      "Predicting and classifying house prices with ML models.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/Housing.webp",
    repo: "https://github.com/Akhila-kudupudi/Machine-Learning-on-Boston-Housing-Dataset",
  },
  {
    title: "From Bad to Good Graph: Transforming Data Visualization",
    description:
      "Redesign of gender pay gap chart using best practices.",
    technologies: ["Tableau", "US Census Data"],
    image: "/bad-graph.jpeg",
    repo: "https://github.com/Akhila-kudupudi/Bad-graph-to-good-graph--tableau",
  },
];

const Projects = () => (
  <section id="projects"  className="min-h-screen bg-white text-gray-900 px-8 py-20 rounded-2xl p-10">
    <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
            <p className="text-sm text-purple-600 mb-2 italic">{project.type}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View GitHub Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
