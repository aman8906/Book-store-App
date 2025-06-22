import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen px-6 py-12 flex items-center justify-center bg-white dark:bg-slate-900 dark:text-white">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6">About SkillCart</h1>
          <p className="text-lg mb-4">
            Welcome to <strong>SkillCart</strong>, your trusted companion on the journey of learning, imagination, and knowledge. Founded with a passion for reading and a mission to make books accessible to everyone, SkillCart is more than just an online bookstore — it's a community of curious minds.
          </p>
          <p className="text-lg mb-4">
            Whether you're a student preparing for exams, a professional upgrading your skills, or a reader diving into fiction, our catalog is curated to meet every need. From bestselling titles to hidden gems, we aim to bring quality content right to your fingertips.
          </p>
          <p className="text-lg mb-4">
            Our commitment is to offer <span className="font-semibold text-blue-600 dark:text-blue-400">free and affordable books</span>, especially for learners. We also feature a growing collection of free resources and guides to support your reading journey.
          </p>
          <p className="text-lg">
            Thank you for being a part of our story. At <strong>SkillCart</strong>, we believe that every book has the power to change a life — and we’re here to help you find yours.
          </p>
        </div>
      </div>

      
    </>
  );
}

export default About;
