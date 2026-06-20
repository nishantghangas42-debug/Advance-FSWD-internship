import React from "react";

function Navbar (){
    
    return(
        <div>
              <div style={{display:"flex", background:"red" , justifyContent:"center"}}></div>
                          <nav style={{display:"flex", alignItems:"center", justifyContent:"space-between", background:"black", height:"70px"}}>
                         <div className="logo" style={{color:"aqua", marginLeft:"20px"}}><h1>Navbar</h1></div>
                         <div className="links" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px", marginRight:"20px", fontSize:"1.2rem"}}>
                             <a href="/about" style={{color:"white"}}>About</a>
                             <a href="/signin" style={{color:"white"}}>Sign in</a>
                             <a href="/login" style={{color:"white"}}>log in</a>
                             <a href="/contact" style={{color:"white"}}>Contact us</a>
                         </div>
                         
                     </nav>

        </div>
)

}
export default Navbar