import React, { useEffect, useState } from "react";
import { fetchBlogData } from "../api/blog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogData = async () => {
      const response = await fetchBlogData();
      if (response) {
        setBlogs(response.data);
      }
    };
    getBlogData();
  }, []);

  return (
    <div className="min-h-screen bg-base-200 text-gray-800">
      {/* ===== Banner Section ===== */}
      <div
        className="h-[250px] bg-cover bg-center flex items-center justify-center mb-12"
        style={{
          background: "#956fff",
        }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          My Blog
        </h1>
      </div>

      {/* ===== Blog Cards ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {blogs?.map((blog) => {
          // ✅ Build image URL safely
          const imageUrl =
            blog?.cover?.formats?.small?.url || blog?.cover?.url
              ? `http://localhost:1337${
                  blog.cover.formats?.small?.url || blog.cover.url
                }`
              : "https://via.placeholder.com/400x300?text=No+Image";

          return (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <figure>
                <img
                  src={imageUrl}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.description}</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary btn-sm">Read More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
