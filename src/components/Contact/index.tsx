import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Reset form fields after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-slate-900 px-10 py-8" id="contact">
      <div>
        <h2 className="text-4xl text-white">Get In Touch</h2>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-4 "
            style={{ width: "500px" }}
          >
            <div className="">
              <label htmlFor="name" className="text-white block text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-white p-2 mt-2 bg-slate-600 border-2 border-transparent rounded focus:border-orange-500 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-white block text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 text-white mt-2 bg-slate-600 border-2 border-transparent rounded focus:border-orange-500 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white block text-left">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 text-white mt-2 bg-slate-600 border-2 border-transparent rounded focus:border-orange-500 focus:outline-none"
                placeholder="Your Message"
                required
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-orange-700 main-bg-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
