import React, { Component } from 'react'
import './style.css'
import './input.css'
export class Calculated extends Component {
  render() {
    return (
      <div>
         <div className="box2 boxes">
        <div className="result">
          <h1>Your results</h1>
          <p className="para">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
        </div>
        <div className="cont">
          <div className="texts text1">
            <h1 className="Month">Your monthly repayments</h1>
            <h1 id="MonthlyAMount" className=''>$13500</h1>
            <div className="line">
              <p className="repay">Total you'll repay over the term</p>
              <h3 className='mt-3'>$1352.769</h3>
            </div>
          </div>
          <div className="texts"></div>
        </div>
        <div className="blank"></div>
      </div>
      </div>
    )
  }
}

export default Calculated
