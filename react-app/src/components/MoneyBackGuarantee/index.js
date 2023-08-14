import React from "react";

import { useModal } from "../../context/Modal";


const MoneyBackGuarantee = () => {
    
    
    const {closeModal} =  useModal();
    

    
        
  return(
    <div className="free-shipping-maincontent">
        <button className="cross-modal" onClick={closeModal}>
            <i class="fa-solid fa-xmark fa-xl" />
        </button>
    <div className="free-shipping-content">
      
      <h4>Money Back Guaranteed</h4>
      <p>At TryGlasses.com, return and exchanges are made easy. 
        We do our best to make returns and exchanges as easy as possible. 
        We are pretty confident that you'll love our product. 
        Howewer, if for some reason or other you're not completely satisfied with your glasses within the first 14 days of receiving them, you are entitled to a money back return or 100% store credit. 
        No questions asked and hassle-free.</p>
    </div>
    </div>
  )
}

export default MoneyBackGuarantee
