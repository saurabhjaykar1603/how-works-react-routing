import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./view/About/About";
import Contact from "./view/Contact/Contact";
import Home from "./view/Home/Home";
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <App/>

  </>
);
