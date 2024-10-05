import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form data after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-form-section bg-white p-8 md:p-10 lg:p-12 text-black">
      <h2 className="text-3xl mb-6 text-center">Contact with Me</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label className="block mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md bg-white  focus:outline-none focus:ring focus:ring-blue-500"
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label className="block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-700 rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full text-white p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
          whileHover={{ scale: 1.05 }} // Animation on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Send Message
        </motion.button>
      </form>

      {submitted && (
        <motion.div
          className="mt-4 text-center text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Your message has been sent successfully!</p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
