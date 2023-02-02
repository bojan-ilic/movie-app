import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home";
import TVshows from "./container/TVshows/TVshows";
import Movies from "./container/Movies/Movies";

class App extends React.Component {
  render() {
    // const activePage = window.location.pathname;
    // const navLinks = document.querySelectorAll("nav a").forEach((link) => {
    //   console.log(link.href);
    // });
    // const navLinks = document.querySelector("nav a").forEach((link) => {
    //   console.log(link);
    // });
    // console.log(navigationContainer);

    return (
      <div className="main-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tvshows" element={<TVshows />} />
            <Route path="movies" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
