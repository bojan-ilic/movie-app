import React from "react";
import "./FooterNavBar.scss";
import { Link } from "react-router-dom";

/**
 * FooterNavBar component renders the navigation bar in the footer of the website.
 *
 * @component
 */

class FooterNavBar extends React.Component {
  render() {
    return (
      <nav className="footer__nav-bar">
        <ul>
          <li>
            <Link to="#">Terms and Privacy Notice</Link>
          </li>
          <li>
            <Link to="#">Send us feedback</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default FooterNavBar;
