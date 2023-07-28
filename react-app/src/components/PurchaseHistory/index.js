import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OpenModalButton from "../../components/OpenModalButton";
import { useModal } from "../../context/Modal";

import "./PurchaseHistory.css";

const PurchaseHistory = () => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const sessionUser = useSelector((state) => state.session.user);

    return(
        <div>
            <h1>Purchase History</h1>
        </div>
    )
}

export default PurchaseHistory
