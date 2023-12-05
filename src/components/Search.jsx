import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div id="search">
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Enter Something"
          onChange={(e) => this.props.handleSearch(e.target.value)}
        />
      </div>
    );
  }
}
