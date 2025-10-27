import React from "react";

const HomeProjects = ({ projects }) => {
  const base_URL = "http://localhost:1337";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
      {projects.map((item) => {
        const imageUrl = item.project_image?.url
          ? `${base_URL}${item.project_image.url}`
          : "";

        return (
          <div
            key={item.id}
            className="card bg-base-100 shadow-md hover:shadow-2xl transition duration-300 w-80"
          >
            {imageUrl && (
              <figure>
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="rounded-t-xl h-48 w-full object-cover"
                />
              </figure>
            )}
            <div className="card-body items-center text-center">
              <h2 className="card-title text-gray-800">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="card-actions">
                <a href={`${item?.project_link}`}>
                  <button className="btn btn-primary">Demo</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeProjects;
