import React from "react";
import "./HeaderHamburgerMenu.scss";

// Import FontAwesomeIcon component and faBars icon from Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

class HeaderHamburgerMenu extends React.Component {
	render() {
		return (
			<div className="header__hamburger-menu-icon">
				<FontAwesomeIcon icon={faBars}/>
			</div>
		);
	}
}

export default HeaderHamburgerMenu;