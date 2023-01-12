import React from "react";

import css from "./Contact.module.css";

function Contact () {
    return(
         <div id="contact2" class="contact">
          <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Send us a message</h2>

                  </div>
                  <hr className={css.line}></hr>

               </div>
               <div class="col-md-12">
               <form className={css.con}>

                     <label for="fname">Company Name</label>
                     <input type="text" id="fname" name="firstname" placeholder="Company Name.."></input>

                     <label for="lname">Email</label>
                     <input type="email" id="lname" name="lastname" placeholder="Email Address.."></input>

                     <label for="country">Institution</label>
                     <select name="dropdown" className="select" placeholder="Institution">
                        <option value="Learning Institution">Learning Institution</option>
                        <option value="Domestic Use">Domestic Use</option>
                        <option value="Various institutions">Various institutions</option>
                        <option value="Industrial companies">Industrial companies</option>
                     </select>

                     <label for="Regio">Region</label>
                     <select name="dropdown" className="select2" placeholder="County">
                           <option value="Nairobi">Nairobi</option>
                           <option value="Mombasa">Mombasa</option>
                           <option value="Kiambu">Kiambu</option>
                           <option value="Central Kenya">Central Kenya</option>
                           <option value="Eastern Kenya">Eastern Kenya</option>
                           <option value="Coastal kenya">Coastal Kenya</option>
                           <option value="RiftValley Region">Rift Valley Region</option>
                           <option value="North Eastern Region">North Eastern Region</option>
                     </select>

                     <label for="subject">Subject</label>
                     <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                     <input type="submit" value="Submit"></input>

               </form>
            </div>
          </div>
         </div>
        </div>

        
    )
}

export default Contact;