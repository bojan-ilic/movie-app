import React from "react";
import "./LogoBox.scss";
import PrimeVideoLogo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

/**
 * LogoBox component displays the Prime Video logo with a link to the homepage.
 */

class LogoBox extends React.Component {
  render() {
    return (
      <div className="logo-box">
        <Link to={"/"}>
          <img src={PrimeVideoLogo} alt="Prime Video Logo" />
        </Link>
      </div>
    );
  }
}

export default LogoBox;
