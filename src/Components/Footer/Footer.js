import React from "react";
import "./Footer.css";


import logo from "../../static/images/logo.png";



function Footer () {
    const today = new Date();

    const currentYear = today.getFullYear();

    return(
        <div class="footer" id="contact" className="con">
         <footer>
            <div class="titlepage">
               {/* <h2>Contact</h2> */}

            </div>
             <div class="container">
                 <hr className="line"></hr>
                 <div class="row">
                    <div class="col-md-3">
                        <img src={logo}></img>
                        <p className="logo-text"><span className="logo-head">Expanse  </span> Products Ltd</p>
                    </div>  
                    <div class="col-md-3">
                       <h3  className="Header-foot">Company</h3> 
                       
                           <h6><a href="#">About</a></h6>
                           <h6><a href="#">We Work With</a></h6>
                           <h6><a href="#" >Why Choose Us</a></h6>
                           <h6><a href="#">Contact </a></h6>
                         
                    </div>
                    <div class="col-md-3">
                        <h3 className="Header-foot">Contact</h3>
                        <span className="footer-header">Call  : </span>
                        <h6>0722 437 210</h6>
                        <h6>0721 576 598</h6>

                        <span className="footer-header">Email us at : </span>
                        <h6 className="footer-text"><a href="mailto:expanseproductsltd@gmail.com">expanseproductsltd@gmail.com</a></h6>
                        
                    </div>
                    <div class="col-md-3">
                        <h3 className="Header-foot">Location</h3>
                        <span className="footer-header">Visit Us At : </span>
                        <h6 className="footer-text">Uniafric House,Koinange street</h6>

                        <span className="footer-header">Postal Address :  </span>
                        <h6 className="footer-text">P.O BOX, 7544-00100</h6>
                    </div>
                   
                 </div>
             </div>
             
         </footer>
         <div class="copyright">
            <h4 class="copyright">Expanse Products Ltd © {currentYear}</h4>
          </div>
     </div>

    //  
    
    )
}

export default Footer;