import React, { Component } from 'react'

 class Conditional extends Component {
    constructor(){
        super();
        this.state={
            isLogged: false,
        }
    }
  render() {
    // return (
    //   <div>

    //   </div>
    // )
    // using if else operator
    // if(this.state.isLogged){
    //     return(
    //         <div>
    //             I am Sumaira
    //         </div>
    //     )
    // }
    // else
    // {
    //     return(
    //         <div>
    //             I am a USER
    //         </div>
    //     )
    // }
    // using Ternery operator

    return(
        this.state.isLogged ?
        <div>This is Sumaira</div>:
        <div>This is a USER</div>
    )


  }
}

export default Conditional
