import React from "react";
import "./App.css";
import Calculator from "../Calculator/Calculator";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          Designed and Coded by{" "}
          <a
            href="https://www.linkedin.com/in/lokesh-n-n-47a294190/"
            target="_blank"
          >
            Lokesh N N
          </a>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
