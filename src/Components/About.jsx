import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-slate-500 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          About Our Quiz Platform
        </h2>

        {/* Description */}
        <p className="text-lg text-white mb-10">
          Our quiz platform is designed to make learning and testing fun.
          Whether you're preparing for exams, learning new skills, or just want
          to challenge yourself, we have something for everyone.
        </p>

        {/* Image Section */}
        <div className="flex justify-center mb-10">
          <img
            src="/Quizlogo.png"
            alt="Quiz Platform"
            className="rounded-lg shadow-lg shadow-slate-900 w-44 h-44"
          />
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Interactive Quizzes
            </h3>
            <p className="text-gray-600">
              Take interactive quizzes that adapt to your learning style and
              help reinforce your knowledge.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Real-Time Feedback
            </h3>
            <p className="text-gray-600">
              Receive immediate feedback on your answers to help you improve and
              learn faster.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Customizable Difficulty
            </h3>
            <p className="text-gray-600">
              Choose the difficulty level that suits you, from beginner to
              expert, and challenge yourself.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <h4 className="text-xl font-semibold text-gray-200 mb-4">
            Ready to test your knowledge?
          </h4>
          <p className="text-white mb-6">
            Start taking quizzes today and see how much you know!
          </p>
          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
