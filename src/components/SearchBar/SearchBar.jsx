import React from "react";
import "./SearchBar.scss";
import IconSearch from "../../assets/images/icon-search.svg";
import { Link } from "react-router-dom";

/**
 * SearchBar component allows users to search for movies
 * using the The Movie Database API.
 */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      // `searchQuery` stores the current search query entered by the user in the search input field
      searchResults: [],
      /* `searchResults` stores the search results obtained from The Movie Database API based on the search query
      When the user types a search query and there are matching results, 
      the searchResults state is updated with an array of search results */
    };
  }

  /**
   * `handleSearchChange` method
   * is called when the user types into the search bar input field.
   * It updates the search query in the component state, and retrieves
   * the search results using The Movie Database API. If the search
   * query is empty, the search results are cleared.
   */

  handleSearchChange = (event) => {
    const searchQuery = event.target.value; // Retrieves the current value of the search input field

    this.setState({
      // Updates the `searchQuery` state variable with the new value whenever the user types something into the search input field
      searchQuery: searchQuery,
    });

    if (searchQuery.trim() !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ed629fe234107c7bb508e5eec8974967&query=${searchQuery}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results); // Log the data returned from the API
          const searchResults = data.results.filter((result) =>
            result.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          this.setState({
            searchResults: searchResults,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      this.setState({
        searchResults: [],
      });
    }
  };

  /**
   * Renders the SearchBar component.
   */

  render() {
    const { searchQuery, searchResults } = this.state;

    return (
      <div className="header__search-bar">
        <form>
          <span>
            <img src={IconSearch} alt="Icon Search" />
          </span>
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={this.handleSearchChange}
          />
        </form>
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.backdrop_path && (
                    <img
                      src={`https://www.themoviedb.org/t/p/w300${movie.backdrop_path}`}
                      alt={movie.title}
                      style={{ marginBottom: "1rem" }}
                    />
                  )}
                  <p>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SearchBar;
