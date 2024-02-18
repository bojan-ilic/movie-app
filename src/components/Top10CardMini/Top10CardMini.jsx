import React, { Component } from "react";
import "./Top10CardMini.scss";

export class Top10CardMini extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const top10title = this.props.top10title;
    const top10promoImage = this.props.top10promoImage;
    const top10number = this.props.top10number;

    return (
      <div className="top-10-card-mini">
        <span>{top10number}</span>
        <img src={top10promoImage} alt={top10title} />
      </div>
    );
  }
}

export default Top10CardMini;
