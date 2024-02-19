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
import ArcaneImage from '../../assets/images/Arcane.jpg';
import ArgylleImage from "../../assets/images/Argylle.jpg";
import BreakingBadImage from "../../assets/images/Breaking Bad.jpg";
import BetterCallSaulleImage from "../../assets/images/Better Call Saul.jpg";
import KungFuPandaImage from "../../assets/images/Kung Fu Panda 4.jpg"

class SlickSlider extends React.Component {
  render() {
    const sliderData = [
      {
        title: "Argylle",
        link: "",
        imageURL: ArgylleImage,
      },
      {
        title: "Arcane",
        link: "",
        imageURL: ArcaneImage,
      },
      {
        title: "Breaking Bad",
        link: "",
        imageURL: BreakingBadImage,
      },
      {
        title: "Better Call Saul",
        link: "",
        imageURL: BetterCallSaulleImage,
      },
      {
        title: "Kung Fu Panda 4",
        link: "",
        imageURL: KungFuPandaImage,
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
