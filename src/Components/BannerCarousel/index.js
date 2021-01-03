import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className="bannerImgWrapper">
            <Slider {...settings}>
                {props.images.map((data) => (
                    <div>
                        <img src={data.img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}