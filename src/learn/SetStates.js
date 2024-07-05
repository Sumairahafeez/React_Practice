import React, { Component, learn } from 'react'

 class SetStates extends Component {
   constructor(){
    super();
    this.state = {
        Carcount: 0
    }
   }
   increment=()=>{
    // this.setState((prevValue)={
    //     Carcount: prevValue+ 1
    // },()=>{
    //     console.log("callback: "+this.state.Carcount)
    // })

    this.setState((prevState,props)=>({
        Carcount:  prevState.Carcount + props.AddValue
    }))
   }

   IncrementFive=()=>{
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
   }
    render() {
    return (
      <div>
        <h1>Count - {this.state.Carcount}</h1>
        <button onClick={this.IncrementFive}>Increase Count</button>
      </div>
    )
  }
}

export default SetStates
