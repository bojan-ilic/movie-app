import React from "react";
import "./MovieCard.scss";
import MovieInfo from "../MovieInfo/MovieInfo";

class MovieCard extends React.Component {
  render() {
    const title = this.props.title;
    const posterURL = this.props.posterURL;
    const alt = this.props.alt;
    const movieTitle = this.props.movieTitle;

    return (
      <div className="movie-card">
        <a href="#">
          <img src={posterURL} alt={movieTitle} />
        </a>
        <MovieInfo movieTitle={movieTitle} posterURL={posterURL} alt={alt} />
      </div>
    );
  }
}

export default MovieCard;
