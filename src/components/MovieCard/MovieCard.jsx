import React from "react";
import "./MovieCard.scss";
import MovieInfo from "../MovieInfo/MovieInfo";
import { Link } from "react-router-dom";

/**
 * MovieCard component is a presentational component that displays a movie poster and its information.
 * It receives the movie's title, poster URL and alt text as props from its parent component.
 * The movie poster is displayed as a link that navigates to the movie's details page.
 *
 * @props
 * - title: string
 * - posterURL: string
 * - alt: string
 * - movieTitle: string
 *
 * @returns
 *  A `div` element with class name `movie-card` that contains:
 *    - `Link` component that wraps an `img` element, representing the movie poster
 *    - `MovieInfo` component, passing down the movie's title, poster URL and alt text as props
 */

class MovieCard extends React.Component {
  render() {
    const title = this.props.title;
    const posterURL = this.props.posterURL;
    const alt = this.props.alt;
    const movieTitle = this.props.movieTitle;

    return (
      <div className="movie-card">
        <Link to={"/"}>
          <img src={posterURL} alt={movieTitle} />
        </Link>
        <MovieInfo movieTitle={movieTitle} posterURL={posterURL} alt={alt} />
      </div>
    );
  }
}

export default MovieCard;
