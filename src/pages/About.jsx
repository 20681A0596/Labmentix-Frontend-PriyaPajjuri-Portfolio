import { useEffect, useState } from "react";
import { getAbout } from "../services/aboutService";

import personImage from "../assets/person.jpg";
import resumePDF from "../assets/Pajjuri_Priya_JavaFullstack_Developer.pdf";


function About() {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        getAbout().then(data => setAbout(data));
    }, []);

    return (
        <section className="about">
            <h2>
                <img src={personImage} alt="Person Icon " className="about-icon" height="45px"/>About Me
            </h2>


            {/* If backend provides description, show it. Otherwise fallback to static content */}
            {about?.description ? (
                <p>{about.description}</p>
            ) : (
                <>
                    <p>
                        I’m <strong>Priya Pajjuri</strong>, a <strong>Java Full Stack Developer</strong>
                        with expertise in <strong>Spring Boot, Angular, Selenium Java</strong>, and database management.
                        I hold a <strong>B.Tech in Computer Science & Engineering</strong> with a CGPA of 8.63, and bring
                        hands-on experience through internships and industry training.
                    </p>

                    <p>
                        My technical skills include <strong>Java, C, C++</strong>, frontend development with
                        <strong>HTML5, CSS3, AngularJS</strong>, backend services using <strong>Spring Boot & REST APIs</strong>,
                        and database management with <strong>SQL & DBMS</strong>. I also specialize in
                        <strong>QA Automation Testing</strong> using Selenium with Java, and version control with Git.
                    </p>

                    <h3>Internship & Training Experience</h3>
                    <ul>
                        <li>
                            <strong>Web Development Intern – Internshala:</strong> Built responsive web pages,
                            implemented frontend layouts, and practiced version control basics.
                        </li>
                        <li>
                            <strong>Java Developer Intern – Codsoft:</strong> Developed Java applications,
                            applied OOP principles, and improved code quality through debugging and testing.
                        </li>
                        <li>
                            <strong>Full Stack Java Developer Trainee – She Arise 2.0 Program:</strong>
                            Enrolled in enterprise Java and full stack development training.
                        </li>
                    </ul>

                    <p>
                        I am open to entry-level roles such as <strong>Software Developer, Java Developer,
                        Full Stack Developer, or QA Automation Engineer</strong>. Based in Hyderabad, Telangana,
                        I am flexible for hybrid or remote opportunities.
                    </p>

                    <div className="about-buttons">
                        <button
                            className="about-btn"
                            onClick={() => window.open("mailto:priyapajuri@gmail.com")}
                        >
                            Contact Me
                        </button>

                        <button
                            className="about-btn secondary"
                            onClick={() => window.open(resumePDF)}
                        >
                            Download Resume
                        </button>

                    </div>
                </>
            )}
        </section>
    );
}
export default About;
