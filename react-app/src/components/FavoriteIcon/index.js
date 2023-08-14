import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { thunkAddFav, thunkDeleteFav } from "../../store/session";

import "./FavoriteIcon.css"

const FavoriteIcon = ({sessionUser, product, onpagedetails}) => {
    const dispatch = useDispatch();

    let [heartColor, setHeartColor] = useState("")

    if(!sessionUser) heartColor=""

    if(sessionUser?.user_favorites){
        for (let fav of sessionUser?.user_favorites){
            if(fav.id == product?.id) heartColor="redheart"
        }
    }

    useEffect(() => {
       
      }, [heartColor]);


    const handleFavorite = async () => {
        if(!sessionUser){
            window.alert("Please log in")
        }

        if(heartColor == "redheart"){
            await dispatch(thunkDeleteFav(product.id, sessionUser.id))
            setHeartColor("")
        }else if(heartColor == ""){
            await dispatch(thunkAddFav(product?.id, sessionUser?.id))
            setHeartColor("redheart")
        }

    }

    return(
        <button onClick={handleFavorite} className={heartColor} style={{border:"none", cursor:"pointer"}}>
            <i className={heartColor? "fa-solid fa-heart fa-lg":"fa-regular fa-heart fa-lg"} />
            <p className={onpagedetails? "":"hidden"}>
                {heartColor? "Added to Collection":"Add to Collection"} 
            </p>
        </button>
    )
}

export default FavoriteIcon
