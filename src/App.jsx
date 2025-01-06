import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { scaleRotate as Menu } from "react-burger-menu"; // Import the hamburger menu from react-burger-menu
import { Helmet } from "react-helmet"; // Import Helmet for meta tags
import Layout from "./Components/Layout"; // Layout component that wraps around all pages

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Cases from "./pages/Cases";
import TravelPictures from "./pages/TravelPhotoFolder";
import Vollyball from "./pages/BeachBall";
import Boutique from "./pages/BoardWalk";
import Bcit from "./pages/MyBcit";
import Northstar from "./pages/NorthOmu";

// Import styles
import "./reset.css";
import "./App.css";
import "./Menu.css";
import "./Projects.css";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div id="outer-container" className="flex flex-col min-h-screen">
        {/* Helmet for global meta tags, basic ones first, but will add more! */}
        <Helmet>
          <title>Sonya Yeh</title>
          <meta name="description" content="Hello! Welcome to my portfolio! Here are some of my most proud projects throughout BCIT's New Media Design and Web Development diploma program. They demonstrate my skills in front end developing, UI/UX designing and graphic design. I have an associate certificate in Graphic Design certificate program in BCIT as well! Thank you for your time and hope you have a wonderful day!" />
          <meta name="keywords" content="React, Web Development, Portfolio, Graphic Design, UI/UX Design, Web Design" />
          <meta name="author" content="Sonya Yeh" />
          <meta property="og:title" content="Sonya Yeh's Portfolio" />
          <meta property="og:description" content="Check out my portfolio and contact me for any further questions!" />
          <meta property="og:url" content="https://sonyayeh.ca/" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        </Helmet>

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
              <Route path="/travelphotofolder" element={<TravelPictures />} />
              <Route path="/beachball" element={<Vollyball />} />
              <Route path="/boardwalk" element={<Boutique />} />
              <Route path="/bcit" element={<Bcit />} />
              <Route path="/northstar" element={<Northstar />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
