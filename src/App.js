import React, { Component } from "react";
import "./App.css";
import User from "./User";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div className="App App-body">
        <header className="App-header">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            alt="logo"
            width="125px"
          />
        </header>
        <div>
          <User />
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
