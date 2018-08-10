// Unix time stamp - var ts = Math.round((new Date()).getTime() / 1000)

// https://api.yelp.com/v3/events?limit=50&sort_on=popularity&start_date=1533678253&is_free=true&location=oakland

// Header - `Authorization: Bearer ${REACT_APP_API_KEY}`

import * as React from "react";

interface IState {
  location: string;
}

class Search extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { location: "" };
  }

  public render() {
    return (
      <div className="search-bar">
        <h6> Location</h6>
        <div id="magnifying-glass" />
        <input
          placeholder="oakland"
          value={this.state.location}
          onChange={this.onInputChange}
        />
        <p> {this.state.location}</p>
      </div>
    );
  }

  private onInputChange = (e: any) => {
    const term = e.target.value;
    this.setState({ location: term });
    // this.props.onSearchTermChange(term);
  };
}

export default Search;
