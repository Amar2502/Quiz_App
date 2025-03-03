import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-700 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to=""><img src='/Quizlogo.png' alt="Quiz Logo" className="w-10 h-10" /></Link>
          <h1 className="text-white text-xl font-bold"><Link to="">QuizWeb</Link></h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 mx-4">
          <Link to="" className="text-white hover:text-gray-200 font-medium">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transform: "rotate(90deg)" }} // Rotate for open menu
              >
                <line
                  x1="4"
                  y1="6"
                  x2="20"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="18"
                  x2="20"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform duration-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transform: "rotate(0deg)" }} // Default position
              >
                <line
                  x1="4"
                  y1="6"
                  x2="20"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="18"
                  x2="20"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="flex justify-end">
          <div className="md:hidden mt-4 bg-gray-600 p-3 rounded-md shadow-md space-y-2 flex flex-col w-fit justify-center">
            <Link
              to=""
              className="text-white hover:text-gray-200 font-medium flex justify-center"
              onClick={(e)=> {
                e.stopPropagation
                setIsMenuOpen((prev) => !prev)
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 font-medium flex justify-center"
              onClick={(e)=> {
                e.stopPropagation
                setIsMenuOpen((prev) => !prev)
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 font-medium flex justify-center"
              onClick={(e)=> {
                e.stopPropagation
                setIsMenuOpen((prev) => !prev)
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
