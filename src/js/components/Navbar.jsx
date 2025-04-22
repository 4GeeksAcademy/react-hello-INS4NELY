import React, { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-dark px-2 px-lg-5">
      <div className="container-fluid">
        <a
          href="#"
          className="navbar-brand text-decoration-none fw-semibold text-white fs-4"
        >
          Start Bootstrap
        </a>

        <button
          className="navbar-toggler "
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <i className="ri-menu-line text-secondary fs-2"></i>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <div className="navbar-nav ms-auto">
            <a className="nav-link text-white" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link text-white-50" href="#">
              About
            </a>
            <a className="nav-link text-white-50" href="#">
              Services
            </a>
            <a className="nav-link text-white-50" href="#">
              Contact <i className="bi bi-kanban"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;