import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkDeleteOrder } from "../../store/order";
import { useModal } from "../../context/Modal";
import { placeOrderThunk } from "../../store/session";
import './DeleteOrder.css'

const DeleteOrder = ({orderId}) => {
    
    const dispatch = useDispatch()
    const {closeModal} =  useModal();
    const sessionUser = useSelector((state) => state.session.user);
    

    

    const handleSubmityes = async (e) => {
      e.preventDefault();
      await dispatch(thunkDeleteOrder(orderId))
      await dispatch(placeOrderThunk(sessionUser.id))
      await closeModal()
    }
    
    const handleSubmitno = async (e) => {
        e.preventDefault()
        closeModal()
        
      }
          
    return(
      <div className="log-in-modal delete-review-modal">
        <h1>Confirm Delete</h1>
        <h4>Are you sure you want to delete this order?</h4>
        <form>
          <div className="delete-buttons">
            <button  onClick={handleSubmityes}>Yes </button>
            <button  onClick={handleSubmitno}> No </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default DeleteOrder
  
