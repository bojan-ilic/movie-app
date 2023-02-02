import React from "react";
import "./HeaderNavBar.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDropDownMenu: "",
    };
  }

  addActiveMenuLink = () => {
    const pagePathName = window.location.pathname;
    document.querySelectorAll("nav.header__nav-bar a").forEach((link) => {
      // console.log(link);
      // console.log(link.href);
      // link.classList.add("test");
      console.log(pagePathName);
      if (link.href.includes(pagePathName)) {
        // console.log(`${pagePathName}`);
        link.classList.add("active-menu-link");
      }
    });
  };

  componentDidMount() {
    this.addActiveMenuLink();
    console.log("componenDidMount");
  }

  // showDropDownMenu = (e) => {
  //   this.setState({ displayDropDownMenu: "display-dropdown-menu" });
  // };
  // hideDropDownMenu = (e) => {
  //   this.setState({ displayDropDownMenu: "" });
  // };

  render() {
    const displayDropDownMenu = this.state.displayDropDownMenu;

    return (
      <nav className="header__nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link
            // onMouseEnter={this.showDropDownMenu}
            // onMouseLeave={this.hideDropDownMenu}
            >
              Categories
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </Link>
            <ul className={`dropdown-menu-wrapper ${displayDropDownMenu}`}>
              <li className="top-categories">
                <h3>Top categories</h3>
                <div className="top-categories__wrapper">
                  <li>
                    <Link to="#">Amazon Originals</Link>
                  </li>
                  <li>
                    <Link to="#">Kids</Link>
                  </li>
                  <li>
                    <Link to="#">Recently added movies</Link>
                  </li>
                  <li>
                    <Link to="#">Recently added TV</Link>
                  </li>
                </div>
              </li>
              <li className="category-separator"></li>
              <li className="two-categories">
                <div className="category-column category-column-1">
                  <h3>Genres</h3>
                  <ul>
                    <li>
                      <Link to="#">Action and adventure</Link>
                    </li>
                    <li>
                      <Link to="#">Comedy</Link>
                    </li>
                    <li>
                      <Link to="#">Drama</Link>
                    </li>
                    <li>
                      <Link to="#">Documentary</Link>
                    </li>
                    <li>
                      <Link to="#">Kids and family</Link>
                    </li>
                    <li>
                      <Link to="#">Fantasy</Link>
                    </li>
                    <li>
                      <Link to="#">Horror</Link>
                    </li>
                    <li>
                      <Link to="#">Romance</Link>
                    </li>
                    <li>
                      <Link to="#">Science fiction</Link>
                    </li>
                    <li>
                      <Link to="#">Suspense</Link>
                    </li>
                    <li>
                      <Link to="#">Anime</Link>
                    </li>
                    <li>
                      <Link to="#">Sports</Link>
                    </li>
                    <li>
                      <Link to="#">Crime</Link>
                    </li>
                  </ul>
                </div>
                <ul className="category-column category-column-2">
                  <h3>Other categories</h3>
                  <ul>
                    <li>
                      <Link>Award winners</Link>
                    </li>
                    <li>
                      <Link>Only for a limited time on Prime</Link>
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
