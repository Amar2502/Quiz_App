import React from "react";

function Contact() {
  return (
    <section className="bg-slate-500 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-white mb-8">
          Have any questions? We'd love to hear from you! Fill out the form below, or reach us via email or phone.
        </p>

        <div className="bg-gray-600 shadow-md rounded-lg p-6">
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium  text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md text-white outline-0 bg-slate-500 shadow-sm p-2 sm:text-sm"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium  text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md text-white outline-0 bg-slate-500 shadow-sm p-2"
                placeholder="example@domain.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium  text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md text-white outline-0 bg-slate-500 shadow-sm p-1"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-blue-600 "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-gray-300">
          <p>Email: <a href="mailto:amarpandey2502@gmail.com" className="text-white hover:underline">amarpandey2502@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
