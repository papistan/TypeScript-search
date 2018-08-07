import * as React from "react";
import "./App.css";
import Description from "./Description";
import Header from "./header";
import Search from "./search";

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
