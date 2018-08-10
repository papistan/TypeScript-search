import * as React from "react";
import "./App.css";
import Description from "./components/Description";
import Header from "./components/header";
import Search from "./components/search";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Search />
        <Description countBy={3} />
      </div>
    );
  }
}

export default App;
