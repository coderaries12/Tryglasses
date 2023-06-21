import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent(infiniteLoop) {
    return (
        <div id="carousel-wrapper">
            <Carousel>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto:eco/media/wysiwyg/lp22/men-women-eyeglasses-glassesusa.png"  />
                </div>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://images.squarespace-cdn.com/content/v1/5b840c22b10598702dd21b3a/1585414034148-F3T2DVEZHS7MX9K7ZF9R/CMS_Peaker_0C8A7705-Edit+%281%29.jpg?format=2500w" />
                </div>
                {/* <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="" />
                </div> */}
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2021/03/310165-Seeing-Clearly-Is-GlassesUSA-Legit-1296x728-Header-d0dcf6.jpg?w=1155&h=1528" />
                </div>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://www.southernsavers.com/wp-content/uploads/2017/07/GlassesUSA-Coupon-Code.png" />
                </div>
            </Carousel>
        </div>
    );
}
