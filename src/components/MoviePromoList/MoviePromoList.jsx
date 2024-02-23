import React from "react";
import "./MoviePromoList.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviePromoCard from "../MoviePromoCard/MoviePromoCard";
import Logo from "../../assets/images/logo.svg";
import LandOfBadImage from "../../assets/images/Land of bad.jpg";
import LordOfTheRingsImage from "../../assets/images/Lord of the rings.jpg";
import AnEyeForAnEyeImage from "../../assets/images/An Eye For An Ey.jpeg";
import AnEyeForAnEyeVideo from "../../assets/videos/An Eye For An Ey.mp4";

class MoviePromoList extends React.Component {
	render() {
		const moviePromoDetails = [
			{
				title: "The Lord of the Rings",
				videoPoster: LordOfTheRingsImage,
				video: "https://www.youtube.com/embed/zckJCxYxn1g?si=Uqy1gbUHX0iyBE27&amp;controls=0",
				category: "	Adventure",
				recommendedYears: "12+"
			},
			{
				title: "An Eye For An Eye",
				videoPoster: AnEyeForAnEyeImage,
				video: AnEyeForAnEyeVideo,
				category: "Drama",
				recommendedYears: "16+"
			},
			{
				title: "Land of Bad",
				videoPoster: LandOfBadImage,
				video: "https://www.youtube.com/embed/u3QMjSoi2dA?si=LGIWPX-mzii8gHXN&amp;controls=0",
				category: "	Action",
				recommendedYears: "13+"
			}
		];

		const settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 5000,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<section className="movie-promo-list">
				<div className="movie-promo-list__title">
					<div className="title-logo">
						<img src={Logo} alt="Logo"/>
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
