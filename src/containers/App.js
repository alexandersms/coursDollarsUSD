import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import RateExchangeList from "./rate-exchange-list";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <RateExchangeList />
      </div>
    );
  }
}

export default App;
