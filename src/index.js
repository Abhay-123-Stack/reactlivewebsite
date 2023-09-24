import React from "react";
import ReactDOM from "react-dom/client";
import AddLibrarian from "./AddLibrarian";
import Donorlist from "./AddDeleteEdit";
import Home from "./Home";
import Request from "./Show";
import Patientlist from "./Display";
import Login from "./Login";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Dashboard></Dashboard>
  </BrowserRouter>
);
