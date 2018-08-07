// Unix time stamp - var ts = Math.round((new Date()).getTime() / 1000)

// https://api.yelp.com/v3/events?limit=50&sort_on=popularity&start_date=1533678253&is_free=true&location=oakland

// Header - `Authorization: Bearer ${REACT_APP_API_KEY}`

import * as React from "react";

interface IState {
  location: string;
}

class Search extends React.Component<IState> {
  public state: IState = { location: "oakland" };

  render() {
    return (
      <div className="search-bar">
        <h6> Location</h6>
        <div id="magnifying-glass" />
        <input
          placeholder="Location"
          value={this.state.location}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default Search;
