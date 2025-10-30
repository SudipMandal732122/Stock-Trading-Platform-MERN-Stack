import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg   border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
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

          <form className="d-flex" role="search">

            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item">
                <span
                  className="nav-link hover-blue"
                  style={{ cursor: "pointer" }}
                  onClick={() => window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/signup`}
                >
                  Signup
                </span>
              </li>

              <li className="nav-item">
                    <Link className="nav-link hover-blue" to="/about">
                        About
                    </Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link hover-blue" to="/products">
                        Products
                    </Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link hover-blue" to="/pricing">
                        Pricing
                    </Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link hover-blue" to="support">
                        Support
                    </Link>
              </li>
              {/* <li className="nav-item">
                    <Link className="nav-link hover-blue text-muted" to="/">
                        <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
                    </Link>
              </li> */}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
