import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import './Navbar.css'
import Home from "../Home/Home";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import Projects from "../Projects/Projects";
import Sponsors from "../Sponsors/Sponsors";

const Navbar = () => {
    return(
    <>
        <nav className="sticky">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/Sponsors">Sponsors</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/FAQ" element={<FAQ />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Sponsors" element={<Sponsors />}></Route>
        </Routes> 
    </>
    );
};

export default Navbar