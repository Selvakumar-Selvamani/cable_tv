import React, { Component } from "react";
import Slider from "react-slick";

export default function MultiCarousel(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="logoCarWrapper text-center">
            <Slider {...settings}>
                {props.images.map((data) => (
                    <div className="imgWrapper text-center">
                        <img src={data.img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}