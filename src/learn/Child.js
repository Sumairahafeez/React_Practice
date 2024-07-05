import React, { Component } from 'react'

 class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>{this.props.Greet("Sumiara")}}>Hello</button>
        {/* <button>Hello</button> */}
      </div>
    )
  }
}

export default Child
