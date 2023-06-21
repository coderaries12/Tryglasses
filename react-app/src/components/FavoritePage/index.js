import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import FavoriteIcon from "../FavoriteIcon";
import "./FavoritePage.css"

const FavoritePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    if(!sessionUser){
        history.push("/")
    }

    const products = Object.values(useSelector((state) => (state.products)));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        
        <div className="bodyContainer">
            
            <div className="fav-title">
                <h2><i className="fa-regular fa-circle-user" /> {sessionUser?.username}</h2>
                <h3>Favorite items:   {sessionUser?.user_favorites?.length} items</h3>
            </div>
            <div className="favoritesContainer">
            {sessionUser?.user_favorites?.map((product) => (
                <div key={product.id}>
                    <div className="fav-imageWithFav">
                        <NavLink to={`/products/${product.id}`}>
                            <img
                            className="product-image"
                            src={product.previewImage}
                            alt="products"
                            />
                            <div className="price">$ {product.price.toFixed(2)}</div>
                        </NavLink>
                            {/* <div className="fav-product-name">{product.name}</div>
                            <div className="fav-product-pice">$ {product.price.toFixed(2)}</div> */}
                        <FavoriteIcon
                            sessionUser={sessionUser}
                            product={product}
                        />
                    </div>
                </div>
            ))}
            </div>
        </div>
    )}

    export default FavoritePage
