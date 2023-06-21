import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./productdetail.css"
export default function ImageCarousel() {
    const { productId } = useParams();
    const product = useSelector((state) => state.products[productId]);
    return (
      <div id="image-carousel">
        <Carousel >
            
            {product?.images.map((image) => (
          <div key={image.id} className={image.image? "" : "hidden"}>
            <img src={image.image || "https://res.cloudinary.com/dxrhf8ah9/image/upload/v1684121802/Airbnb-images/ET-IMAGE-COMING-SOON-1000_ys87xr.jpg"} alt={product.name} />
          </div>
        ))}
        </Carousel>
       </div> 
    );
}
