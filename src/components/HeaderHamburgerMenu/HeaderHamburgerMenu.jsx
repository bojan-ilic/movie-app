import React from "react";
import "./HeaderHamburgerMenu.scss";

// Import FontAwesomeIcon component and faBars icon from Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

// Import HeaderNavBar, SearchBar, and Account components to enhance navigation, searching, and account management in the mobile menu
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import SearchBar from "../SearchBar/SearchBar";
import Account from "../Account/Account";

class HeaderHamburgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	toggleMenu = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	};

	render() {
		const {isOpen} = this.state;

		return (
			<div className="header__hamburger-menu-icon">
				<button onClick={this.toggleMenu} className="hamburger-icon">
					<FontAwesomeIcon icon={faBars}/>
				</button>
				{isOpen && (
					<div className="mobile-menu">
						<HeaderNavBar/>
						<SearchBar/>
						<Account/>
					</div>
				)}
			</div>
		);
	}
}

export default HeaderHamburgerMenu;