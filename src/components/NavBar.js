import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
    
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${props.textMode}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${props.textMode}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active ${props.textMode}`} to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" container d-flex flex-row-reverse bd-highlight">
        <button type="button" className={`btn btn-${props.btnClass}`} onClick={props.toggleHandler}>
          {props.btnText}
        </button>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

// Default props
NavBar.defaultProps = {
  title: "Set title string",
  about: "Set about text",
};
