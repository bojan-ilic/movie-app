import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

class SlickSlider extends React.Component {
  render() {
    const sliderData = [
      {
        title: "The Rig",
        link: "https://www.google.com/",
        imageURL:
          "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheRig/d3ec01d7-c8dd-4086-93dd-290612c08f8c._UR3000,600_SX1500_FMwebp_.jpeg",
      },
      {
        title: "Hunters",
        link: "https://www.google.com/",
        imageURL:
          "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_HuntersS2/df497117-b8ca-49eb-9987-f6c9b86b54cb._UR3000,600_SX1500_FMwebp_.jpeg",
      },
      {
        title: "The Wheel of Time",
        link: "https://www.google.com/",
        imageURL:
          "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheWheelOfTime_S1_NoLocaleOnly/e8aa1d89-f135-4b48-b014-fc7222cb4891._UR3000,600_SX1500_FMwebp_.jpeg",
      },
      {
        title: "Reacher",
        link: "https://www.google.com/",
        imageURL:
          "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Reacher_S1_NoLocaleOnly/af5e691b-85b1-4274-97f3-266958b239f5._UR3000,600_SX1500_FMwebp_.jpeg",
      },
      {
        title: "2 Broke Girls",
        link: "https://www.google.com/",
        imageURL:
          "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_SH_2BrokeGirls/960b6e25-0731-4d00-bbd1-4eecda8eb8e8._UR3000,600_SX1500_FMwebp_.jpg",
      },
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>,
      prevArrow: <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>,
    };

    return (
      <div className="slick-slider-wrapper">
        <Slider {...settings}>
          {sliderData.map((sliderItem, index) => {
            return (
              <div key={index} className="slick-slide-one">
                <a href={sliderItem.link}>
                  <img src={sliderItem.imageURL} alt={sliderItem.title} />
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;
