import React, { Component } from "react";
import "./SingleMovie.scss";

class SingleMovie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const movieID = this.props.match?.params?.id;
    console.log("Rendering SingleMovie component...");
    console.log("Movie ID from URL: ", movieID);
    return (
      <div style={{ color: "red" }}>
        <h1>Single Movie page</h1>
        <h2>Movie ID: {movieID}</h2>
      </div>
    );
  }
}

export default SingleMovie;
