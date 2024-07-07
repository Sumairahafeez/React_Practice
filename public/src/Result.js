import React, { Component } from 'react'
import '../src/style.css';
import Calculator from './assets/illustration-empty.svg';
import './input.css'
import Calculated from './Calculated';

export class Result extends Component {
  render() {
    let result = this.props.Result
    if(!result)
    {
        return (
            <div className="boxes box2 Empty">
            
            <h1 className='text-xl relative -top-10'>Results shown here</h1>
            <div className="picture">
              <img src={Calculator} alt=""/>
             
            </div>
            <div className="Result-para">
              <p className=''>Complete the form and click “calculate repayments” to see what 
                your monthly repayments would be  </p>
              
            </div>
           
        </div>
        )
    }
    else
    {   return <Calculated/>
        
    }
   
  }
}

export default Result
