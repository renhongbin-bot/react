import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
// import "./views/css/App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}
