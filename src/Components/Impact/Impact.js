import React from "react";

import impact1 from "../../static/images/recycle.png";
import impact2 from "../../static/images/group-users.png";
import impact3 from "../../static/images/investment.png";
import impact4 from "../../static/images/forest.png";



function Impact () {
    return(
        <div class="ourwork" id="impact">
        <div class="container-fluid">
           <div class="titlepage">
              <h2>Our Impact</h2>
              <hr />
           </div>
              <div class="row">
                 <div class="col-md-3">
                    <div class="our_box">
                       <figure><img src={impact1}   alt="#"/></figure>
                    </div>
             
                    <div class="our_box">
                       <h2><p><mark>Environment Friendly</mark></p></h2>
           
                       <p>
                          Briquettes are cleaner and greener source of energy.
           
                          They produce little or no smoke, soot, or carbon deposits when they burn,
                          and no harmful gases or chemicals are emitted in their burning process. 
                       </p>
                    </div>
                 </div>
  
                 <div class="col-md-3">
                    <div class="our_box">
                       <figure><img src={impact2}  alt="#"/></figure>
                    </div>
                  
                    <div class="our_box">
                       <h2><p><mark>Creating Job Opportunities</mark></p></h2>
                       
                       <p>
                          With the establishment of our company,
                          we have employed several youths training them 
                          and equipping them with the right set of skills . 
                        
                          Hence, changing the narrative of many jobless youths in Kenya,
                          by creating year-round jobs. 
                       </p>
                    </div>
                 </div>
              
              
                 <div class="col-md-3">
                    <div class="our_box">
                       <figure><img src={impact3} alt="#"/></figure>
                    </div>
                    
                    <div class="our_box">
                       <h2><p><mark>Cost Saving</mark></p></h2>
                       
                       <p>
                          Our customers save an average of 40% compared to firewood and charcoal!
                           
                          Because briquettes are cheaper than other energy sources
                          like fuel oil, propane and natural gas. 
                       </p>
                    </div>
                 </div>
  
                 <div class="col-md-3">
                    <div class="our_box">
                       <figure><img src={impact4}  alt="#"/></figure>
                    </div>
                    <div class="our_box">
                       <h2><mark>Reduce deforestation</mark></h2>
                      
                       <p>The use of briquettes also has the potential to preserve forests.
                         
                          Approximately 17 trees can be saved per ton of Expanse Briquettes. 
                       </p>
                    </div>
                 </div>
              </div>
           </div>
      </div>
    )
}

export default Impact;