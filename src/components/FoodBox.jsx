import React, { Component } from "react";
import List from "./List";

export default class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      totalCal: 0,
    };
  }

  handleCount = (value) => {
    this.setState({ count: value });
  };

  handleTotal = () => {
    this.setState({ totalCal: this.state.count * this.props.food.cal });
  };

  handleReset = () => {
    this.setState({ count: 0, totalCal: 0 });
  };
  render() {
    return (
      <div id="items">
        <img src={this.props.food.img} />
        <div>
          <h1>{this.props.food.name}</h1>
          <p>{this.props.food.cal}</p>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter a number"
            value={this.state.count==0 ? "Enter a number" : this.state.count}
            onChange={(e) => this.handleCount(e.target.value)}
            onKeyPress={(e)=>{if(e.key=="Enter"){this.handleTotal()}}}
          />
          <button onClick={this.handleTotal}>+</button>     
        </div>
        {/* <p>{this.state.count}</p> */}
        <List
          count={this.state.count}
          name={this.props.food.name}
          totalCal={this.state.totalCal}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}
