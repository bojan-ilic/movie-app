import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderNavItem.scss";

/**
 * HeaderNavItem component renders a single navigation link in the navigation bar.
 * It uses the Link component from React Router to navigate to the corresponding page when clicked.
 * The component also adds the 'active-menu-link' class to the link if it represents the current page.
 *
 * @param {string} to - The URL path for the navigation link
 * @param {string} label - The text to display for the navigation link
 * @returns {JSX} a React component that represents a navigation link
 */

export class HeaderNavItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { to, label } = this.props;

    // Determine the current page and then compare it with the to property of each navigation link to determine if the active class should be added
    const isActive = window.location.pathname === to;

    return (
      <li className={`${isActive ? "active-menu-link" : ""}`}>
        <Link to={to}>{label}</Link>
      </li>
    );
  }
}

export default HeaderNavItem;
