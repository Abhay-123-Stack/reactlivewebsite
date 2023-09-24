import { Link, Route, Switch } from "react-router-dom";

import { useEffect, useState } from "react";
import Home from "./Home";
import Donorlist from "./AddDeleteEdit";
import Display from "./Display";
import AddLibrarian from "./AddLibrarian";
import About from "./About";
import Header from "./Header";
import Show from "./Show";
import ProtectedRoute from "./ProtectedRouter";
function Dashboard() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setLoggedInUserName();
  }, []);

  const setLoggedInUserName = () => {
    debugger;
    if (
      sessionStorage.getItem("userName") != null &&
      sessionStorage.getItem("userName") != ""
    ) {
      setUserName(sessionStorage.getItem("userName"));
    } else {
      setUserName("Guest");
    }
  };

  const updateLoginStatus = () => {
    setLoggedInUserName();
  };

  const logout = () => {
    debugger;
    sessionStorage.removeItem("isloggedin");
    sessionStorage.removeItem("userName");
    setLoggedInUserName();
  };

  return (
    <div className="margin">
      <Header loggedInUser={userName} logout={logout}></Header>
      {/* <Link to={"/home"}> Profile </Link> {" | "}
      <Link to={"/Donorlist"}> Add/Delete/Edit </Link> {" | "} */}
      <Link to={"/Display"}> Display </Link> {" |  "}
      {/* <Link to={"/AddLibrarian"}> Add Librarian </Link> {" | "}
      <Link to={"/Show"}> Show </Link> {" |  "} */}
      <div style={{ background: "radial-gradient(#e66465, #9198e5)" }}>
        <Switch>
          <ProtectedRoute
            path="/home"
            component={Home}
            afterLogin={updateLoginStatus}
          />
          <ProtectedRoute
            path="/Donorlist"
            component={Donorlist}
            afterLogin={updateLoginStatus}
          />
          <ProtectedRoute
            path="/Display"
            component={Display}
            afterLogin={updateLoginStatus}
          />
          <ProtectedRoute
            path="/AddLibrarian"
            component={AddLibrarian}
            afterLogin={updateLoginStatus}
          />
          <ProtectedRoute
            path="/Show"
            component={Show}
            afterLogin={updateLoginStatus}
          />
          <Route path="/about" exact component={About} />
          <ProtectedRoute
            path="/"
            exact
            component={Home}
            afterLogin={updateLoginStatus}
          />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Dashboard;
