import { space } from 'postcss/lib/list';
import React, { Component } from 'react'

 class EventHandling extends Component {
    constructor(){
        super();
        this.state = {
            Text: 'Hi User'
        }
    }
    Textchange=()=>{
        this.setState(()=>({
            Text: 'Thanks for clicking me'
        }))
    }
    render() {
   
    return (
      <div>
        <h1>{this.state.Text}</h1>
        {/* <button onKeyDown={this.Textchange} key={Enter}>click me</button> */}
      </div>
    )
  }
}

export default EventHandling
