import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import { changeLocation } from "./actions";
import DisplayEvents from "./components/displayEvents";
import Header from "./components/header";
import Search from "./components/search";

class App extends React.Component {
  handleChange = location => {
    this.props.dispatch(changeLocation(location));
  };

  public render() {
    return (
      <div>
        <Header />
        <Search onChange={this.handleChange} />
        <DisplayEvents />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { changeLocation } = state;
  return {
    changeLocation
  };
};

export default connect(mapStateToProps)(App);
