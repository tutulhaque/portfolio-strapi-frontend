import React from "react";

const Technology = ({ technology }) => {
  const base_URL = "http://localhost:1337";

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-10 py-12 px-6 lg:px-20">
      {/* 30% Section — Text */}
      <div className="lg:w-1/3 w-full">
        <p className="text-gray-600 leading-relaxed text-left">
          I work with a variety of modern technologies to build efficient,
          scalable, and visually appealing web applications. By leveraging these
          tools, I create seamless and engaging user experiences while ensuring
          optimal performance across all devices and platforms. I focus on
          writing clean, maintainable code and implementing best practices that
          make projects future-proof and adaptable to evolving requirements. My
          passion lies in exploring new technologies, learning continuously, and
          applying innovative solutions to solve real-world challenges.
          Ultimately, I aim to deliver high-quality digital products that are
          not only functional but also provide meaningful and enjoyable
          experiences for users.
        </p>
      </div>

      {/* 70% Section — Technology Cards */}
      <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {technology.map((item) => {
          const imageUrl = item.technology_image?.url
            ? `${base_URL}${item.technology_image.url}`
            : "";

          return (
            <div
              key={item.id}
              className="card bg-base-100 shadow-xl p-4 w-72 hover:shadow-2xl transition duration-300"
            >
              {imageUrl && (
                <figure className="px-4 pt-4">
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="rounded-xl w-28 h-28 object-contain mx-auto"
                  />
                </figure>
              )}
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
