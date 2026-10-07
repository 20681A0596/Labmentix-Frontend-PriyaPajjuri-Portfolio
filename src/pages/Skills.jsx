

import "./Skills.jsx";
/*
export default function Skills() {
    const skills = [
        { id: 1, name: "Java", level: "Intermediate", img: "/images/java.png" },
        { id: 2, name: "Python", level: "Intermediate", img: "/images/python.png" },
        { id: 3, name: "C++", level: "Intermediate", img: "/images/cpp.png" },
        { id: 4, name: "HTML5", level: "Intermediate", img: "/images/html.png" },
        { id: 5, name: "CSS3", level: "Intermediate", img: "/images/css.png" },
        { id: 6, name: "JavaScript", level: "Intermediate", img: "/images/javascript.png" },
        { id: 7, name: "Angular", level: "Beginner", img: "/images/angular.png" },
        { id: 8, name: "Spring Boot", level: "Intermediate", img: "/images/springboot.png" },
        { id: 9, name: "SQL", level: "Intermediate", img: "/images/sql.png" },
        { id: 10, name: "Selenium", level: "Beginner", img: "/images/selenium.png" },

    ];

    return (
        <section className="skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-card">
                        <img src={skill.img} alt={skill.name} className="skill-icon" />
                        <h3>{skill.name}</h3>
                        <p className="skill-level">{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}*//*
import React from "react";


function Skills() {
    const skills = [
        { id: 1, name: "Java", icon: "/assets/java.png" },
        { id: 2, name: "C", icon: "/assets/c.png" },
        { id: 3, name: "C++", icon: "/assets/cpp.png" },
        { id: 4, name: "HTML", icon: "/assets/html.png" },
        { id: 5, name: "CSS", icon: "/assets/css.png" },
        { id: 6, name: "SQL", icon: "/assets/sql.png" },
        { id: 7, name: "Spring Boot", icon: "/assets/Spb.png" },
        { id: 8, name: "Angular", icon: "/assets/angular.png" },
        { id: 9, name: "Selenium", icon: "/assets/selenium.png" },
        {id:10,name:"Python",icon:"/assets/python.png"}

    ];

    return (
        <section className="skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;*/

import React from "react";


// Import icons from assets folder
import javaIcon from "../assets/java.png";
import cIcon from "../assets/c.png";
import cppIcon from "../assets/cpp.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import sqlIcon from "../assets/sql.png";
import reactIcon from "../assets/react.png";
import angularIcon from "../assets/angular.png";
import javaScriptIcon from "../assets/js.png";
import seleniumIcon from "../assets/selenium.png";
import SpringBootIcon from "../assets/Spb.png";

function Skills() {
    const skills = [
        { id: 1, name: "Java", icon: javaIcon },
        { id: 2, name: "C", icon: cIcon },
        { id: 3, name: "C++", icon: cppIcon },
        { id: 4, name: "HTML", icon: htmlIcon },
        { id: 5, name: "CSS", icon: cssIcon },
        { id: 6, name: "SQL", icon: sqlIcon },
        { id: 7, name: "Spring Boot", icon: reactIcon },
        { id: 8, name: "Angular", icon: angularIcon },
        { id: 9, name: "JavaScript", icon: javaScriptIcon },
        { id: 10, name: "Selenium", icon: seleniumIcon },
        {id:11, name:"Spring Boot", icon:SpringBootIcon }
    ];

    return (
        <section className="skills" align="center">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;


