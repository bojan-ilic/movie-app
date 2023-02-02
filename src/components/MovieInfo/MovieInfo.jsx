import React from "react";
import "./MovieInfo.scss";

class MovieInfo extends React.Component {
  render() {
    const posterURL = this.props.posterURL;
    const alt = this.props.alt;
    const movieTitle = this.props.movieTitle;

    return (
      <div className="movie-card__info">
        <div className="buttons-wrapper">
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
        <div className="included">
          <p>Included with Prime</p>
        </div>
        <div className="textwrap">
          <h3>{movieTitle}</h3>
          <p>
            Made In Heaven chronicles the lives of Tara and Karan, two wedding
            planners in Delhi. India is a potent blend of old and new. Tradition
            jostles with modern aspirations against the backdrop of big fat
            Indian weddings revealing many secrets and many lies. The supposedly
            liberal fabric of the upper crust unravels as the duo navigate
            through arranged marriages, dowry transactions and virginity tests.
          </p>
        </div>
        <div className="more-info">
          <p>2h 27min</p>
          <p>2022</p>
          <p>13+</p>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
