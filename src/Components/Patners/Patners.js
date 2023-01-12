import React from "react";

import patner1 from "../../static/images/ind2.jpeg"
import patner2 from "../../static/images/cook4.jpeg"
import patner3 from "../../static/images/ind7.jpeg"
import patner4 from "../../static/images/school.jpeg"


function Patners () {
    return(
        <div className="Patners">
            <div id="mobile"  class="about">
         <div class="container">
             
            <div class="row d_flex">
               <div class="col-md-12">
                  
                  <div class="titlepage">
                     <h2>We Work with </h2>
                  <span></span>
                  <div class="row">
                     <div class="col-sm-6">
                        <figure><img src={patner4} alt="#"/></figure>
                        <mark><b>learning institutions</b></mark>
                        <p>
                           To provide clean and pollution free fuel for their
                           efficient and conducive cooking environment.
                        </p>

                     </div>
                     <div class="col-sm-6">
                        <figure><img src={patner1} height="100" alt="#"/></figure>
                        <h3></h3>
                        <mark><b>Industrial companies</b></mark>
                        <p>
                           To provide clean and efficient fuel for their boilers as part of basic
                           foundation to their production system.
                        </p>
                     </div>
                       </div>

                  <div class="row">
                     <div class="col-sm-6">
                        
                        <div>
                        <figure><img src={patner3} class="rounded" alt="#"/></figure>
                        </div>
                        <div>
                           <mark ><b>Various institutions</b></mark>
                           
                           <p >Companies that produce wood sawdust as a byproduct
                              and use it as our raw material, thereby making our contribution towards environment conservation,
                              which is one of our core values</p>
                        </div>

                     </div>
                     <div class="col-sm-6">
                        <figure>
                           <img src={patner2} class="rounded-bottom"   alt="#"/></figure>
                        <mark><b>Domestic Users</b></mark>
                        <p >
                           For the provision of clean fuel for indoor use with minimum pollution and
                           efficient and effective cooking environment
                        </p>

                     </div>
                   </div>
                   </div>
                  
               </div>
               
               </div>
            </div>
         </div>
        </div>
    )
}

export default Patners;