import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Lavanya</h2>

      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;