import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div id='list'>
        <p>{this.props.count} {this.props.name}= {this.props.totalCal}calories</p>
        <button id="reset" onClick={this.props.handleReset}>
        reset
        </button>
      </div>
    
    )
  }
}
