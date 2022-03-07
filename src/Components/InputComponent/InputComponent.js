import React from 'react';
import './InputComponent.css';

class InputComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
        inputText: "",
      }
    }
  
    handleInputChange = (event) => {
      this.setState({inputText: event.target.value});
    }
  
    handleClick = () => {
      alert("Input: " +this.state.inputText);
    }
  
    handleClear = () => {
      this.setState({inputText: ""});
    }
  
    render(){
      return (
        <div>
          <input type="text" placeholder='type here' value={this.state.inputText} onChange={this.handleInputChange} />
          <div className='applyPadding'>
            <button onClick={this.handleClear}>Clear</button> &nbsp;
            <button onClick={this.handleClick}>Save</button>
          </div>
        </div>
      )
    }
  }
  
  export default InputComponent;