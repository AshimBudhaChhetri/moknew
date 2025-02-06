import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Publications.scss";
import Banner from "../Banner.jsx";
import Bannerimg from "../../Assets/img/publicationbanner.png";

const Publications = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://backend.mokshalegalgroup.com/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="publication-page">
      <Banner
        title="Publications"
        subtitle="Reputation, Respect, Result"
        backgroundImage={Bannerimg}
      />

      {/* Articles Section */}
      <div className="articles-section container py-5">
        <div className="row">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div className="col-md-4 mb-4" key={blog.id}>
                <div className="article-card">
                  <div className="article-image position-relative">
                    <img
                      src={`https://backend.mokshalegalgroup.com${blog.blog_image_url}`}
                      alt={blog.blog_name}
                    />
                  </div>

                  <div className="article-content">
                    <p className="article-category">LAW FIRM</p>
                    <h3 className="article-title">{blog.blog_name}</h3>
                    <p className="article-description">
                      {blog.blog_description}
                    </p>
                    <button
                      onClick={() => navigate("publications", { state: blog })}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading blogs...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
