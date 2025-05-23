import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-background text-white py-4 px-8 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo / Name */}
        <div className="text-highlight font-bold text-2xl">My Portfolio</div>

        {/* External links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/amit-rozen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/amitrozen11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight transition"
          >
            GitHub
          </a>
        </div>

        {/* Internal links */}
        <div className="flex gap-4">
          <Link to="/" className="hover:text-highlight transition">Home</Link>
          <Link to="/certificates" className="hover:text-highlight transition">Certificates</Link>
          <Link to="/projects" className="hover:text-highlight transition">Projects</Link>
          <Link to="/product-management" className="hover:text-highlight transition">PM</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
