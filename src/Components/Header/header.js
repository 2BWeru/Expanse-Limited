import React from 'react'

import logo from "../../static/images/logo.png";
import "./header.css";


function Header() {
    return(
        
        <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <div class="row">
                                 <div class="col-4">
                                    <a href=""><img src={logo}  alt="#" /></a>
                                 </div>
                                 <div class="col">
                                    <h1 ><b><span className="logo-header">Expanse </span> <span className="logo-body">Products LTD </span></b> </h1>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div class="header_information">
                        <nav class="navigation navbar navbar-expand-md navbar-dark ">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarsExample04">
                              <ul class="navbar-nav mr-auto">
                                 <li class="nav-item">
                                    <a class="nav-link" href="#about"> About Us  </a>
                                 </li> 
                                 <li class="nav-item">
                                    <a class="nav-link" href="#ourwork">Gallery</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="#mobile">We Work with</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact</a>
                                 </li>
                              </ul>
                              <div class="sign_btn"><a href="#impact">Our Impact</a></div>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
    )
}

export default Header;