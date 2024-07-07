import React, { Component } from 'react'

export class FormHandling extends Component {
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
        if(this.state.amount == null)
        {
            let div = document.getElementById('Amount-div');
            div.style.border = '1px solid red';
            // alert("Mortgage is empty")
            event.preventDefault()
            
    let parent = document.getElementById('parent');
    parent.appendChild(this.GenerateError());
        }
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default FormHandling
