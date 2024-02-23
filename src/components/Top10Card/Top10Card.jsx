import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Top10Card.scss";

export class Top10Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {top10title, top10category, top10year, top10promoImage} = this.props;

		return (
			<div className="top-10-card-wrapper">
				<div className="info">
					<h2>Top 10 in Serbia</h2>
					<div className="movie-details">
						<h3 className="movie-title">{top10title}</h3>
						<div className="movie-category">
							<span>{top10category}</span>
							<span className="year">{top10year}</span>
						</div>
						<div className="promo-mobile">
							<img src={top10promoImage} alt="Movie Promo"/>
						</div>
						<div className="buttons-wrapper">
							<Link className="play">
								<svg class="play-icon" width="24" height="24" viewBox="0 0 24 24"
									 xmlns="http://www.w3.org/2000/svg">
									<title>Play Arrow</title>
									<path
										d="M4.576 2.452C3.71 1.953 3 2.364 3 3.364v17.272c0 1 .71 1.41 1.576.912l15.03-8.642c.867-.498.867-1.314 0-1.812L4.576 2.452z"
										fill="currentColor"
										fill-rule="evenodd"
									></path>
								</svg>
								Play S1 E1
							</Link>
							<button className="add-movie">
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
							<Link className="movie-info">
								<svg
									width="24"
									height="24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Info Button</title>
									<path
										fill="currentColor"
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M 11.067 5.232 C 11.067 6.199 11.565 6.683 12.562 6.683 C 13.187 6.683 13.715 6.467 14.146 6.035 C 14.578 5.604 14.794 5.076 14.794 4.451 C 14.794 3.484 14.295 3 13.298 3 C 12.674 3 12.145 3.216 11.714 3.648 C 11.283 4.079 11.067 4.607 11.067 5.232 Z M 14.08 17.729 C 14.08 17.446 13.975 17.186 13.767 16.948 L 13.477 16.613 C 13.224 16.896 12.93 17.137 12.596 17.338 C 12.261 17.539 11.997 17.64 11.803 17.64 C 11.64 17.64 11.558 17.528 11.558 17.305 C 11.558 17.111 11.606 16.821 11.703 16.434 C 11.8 16.048 11.919 15.601 12.06 15.096 C 12.201 14.59 12.354 14.058 12.517 13.5 C 12.681 12.942 12.834 12.395 12.975 11.86 C 13.116 11.324 13.235 10.837 13.332 10.398 C 13.429 9.959 13.477 9.613 13.477 9.36 C 13.477 8.929 13.388 8.62 13.209 8.434 C 13.031 8.248 12.733 8.155 12.317 8.155 C 12.034 8.155 11.655 8.193 11.178 8.267 C 10.702 8.341 10.264 8.431 9.862 8.535 C 9.267 8.698 8.88 8.847 8.701 8.981 C 8.523 9.115 8.419 9.331 8.389 9.628 L 8.3 10.365 L 10.509 10.365 L 9.393 14.158 C 8.739 16.375 8.411 17.84 8.411 18.554 C 8.411 19.685 8.992 20.25 10.152 20.25 C 10.777 20.25 11.402 20.109 12.026 19.826 C 12.651 19.544 13.15 19.213 13.522 18.833 C 13.894 18.454 14.08 18.086 14.08 17.729 Z"
									></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<div className="promo">
					<img src={top10promoImage} alt="Movie Promo"/>
				</div>
			</div>
		);
	}
}

export default Top10Card;
