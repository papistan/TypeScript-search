import * as React from "react";
import "./App.css";
import DisplayEvents from "./components/displayEvents";
import Header from "./components/header";
import Search from "./components/search";


class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Search />
        <DisplayEvents />
      </div>
    );
  }
}

export default App;
