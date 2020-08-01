import React, { Component } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
// import "./styles.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
