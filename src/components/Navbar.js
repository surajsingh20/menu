import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AdminLogin from "../components/pages/AdminLogin";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const isUser = localStorage.getItem("isUser");
  const isAdmin = localStorage.getItem("isAdmin");

  const user = [
    {
      name: "Home",
      redirectTo: "/"
    },

    {
      name: "Menu",
      redirectTo: "/Menu"
    },
    {
      name: "Orders",
      redirectTo: "/"
    }
  ];

  const admin = [
    {
      name: "Home",
      redirectTo: "/"
    },
    {
      name: "Orders",
      redirectTo: "/orders"
    },
    {
      name: "Menu",
      redirectTo: "/Menu"
    },
    {
      name: "Inventory",
      redirectTo: "/TableData"
    },
    {
      name: "Recipe",
      redirectTo: "/"
    }
  ];

  const noone = [
    {
      name: "Home",
      redirectTo: "/"
    },
    {
      name: "Signup",
      redirectTo: "/SignUp"
    }
  ];
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Foodie
            <i class="fas fa-hamburger" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {isUser &&
              user.map((item) => (
                <li className="nav-item">
                  <Link
                    to={item.redirectTo}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            {isAdmin &&
              admin.map((item) => (
                <li className="nav-item">
                  <Link
                    to={item.redirectTo}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            {isUser === false &&
              isAdmin === false &&
              noone.map((item) => (
                <li className="nav-item">
                  <Link
                    to={item.redirectTo}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/TableData"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Inventory
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Recipe
              </Link>
            </li>
            <li>
              <Link
                to="/SignUp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
            <li className="nav-item">
              {/* {button && ( */}
              <Button
                className="nav-links"
                onClick={closeMobileMenu}
                component={Link}
                to="/Login"
              >
                User
              </Button>
              {/* )} */}
            </li>
            <li className="nav-item">
              {/* {button && ( */}
              {/* <Button
                className="nav-links"
                onClick={closeMobileMenu}
                component={Link}
                to="/AdminLogin"
              >
                Admin
              </Button> */}
              <a href="/AdminLogin">
                <button className="btn btn--primary btn--medium">Admin</button>
              </a>
              {/* )} */}
            </li>
          </ul>
          {/* {button && (
            <Button component={Link} to="/Login">
              User
            </Button>
          )} */}

          {/* {button && (
            <Button component={Link} to="/AdminLogin">
              Admin
            </Button>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
