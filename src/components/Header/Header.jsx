import React from "react";
import "./Header.scss";
import LogoBox from "../LogoBox/LogoBox";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import SearchBar from "../SearchBar/SearchBar";
import Account from "../Account/Account";
import HeaderHamburgerMenu from "../HeaderHamburgerMenu/HeaderHamburgerMenu";

/**
 * Header component displays the header section of the website
 *
 * It contains the following sub-components:
 * - LogoBox
 * - HeaderNavBar
 * - SearchBar
 * - Account
 */

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<LogoBox/>
				<HeaderNavBar/>
				<SearchBar/>
				<Account/>
				<HeaderHamburgerMenu/>
			</header>
		);
	}
}

export default Header;
