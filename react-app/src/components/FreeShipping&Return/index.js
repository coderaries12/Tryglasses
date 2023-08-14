import React from "react";

import { useModal } from "../../context/Modal";
import './FreeShipping.css'

const FreeShippingReturn = () => {
    
    
    const {closeModal} =  useModal();
    

    
        
  return(
    <div className="free-shipping-maincontent">
        <button className="cross-modal" onClick={closeModal}>
            <i class="fa-solid fa-xmark fa-xl" />
        </button>
    <div className="free-shipping-content">
      
      <h4>Free Shipping & Returns</h4>
      <p>Enjoy Free Shipping and returns on all orders. 
        If, for any reason, you are not completely satisfied with your order, you may return it within the first 14 days. 
        We even provide you with a return shipping label,no questions asked!</p>
    </div>
    </div>
  )
}

export default FreeShippingReturn
