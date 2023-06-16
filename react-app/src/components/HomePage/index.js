import React, { useEffect } from "react";
import "./HomePage.css"

const HomePage = () => {
    
  
    return (
    <div className="slider-images">
        <div class="slider">
            <span id="slide-1"></span>
            <span id="slide-2"></span>
            <span id="slide-3"></span>
            <div class="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO59v1ZPBJAB7-te4y3dDLOe5ns5pGn98SAg&usqp=CAU" class="slide" width="500" height="300" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75uyM0TtZb1F1ay_pjXDfTS6jTD8DPM-Z7sRct1ABa4wSNDJatXmZx_DHoTV19WAzIVg&usqp=CAU" class="slide"  width="500" height="300" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPeGChS4aMin3d7YJyhCROj51x36r8JIRTg&usqp=CAU" class="slide"  width="500" height="300" />
            </div>
            <div class="buttons">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
            </div>
     </div>
        {/* <div className='promotion-item-container'>
        <img className='main-page-image' src="https://www.usatoday.com/gcdn/presto/2020/09/23/USAT/92bade01-0f1a-4161-90ba-0c82496e3455-43-glassesusa.png"></img>
        </div>
		<div className='navbar-image-below'>
			<p className='text'>Free Shipping & Returns | 
									100% Money Back Guarantee |
									FSA/HSA Eligible |
								    Trustpilot rating |
									Excellent 
			</p>	
	   </div> */}
    </div>
        
    )
  }
  
  export default HomePage
