import React from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";

const Header = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  };
  return (
    <div>
      {/* Logo */}
      <div className="grid justify-center items-center 
      sm:w-[25rem] lg:w-auto lp:w-[18rem]
      ">
        <Link onClick={handleClick} to="/" >
        <img 
          src="/logo1.svg"
          alt="Logo1" 
          className="h-16 w-auto 
          sm:h-[5rem] sm:pl-[19rem]
          md:ml-[40rem] md:mt-[1rem] md:h-[8rem]
          lg:ml-[-25rem] lg:mt-[5rem] lg:mb-[5rem] lg:h-[10rem]
          lp:mr-[65rem] lp:mt-[3rem] lp:pr-[10rem] lp:mb-[7rem] lp:h-[8rem]
          "
        />
        </Link>
      </div>

      {/* Top Navbar - Visible on large screens, hidden on small/medium screens */}
      <nav className="hidden font-Micro text-blue-300 justify-center
      lg:ml-[12rem] lg:flex lg:text-[5.5rem] lg:mt-[-15rem] lg:pb-[2rem]
      lp:ml-[10rem] lp:flex lp:text-[4.5rem] lp:w-[68rem] lp:mt-[-15rem] lp:pb-[2rem] 
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
