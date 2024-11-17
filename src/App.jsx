import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Cases from "./pages/Cases";


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
        <nav className=" text-h2 font-Micro text-blue-300  justify-center align-middle flex">
          <Link to="/" className="px-10 hover:text-blue-300 hover:underline">Home</Link>
          <Link to="/projects" className="px-10 hover:text-blue-300 hover:underline">Projects</Link>
          <Link to="/about" className="px-10 hover:text-blue-300 hover:underline">About</Link>
          <Link to="/contact" className="px-10 hover:text-blue-300 hover:underline">Contact</Link>
          <Link to="/cases" className="px-10 hover:text-blue-300 hover:underline">Cases</Link>
        </nav>

        {/* Mobile Burger Menu */}
        <Menu pageWrapId="page-wrapper" outerContainerId="outer-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/cases">Cases</Link>
        </Menu>
        

        <main id="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cases" element={<Cases />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
