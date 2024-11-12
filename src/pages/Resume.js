import React from "react";

function Resume() {
  return (
    <div className="resume-page bg-secondary text-white p-8 font-sans bg-black bg-opacity-30 min-h-screen flex flex-col items-center justify-center py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold border-b-2 border-red-700 tracking-wider text-primary">
          CHECK MY RESUME
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Summary Section */}
        <section>
          <h2 className="text-3xl font-semibold text-primary text-left pb-2 mb-4">
            Summary
          </h2>
          <ol className="relative  border-s border-gray-500 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border-4 border-red-500 dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="mb-1 text-xl font-normal leading-none text-left text-red-500 dark:text-gray-500">
                J SHYAM NARAYANAN
              </div>
              <em className="text-left font-normal text-base text-white dark:text-white">
                "I am a versatile web developer who merges technical skill with
                design insight to build responsive, user-focused, and scalable
                digital solutions that drive impactful results."
              </em>
              <ol className="list-disc text-left px-6">
                <br></br>
                <li>Palakkad,Kerala</li>
                <li>+91 6282463872</li>
                <li>shyamnarayananj33467@gmail.com</li>
              </ol>
            </li>
          </ol>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-semibold text-primary text-left pb-2 mb-4">
            Education
          </h2>
          <ol className="relative border-s border-gray-500 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border-4  border-red-500 dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="mb-1 text-xl font-normal leading-none text-red-500 text-left dark:text-gray-500">
                B.E COMPUTER SCIENCE AND ENGINEERING
              </h3>
              <div className="bg-stone-700 block ml-0 p-1 rounded text-start">
                2020-2024
              </div>
              <h3 className="text-base font-normal text-left text-white dark:text-white">
                Anna University, Tamil Nadu
              </h3>
              <p className="text-base font-normal text-white text-left dark:text-gray-400">
                Average CGPA Of 8.0 till current semester.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border-4 border-red-500 dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="mb-1 text-xl font-normal leading-none text-red-500 text-left dark:text-gray-500">
                HIGHER SECONDARY
              </h3>
              <div className="bg-stone-700 block ml-0 p-1 rounded text-start">
                2018-2020
              </div>
              <h3 className="text-base font-normal text-left text-white dark:text-white">
                CAHSS,Palakkad,Kerala.
              </h3>
              <p className="text-base font-normal text-white text-left dark:text-gray-400">
                Secured 86% of Marks.
              </p>
            </li>
          </ol>
        </section>

        {/* Professional Experience Section */}
        <section className="md:col-span-2">
          <h2 className="text-3xl font-semibold text-primary text-left pb-2 mb-4">
            Professional Experience
          </h2>
          <ol className="relative border-s border-gray-500 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border-4  border-red-500 dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="mb-1 text-xl font-normal leading-none text-red-500 text-left dark:text-gray-500">
                WEB DESIGNER
              </h3>
              <div className="bg-stone-700 block ml-0 p-1 rounded text-start">
                2024-Present
              </div>
              <h3 className="text-base font-normal text-left text-white dark:text-white">
                IRA- SPORTSWEAR, Tiruppur, Tamil Nadu.
              </h3>
              <ol className="list-disc text-left px-6">
                <br></br>
                <li>
                  Design and implementation of Web graphics,Generating SEO
                  friendly components <br></br>And maintaining the website.
                </li>
                <li>Role: Showcasing the company's product to customers.</li>
                <li>
                  Aiming to increase the overall Sales of Company's Products
                  through their website.
                </li>
              </ol>
            </li>
            <li className="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border-4 border-red-500 dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="mb-1 text-xl font-normal leading-none text-red-500 text-left dark:text-gray-500">
                FRONT END DEVELOPER
              </h3>
              <div className="bg-stone-700 block ml-0 p-1 rounded text-start">
                2023-2024
              </div>
              <h3 className="text-base font-normal text-left text-white dark:text-white">
                NoTime.com, Kochi, kerala.
              </h3>
              <ol className="list-disc text-left px-6">
                <br></br>
                <li>
                  Contributing to the Projects of NoTime an E-learning Platform.
                </li>
                <li>
                  Role: Actively participated in the development and enhancement
                  of the user interface for NoTime,<br></br> demonstrating
                  strong proficiency in front-end technologies and frameworks.
                </li>
                <li>
                  Aiming to increase the user Experience and Enhancing the look
                  And Feel of the Website.
                </li>
              </ol>
            </li>
            <li className="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border-4  border-red-500 dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="mb-1 text-xl font-normal leading-none text-red-500 text-left dark:text-gray-500">
                FREELANCER
              </h3>
              <div className="bg-stone-700 block ml-0 p-1 rounded text-start">
                2020-Present
              </div>
              <h3 className="text-base font-normal text-left text-white dark:text-white">
                Active Freelancer since 2020.
              </h3>
              <ol className="list-disc text-left px-6">
                <br></br>
                <li>
                   Designing Digital Success for Growing Brands.
                </li>
                <li>
                  Role: Learning new technologies and always keep myself updated with new tech trends.
                </li>
                <li>
                  Aiming to increase my skills and dream to build large scale futuristic projects.
                </li>
              </ol>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Resume;
