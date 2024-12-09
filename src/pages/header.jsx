import React from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <div>
      {/* Logo */}
      <div className="flex justify-center items-center py-4">
        <img 
          src="/logo.svg" 
          alt="Logo" 
          className="h-16 w-auto 
          sm:pl-[18rem]
          md:pl-[40rem] md:mt-[-2rem] md:h-[8rem]
          lg:mr-[115rem] lg:mt-[-10rem] lg:mb-[5rem] lg:h-[10rem]" 
        />
      </div>

      {/* Top Navbar - Visible on large screens, hidden on small/medium screens */}
      <nav className="hidden lg:ml-[10rem] lg:flex text-[4rem] font-Micro text-blue-300 justify-center mt-[-15rem] pb-[2rem]">
        <Link to="/" className="px-10 hover:text-blue-300 hover:underline">
          Home
        </Link>
        <Link to="/projects" className="px-10 hover:text-blue-300 hover:underline">
          Projects
        </Link>
        <Link to="/about" className="px-10 hover:text-blue-300 hover:underline">
          About
        </Link>
        <Link to="/contact" className="px-10 hover:text-blue-300 hover:underline">
          Contact
        </Link>
        <Link to="/cases" className="px-10 hover:text-blue-300 hover:underline">
          Cases
        </Link>
      </nav>

      {/* Mobile Burger Menu (shown only on small and medium screens) */}
      <div className="lg:hidden">
        <Menu pageWrapId="page-wrapper" outerContainerId="outer-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/cases">Cases</Link>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
