
import React from "react";
import './App.css';

import "./static/css/style.css";
import "./static/css/bootstrap.min.css";
import "./static/css/responsive.css";
// import "./static/css/modal.css";
// import "./static/css/jquery.mCustomScrollbar.min.css"

import gif from "./static/images/loading.gif";
import Header from "./Components/Header/header";
import Slider from "./Components/Slider/Slider";
import About from "./Components/About/About";
import Impact from "./Components/Impact/Impact";
import Patners  from "./Components/Patners/Patners";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import Importance from "./Components/Importance/Importance";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
    {/* loader */}
    {/* <div class="loader_bg">
         <center>
            <div class="loader"><img src={gif} alt="#" /></div>
         </center>
      </div> */}
    {/* end loader */}
    
    <Header />
    <Slider />
    <About />
    <Gallery />
    <Importance />
    <Patners/>
    <Impact />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
