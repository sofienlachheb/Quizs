import React from "react";
import "../../App.css";
import Header from "../Header";
import Welcome from "../Welcome";
import Landing from "../Landing";
import Login from "../Login";
import forgetPassword from "../ForgetPassword";
import Footer from "../Footer";
import SignUp from "../SignUp";
import ErrorPage from "../ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Router exact path="/" component={Landing} />
        <Router path="/Welcome" component={Welcome} />
        <Router path="/Login" component={Login} />
        <Router path="/SignUp" component={SignUp} />
        <Router path="/forgetpassword" component={ForgetPassword} />
        <Router component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
