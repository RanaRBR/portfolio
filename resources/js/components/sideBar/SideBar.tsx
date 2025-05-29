import { Link } from '@inertiajs/react';
import { AiFillHome } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaEnvelope  } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { MdOutlineWork } from "react-icons/md";
import { RiUserStarFill, RiComputerFill } from "react-icons/ri";


export default function Sidebar() {
    return (
        <nav className="fixed top-0 left-0 flex h-screen w-60 flex-col bg-white p-5 shadow-lg">
            <div className="mb-8 flex-shrink-0">
                <Link href="/">
                    <img src="/images/logo.png" alt="Logo" className="h-30 w-auto" />
                </Link>
            </div>

            <div className="mt-10 flex flex-grow flex-col space-y-6">
                <a
                    href="/"
                    className="flex items-center space-x-2 text-xl font-semibold text-gray-800 no-underline transition duration-500 ease-in-out hover:-translate-y-2 hover:text-amber-600"
                >
                    <AiFillHome size={24} />
                    <span>Accueil</span>
                </a>
                <a
                    href="#about"
                    className="flex items-center space-x-2 transform text-xl font-semibold text-gray-800 no-underline transition duration-500 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    <FaUser size={24} />
                    <span>A propos</span>
                </a>
                <a
                    href="#experiences"
                    className="flex items-center space-x-2 transform text-xl font-semibold text-gray-800 no-underline transition duration-500 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    <RiUserStarFill size={24} />
                    <span>Expériences</span>
                </a>
                <a
                    href="#competences"
                    className="flex items-center space-x-2 transform text-xl font-semibold text-gray-800 no-underline transition duration-500 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    <RiComputerFill size={24} />

                    <span>Compétences</span>
                </a>
                <a
                    href="#projects"
                    className="flex items-center space-x-2 transform text-xl font-semibold text-gray-800 no-underline transition duration-500 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    <MdOutlineWork size={24} />
                    <span>Projets</span> 
                </a>
                <a
                    href="#contact"
                    className="flex items-center space-x-2 transform text-xl font-semibold text-gray-800 no-underline transition duration-500 ease-in-out hover:-translate-y-1 hover:text-cyan-600"
                >
                    <FaEnvelope size={24} />
                    <span>Contact</span>
                </a>
            </div>
            <div className="mt-10 mb-20 flex space-x-4 text-gray-800 hover:text-cyan-600">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
            </div>
        </nav>
    );
}
