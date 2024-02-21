import React, {Component} from "react";
import Slider from "react-slick";
import Top10Card from "../Top10Card/Top10Card";
import Top10CardMini from "../Top10CardMini/Top10CardMini";
import "./Top10List.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

// Images
import WWEimage from "../../assets/images/WWE Raw.jpg";
import DailyShowImage from "../../assets/images/The Daily Show.jpg";
import AmericasFunniestHomeVideosImage from "../../assets/images/America's Funniest Home Videos.jpg";
import TheKellyClarksonShowImage from "../../assets/images/The Kelly Clarkson Show.jpg";
import GHDuoImage from "../../assets/images/GH Dúo.jpg";
import SuidoosterImage from "../../assets/images/Suidooster.jpg";
import LaCasaDeLosFamososImage from "../../assets/images/La Casa de los Famosos.jpg";
import MenOnAmissionImage from "../../assets/images/Men on a Mission.jpg";
import LoveIslandImage from "../../assets/images/Love Island: All Stars.jpg";
import RenascerImage from "../../assets/images/Renascer.jpg";

export class Top10List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null
		};
	}

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2
		});
	}

	render() {
		const top10 = [
			{
				title: "WWE Raw",
				category: "Unscripted, Comedy, Documentary",
				year: "16+",
				promoImage: WWEimage,
				miniPreview: WWEimage
			},
			{
				title: "The Daily Show",
				category: "Comedy, Animation, Fantasy",
				year: "18+",
				promoImage: DailyShowImage,
				miniPreview: DailyShowImage
			},
			{
				title: "America's Funniest Home Videos",
				category: "Suspense, Fantasy, Drama",
				year: "18+",
				promoImage: AmericasFunniestHomeVideosImage,
				miniPreview: AmericasFunniestHomeVideosImage
			},
			{
				title: "The Kelly Clarkson Show",
				category: "Science Fiction, Comedy, Drama",
				year: "18+",
				promoImage: TheKellyClarksonShowImage,
				miniPreview: TheKellyClarksonShowImage
			},
			{
				title: "GH Dúo",
				category: "Drama, Fantasy, Adventure",
				year: "13+",
				promoImage: GHDuoImage,
				miniPreview: GHDuoImage
			},
			{
				title: "Suidooster",
				category: "Suspense, Drama, Action",
				year: "18+",
				promoImage: SuidoosterImage,
				miniPreview: SuidoosterImage
			},
			{
				title: "La Casa de los Famosos",
				category: "Drama",
				year: "16+",
				promoImage: LaCasaDeLosFamososImage,
				miniPreview: LaCasaDeLosFamososImage
			},
			{
				title: "Men on a Mission",
				category: "Science Fiction, Suspense, Drama",
				year: "16+",
				promoImage: MenOnAmissionImage,
				miniPreview: MenOnAmissionImage
			},
			{
				title: "Love Island: All Stars",
				category: "Science Fiction, Suspense, Drama",
				year: "18+",
				promoImage: LoveIslandImage,
				miniPreview: LoveIslandImage
			},
			{
				title: "Renascer",
				category: "Suspense, Action, Drama",
				year: "18+",
				promoImage: RenascerImage,
				miniPreview: RenascerImage
			}
		];

		const slider1Settings = {
			arrows: false,
			speed: 5000,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		const slider2Settings = {
			asNavFor: this.state.nav1,
			ref: (slider) => (this.slider2 = slider),
			slidesToShow: 6,
			slidesToScroll: 1,
			swipeToSlide: true,
			focusOnSelect: true,
			infinite: false,
			nextArrow: <FontAwesomeIcon icon={faChevronRight}/>,
			prevArrow: <FontAwesomeIcon icon={faChevronLeft}/>,
			responsive: [
				{
					breakpoint: 360, // $breakpoint-x-small value
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: false
					}
				}
			]
		};

		return (
			<section className="top-10-list-wrapper">
				<Slider {...slider1Settings} asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)}>
					{top10.map((movie, movieIndex) => (
						<Top10Card
							key={movieIndex}
							top10title={movie.title}
							top10category={movie.category}
							top10year={movie.year}
							top10promoImage={movie.promoImage}
						/>
					))}
				</Slider>
				<Slider {...slider2Settings}>
					{top10.map((movie, index) => (
						<Top10CardMini
							key={index}
							top10title={movie.title}
							top10promoImage={movie.miniPreview}
							top10number={index + 1}
						/>
					))}
				</Slider>
			</section>
		);
	}
}

export default Top10List;
