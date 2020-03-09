import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll"
import BrandLogo from "../../img/LLlogo.png";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        <img src={BrandLogo} alt="brand-logo" height="50px" width="50px"></img>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              home<span className="sr-only">(current)</span>
            </Link>
          </li> */}
          <li className="nav-item">
            {/* <!-- it will be resume --> */}
            <AnchorLink className="nav-link" href="#about-me">about</AnchorLink>
          </li>
          {/* add a project's page */}
          <li className="nav-item">
            <AnchorLink className="nav-link" href="#projects">projects</AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink className="nav-link" href="#contact-form">contact</AnchorLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">blog</Link>
          </li>
        </ul>
        {/* Create icons for social media */}
        <a className="navbar-brand" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/leo-lopez10/">
          <h1 id="head-title">Leo Lopez</h1>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
