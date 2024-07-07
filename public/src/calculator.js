import React, { Component } from 'react'
import './input.css'
import Mortgage from './Mortgage'
import Result from './Result';
import Calculated from './Calculated';
export class Calculator extends Component {
  constructor(){
    super();
    this.state={
      Calculate:{
        MortgageAmount:'',
        Year:'',
        Interest:'',
        Type:'Repayment',
        isOk:false,
        
      },
      
   }
   
  }

  
  HandelIsOk= (event)=>{
    this.setState({
      isOk:event
    })
  }
  render() {
    return (
      <div className='w-3/5 h-container shadow-md m-auto mt-32 bg-slate-100 flex'> 
        <Mortgage Calculate = {this.state.Calculate} HandelIsOk = {this.HandelIsOk}/>
        <Result Result = {this.state.isOk}/>
        {/* <Calculated/> */}
      </div>
    )
  }

}
export default Calculator
