import React from "react";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-bs-controls="navbarTogglerDemo03"
          aria-bs-expanded="false"
          aria-bs-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <div
            className="navlogo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          Khalil's Marketing
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
