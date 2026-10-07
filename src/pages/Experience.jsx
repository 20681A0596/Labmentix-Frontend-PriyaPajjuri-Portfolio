/*import { useEffect, useState } from "react";
import { getExperience } from "../services/experienceService";

function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        getExperience().then(data => setExperience(data));
    }, []);

    return (
        <div className="page">
            <h1>Experience</h1>
            <ul>
                {experience.map(exp => (
                    <li key={exp.id}>
                        <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Experience;*/
/*
import { useEffect, useState } from "react";
import { getExperience } from "../services/experienceService";
import "./Experience.jsx"; // optional styling

function Experience() {
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getExperience()
            .then(data => {
                setExperience(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching experience:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="page">
            <h1>Experience</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {experience.map(exp => (
                        <li key={exp.id}>
                            <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Experience;*/
import React from "react";
import "../styles/globals.css";

function Experience() {
    const experiences = [
        {
            role: "Web Development Intern",
            company: "Internshala",
            duration: "Jan 2026 – Mar 2026",
            description: "Worked on frontend development tasks, building responsive UI components."
        },
        {
            role: "Java Developer Intern",
            company: "Codsoft",
            duration: "Feb 2026 – Apr 2026",
            description: "Developed backend APIs and integrated them with frontend applications."
        },
        {
            role: "Full Stack Java Developer",
            company: "She Arise 2.0 CSR Initiative",
            duration: "Apr 2026 – Jun 2026",
            description: "Built full-stack applications using Java, React, and Spring Boot."
        },
        {
            role: "Java Development Intern",
            company: "Labmentix",
            duration: "Sep 2026 – Present",
            description: "Working on backend services, Maven dependency management, and deployment."
        }
    ];

    return (
        <div className="experience-container">
            <h1>Experience</h1>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <h2>{exp.role}</h2>
                        <h3>{exp.company}</h3>
                        <p className="duration">{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
