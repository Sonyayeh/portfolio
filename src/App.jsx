import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { scaleRotate as Menu } from "react-burger-menu"; // Import the hamburger menu from react-burger-menu
import Layout from "./Components/Layout"; // Layout component that wraps around all pages



// Import  pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Cases from "./pages/Cases";
import TravelPictures from "./pages/TravelPhotoFolder";
import Vollyball from "./pages/BeachBall";
import Boutique from "./pages/BoardWalk";
import Bcit from "./pages/MyBcit";

// Import  styles
import "./reset.css";
import "./App.css";
import "./Menu.css";
import "./Projects.css";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      
      <div id="outer-container" className="flex flex-col min-h-screen">
        
        {/* I have this greyed out just in case i need anything from here */}
        {/* Desktop Navbar - Visible on large screens */}
        {/* <nav className="hidden lg:flex text-h2 font-Micro text-blue-300 justify-center align-middle py-4">
          <Link to="/" className="px-10 hover:text-blue-300 hover:underline">Home</Link>
          <Link to="/projects" className="px-10 hover:text-blue-300 hover:underline">Projects</Link>
          <Link to="/about" className="px-10 hover:text-blue-300 hover:underline">About</Link>
          <Link to="/contact" className="px-10 hover:text-blue-300 hover:underline">Contact</Link>
          <Link to="/cases" className="px-10 hover:text-blue-300 hover:underline">Cases</Link>
        </nav> */}

        {/* Mobile Burger Menu (Visible on small and medium screens) */}
        <div className="lg:hidden">
          <Menu pageWrapId="page-wrapper" outerContainerId="outer-container">
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/projects" className="menu-item">Projects</Link>
            <Link to="/about" className="menu-item">About</Link>
            <Link to="/contact" className="menu-item">Contact</Link>
            <Link to="/cases" className="menu-item">Cases</Link>
          </Menu>
        </div>

        {/* Main Content Area */}
        <main id="page-wrapper" className="flex-grow">
          <Routes>
            {/* Wrap all routes inside the Layout component */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/travelphotofolder" element={<TravelPictures />} /> {/* Add this route */}
              <Route path="/beachball" element={<Vollyball />} /> {/* Add this route */}
              <Route path="/boardwalk" element={<Boutique />} />
              <Route path="/bcit" element={<Bcit />} />
            </Route>
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
