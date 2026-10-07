import { useEffect, useState } from "react";
import { getBlogs } from "../services/blogService";
import Card from "../components/Card";

function Blogs() {


    const blogs = [
        {
            id: 1,
            title: "Building a Full Stack Blog Platform",
            content:
                "Insights into designing a secure blogging platform with Spring Boot, Angular, Hibernate, and JWT authentication.",
            url: "https://github.com/yourusername/technical-blog-platform",
            image: "/images/blog-platform.png"
        },
        {
            id: 2,
            title: "Visualizing Sorting Algorithms",
            content:
                "Exploring algorithm efficiency through real-time animations using Python, Tkinter, and Matplotlib.",
            url: "https://github.com/yourusername/sorting-algorithms-visualiser",
            image: "/images/sorting-visualiser.png"
        }
    ];

    return (
        <section className="blogs">
            <h2>Blogs</h2>
            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} className="blog-img" />
                        <div className="blog-content">
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            <a
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-link"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Blogs;