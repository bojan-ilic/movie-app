import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home";
import TVshows from "./container/TVshows/TVshows";
import Movies from "./container/Movies/Movies";
import SingleMovie from "./container/SingleMovie/SingleMovie";

/**
 * The App component is the top-level component of the React application,
 * responsible for rendering the entire UI.
 * It uses react-router-dom to handle client-side routing and has four routes:
 * "/", "/tvshows", and "/movies", "/movies/:id"
 * each corresponding to a component to be rendered when the path is matched.
 */

class App extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tvshows" element={<TVshows />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
