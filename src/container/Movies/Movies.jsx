import React from "react";
import "./Movies.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Movies extends React.Component {
  render() {
    return (
      <main className="page-movies">
        <Header />
        <div className="page-home__wrapper">
          <h1 style={{ color: "white", marginTop: "30px" }}>Page Movies</h1>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Movies;
