import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SidebarLayout({ children }) {
    return (
        <div className="bg-background text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-black border-r border-gray-800 h-screen fixed p-6 flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                    {/* Logo */}
                    <div className="border-b border-gray-700 pb-6 flex justify-center">
                        <img src="/logo.png" alt="ARY Logo" className="h-24 w-auto drop-shadow-xl" />
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-4 text-lg">
                        <Link to="/" className="hover:text-highlight border-b border-gray-700 pb-1">Home</Link>
                        <Link to="/certificates" className="hover:text-highlight border-b border-gray-700 pb-1">Certificates</Link>
                        <Link to="/projects" className="hover:text-highlight border-b border-gray-700 pb-1">Projects</Link>
                        <Link to="/product-management" className="hover:text-highlight">PM</Link>
                    </nav>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 text-2xl text-accent">
                    <a href="https://www.linkedin.com/in/amit-rozen/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/amitrozen11" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">
                        <FaGithub />
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-10">
                {children}
            </main>
        </div>
    );
}
