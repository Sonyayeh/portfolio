import React, { useState } from "react";
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
import Magazine from "./pages/Magazine";
import Boutique from "./pages/BoardWalk";
import Bing from "./pages/Bing";
import Bcit from "./pages/MyBcit";
import PuppyYoga from "./pages/PuppyYoga";
import BackToTop from "./Components/BackToTop";
import TysnCase from "./pages/TysnCase";
import BcitCase from "./pages/BcitCase";
import FurreverCase from "./pages/FurreverCase"; 
import MarketingCase from "./pages/MarketingCase";


// Import styles
import "./reset.css";
import "./App.css";
import "./Menu.css";
import "./Projects.css";
import './index.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu state
  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BrowserRouter>
        {/* Helmet for global meta tags */}
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
          <Menu
            pageWrapId="page-wrapper"
            outerContainerId="outer-container"
            isOpen={menuOpen}
            onStateChange={handleMenuStateChange}
          >
            <Link to="/" className="menu-item" onClick={closeMenu}>Home</Link>
            <Link to="/projects" className="menu-item" onClick={closeMenu}>Projects</Link>
            <Link to="/about" className="menu-item" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="menu-item" onClick={closeMenu}>Contact</Link>
            <Link to="/cases" className="menu-item" onClick={closeMenu}>Cases</Link>
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
              <Route path="/puppy" element={<PuppyYoga />} />
              <Route path="/magazine" element={<Magazine />} />
              <Route path="/boardwalk" element={<Boutique />} />
              <Route path="/bing" element={<Bing />} />
              <Route path="/bcit" element={<Bcit />} />
              <Route path="/puppy" element={<PuppyYoga />} />
              <Route path="/cases/tysn" element={<TysnCase />} />
              <Route path="/cases/bcit" element={<BcitCase />} />
              <Route path="/cases/furrever" element={<FurreverCase />} />
              <Route path="/cases/marketing" element={<MarketingCase />} />
            </Route>
          </Routes>
          <BackToTop />
        </main>
    </BrowserRouter>
  );
}

export default App;