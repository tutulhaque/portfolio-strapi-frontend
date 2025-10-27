const projects = [
  {
    id: 1,
    title: "E-Commerce Web App",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Ordering System",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Travel Booking Website",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Social Media App",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "Online Learning Platform",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Vape Product Webshop",
    image:
      "https://tutulhaque.website/wp-content/uploads/2023/03/business-listing.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* ===== Banner Section ===== */}
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/6XbH6XM/projects-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">My Projects</h1>
            <p className="mb-5 text-lg">
              Explore a collection of my latest web applications and creative
              projects — designed with passion, precision, and performance in
              mind.
            </p>
          </div>
        </div>
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-gray-800">{project.title}</h2>
                <div className="card-actions mt-4">
                  <a href={project.link} className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
