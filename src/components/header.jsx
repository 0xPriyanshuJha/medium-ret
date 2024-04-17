import React, { useState } from "react";
import { Link } from "react-router-dom";
import Main from "../assets/main.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-hola z-50">
      <div className="size h-[80px] flex items-center justify-between max-w-7xl mx-auto pt-5">
        <img className="h-[60px] w-[370px]" src={Main} alt="logo" />

        <div className="flex items-center gap-9">
          <nav className="hidden sm:flex items-center gap-12 text-xl text-white">
            <Link to="#" className="hover:underline">
              Work
            </Link>
            <Link to="#" className="hover:underline">
              About
            </Link>
            <Link to="#" className="hover:underline">
              Education
            </Link>
            <Link to="#" className="hover:underline">
              Certification
            </Link>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </nav>

          <div className="sm:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white p-4 sm:hidden">
          <nav className="flex flex-col items-center gap-3">
            <Link to="#" className="hover:underline">
              Work
            </Link>
            <Link to="#" className="hover:underline">
              About
            </Link>
            <Link to="#" className="hover:underline">
              Education
            </Link>
            <Link to="#" className="hover:underline">
              Certifications
            </Link>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
