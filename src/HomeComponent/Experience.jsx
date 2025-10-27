import React from "react";

const Experience = ({ experience }) => {
  const base_URL = "http://localhost:1337";
  const bgColors = ["#ffc8dd", "#a2d2ff", "#d9ed92", "#e3d5ca"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center py-12">
      {experience.map((experience, index) => {
        const { title, description, experience_icon } = experience;
        const imageUrl = experience_icon?.url
          ? `${base_URL}${experience_icon.url}`
          : "";
        const bgColor = bgColors[index % bgColors.length];

        return (
          <div
            key={index}
            className="card shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl w-80 border border-gray-100"
            style={{ backgroundColor: bgColor }}
          >
            {imageUrl && (
              <figure className="px-6 pt-6">
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded-xl w-24 h-24 object-contain mx-auto"
                />
              </figure>
            )}
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg font-bold text-black">
                {title}
              </h2>
              <p className="text-black text-sm">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
