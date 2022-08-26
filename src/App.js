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
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AddMenu" component={AddMenu} />
          <Route path="/Inventory" component={Inventory}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
