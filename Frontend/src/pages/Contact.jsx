import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4001/api/contact", formData);
      setSuccess("Thank you! We will contact you soon.");
      setFormData({ name: "", email: "", message: "" }); // ✅ reset form
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    }
  };

  return (
    <>
    <Navbar/>
     <div className="flex md:flex-row flex-col justify-between gap-10 p-10">
      <div className="md:w-1/2">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Get in Touch with SkillCart</h2>
  <p className="text-gray-700 text-lg mb-4">
    Have questions, feedback, or just want to say hello? We'd love to hear from you!
  </p>
  <p className="text-gray-700 text-lg mb-4">
    Whether you're looking for the perfect book, need help with your order, or want to collaborate —
    we’re always here to help.
  </p>
  <p className="text-gray-700 text-lg mb-4">
    Fill out the form and our team will get back to you within 24 hours. Your thoughts matter — let's
    connect and make reading even more enjoyable!
  </p>
  <div className="mt-6">
    <p className="text-md text-gray-600"><strong>Email:</strong> support@bookverse.com</p>
    <p className="text-md text-gray-600"><strong>Phone:</strong> +91-98765-43210</p>
    <p className="text-md text-gray-600"><strong>Address:</strong> 221B, Knowledge Street, Book City</p>
  </div>
   </div>

     <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 border"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 border"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 border"
          onChange={handleChange}
          value={formData.message}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
        {success && <p className="mt-2 text-green-600">{success}</p>}
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
