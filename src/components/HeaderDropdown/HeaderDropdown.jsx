import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import "./HeaderDropdown.scss";

/**
 * HeaderDropdown component displays a dropdown in the header of a webpage.
 *
 * Props:
 *  - label: string
 *    The label for the dropdown
 *
 * Example:
 *  <HeaderDropdown label="Categories"/>
 */

export class HeaderDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {isOpen: false};
	}

	toggleDropdown = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}), () => {
			document.body.classList.toggle('no-scroll', this.state.isOpen);
		});
	};

	render() {
		const label = this.props.label;

		return (
			<li className="dropdown" onClick={this.toggleDropdown}>
				{label}
				<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
				<ul className={`dropdown-menu-wrapper ${this.state.isOpen ? 'open' : ''}`}>
					<li className="top-categories">
						<h3>Top categories</h3>
						<div className="top-categories__wrapper">
							<li>
								<Link to="#">MovieApp Originals</Link>
							</li>
							<li>
								<Link to="#">Kids</Link>
							</li>
							<li>
								<Link to="#">Recently added movies</Link>
							</li>
							<li>
								<Link to="#">Recently added TV</Link>
							</li>
						</div>
					</li>
					<li className="category-separator"></li>
					<li className="two-categories">
						<div className="category-column category-column-1">
							<h3>Genres</h3>
							<ul>
								<li>
									<Link to="#">Action and adventure</Link>
								</li>
								<li>
									<Link to="#">Comedy</Link>
								</li>
								<li>
									<Link to="#">Drama</Link>
								</li>
								<li>
									<Link to="#">Documentary</Link>
								</li>
								<li>
									<Link to="#">Kids and family</Link>
								</li>
								<li>
									<Link to="#">Fantasy</Link>
								</li>
								<li>
									<Link to="#">Horror</Link>
								</li>
								<li>
									<Link to="#">Romance</Link>
								</li>
								<li>
									<Link to="#">Science fiction</Link>
								</li>
								<li>
									<Link to="#">Suspense</Link>
								</li>
								<li>
									<Link to="#">Anime</Link>
								</li>
								<li>
									<Link to="#">Sports</Link>
								</li>
								<li>
									<Link to="#">Crime</Link>
								</li>
							</ul>
						</div>
						<ul className="category-column category-column-2">
							<h3>Other categories</h3>
							<ul>
								<li>
									<Link>Award winners</Link>
								</li>
								<li>
									<Link>Only for a limited time on Prime</Link>
								</li>
							</ul>
						</ul>
					</li>
				</ul>
			</li>
		);
	}
}

export default HeaderDropdown;
