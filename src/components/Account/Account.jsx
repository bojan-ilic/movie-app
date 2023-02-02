import React from "react";
import "./Account.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconUser from "../../assets/images/icon-user.png";
import { Link } from "react-router-dom";

class Account extends React.Component {
  render() {
    return (
      <div className="header__account">
        <div className="icon-user">
          <Link href="#">
            <img src={IconUser} alt="Icon User" />
          </Link>
        </div>
        <div className="username">
          <span>Username</span>
        </div>
        <div className="icon-arrow">
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </div>
      </div>
    );
  }
}

export default Account;
