import React from "react";

const Publications = () => {
  return (
    <section
      id="publications"
      className="min-h-screen bg-white text-gray-900 px-8 py-20 rounded-2xl p-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          📄 Publications
        </h2>

        <div className="bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* Thumbnail */}
          <img
            src="/Info_bridge.jpeg"
            alt="InfoTech Assistant"
            className="w-72 h-auto rounded-md shadow-md object-cover"
          />

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              InfoTech Assistant: A Multimodal Conversational Agent for InfoTechnology Web Portal Queries
            </h3>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Authors:</strong> Sai Surya Gadiraju, Duoduo Liao, <strong className="text-blue-700">Akhila Kudupudi</strong>, Santosh Kasula, Charitha Chalasani
            </p>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Publisher:</strong> IEEE | <strong>Conference:</strong> 2024 IEEE International Conference on Big Data (BigData)
            </p>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Date of Conference:</strong> December 15–18, 2024 | <strong>Published Online:</strong> January 16, 2025
            </p>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Location:</strong> Washington, DC, USA | <strong>DOI:</strong> 10.1109/BigData62323.2024.10825668
            </p>

            <p className="text-sm text-gray-700 mt-4 mb-3">
              <strong>Abstract:</strong> This pilot study presents the development of the InfoTech Assistant, a domain-specific, multimodal chatbot engineered to address queries in bridge evaluation and infrastructure technology. It integrates data scraping, large language models (LLMs), and Retrieval-Augmented Generation (RAG) to provide accurate and context-rich responses. The assistant achieved ~95% accuracy using a multimodal interface powered by Meta’s LLaMA model, supporting both textual and image-based queries.
            </p>

            <div className="space-x-4 mt-4">
              <a
                href="https://ieeexplore.ieee.org/document/10825668"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                View on IEEE
              </a>
              <a
                href="https://github.com/Akhila-kudupudi/InfoTech-Assistant-IEEE-Paper"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
              >
                View GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
