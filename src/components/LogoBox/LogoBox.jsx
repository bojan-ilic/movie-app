import React from "react";
import "./LogoBox.scss";
import PrimeVideoLogo from "../../assets/images/logo.svg";

class LogoBox extends React.Component {
  render() {
    return (
      <div className="logo-box">
        <a href="#">
          <img src={PrimeVideoLogo} alt="Prime Video Logo" />
        </a>
      </div>
    );
  }
}

export default LogoBox;
