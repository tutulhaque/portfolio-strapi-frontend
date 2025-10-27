import React, { useState, useEffect } from "react";
import { fetchHomeData } from "../api/homeBanner";
import Banner from "../HomeComponent/Banner";
import Technologoy from "../HomeComponent/Technologoy";
import Experience from "../HomeComponent/Experience";
import Projects from "./Projects";
import HomeProjects from "../HomeComponent/HomeProjects";
import Testimonials from "../HomeComponent/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  const [data, setData] = useState({
    banner: null,
    technology: null,
    experience: null,
    projects: null,
    testimonials: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchHomeData();
        const { banner, technology, experience, home_projects, testimonials } =
          response.data;
        setData({
          banner,
          technology,
          experience,
          projects: home_projects,
          testimonials,
        });
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    getData();
  }, []);

  const { banner, technology, experience, projects, testimonials } = data;
  return (
    <div>
      {/* Banner Section */}
      {banner && (
        <Banner
          title={banner.title}
          description={banner.description}
          banner_image={banner.banner_image}
        />
      )}
      {/* Technology Section */}
      {technology && (
        <div className="my-16 text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">
            Our Work <span className="text-[#956fff]">Technology</span>
          </h2>
          <Technologoy technology={technology} />
        </div>
      )}
      {/* Experience Section */}
      {experience && (
        <div className="my-16 text-center py-20 bg-[#f7f7f7]">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">
            Our Work <span className="text-[#956fff]">Experience</span>
          </h2>
          <Experience experience={experience} />
        </div>
      )}
      {/* Services Section */}
      <div className="my-16 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Our <span className="text-[#956fff]">Services</span>
        </h2>
        <img
          src="http://localhost:1337/uploads/Our_services_transparent_fecfbdc2ff.png"
          alt=""
        />
      </div>

      {/* Project Section */}
      {projects && (
        <div className="my-16 text-center py-20 bg-[#f7f7f7]">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">
            Our Work <span className="text-[#956fff]">Project</span>
          </h2>
          <HomeProjects projects={projects} />
        </div>
      )}
      {/* Testimonial Section */}
      {testimonials && (
        <div className="text-center py-18">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">
            What <span className="text-[#956fff]">People</span> Say
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="max-w-6xl mx-auto"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.id}>
                <Testimonials testimonials={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Home;
