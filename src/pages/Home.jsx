import linkedinIcon from "../assets/likedin.png";
import githubIcon from "../assets/github.png";
import gmailIcon from "../assets/mail.png";
import profileImage from "../assets/profile.jpg";import resumePDF from "../assets/Pajjuri_Priya_JavaFullstack_Developer.pdf";
function Home() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h3>Hello, I'm</h3>
                <h1>Priya Pajjuri</h1>
                <h4>Java Developer | Web Enthusiast | Problem Solver</h4>
                <p>
                    I am a passionate and dedicated Computer Science graduate (2024)
                    with a strong interest in building scalable web applications and
                    exploring data-driven solutions.
                </p>
                <div className="hero-buttons">

                    <button
                        className="about-btn secondary"
                        onClick={() => window.open(resumePDF)}
                    >
                        Hire Me
                    </button>

                </div>


                <div className="social-icons">
                <a href="https://www.linkedin.com/in/pajjuri-priya-425123229" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>



                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>



                 <a href="mailto:priyapajjuri@gmail.com">
                    <img src={gmailIcon} alt="Email" />
                 </a>
                </div></div>
            <div className="hero-image">
                <img src={profileImage} alt="Priya Pajjuri" className="profile-img"/>
                <p className="quote">Keep Building Better 💙</p>
            </div>
        </section>
    );
}
export default Home;