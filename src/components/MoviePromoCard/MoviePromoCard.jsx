import React from "react";
import "./MoviePromoCard.scss";
import { Link } from "react-router-dom";

class MoviePromoCard extends React.Component {
  render() {
    return (
      <div className="movie-promo-card">
        <div className="promo-image">
          <Link to="#">
            <h3>The Bourne Supremacy</h3>
          </Link>
          <div className="info-container">
            <div className="buttons-wrapper">
              <button>Button 1</button>
              <button>Button 2</button>
            </div>
            <div className="movie-info">
              <span>13+</span>
              <span>Suspense</span>
            </div>
          </div>
        </div>
        <div className="promo-video"></div>
      </div>
    );
  }
}

export default MoviePromoCard;
