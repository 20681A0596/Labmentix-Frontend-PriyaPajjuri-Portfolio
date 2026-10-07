import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import Card from "../components/Card";

import React from "react";
import "./Projects.jsx";
/*
export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Technical Blog Platform",
            description:
                "A full-stack blogging platform built with Spring Boot, Angular, Hibernate, and SQL. Features JWT authentication, role-based access control, and RESTful CRUD APIs for posts, profiles, and sessions. Led a team to deliver secure, scalable architecture with automated build pipelines.",
            link: "https://github.com/yourusername/technical-blog-platform"
        },
        {
            id: 2,
            title: "Sorting Algorithms Visualiser",
            description:
                "An interactive Python desktop application using Tkinter and Matplotlib to visualize Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and Selection Sort in real time. Designed for academic use with configurable dataset size and animation speed. Led a two-person team through development.",
            link: "https://github.com/yourusername/sorting-algorithms-visualiser"
        }
    ];

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((p) => (
                    <div key={p.id} className="project-card">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
*/



function Projects() {
    const projects = [
        {
            id: 1,
            title: "TechBlog",
            description:
                "A student tech blog with user/admin roles, posts, comments, search, and more.",
            tech: ["Angular", "Spring Boot", "MySQL", "JWT"],
            link: "#"
        },
        {
            id: 2,
            title: "Sorting Algorithm Visualization",
            description:
                "Visualized sorting algorithms with comparison count, Big-O notation, and configurable options.",
            tech: ["Python", "Tkinter", "Matplotlib"],
            link: "#"
        },
        {
            id: 3,
            title: "Cloud Based Storage Service (MVP)",
            description:
                "File storage and sharing platform with authentication, nested folders, sharing roles, and search features.",
            tech: ["Java", "Spring Boot", "React", "MySQL"],
            link: "#"
        }
    ];

    return (
        <section className="projects">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <div key={p.id} className="project-card">
                        <h3>{p.title}</h3>
                        <p className="description">{p.description}</p>
                        <div className="tech-stack">
                            {p.tech.map((t, index) => (
                                <span key={index} className="tech-icon">
                  {t}
                </span>
                            ))}
                        </div>
                        <a href={p.link} className="project-link">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
