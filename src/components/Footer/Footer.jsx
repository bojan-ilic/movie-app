import React from "react";
import "./Footer.scss";
import LogoBox from "../LogoBox/LogoBox";
import FooterNavBar from "../FooterNavBar/FooterNavBar";
import Copyright from "../Copyright/Copyright";

/**
 * Footer component
 *
 * This component displays the footer of the application, which consists of a logo box,
 * a navigation bar, and a copyright notice.
 */

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <LogoBox />
        <div className="footer__navbar-copyright-wrapper">
          <FooterNavBar />
          <Copyright />
        </div>
      </footer>
    );
  }
}

export default Footer;
