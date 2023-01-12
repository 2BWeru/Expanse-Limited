import React from "react";


function Footer () {
    return(
        <div class="footer" id="contact">
         <footer>
            <div class="titlepage">
               <h2>Contact</h2>

            </div>
             <div class="container">
                 <div class="row">
                     <div class="col-sm-6 col-md-3 item" id="center">
                         <ul>
                           <li><h4>Visit us at :</h4></li>
                             <li>Uniafric House, Koinange Street</li>
                            
                             <li><h4>Email :</h4></li>
                             <li><a href="mailto:expanseproducts@gmail.com">expanseproducts@gmail.com</a></li>
                            
                             <li><h4>Tel :</h4></li>
                             <li>0722 437 210 /</li>
                             <li>0721 576 598</li>
                             
                         </ul>

                     
                     </div>
                     <div class="col-sm-6 col-md-3 item" id="center">
                         <ul>
                           <li><h4>Postal Address :</h4></li>
                           <li> P.O BOX, 7544-00100</li>
                      
                          
                         </ul>
                     </div>
                     <div class="col-md-6 item text">
                         <div class="map">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8188399700166!2d36.81547471419097!3d-1.2824996990645796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3b9a0bfef%3A0x742b7ba0a98ad2ba!2sUniafric%20House%2C%2025%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1660501200148!5m2!1sen!2ske"  
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                
                            </iframe>
                           
                         </div>
                     </div>
                     <div class="col item social">
                         <a href="#"><i class="icon ion-social-facebook"></i></a>
                         <a href="#"><i class="icon ion-social-twitter"></i></a>
                         <a href="#"><i class="icon ion-social-snapchat"></i></a>
                         <a href="#"><i class="icon ion-social-instagram"></i></a>
                     </div>
                 </div>
             </div>
             
         </footer>
     </div>

    //  <div class="copyright">
    //    <h4 class="copyright">Expanse Products Ltd © 2022</h4>
    //  </div>
    
    )
}

export default Footer;