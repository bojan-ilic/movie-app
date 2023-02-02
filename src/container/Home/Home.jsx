import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MovieList from "../../components/MovieList/MovieList";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import MoviePromoList from "../../components/MoviePromoList/MoviePromoList";

class Home extends React.Component {
  render() {
    return (
      <main className="page-home">
        <Header />
        <div className="page-home__wrapper">
          <SlickSlider />
          <MovieList title={"Popular TV"} category={"tv/popular"} />
          <MovieList title={"Top TV"} category={"tv/top_rated"} />
          <MovieList title={"Upcoming Movies"} category={"movie/upcoming"} />
          <MovieList title={"Top Movies"} category={"movie/top_rated"} />
          <MoviePromoList />
        </div>
        <Footer />
      </main>
    );
  }
}

export default Home;
