import React, { Component } from 'react'
import States from './States';
import Child from './Child';

export class Props extends Component {
    // constructor(){
    //     super();
    //     States = {
    //         Message: 'User'
    //     }
    // }
    greetParent = (Name) =>{
        // this.setState({
        //     Message: Name
        // })
        alert(`Hello ${Name}`);
    }
  render() {
    return (
      <div>
        <h1>{this.props.Name}is the car in {this.props.color} made in {this.props.year}</h1>
        <Child Greet = {this.greetParent}/>
      </div>
    )
  }
}

export default Props
