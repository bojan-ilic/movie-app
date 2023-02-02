import React from "react";
import "./MovieList.scss";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieDetails: [],
    };

    // console.log("konzolLogujem", category);
  }

  // urls = [
  //   "https://api.themoviedb.org/3/tv/popular?api_key=ed629fe234107c7bb508e5eec8974967",
  //   "https://api.themoviedb.org/3/movie/top_rated?api_key=ed629fe234107c7bb508e5eec8974967",
  //   "https://api.themoviedb.org/3/movie/upcoming?api_key=ed629fe234107c7bb508e5eec8974967",
  // ];

  // category = this.props.category;
  //   console.log("konzolLogujem", category);

  movieCategory = (apiVariable) => {
    const category = this.props.category;
    console.log("Kategorije: ", category);
    return `https://api.themoviedb.org/3/${category}?api_key=ed629fe234107c7bb508e5eec8974967`;
  };

  // Function that will fetch data from the API
  fetchAPI = () => [
    fetch(this.movieCategory())
      .then((response) => response.json())
      // .then((data) => console.log("FetchAPI JSON Data", data.results))
      // .then((data) => console.log("KONZOLA", data.results))
      .then((data) => this.setState({ movieDetails: data.results }))
      .catch((error) => console.log("Error: ", error)),
  ];

  //   Call the "fetchAPI" function as soon as the component is mounted
  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    const title = this.props.title;
    const movieDetails = this.state.movieDetails;
    console.log("movieDetails: ", movieDetails);
    const posterURL = (poster) => {
      return `https://www.themoviedb.org/t/p/w500${poster}`;
    };

    const movieDetailsComplete = movieDetails.filter(function (el) {
      // console.log(el);
      return el.backdrop_path != null;
    });
    // console.log("movieDetailsComplete: ", movieDetailsComplete);
    // console.log(typeof movieDetailsComplete);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>,
      prevArrow: <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>,
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
                    // key={item.uuidv4()}
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
