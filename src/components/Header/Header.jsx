import React from "react";
import "./Header.scss";
import LogoBox from "../LogoBox/LogoBox";
import HeaderNavBar from "../HeaderNavBar/HeaderNavBar";
import SearchBar from "../SearchBar/SearchBar";
import Account from "../Account/Account";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <LogoBox />
        <HeaderNavBar />
        <SearchBar />
        <Account />
      </header>
    );
  }
}

export default Header;
