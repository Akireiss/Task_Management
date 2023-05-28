import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                   
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className="border-b border-[#0f7383] text-gray-500 hover:bg-gray-700 
                                    hover:text-white px-3 py-2 text-sm font-medium"
                                >
                                    Home
                                </Link>
                               
                    
                     
                            </div>
                        </div>
                    </div>

                    <div className='space-x-3 '>
                      
                                <Link
                                    to="/login"
                                    className="text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </Link> 
                                <Link
                                    to="/register"
                                    className=" text-gray-500  px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Register
                                </Link>
                        </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </Link>
                   
                </div>
            </div>
        </nav>

      

    );
}

