import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Priya Portfolio</h1>
            <div className="space-x-6">
                <Link to="/" className="hover:text-blue-400">Home</Link>
                <Link to="/about" className="hover:text-blue-400">About</Link>
                <Link to="/blogs" className="hover:text-blue-400">Blogs</Link>
                <Link to="/education" className="hover:text-blue-400">Education</Link>
                <Link to="/experience" className="hover:text-blue-400">Experience</Link>
                <Link to="/media" className="hover:text-blue-400">Media</Link>
                <Link to="/messages" className="hover:text-blue-400">Messages</Link>
                <Link to="/projects" className="hover:text-blue-400">Projects</Link>
                <Link to="/skills" className="hover:text-blue-400">Skills</Link>
            </div>
        </nav>
    );
}

export default Navbar;