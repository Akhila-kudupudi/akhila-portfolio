import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_hqdo4ap',         // ✅ Your Service ID
      'template_75gmufe',        // ✅ Your Template ID
      form.current,
      'z-dt9DenUwMpq3MAl'        // ✅ Your Public Key
    ).then(
      () => {
        setFormStatus('Thank you! I’ll get back to you soon.');
        e.target.reset();
      },
      (error) => {
        setFormStatus('Oops! Something went wrong. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen bg-white text-gray-900 px-8 py-20 rounded-2xl p-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>
      <p className="text-center text-gray-600 mb-8">
        I'd love to hear from you! Whether you have a question or just want to say hi.
      </p>

      <form ref={form} onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Please type your message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Send Message
        </button>
        {formStatus && <p className="text-green-600 mt-4">{formStatus}</p>}
      </form>

      <div className="text-center mt-8 text-sm text-gray-600">
        Or reach me directly:{" "}
        <a href="mailto:akhila06121999@gmail.com" className="text-blue-700 underline">
          akhila06121999@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/akhila-kudupudi"
          className="text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
