import React from "react";
import "./App.css";
import Calculator from "../Calculator/Calculator";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>Designed and Coded by Lokesh N N</header>
        <Calculator />
      </div>
    );
  }
}

export default App;
