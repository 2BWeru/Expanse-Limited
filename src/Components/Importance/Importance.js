import React from "react";
import "./Importance.css";

import img from "../../static/images/pr4.jpg"

function Importance () {
    return(
        <div  id="advantages" class="contact">
        <div class="container">
           <div class="titlepage">
              <h2>Benefits of Sawdust Briquettes</h2>
           </div>
           <div class="row">
              <div class="col-md-6 offset-md-0">
                 
                 
                 <h2 >
                    <span >1.</span>
                    Briquettes make use of organic materials that are common and renewable.
               
                    Hence, we are ensured of the sustainability of such a fuel source.
                 </h2>
                 
                 
                 <h2 >
                    <span >2.</span>
                    It's also eco-friendly and has high burning efficiency than coal.
                 </h2>
                 
                 <h2 >
                    <span>3.</span>
                    They have a low amount of moisture and density, thus allowing them to burn at intense temperatures.
                 </h2>
              </div>
              <div class="col-md-6">
                 <div class="our_box">
                    <figure>
                       <img src={img}  className="imp-image"  alt="#"/></figure>
                 </div>
              </div>
           </div>
        </div>
     </div>
    )
}

export default Importance;