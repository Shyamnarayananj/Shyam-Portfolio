import React from "react";
import { Link } from "react-router-dom";

const portfolio = [
  {
    title: "Virtual-HR",
    imageUrl: "https://i.ibb.co/LnTYppm/virtual-hr.png",
    description: "Fully Automated, AI integrated candidate selection  process for software engineering roles using Machine Learning.",
    githubUrl: "https://github.com/Shyamnarayananj/Virtual_HR",
  },
  {
    title: "Blog App",
    imageUrl: "https://i.ibb.co/tDY55Fz/blog-app.png",
    description: "Personal Blog App using React and Intergrated with Github API.",
    githubUrl: "https://github.com/Shyamnarayananj/Blog_ReactProject",
  },
  {
    title: "Todo-WebApp",
    imageUrl: "https://i.ibb.co/JBV3tc3/todo-app.png",
    description: "Simple Todo WebApp using Django.",
    githubUrl: "https://github.com/Shyamnarayananj/Todo-App",
  },
  {
    title: "Password Generator",
    imageUrl: "https://i.ibb.co/ZJMTfwp/password-generator.png",
    description: "Password Generator using React.",
    githubUrl: "https://github.com/Shyamnarayananj/PasswordGenerator_React",
  },
  {
    title: "Coding-Bros website",
    imageUrl: "https://i.ibb.co/KF0Vfgq/coding-bros.png",
    description:"Coding-Bros website using Django.",
    githubUrl: "https://github.com/Shyamnarayananj/Coding_Bros",
  },
  {
    title: "Book Management System",
    imageUrl: "https://i.ibb.co/SNYnryT/bookmngmnt.png",
    description: "Book Management System for Anna University B.E CSE Regualation-2017 Students.",
    githubUrl: "https://github.com/Shyamnarayananj/BookManagement-System",
  },
];

function Portfolio() {
  return (
    <div className="portfolio-page bg-black bg-opacity-30 min-h-screen flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold text-white border-b-2 border-red-700 mb-8">
        PORTFOLIO
      </h2>
      <h3 className=" text-xl font-bold text-white text-start mb-5">MY WORKS</h3> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {portfolio.map((portfolio, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <Link to={portfolio.imageUrl}>
              <img
                src={portfolio.imageUrl}
                alt={portfolio.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {portfolio.description}
                </p>
              </div>
            </Link>
            {/* Link to the GitHub repository */}
            <button onClick={() => window.open(portfolio.githubUrl)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-dark dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-stone-800   rounded-md group-hover:bg-opacity-0">
                Github Link
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
