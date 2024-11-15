import React from "react";

function App() {
  const skills = [
    { name: "Data Bases", level: "70%" },
    { name: "Web Development", level: "90%" },
    { name: "Frontend Development", level: "100%" },
    { name: "Back-End Development", level: "60%" },
    { name: "Cloud Computing", level: "70%" },
    { name: "Problem Solving", level: "80%" },
    { name: "Networks", level: "50%" },
    { name: "SEO Optmization", level: "70%" },
  ];

  const languages = [
    { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png"},
    { name: "JAVASCRIPT", icon: "https://img.icons8.com/fluency/48/javascript.png" },
    { name: "BOOTSTRAP", icon: "https://img.icons8.com/color/48/bootstrap--v2.png" },
    { name: "REACT", icon: "https://img.icons8.com/office/40/react.png" },
    { name: "NODE JS/EXPRESS", icon: "https://img.icons8.com/color/48/nodejs.png" },
    { name: "C-PROGRAMMING", icon: "https://img.icons8.com/color/48/c-programming.png" },
    { name: "JQUERRY", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png" },
    { name: "PYTHON", icon: "https://img.icons8.com/color/48/python--v1.png" },
    { name: "DJANGO", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-color-tal-revivo.png" },
  ];

  return (
    <div className="about-page">
      <div className="bg-black bg-opacity-30 text-left text-white min-h-screen p-6 md:p-12 font-sans">
        <div className="flex justify-center">
        <h1 className="text-4xl font-bold border-b-2 border-red-700 tracking-wider inline text-center text-primary">
          ABOUT MYSELF
        </h1>
        </div>
        {/* About Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://i.ibb.co/F05Dmts/shyam-img.jpg"
              alt="Profile-Image"
              className="w-48 h-48 rounded-full"
            />
            <div>
              <h1 className="text-3xl text-red-700 font-bold">Web Developer</h1>
              <em className="text-lg mt-2">
                I am a Tech Endhusiast and an expert web developer with 1 year
                of professional experience in Web Development.
              </em>
              <div className="mt-4 space-y-1">
                <p>
                  <strong>Birthday:</strong> 25 March 2002
                </p>
                <p>
                  <strong>Download CV:</strong>{" "}
                  <a
                    href="https://1drv.ms/b/c/79658b14baa1cb78/EUm9qvrAqsNArSFb17qeuAkBfpUpjhpzz7NHLsI3NJCWew?e=uBXPAb"
                    className="text-red-700"
                  >
                    My CV
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> +91 6282463872
                </p>
                <p>
                  <strong>City:</strong> Palakkd,Kerala, INDIA
                </p>
                <p>
                  <strong>Degree:</strong> B.E CSE
                </p>
                <p>
                  <strong>Email:</strong> shyamnarayananj33467@gmail.com
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg">
          Hi, I’m J SHYAM NARAYANAN, a web developer with expertise in front-end development, especially using JavaScript frameworks like React. I’m passionate about building user-friendly, responsive websites and always strive to create clean, efficient code. I also have experience with back-end technologies, including Node.js .
          </p>
        </section>

        {/* Skills and Technologies Section */}
        <section className="flex flex-col md:flex-row justify-between mb-12">
          {/* Skills Section with 50% Width */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="text-lg">{skill.name}</p>
                <p className="text-lg text-right">{skill.level}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-red-400 h-2.5 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/4 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={lang.icon}
                    alt={lang.name}
                    className="w-12 h-12 mb-2"
                  />
                  <p>{lang.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
