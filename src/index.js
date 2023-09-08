import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "./components/Button/Button";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";
import Home from "./view/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Home/>
  <Button text={"Click me"}/>
  <About/>
  <Button text={"Click me"}/>
<Contact/>
<Button text={"Click me"}/>

  </>
);
