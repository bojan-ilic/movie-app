import React from "react";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import {v4 as uuidv4} from "uuid";

class MovieList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movieDetails: []
		};
	}

	movieCategory = (apiVariable) => {
		const category = this.props.category;
		return `https://api.themoviedb.org/3/${category}?api_key=ed629fe234107c7bb508e5eec8974967`;
	};

	// Function that will fetch data from the API
	fetchAPI = () => [
		fetch(this.movieCategory())
			.then((response) => response.json())
			.then((data) => this.setState({movieDetails: data.results}))
			.catch((error) => console.log("Error: ", error))
	];

	//   Call the "fetchAPI" function as soon as the component is mounted
	componentDidMount() {
		this.fetchAPI();
	}

	render() {
		const title = this.props.title;
		const movieDetails = this.state.movieDetails;
		const posterURL = (poster) => {
			return `https://www.themoviedb.org/t/p/w500${poster}`;
		};

		const movieDetailsComplete = movieDetails.filter(function (el) {
			return el.backdrop_path != null;
		});

		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 6,
			nextArrow: <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>,
			prevArrow: <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>,
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
			<section className="movie-list">
				<div className="movie-list__headline">
					<h2>{title}</h2>
					<a href="#">See more</a>
				</div>
				<div className="movie-list__wrapper">
					{movieDetailsComplete.length > 0 ? (
						<Slider {...settings}>
							{movieDetailsComplete.map((item) => {
								return (
									<MovieCard
										key={uuidv4()}
										posterURL={posterURL(item.backdrop_path)}
										alt={item.name}
										movieTitle={item.name || item.title}
									/>
								);
							})}
						</Slider>
					) : (
						<p>Loading...</p>
					)}
				</div>
			</section>
		);
	}
}

export default MovieList;
