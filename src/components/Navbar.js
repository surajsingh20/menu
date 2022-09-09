import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import AdminLogin from "../components/pages/AdminLogin";
// import Menu2 from "./pages/Menu2";
// import { useRef} from "react";
import { signup, login, logout, useAuth } from "../components/pages/firebase";

function Navbar({setLoading,handleLogout}) {


  // const [userName,setUserName]=useState();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const isUser = localStorage.getItem("isUser");
  const isAdmin = localStorage.getItem("isAdmin");

   const userName =localStorage.getItem("userName");



  if (isUser==="true" && isAdmin==="true")
{
  localStorage.removeItem("isUser");
  window.location.reload();
  
}


  const Click=()=>{
    
    if( isUser==="true")
    {
    localStorage.removeItem("isUser");
    window.location.reload();

    
  }
    else if (isAdmin==="true")
    {
      localStorage.removeItem("isAdmin");
      window.location.reload();
    }
  }
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      localStorage.removeItem("isUser");
      localStorage.removeItem("userName");

    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  const user = [
    {
      name: "Home",
      redirectTo: "/"
    },

    {
      name: "Menu",
      redirectTo: "/Menu2"
    },
    {
      name: "Orders",
      redirectTo: "/Orders"
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
      redirectTo: "/Inventory"
    },
    {
      name: "Recipe",
      redirectTo: "/newRecipe"
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
    if (window.innerWidth <= 1060) {
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
           
            {isUser && <a href="/">
                <button className="btn btn--primary btn--medium" onClick={Click} >Logout</button>
              </a>}

            { (isUser || isAdmin ) ?
              <h2> {userName} </h2>
            :""
            }



            
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
