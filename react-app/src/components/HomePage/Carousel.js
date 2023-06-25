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
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://cdn.shopify.com/s/files/1/0601/5415/1102/collections/733192f6f6a502e4ccdd9213be84a966_1445x.jpg?v=1670347792" />
                </div>
                {/* <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="" />
                </div> */}
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2021/03/310165-Seeing-Clearly-Is-GlassesUSA-Legit-1296x728-Header-d0dcf6.jpg?w=1155&h=1528" />
                </div>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://danielwalters.com/product_images/uploaded_images/police.jpg" />
                </div>
            </Carousel>
        </div>
    );
}
