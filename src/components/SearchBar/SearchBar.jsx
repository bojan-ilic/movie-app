import React from "react";
import "./SearchBar.scss";
import IconSearch from "../../assets/images/icon-search.svg";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="header__search-bar">
        <form>
          <button type="submit">
            <img src={IconSearch} alt="Icon Search" />
          </button>
          <input type="search" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
