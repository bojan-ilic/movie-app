import React, {Component} from "react";
import "./Top10CardMini.scss";

export class Top10CardMini extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {top10title, top10promoImage, top10number} = this.props;

		return (
			<div className="top-10-card-mini">
				<span>{top10number}</span>
				<img src={top10promoImage} alt={top10title}/>
			</div>
		);
	}
}

export default Top10CardMini;
