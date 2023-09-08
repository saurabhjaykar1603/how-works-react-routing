/* eslint-disable default-case */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";
import Home from "./view/Home/Home";

function App() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      return <Home />;
      case "/About":
        return <About/>;
        case "/Contact":
          return <Contact/>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>,
);
