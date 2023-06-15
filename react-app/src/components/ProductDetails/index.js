import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/products";
import { useHistory, Link, useParams } from "react-router-dom";
import "./productdetail.css"

const ProductDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId]);

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

    return (
        <div>
            <div className="pd-container">
                <img alt={product?.title} src={product?.previewImage} className="pd-mainimage" />
            </div>
            <div className="pd-subimage">
            {product?.images.map((image) => (
                
                  <button className="image-button"><img src={image.image} /></button>
                
            ) )}
            </div>
            <div className="bottom-tabs-wrapper">
                <div className="pd-bottom">
                    <button className="bottom-tabs">Description</button>
                    <button className="bottom-tabs">Frame & Measurements</button>
                    <button className="bottom-tabs">Shipping & Returns</button>
                    <div className="bottom-tabs-info">
                        <span>{product?.title}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )

}
export default ProductDetails;
