import React from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <div>
      {/* Logo */}
      <div className="flex justify-center items-center py-4">
        <img 
          src="/logo1.svg"
          alt="Logo1" 
          className="h-16 w-auo 
          sm:pl-[18rem]
          md:pl-[40rem] md:mt-[-2rem] md:h-[8rem]
          lg:ml-[-135rem] lg:mt-[-8rem] lg:mb-[5rem] lg:h-[10rem]
          lp:mr-[105rem] lp:mt-[-6rem] lp:mb-[3rem] lp:h-[8rem]
          " 
        />
      </div>

      {/* Top Navbar - Visible on large screens, hidden on small/medium screens */}
      <nav className="hidden font-Micro text-blue-300 justify-center
      lg:ml-[10rem] lg:flex lg:text-[6rem]  lg:mt-[-15rem] lg:pb-[2rem]
      lp:ml-[10rem] lp:flex lp:text-[4rem]  lp:mt-[-10rem] lp:pb-[2rem]
      ">
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
