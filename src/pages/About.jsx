import React, { useEffect, useState } from "react";
import { fetchAboutData } from "../api/about";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const getAboutData = async () => {
      const response = await fetchAboutData();
      if (response) {
        setAbout(response.data);
      }
    };
    getAboutData();
  }, []);

  // Check if about exists before accessing its properties
  const imageUrl = about?.image?.formats?.large?.url
    ? `http://localhost:1337${about.image.formats.large.url}`
    : "";

  console.log(about?.title);
  console.log(about?.description);
  console.log(imageUrl);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Profile Image */}
        <img
          src={imageUrl} // replace with your own photo URL
          alt="Md Saifudullah"
          className="max-w-sm rounded-2xl shadow-2xl border-4 border-primary/30 hover:scale-105 transition duration-300"
        />

        {/* About Text */}
        <div className="text-left max-w-lg">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            {about?.title}
          </h1>
          <p className="py-2 text-gray-600 leading-relaxed">
            {about?.description}
          </p>

          <button className="btn btn-primary mt-6">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
