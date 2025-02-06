import React, { useState, useEffect } from "react";
import "./PublicationDetail.scss";
import Banner from "../Banner";
import Bannerimg from "../../Assets/img/publicationbanner.png";
import { useLocation } from "react-router-dom";

const PublicationDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [content, setContent] = useState("");
  const location = useLocation();
  const blogreceived = location.state;

  // useEffect(() => {
  //   fetch("https://backend.mokshalegalgroup.com/blogs")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlogs(data);
  //       if (data.length > 0) setSelectedBlog(data[0]);
  //     })
  //     .catch((error) => console.error("Error fetching blogs:", error));
  // }, []);

  useEffect(() => {
    fetch(`https://backend.mokshalegalgroup.com${blogreceived.blog_file_url}`)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {
        console.log("error while fetching blog html content " + err);
      });
    console.log(blogreceived);
  }, []);

  return (
    <div className="publication-container">
      <Banner
        title="Publications"
        subtitle="Reputation, Respect, Result"
        backgroundImage={Bannerimg}
      />

      <div className="container-fluid py-4">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-md-3 col-lg-3 publication-sidebar">
            <h5>Publications</h5>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className={`publication-item ${
                  selectedBlog && selectedBlog.id === blog.id ? "active" : ""
                }`}
                onClick={() => setSelectedBlog(blog)}
              >
                {blog.blog_name}
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="col-md-9 col-lg-9">
            {selectedBlog ? (
              <div className="publication-content">
                <img
                  src={selectedBlog.blog_image_url}
                  alt={selectedBlog.blog_name}
                  className="img-fluid mb-3"
                />
                <h2>{selectedBlog.blog_name}</h2>
                <div className="content-html">{content}</div>
              </div>
            ) : (
              <p>Loading content...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;
