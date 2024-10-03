import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../public/images/book_logo.png';
import '../index.css';

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-gradient-to-r from-green-700 to-green-400 text-white  p-4  flex items-center justify-between font-poppins">
            <img src={logo} alt="logo" width={150} height={180} />
            <nav className="hidden lg:flex  md:space-x-6">
                <Link to="/" className="px-8 text-2xl no-underline hover:text-3xl max-sm:text-2xl ">Main Page</Link>
                <Link to="/about" className=" px-8 text-2xl no-underline hover:text-3xl max-sm:text-2xl">About</Link>
                <Link to="/generate" className="px-8 text-2xl no-underline hover:text-3xl max-sm:text-2xl " >Generation Page</Link>
            </nav>
            <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white border-2 border-white px-4 font-roboto py-2 rounded-md hover:bg-opacity-50 transition duration-200"
                >
                    menu
                </button>
                {isMenuOpen && (
                    <nav className="flex flex-col space-y-2 mt-2">
                        <Link to="/" className="hover:underline">Main Page</Link>
                        <Link to="/about" className="hover:underline">About</Link>
                        <Link to="/generate" className="hover:underline">Generation Page</Link>
                    </nav>
                )}
            </div>
            <button className="bg-white text-green-600 ml-10  px-4 py-2 text-xl rounded-md hover:bg-gray-200 transition duration-200">
                click
            </button>
        </div>
    );
};

export default NavBar;