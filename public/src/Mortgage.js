import React, { Component } from 'react'
import './input.css'
import FormHandling from './FormHandling';
export class Mortgage extends Component {
    constructor(){
        super();
       
        this.state={
           MortgageAmount:'',
           Year:'',
           Interest:'',
           Type:'Repayment'
        }
        // this.HandleNameChange.bind();
    }
    HandleAmountChange = (event) =>{
        this.setState({
            MortgageAmount:event.target.value
          
        })
    }
    HandleYearChange = (event) =>{
        this.setState({
            Year:event.target.value
        })
    }
    HandleInterestChange = (event) =>{
        this.setState({
            Interest:event.target.value
        })
    }
    HandleTypeChange = (event) =>{
        this.setState({
            Type:event.target.value
        })
    }
    changeoutline = ()=>{
        let element = document.querySelector("#Amount");
        element.style.outline = 'outline-yellow-500 rounded-lg'
    }
    GenerateError = () =>{
        let error = document.createElement("div");
        error.style.width = "100%"
        error.style.height = "10%"
        error.style.fontSize = '16px';
        error.style.color = "hsl(4, 69%, 50%)";
        error.innerHTML = "This field is required";
        return error;
    }
    HandleSubmit = (event) =>{
        if(this.state.MortgageAmount == '')
        {
            let div = document.getElementById('Amount-div');
            div.style.border = '1px solid red';
            this.props.Calculate.
            event.preventDefault()
            
    let parent = document.getElementById('parent');
    parent.appendChild(this.GenerateError());
        this.props.HandelIsOk(false);
        }
        else
        {
            this.props.HandelIsOk(true);
            event.preventDefault()
        }
    }
HandleClearall = (event) =>{
    // location.reload();
    window.location.reload();
}
  render() {
   
    return (
      <form className='w-full h-full'>
        <div className='w-full h-full flex flex-col justify-center items-center gap-10 font-Main text-bold text-2xl'>
            <div className='flex justify-center items-center gap-12'>
            <h1>Mortgage Calculator</h1>
            <a className='text-sm underline cursor-pointer' onClick={this.HandleClearall}>Clear All</a>
            </div>
            <div>
           <div id='parent' className='w-80'>
            <label className='flex flex-col justify-center gap-3 text-sm w-full'>Mortage Amount: 
                <div id='Amount-div' className='flex items-center w-full bg-white rounded-lg' onClick={this.changeoutline}>
                    <h1 className='w-12 h-10 flex justify-center items-center text-xl bg-blue-300 rounded-l-lg'>$</h1>
                <input id='Amount' className='h-10 outline-none w-full rounded-lg' type='numeric' name='name' value={this.state.Amount} onChange={this.HandleAmountChange}/>
          
                </div>
              </label>
          </div>
          <div className='w-80 flex gap-4'>
            <label className='flex flex-col justify-center gap-3 text-sm w-full'>Year: 
                <div  className='flex items-center w-full bg-white rounded-lg' onClick={this.changeoutline}>
                       <input id='Year' className='h-10 outline-none w-full rounded-lg' type='numeric' name='name' value={this.state.Name} onChange={this.HandleYearChange}/>
                       <h1 className='w-14 h-10 flex justify-center items-center text-sm bg-blue-300 rounded-r-lg'>Year</h1>
             
                </div>
              </label>
              <label className='flex flex-col justify-center gap-3 text-sm w-full'>Interest Rate: 
                <div id='Amount' className='flex items-center w-full bg-white rounded-lg' onClick={this.changeoutline}>
                    
                <input id='Percentage' className='h-10 outline-none w-full rounded-lg' type='numeric' name='name' value={this.state.Interest} onChange={this.HandleInterestChange}/>
                <h1 className='w-12 h-10 flex justify-center items-center text-xl bg-blue-300 rounded-r-lg'>%</h1>
                </div>
              </label>
          </div>
        <div>
            <label className='flex flex-col gap-3 text-sm w-full'>
                Mortage Type
                <div className='flex gap-3 items-center text-lg font-semibold h-10 rounded-lg bg-white'>
                <input className='w-6 h-10' name='Type' type='radio' value={this.state.Type} onClick={this.HandleTypeChange}/>
                <h1>Repayment</h1>
                </div>
                <div className='flex gap-3 items-center text-lg font-semibold h-10 rounded-lg bg-white'>
                <input className='w-6 h-10' name='Type' type='radio' value={this.state.Type} onClick={this.HandleTypeChange}/>
                <h1>Interest Only</h1>
                </div>
               
            </label>
            
        </div>
            </div>
            <button className='w-1/2 rounded-3xl h-12 bg-lime text-sm' type='submit' onClick={this.HandleSubmit}>Calculate Repayment</button>
            </div>
      </form>
    )
  }
}

export default Mortgage
