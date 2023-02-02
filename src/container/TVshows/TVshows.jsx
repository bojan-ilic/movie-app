import React from "react";
import "./TVshows.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class TVshows extends React.Component {
  render() {
    return (
      <main className="page-movies">
        <Header />
        <div className="page-home__wrapper">
          <h1 style={{ color: "white", marginTop: "30px" }}>Page TV Shows</h1>
        </div>
        <Footer />
      </main>
    );
  }
}

export default TVshows;
