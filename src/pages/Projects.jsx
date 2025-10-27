import { useEffect, useState } from "react";
import { fetchProjectData } from "../api/project";

const Projects = () => {
  const [project, setProject] = useState(null);
  const [projectCard, setProjectCard] = useState([]);

  useEffect(() => {
    const getProjectData = async () => {
      const response = await fetchProjectData();
      if (response) {
        setProject(response.data);
      }
    };
    getProjectData();
  }, []);

  useEffect(() => {
    const getProjectCardData = async () => {
      const response = await fetchProjectData();
      if (response) {
        setProjectCard(response.data.project_card);
      }
    };
    getProjectCardData();
  }, []);

  const imageUrl = project?.project_banner_image?.formats?.large?.url
    ? `http://localhost:1337${project.project_banner_image.formats.large.url}`
    : "";
  return (
    <div className="min-h-screen bg-base-200">
      {/* ===== Banner Section ===== */}
      <div
        className="hero bg-[#956fff]/30 h-[400px]"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              {project?.project_banner_title}
            </h1>
            <p className="mb-5 text-lg">
              {project?.project_banner_description}
            </p>
          </div>
        </div>
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured <span className="text-[#956fff]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectCard?.map((item) => {
            // ✅ Choose the small image if available, otherwise the full one
            const projectImageUrl =
              item?.project_image?.formats?.small?.url ||
              item?.project_image?.url
                ? `http://localhost:1337${
                    item.project_image.formats?.small?.url ||
                    item.project_image.url
                  }`
                : "https://via.placeholder.com/400x300?text=No+Image";

            return (
              <div
                key={item.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
              >
                <figure>
                  <img
                    src={projectImageUrl}
                    alt={item?.title}
                    className="h-56 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-gray-800">{item?.title}</h2>
                  <p className="text-sm text-gray-600">{item?.description}</p>
                  <a href={`${item?.project_link}`}>
                    <button className="btn btn-primary">Demo</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
