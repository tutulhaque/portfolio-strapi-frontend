import React from "react";

const Banner = ({ title, description, banner_image }) => {
  const base_URL = "http://localhost:1337";
  const imageUrl = banner_image?.formats?.large?.url
    ? `${base_URL}${banner_image.formats.large.url}`
    : "";

  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-[#7e5bef]/30 to-[#5b21b6]/30"></div>

      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{description}</p>
          <a href="/contact">
            <button className="btn btn-[#956fff]">Contact Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
