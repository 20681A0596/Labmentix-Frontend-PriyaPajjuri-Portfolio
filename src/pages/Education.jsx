import React from "react";
import "./Education.jsx";
import graduateIcon from "../assets/graduation.png";

function Education() {
    const education = [
        {
            id: 1,
            institution: "Christu Jyothi Institute of Technology & Science (JNTUH)",
            degree: "B.Tech - Computer Science & Engineering",
            year: "2020 - 2024",
            score: "CGPA: 8.63"
        },
        {
            id: 2,
            institution: "Sri Gayatri Junior College",
            degree: "Intermediate (MPC)",
            year: "2018 - 2020",
            score: "885 / 1000"
        },
        {
            id: 3,
            institution: "St Paul's High School",
            degree: "SSC",
            year: "2018",
            score: "GPA: 9.0"
        }
    ];

    return (
        <section className="education" >

            <h2>
                <img src={graduateIcon} alt="Graduate Icon" className="edu-icon" />
                 Education
            </h2>

            <div className="education-grid" >
                {education.map((e) => (
                    <div key={e.id} className="education-card">
                        <h3>{e.degree}</h3>
                        <p className="institution">{e.institution}</p>
                        <p className="year">{e.year}</p>
                        <p className="score">{e.score}</p>
                    </div>
                ))}
            </div>
        </section>

    );
}
export default Education;