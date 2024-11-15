import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import "./reset.css";
import "./App.css";
import "./Menu.css";
import "./Projects.css";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div id="outer-container">

        {/* Top Navbar */}
        <nav className="top-navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        {/* Mobile Burger Menu */}
        <Menu pageWrapId="page-wrapper" outerContainerId="outer-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </Menu>

        <main id="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>


          

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
