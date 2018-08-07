import * as React from "react";
import "./App.css";
import Description from "./Description";
import Header from "./header";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Description />
      </div>
    );
  }
}

export default App;
