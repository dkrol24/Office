import React, { useState } from "react";
import logo from "../../assets/images/Abemalogo.png";
import "./Navbar.css";
import { GoLocation } from "react-icons/go";
import { AiFillFacebook, AiFillContacts } from "react-icons/ai";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar">
      <div className="container w-100">
        <div className="flex fw-7">
          <div className="flex flex-between w-100">
            <div className="logo">
              <a href="/" className="navbar-brand fs-26">
                <img src={logo} alt="" />
              </a>
            </div>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li>
                  <a onClick={navHandler} href="#start">
                    Start
                  </a>
                </li>
                <li>
                  <a onClick={navHandler} href="#o nas">
                    O Nas
                  </a>
                </li>
                <li>
                  <a onClick={navHandler} href="#oferta">
                    Usługi
                  </a>
                </li>
                <li>
                  <a onClick={navHandler} href="#kontakt">
                    Kontakt
                  </a>
                </li>
              </ul>
              <ul className="navbar-social flex">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100063740554419"
                  >
                    <AiFillFacebook
                      style={{ fontSize: "22px", color: "#3b5998" }}
                    />
                  </a>
                </li>

                <li>
                  <a href="#map">
                    <GoLocation style={{ fontSize: "22px" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
