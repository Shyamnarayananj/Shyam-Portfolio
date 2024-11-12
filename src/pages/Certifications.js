import React from "react";
import { Link } from "react-router-dom";

const certifications = [
  {
    title: "AWS Community",
    imageUrl: "https://i.ibb.co/Vj4LW17/amazon.png",
    description: "Backend Development using Express and Node.js",
  },
  {
    title: "Google Developer Student Clubs",
    imageUrl: "https://i.ibb.co/GTrvfjx/google-developer-students-club.png",
    description: "Backend Workshop",
  },
  {
    title: "CISCO CCNAv7",
    imageUrl: "https://i.ibb.co/Hr3BnLR/networking.png",
    description: "Introduction to Networks by CISCO",
  },
  {
    title: "Certificate of Participation",
    imageUrl: "https://i.ibb.co/MkthzC6/certificate-of-participation.png",
    description: "Backend Development By Devtown",
  },
  {
    title: "Big-Data Analytics",
    imageUrl: "https://i.ibb.co/0J13wM5/Big-Data.png",
    description:
      "Naan Mudhalvan TN-GOV Big Data Analytics course completion certificate",
  },
  {
    title: "Startup India",
    imageUrl: "https://i.ibb.co/4ZVfQYs/startup-india.png",
    description: "Certificate of Appreciation from Devtown",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-page bg-black bg-opacity-30 min-h-screen flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold text-white border-b-2 border-red-700 mb-8">CERTIFICATIONS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {certifications.map((certifications, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <Link to={certifications.imageUrl}>
            <img
              src={certifications.imageUrl}
              alt={certifications.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-xl font-semibold text-white mb-2">
                {certifications.title}
              </h3>
              <p className="text-gray-300 text-center">
                {certifications.description}
              </p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
