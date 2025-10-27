import React from "react";

const Testimonials = ({ testimonials }) => {
  const { authorName, authorFrom, description, authorImage } = testimonials;
  const base_URL = "http://localhost:1337";
  const imageUrl = authorImage?.url ? `${base_URL}${authorImage.url}` : "";
  console.log(imageUrl);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mx-4 hover:shadow-2xl transition duration-300 flex flex-col items-center justify-center text-center h-full">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={authorName}
          className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gray-100 shadow"
        />
      )}
      <p className="text-gray-600 italic mb-4">"{description}"</p>
      <h3 className="text-lg font-semibold text-gray-800">{authorName}</h3>
      <span className="text-sm text-gray-500">{authorFrom}</span>
    </div>
  );
};

export default Testimonials;
