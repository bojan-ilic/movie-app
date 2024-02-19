import React from "react";
import "./MoviePromoList.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviePromoCard from "../MoviePromoCard/MoviePromoCard";
import Logo from "../../assets/images/logo.svg";
import LandOfBadImage from "../../assets/images/Land of bad.jpg";
import LordOfTheRingsImage from "../../assets/images/Lord of the rings.jpg";

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
				title: "Land of Bad",
				videoPoster: LandOfBadImage,
				video: "https://www.youtube.com/embed/u3QMjSoi2dA?si=LGIWPX-mzii8gHXN&amp;controls=0",
				category: "	Action",
				recommendedYears: "13+"
			},
			{
				title: "An Eye For An Eye",
				videoPoster:
					"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/770bd067bf78fedda1a69766c52b8db035a4ead3a460b1c91108247c8bcad79f._RI_V_TTW_UX667_UY375_.png",
				video:
					"https://s3-dub-2.cf.trailer.row.aiv-cdn.net/0dff/68a0/7020/40e4-af39-060548c343ae/41da9ed3-706a-4f99-9037-3de2fb880620_video_6000_audio_aaclc_128.mp4",
				category: "Drama",
				recommendedYears: "16+"
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
