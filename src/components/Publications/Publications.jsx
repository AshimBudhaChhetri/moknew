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

  // Function to create SEO-friendly slugs
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
  };

  // Function to limit words in description
  const truncateText = (text, wordLimit) => {
    if (!text) return ""; // Handle empty descriptions
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div className="publication-page">
      <Banner
        title={
          <>
            Our
            <em style={{ color: "#ac835d" }}> Publications</em>
          </>
        }
        subtitle={<em>Knowledge, Insights, and Research</em>}
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
                      {truncateText(blog.blog_description, 25)}
                    </p>
                    <button
                      className="learn-but"
                      onClick={() =>
                        navigate(
                          `/publications/${createSlug(blog.blog_name)}`,
                          {
                            state: blog,
                          }
                        )
                      }
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
