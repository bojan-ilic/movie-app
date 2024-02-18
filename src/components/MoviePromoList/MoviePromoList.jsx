import React from "react";
import "./MoviePromoList.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviePromoCard from "../MoviePromoCard/MoviePromoCard";
// import LogoBlue from "../../assets/images/logo-blue.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons";

class MoviePromoList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     MoviePromoDetails: [],
  //   };
  // }
  render() {
    const moviePromoDetails = [
      {
        title: "Hail, Caesar!",
        videoPoster:
          "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7d5867d5542b03562abbb14b6b6929f83a848748e96fb7b195590f36b865f62c._RI_V_TTW_UX667_UY375_.jpg",
        video:
          "https://s3-dub-2.cf.trailer.row.aiv-cdn.net/a9d0/58d2/c94d/4efd-bb26-d79a80ad40b6/59b27e69-d6bf-4823-8dc6-2fab0eebdf3f_video_6000_audio_aaclc_128.mp4",
        category: "	Comedy",
        recommendedYears: "13+",
      },
      {
        title: "Ten Little Mistresses",
        videoPoster:
          "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e4217b97f36a054bbf7dceba23960f2f53c34028cf0957d8ceae73a10ca2e893._RI_V_TTW_UX667_UY375_.jpg",
        video:
          "https://s3-dub-2.cf.trailer.row.aiv-cdn.net/7e23/314d/3a2e/464e-b0d6-f531cd5f6939/b8029ab7-ab2b-48f6-a32b-7e5b30e8c1a8_video_6000_audio_aaclc_128.mp4",
        category: "Comedy",
        recommendedYears: "18+",
      },
      {
        title: "An Eye For An Eye",
        videoPoster:
          "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/770bd067bf78fedda1a69766c52b8db035a4ead3a460b1c91108247c8bcad79f._RI_V_TTW_UX667_UY375_.png",
        video:
          "https://s3-dub-2.cf.trailer.row.aiv-cdn.net/0dff/68a0/7020/40e4-af39-060548c343ae/41da9ed3-706a-4f99-9037-3de2fb880620_video_6000_audio_aaclc_128.mp4",
        category: "Drama",
        recommendedYears: "16+",
      },
    ];

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>,
      // prevArrow: <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>,
    };

    return (
      <section className="movie-promo-list">
        <div className="movie-promo-list__title">
          <div className="title-logo">
            <img src={LogoBlue} alt="Amazon Primer Logo Blue" />
          </div>
          <div className="title-text">
            <h2>Previews for your</h2>
          </div>
        </div>
        <Slider {...settings}>
          {moviePromoDetails.map((moviePromo, index) => {
            return (
              <MoviePromoCard
                key={index}
                promoTitle={moviePromo.title}
                promoPoster={moviePromo.videoPoster}
                promoVideo={moviePromo.video}
                promoCategory={moviePromo.category}
                promoRecommendedYears={moviePromo.recommendedYears}
              />
            );
          })}
        </Slider>
      </section>
    );
  }
}

export default MoviePromoList;
