import React from "react";
import "./MoviePromoList.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviePromoCard from "../MoviePromoCard/MoviePromoCard";

class MoviePromoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MoviePromoDetails: [],
    };
  }
  render() {
    return (
      <section className="movie-promo-list">
        {/* <Slider {...settings}></Slider> */}
        <MoviePromoCard />
      </section>
    );
  }
}

export default MoviePromoList;
