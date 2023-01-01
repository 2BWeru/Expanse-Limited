
import React from "react";
import './App.css';
import Home from "./Components/Home/home";
import Impact from "./Components/Impact/impact";
import Generic from "./Components/Generic/generic";
import Patners from "./Components/Patners/patners";

import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";

import "./static/css/main.css";
import "./static/css/noscript.css";
import "./static/css/fontawesome-all.min.css";





function App() {
  return (
    <>
      {/* <div id="wrapper"> */}
      <Router>  

              <Routes>
                  <Route path="/"  element={<Home />}> </Route>
                  <Route path="/gallery"  element={<Generic />}> </Route>
                  <Route  path="/impact" element={<Impact />} > </Route>
                  <Route  path="/patners" element={<Patners />} > </Route>

                  {/* <Route  path="Generic" element={<Generic />} > </Route> */}
                  {/* <Route> </Route> */}
              </Routes>

      </ Router>

      {/* </div> */}
    </>
  );
}

export default App;
