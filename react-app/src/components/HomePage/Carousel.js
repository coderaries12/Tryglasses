import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent() {
    return (
        <div id="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.glassesusa.com%2Fcoupons-and-promotions&psig=AOvVaw01h9ObimQsWFUi0ltwGgAn&ust=1687313898375000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCJhp7k0P8CFQAAAAAdAAAAABAE"  />
                </div>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto:eco/media/wysiwyg/lp22/men-women-eyeglasses-glassesusa.png" />
                </div>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://images2.minutemediacdn.com/image/upload/c_crop,w_3500,h_1968,x_0,y_513/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g371nfb0tsv682a7y6.jpg" />
                </div>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://cdn.mos.cms.futurecdn.net/UQtuNnDExstn6D432nf8pW.jpg" />
                </div>
                <div>
                    <img style={{width:"100%", objectFit:"cover"}} className="carousel-image" src="https://www.glassesgallery.com/media/acb/files/1/1/11_deals_ns-min.jpg" />
                </div>
            </Carousel>
        </div>
    );
}
