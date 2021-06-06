import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:"Ashi",
      roll:this.props.roll
    };
  }
  handleClick=()=>{
    this.setState({name:"Ashi Garg"})
  }
  
  render(){
   return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <h2> Roll no. {this.state.roll}</h2>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
