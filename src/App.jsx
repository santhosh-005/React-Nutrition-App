import React, { Component } from "react";
import FoodData from "./components/FoodData";
import FoodBox from "./components/FoodBox";
import './App.css'
import Search from "./components/Search";

export default class App extends Component {
constructor(){
  super()
  this.state={
    searchValue:""
  }
}


handleSearch=(info)=>{
this.setState({searchValue:info})
}




  render() {
    return (
      <div>


<Search handleSearch={this.handleSearch}/>
        {/* <div id="search">
          <h1>earch</h1>
          <input type="text" placeholder="Enter Something" onChange={(e)=>this.setState({searchValue:e.target.value})}/>
        </div> */}
        {
          FoodData.filter((el)=>{
            if(this.state.searchValue==""){
              return el
            }else if(el.name.toLowerCase().includes(this.state.searchValue.toLowerCase())){
              return el
            }
          }).map((el) => {
          return (
            <div key={el.id}>
              <FoodBox food={el}/>
            </div>
          );
        })
        }
      </div>
    );
  }
}
