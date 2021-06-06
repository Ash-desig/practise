import React from "react";
import "./style.css";

export default class App extends React.Component {
  state={
    name:"ashi"
  };
  render(){
   return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    );
  }
}
