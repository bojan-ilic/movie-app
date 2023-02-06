import React from "react";
import "./HeaderNavBar.scss";
import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";

/**
 * HeaderNavBar component provides the navigation bar for the header section of the website.
 * It uses the HeaderNavItem component to render the navigation links and HeaderDropdown component
 * to render the dropdown menus.
 *
 * @param {array} menuLinks - An array of objects representing the links in the navigation bar
 * @returns {JSX} a React component that renders the navigation bar
 */

const menuLinks = [
  { to: "/", label: "Home" },
  { to: "/tvshows", label: "TV Shows" },
  { to: "/movies", label: "Movies" },
  { label: "Categories" },
];

class HeaderNavBar extends React.Component {
  render() {
    return (
      <nav className="header__nav-bar">
        <ul>
          {menuLinks.map((link, index) =>
            link.to ? (
              <HeaderNavItem key={index} to={link.to} label={link.label} />
            ) : (
              <HeaderDropdown key={index} label={link.label} />
            )
          )}
        </ul>
      </nav>
    );
  }
}

export default HeaderNavBar;
