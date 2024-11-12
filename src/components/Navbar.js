import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

useEffect(() => {
  setIsOpen(false)
},[location])

  // Toggle function for menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="bg-transparent dark:bg-transparent  w-full z-20 top-0 start-0 items-center justify-between p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium text-xl rounded-xl bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  isActiveLink("/")
                    ? "text-red-400 bg-red-200 md:text-red-400 md:bg-transparent"
                    : "text-red-600 dark:text-white"
                }`}
                aria-current={isActiveLink("/") ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  isActiveLink("/About")
                    ? "text-red-400 bg-red-200 md:text-red-400 md:bg-transparent"
                    : "text-red-700 dark:text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Resume"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  isActiveLink("/Resume")
                    ? "text-red-400 bg-red-200 md:text-red-400 md:bg-transparent"
                    : "text-red-700 dark:text-white"
                }`}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  isActiveLink("/Portfolio")
                    ? "text-red-400 bg-red-200 md:text-red-400 md:bg-transparent"
                    : "text-red-700 dark:text-white"
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/Certifications"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  isActiveLink("/Certifications")
                    ? "text-red-400 bg-red-200 md:text-red-400 md:bg-transparent"
                    : "text-red-700 dark:text-white"
                }`}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                  isActiveLink("/Contact")
                    ? "text-red-400 bg-red-200 md:text-red-400 md:bg-transparent"
                    : "text-red-700 dark:text-white"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
