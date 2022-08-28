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
          <Route path="/Inventory" component={Inventory} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Menu2" component={Menu2}/>
          <Route path="/newRecipe" component={newRecipe}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
