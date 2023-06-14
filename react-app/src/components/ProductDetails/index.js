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
            <div><img src={product?.previewImage} /></div>
            {product?.images.map((image) => (
                <div>
                    <img src={image.image} />
                </div>
            ) )}
            <div>
                <h2>{product?.title}</h2>
                <h2>{product?.price}</h2>
                <p>{product?.description}</p>
            </div>
        </div>
        
    )

}
export default ProductDetails;
