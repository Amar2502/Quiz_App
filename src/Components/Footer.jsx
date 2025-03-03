import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto text-center md:text-left">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Section */}
          <div className="w-1/1 mx-2">
            <h3 className="text-lg font-bold mb-2">About QuizWeb</h3>
            <p className="text-sm">
              QuizWeb is your ultimate destination for fun and educational
              quizzes. Test your knowledge and learn something new every day!
            </p>
          </div>

          {/* Contact Section */}
          <div className="mx-2">
            <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:support@quizweb.com"
                className="text-blue-400 hover:underline"
              >
                amarpandey2502@gmail.com
              </a>
            </p>
            {/* <p className="text-sm">Phone: +123 456 7890</p> */}
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-center">
          <p>
            © {new Date().getFullYear()} QuizWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
