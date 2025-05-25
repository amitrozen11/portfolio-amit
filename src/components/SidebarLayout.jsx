import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function SidebarLayout({ children }) {
    const [devMode, setDevMode] = useState(false);
    const location = useLocation();

    const handleLogoClick = () => {
        setDevMode(true);
        setTimeout(() => setDevMode(false), 2500);
    };

    const navLink = (to, label) => (
        <Link
            to={to}
            className={`${location.pathname === to ? 'text-highlight font-bold' : 'hover:text-highlight'} border-b border-gray-700 pb-1`}
        >
            {label}
        </Link>
    );

    return (
        <div className={`bg-background text-white transition-all duration-700 ${devMode ? 'bg-black' : ''}`}>
            {/* Sidebar */}
            <aside className="w-64 bg-black border-r border-gray-800 h-screen fixed p-6 flex flex-col justify-between z-20">
                <div className="flex flex-col gap-6">
                    {/* Logo */}
                    <div className="border-b border-gray-700 pb-6 flex justify-center cursor-pointer" onClick={handleLogoClick}>
                        <img src="/logo.png" alt="ARY Logo" className="h-24 w-auto drop-shadow-xl transform hover:rotate-180 transition duration-500" />
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-4 text-lg">
                        {navLink('/', 'Home')}
                        {navLink('/certificates', 'Certificates')}
                        {navLink('/projects', 'Projects')}
                        {navLink('/product-management', 'PM')}
                        {navLink('/contact', 'Contact')}
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
            <main className="ml-64 p-10 relative">
                {children}

                {devMode && (
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-black px-6 py-2 rounded-lg text-lg font-bold z-50 shadow-lg animate-pulse">
                        Welcome to my portfolio 💻
                    </div>
                )}
            </main>
        </div>
    );
}
