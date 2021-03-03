import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => {
              closeMobileMenu();
              setAuthenticated(!authenticated); // to check auth render
            }}
          >
            TRVL
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {authenticated && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/dasbord"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Dashbord
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                </li>
              </Fragment>
            )}
            {!authenticated && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/sign-up"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
//45:17
