import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
// import SignUp from "./components/Authentication/Signup";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import AdminLogin from "./components/pages/AdminLogin";
import AddMenu from "./components/pages/AddMenu";
import Inventory from "./components/pages/Inventory";
import Orders from "./components/pages/Orders";
import Menu2 from "./components/pages/Menu2";
import newRecipe from "./components/pages/newRecipe";
import Footer from "./components/Footer";
import { useState } from "react";
import { useRef} from "react";
import { login,logout } from "../src/components/pages/firebase";
import { getAuth} from "firebase/auth";
function App() {
  
  // const [ loading, setLoading ] = useState(false);
  // const [userName ,setUserName] =useState("");

  // async function handleLogout() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //      localStorage.removeItem("isUser");
  //     // localStorage.removeItem("userName");


  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }
  // const auth = getAuth();


  // const emailRef = useRef();
  // const passwordRef = useRef();
  // // React States
  // const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);


  // async function handleLogin() {

  //   setLoading(true);
   
  //   try {
  //     await login(emailRef.current.value, passwordRef.current.value);
  //     localStorage.setItem("isUser", true);
  //     // setIsSubmitted(true);
  //     //  localStorage.setItem("userName",userName);
  //     window.location.href = window.location.origin + "/";
  //   } catch {
  //   //   errors();
  //   }
  //   setLoading(false);

  // }setLoading={setLoading} handleLogout={()=>handleLogout()}
  //loading={loading} setLoading={setLoading} handleLogout={()=>handleLogout()} handleLogin={()=>handleLogin()}

  return (
    <>
      <Router>
        <Navbar   />
        <><Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component= {Login} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AddMenu" component={AddMenu} />
          <Route path="/Inventory" component={Inventory} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Menu2" component={Menu2}/>
          <Route path="/newRecipe" component={newRecipe}/>
        </Switch>
        </>
       <Footer/>
      </Router>
      
    </>
  );
}

export default App;
