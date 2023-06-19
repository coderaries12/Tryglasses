import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows>
                <div>
                    <img className="carousel-image" src="https://res.cloudinary.com/dxrhf8ah9/image/upload/v1684094635/Airbnb-images/9c3ff1dd-36c6-4f0c-90f8-0b9eb9e00520_rtpd0g.webp"  />
                </div>
                <div>
                    <img className="carousel-image" src="https://res.cloudinary.com/dxrhf8ah9/image/upload/v1684094626/Airbnb-images/45b4ce4b-6bc9-4f19-af4b-811e6d2d8ef1_ebfn8r.webp" />
                </div>
                <div>
                    <img className="carousel-image" src="https://res.cloudinary.com/dxrhf8ah9/image/upload/v1684094750/Airbnb-images/b8a5f60d-2bda-4050-bc9e-55af012d6eb4_nqtqtf.webp" />
                </div>
            </Carousel>
        </div>
    );
}
