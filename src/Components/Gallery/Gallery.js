import React from "react";

import gallery1 from "../../static/images/pell4.jpeg";
import gallery2 from "../../static/images/pell.jpeg";
import gallery3 from "../../static/images/Exp5.jpeg";
import gallery4 from "../../static/images/briq1.jpeg";
import gallery5 from "../../static/images/briq1.jpeg";
import gallery6 from "../../static/images/briq1.jpeg";


import "./Gallery.css";

function Gallery () {
    return(
        <div class="ourwork" id="ourwork">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Gallery</h2>

                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4">
                  <div class="our_box">
                     <figure><img src={gallery1} alt="#" className="img"/></figure>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="our_box">
                     <figure><img src={gallery2} alt="#" className="img" /></figure>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="our_box">
                     <figure><img src={gallery3} alt="#" className="img" /></figure>

                  </div>
               </div>
               <div class="col-md-4">
                  <div class="our_box">
                     <figure><img src={gallery6} alt="#" className="img" /></figure>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="our_box">
                     <figure><img src={gallery4} alt="#" className="img" /></figure>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="our_box">
                     <figure><img src={gallery5} alt="#" className="img" /></figure>

                  </div>
               </div>
            </div>
         </div>
      </div>
    )
}

export default Gallery;