import React, { Component } from 'react'

export class States extends Component {
    constructor(){
        super();
        this.state={
            Name: "Audi",
            color: "red",
            year: "1992"
        }
    }
  render() {
    return (
      <div>
        {/* lets call this state now */}
        <h1>This is written using states and it says that</h1>
        <p>
            {this.state.Name} is the car in {this.state.color} made in the year {this.state.year}
        </p>
      </div>
    )
  }
}

export default States
