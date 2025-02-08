import React, { useState, useEffect } from "react";
import "./PublicationDetail.scss";
import Banner from "../Banner";
import Bannerimg from "../../Assets/img/publicationbanner.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PublicationDetail = () => {
  const { slug } = useParams(); // Get the SEO-friendly slug from the URL
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [content, setContent] = useState("");

  // Function to create a slug from blog title
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
  };

  // Fetch blogs and update selected blog when slug changes
  useEffect(() => {
    fetch("https://backend.mokshalegalgroup.com/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);

        // Find the blog matching the slug
        const matchedBlog = data.find(
          (blog) => createSlug(blog.blog_name) === slug
        );

        if (matchedBlog) {
          setSelectedBlog(matchedBlog);
          fetchBlogContent(matchedBlog.blog_file_url);
        } else {
          navigate("/publications"); // Redirect to publications if no match found
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [slug]); // Re-run when slug changes

  // Fetch HTML content
  const fetchBlogContent = (fileUrl) => {
    if (!fileUrl) return;

    axios
      .get(
        `https://backend.mokshalegalgroup.com/blogs/${encodeURIComponent(
          fileUrl
        )}`
      )
      .then((response) => {
        setContent(response.data);
      })
      .catch((err) => {
        console.error("Error fetching blog HTML content:", err);
      });
  };

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
          <div className="col-md-3 col-lg-3">
            <div className="sidebar-main">
              <div className="publication-sidebar">
                <h5>Publications</h5>
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className={`publication-item ${
                      selectedBlog && selectedBlog.id === blog.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() => {
                      navigate(`/publications/${createSlug(blog.blog_name)}`);
                    }}
                  >
                    {blog.blog_name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-md-9 col-lg-9">
            {selectedBlog ? (
              <div className="publication-content">
                <div className="publication-img-div">
                  <img
                    src={`https://backend.mokshalegalgroup.com${selectedBlog.blog_image_url}`}
                    alt={selectedBlog.blog_name}
                    className="img-fluid mb-3"
                  />
                </div>
                {/* <h2>{selectedBlog.blog_name}</h2> */}
                <div
                  className="content-html"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
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
