import React from "react";
import "./Account.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconUser from "../../assets/images/icon-user.png";
import { Link } from "react-router-dom";

/**
 * Account component renders the user's account information and dropdown menu in the header section.
 * The user's profile picture, username and a dropdown arrow are displayed.
 */

class Account extends React.Component {
  /**
   * Renders the user's account information and dropdown menu.
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className="header__account">
        {/* User's profile picture */}
        <div className="icon-user">
          <Link href="#">
            <img src={IconUser} alt="Icon User" />
          </Link>
        </div>

        {/* User's username */}
        <div className="username">
          <span>Username</span>
        </div>

        {/* Dropdown arrow */}
        <div className="icon-arrow">
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </div>
      </div>
    );
  }
}

export default Account;
