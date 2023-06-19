import React, { useState } from "react";

import CarouselComponent from "./Carousel";

import "./HomePage.css"

const HomePage = () => {
   
  
    return (
     <div> 
         <CarouselComponent />
     <div className='bottom-strip-container'>
    
			<ul>
				<li>Free Shipping & Returns</li>
				<li>100% Money Back Guarantee</li>
				<li>FSA/HSA Eligible</li>
				<li><i class="fa-solid fa-star"></i>Trustpilot rating</li>
				<li>❇️ ❇️ ❇️ ❇️ ❇️ Excellent</li>
			</ul>
		</div>
        <div className='brand-strip-container'>
			<ul>
				<li>Ray-Ban</li>
				<li>Vogue</li>
				<li>Michael Kors </li>
				<li>Calvin Klein</li>
				<li>Nike</li>
                <li>Prada</li>
				<li>Burberry </li>
			</ul>
		</div> 
        <div className="homepage-text">
            <p className="p1">We’re all about finding you that perfect pair.</p>
            <p className="p2">As glasses wearers, we know how incredible the right pair can make you feel. Let’s find yours together.</p>
        </div>  
    </div>
    
        
    )
  }
  
  export default HomePage
