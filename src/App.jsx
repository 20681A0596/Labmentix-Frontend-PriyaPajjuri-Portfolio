import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Experience from "./pages/Experience";
import Messages from "./pages/Messages";
import Media from"./pages/Media";
import Education from "./pages/Education";


import "./styles/globals.css";

function App() {


    return (

            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/mesaages" element={<Messages />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/education" element ={<Education />}/>



                </Routes>
            </Router>

    );
}

export default App;