import React from "react";
import "./MoviePromoCard.scss";
import { Link } from "react-router-dom";

class MoviePromoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const promoTitle = this.props.promoTitle;
    const promoPoster = this.props.promoPoster;
    const promoVideo = this.props.promoVideo;
    const promoCategory = this.props.promoCategory;
    const promoRecommendedYears = this.props.promoRecommendedYears;

    return (
      <div className="movie-promo-card">
        <div
          className="promo-image"
          style={{
            backgroundImage: `linear-gradient(
          270deg,
          rgba(37, 46, 57, 0),
          rgb(37, 46, 57) 80%
        ),
        url(${promoPoster}) `,
          }}
        >
          <Link to="#">
            <h3>{promoTitle}</h3>
          </Link>
          <div className="info-container">
            <div className="buttons-container">
              <button>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <title>Add</title>
                  <path
                    d="M3 12h18m-9 9V3"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
              <button>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <title>Info</title>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M11 10.097c0-.603.439-1.097.976-1.097h.049c.536 0 .975.494.975 1.097v6.805c0 .604-.439 1.098-.975 1.098h-.05c-.536 0-.975-.494-.975-1.098v-6.805zM11 6h2v2h-2z"
                      fill="currentColor"
                    ></path>
                    <circle
                      stroke="currentColor"
                      stroke-width="2"
                      cx="12"
                      cy="12"
                      r="9"
                    ></circle>
                  </g>
                </svg>
              </button>
            </div>
            <div className="movie-info">
              <span className="years">{promoRecommendedYears}</span>
              <span className="category">{promoCategory}</span>
            </div>
          </div>
        </div>
        <div className="promo-video">
          <video poster={promoPoster} controls>
            <source src={promoVideo} />
          </video>
        </div>
      </div>
    );
  }
}

export default MoviePromoCard;
